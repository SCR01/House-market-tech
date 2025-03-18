// Trie Data Structure Implementation for Efficient String Search
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.userData = null; // To store the user data associated with this word
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Insert a word into the trie with associated user data
   * @param {string} word - The word to insert
   * @param {object} userData - Associated user data
   */
  insert(word, userData) {
    if (!word) return;
    
    word = word.toLowerCase();
    let current = this.root;
    
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!current.children[char]) {
        current.children[char] = new TrieNode();
      }
      current = current.children[char];
    }
    
    current.isEndOfWord = true;
    current.userData = userData;
  }

  /**
   * Search for all words in the trie that start with the given prefix
   * @param {string} prefix - The prefix to search for
   * @return {Array} - Array of user data objects for matching words
   */
  searchPrefix(prefix) {
    if (!prefix) return [];
    
    prefix = prefix.toLowerCase();
    let current = this.root;
    
    // Navigate to the end of the prefix in the trie
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!current.children[char]) {
        return []; // Prefix not found
      }
      current = current.children[char];
    }
    
    // Collect all words with this prefix
    const results = [];
    this._collectWords(current, results);
    return results;
  }

  /**
   * Helper method to collect all words from a given node
   * @param {TrieNode} node - The node to start collection from
   * @param {Array} results - Array to store results
   */
  _collectWords(node, results) {
    if (node.isEndOfWord) {
      results.push(node.userData);
    }
    
    for (const char in node.children) {
      this._collectWords(node.children[char], results);
    }
  }
}

export default Trie;
