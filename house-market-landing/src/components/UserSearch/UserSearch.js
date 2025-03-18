import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import useDebounce from '../../utils/useDebounce';
import Trie from '../../utils/Trie';
import './UserSearch.css';

const UserSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 300); // Debounce search input by 300ms
  const trieRef = useRef(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        
        // Initialize Trie for efficient search
        const trie = new Trie();
        data.forEach(user => {
          trie.insert(user.name, user);
          trie.insert(user.username, user);
          trie.insert(user.email, user);
        });
        trieRef.current = trie;
        
      } catch (err) {
        setError(err.message);
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle search with debounced input using Trie
  useEffect(() => {
    if (debouncedSearchTerm && trieRef.current) {
      const results = trieRef.current.searchPrefix(debouncedSearchTerm);
      
      // Remove duplicates (since a user might match on multiple fields)
      const uniqueResults = Array.from(
        new Map(results.map(user => [user.id, user])).values()
      );
      
      setFilteredUsers(uniqueResults);
    } else {
      setFilteredUsers(users);
    }
  }, [debouncedSearchTerm, users]);

  return (
    <section id="users" className="user-search-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Community Members</h2>
          <p>Search and connect with our community of homeowners and property experts</p>
        </div>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search users by name, username, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="search-icon">🔍</div>
        </div>

        {loading && <div className="loading-message">Loading users...</div>}
        {error && <div className="error-message">Error: {error}</div>}

        {!loading && !error && (
          <div ref={ref} className={`users-grid ${inView ? 'fade-in' : ''}`}>
            {filteredUsers.length > 0 ? (
              filteredUsers.map(user => (
                <div key={user.id} className="user-card">
                  <div className="user-avatar">
                    <img 
                      src={`https://ui-avatars.com/api/?name=${user.name}&background=random&color=fff`}
                      alt={user.name}
                      loading="lazy" // Implement lazy loading for images
                    />
                  </div>
                  <h3 className="user-name">{user.name}</h3>
                  <p className="user-username">@{user.username}</p>
                  <p className="user-email">{user.email}</p>
                  <div className="user-details">
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <p><strong>Website:</strong> {user.website}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                  </div>
                  <button className="user-contact-btn">Contact</button>
                </div>
              ))
            ) : (
              <div className="no-results">No users found matching "{searchTerm}"</div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default UserSearch;
