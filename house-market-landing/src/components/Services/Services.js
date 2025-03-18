import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      id: 1,
      icon: '🏠',
      title: 'Property Listings',
      description: 'Browse through our extensive collection of properties for sale and rent.',
      details: 'Our property listings feature high-quality images, detailed descriptions, and accurate floor plans.'
    },
    {
      id: 2,
      icon: '🔍',
      title: 'Property Valuation',
      description: 'Get an accurate estimate of your property\'s value with our advanced tools.',
      details: 'Our property valuation service uses advanced algorithms and real-time market data to provide you with an accurate estimate.'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Market Analysis',
      description: 'Stay informed with the latest real estate market trends and opportunities.',
      details: 'Our market analysis service provides comprehensive insights into the real estate market with detailed charts and expert commentary.'
    },
    {
      id: 4,
      icon: '📝',
      title: 'Legal Assistance',
      description: 'Navigate the complex legal aspects of real estate transactions with our experts.',
      details: 'Our legal assistance service helps you navigate the complex legal aspects of real estate transactions with experienced attorneys.'
    },
    {
      id: 5,
      icon: '🏗️',
      title: 'Property Development',
      description: 'Transform your vision into reality with our property development services.',
      details: 'Our property development service covers everything from initial concept to project completion with professional management.'
    },
    {
      id: 6,
      icon: '💼',
      title: 'Investment Advisory',
      description: 'Make informed investment decisions with guidance from our experienced advisors.',
      details: 'Our investment advisory service provides personalized guidance for real estate investors to build a diversified portfolio.'
    }
  ];

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>Comprehensive real estate solutions tailored to your needs</p>
        </div>

        <div ref={ref} className={`services-grid ${inView ? 'fade-in' : ''}`}>
          {services.map((service) => (
            <div 
              key={service.id} 
              className={`service-card ${activeService === service.id ? 'active' : ''}`}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-details">
                <p>{service.details}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
