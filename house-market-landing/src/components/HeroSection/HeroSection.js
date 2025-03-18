import React from 'react';
import { useInView } from 'react-intersection-observer';
import './HeroSection.css';
import { heroBackgroundImage } from '../../assets/images/hero-background';

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleExploreClick = () => {
    // Scroll to services section
    document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMoreClick = () => {
    // Scroll to pricing section
    document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-background" style={{ backgroundImage: `url(${heroBackgroundImage})` }}></div>
      
      <div className={`container hero-content ${inView ? 'fade-in' : ''}`}>
        <h1>Find Your Dream Home Today</h1>
        <p>Discover the perfect property that fits your lifestyle and budget.</p>
        <div className="hero-cta">
          <button className="btn btn-primary" onClick={handleExploreClick}>Explore Properties</button>
          <button className="btn btn-secondary" onClick={handleLearnMoreClick}>Learn More</button>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>1,500+</h3>
              <p>Properties Listed</p>
            </div>
            <div className="stat-item">
              <h3>300+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
