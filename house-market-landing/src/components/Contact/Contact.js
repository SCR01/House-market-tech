import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitted: false
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields',
        isError: true,
        isSubmitted: false
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address',
        isError: true,
        isSubmitted: false
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      message: 'Sending your message...',
      isError: false,
      isSubmitted: false
    });

    // Fake API call for demo purposes
    setTimeout(() => {
      setFormStatus({
        message: 'Thank you! Your message has been sent successfully.',
        isError: false,
        isSubmitted: true
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

      // Scroll to top of form
      const formElement = document.querySelector('.contact-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have questions about our services? Contact us today.</p>
        </div>

        <div ref={ref} className={`contact-container ${inView ? 'fade-in' : ''}`}>
          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div className="info-content">
                <h3>Our Location</h3>
                <p>123 Real Estate Avenue, Property City, 10001</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">📞</div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>+1 (555) 765-4321</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">✉️</div>
              <div className="info-content">
                <h3>Email Us</h3>
                <p>info@housemarket.com</p>
                <p>support@housemarket.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon">🕒</div>
              <div className="info-content">
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9AM to 6PM</p>
                <p>Saturday: 10AM to 2PM</p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              {formStatus.message && (
                <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="name">Name <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={formStatus.isSubmitted}
                  placeholder="Your full name"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email <span className="required">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={formStatus.isSubmitted}
                    placeholder="Your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={formStatus.isSubmitted}
                    placeholder="Your phone number"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={formStatus.isSubmitted}
                  placeholder="What is this about?"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message <span className="required">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={formStatus.isSubmitted}
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={formStatus.isSubmitted}
              >
                {formStatus.isSubmitted ? 'Message Sent' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
