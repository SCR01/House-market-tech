import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Pricing.css';

const pricingData = [
  {
    id: 1,
    title: 'Basic',
    price: '29',
    period: 'monthly',
    yearlyPrice: '299',
    features: [
      'Access to property listings',
      'Email support',
      'Basic property search',
      'Save up to 5 favorites',
      'Monthly market report'
    ],
    isPopular: false,
    buttonText: 'Get Started'
  },
  {
    id: 2,
    title: 'Premium',
    price: '79',
    period: 'monthly',
    yearlyPrice: '799',
    features: [
      'Everything in Basic plan',
      'Advanced property search',
      'Save unlimited favorites',
      'Priority email & phone support',
      'Weekly market report',
      'Property alerts',
      'Virtual tour access'
    ],
    isPopular: true,
    buttonText: 'Try Premium'
  },
  {
    id: 3,
    title: 'Enterprise',
    price: '149',
    period: 'monthly',
    yearlyPrice: '1499',
    features: [
      'Everything in Premium plan',
      'Dedicated account manager',
      'Custom market analysis',
      'Investment portfolio tracking',
      'API access',
      'White-label solutions',
      'Custom integration options',
      '24/7 priority support'
    ],
    isPopular: false,
    buttonText: 'Contact Sales'
  }
];

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const handleGetStartedClick = (plan) => {
    // Scroll to contact form and pre-fill subject with plan name
    const contactForm = document.getElementById('contact');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
      
      // Find the subject input and pre-fill it
      const subjectInput = document.getElementById('subject');
      if (subjectInput) {
        subjectInput.value = `Inquiry about ${plan} Plan`;
        
        // Trigger change event to update form state
        const event = new Event('input', { bubbles: true });
        subjectInput.dispatchEvent(event);
      }
    }
  };

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that works best for your needs</p>
          
          <div className="pricing-toggle">
            <span className={!isYearly ? 'active' : ''}>Monthly</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={isYearly} 
                onChange={handleToggle} 
              />
              <span className="slider round"></span>
            </label>
            <span className={isYearly ? 'active' : ''}>Yearly <span className="save-badge">Save 15%</span></span>
          </div>
        </div>

        <div ref={ref} className={`pricing-grid ${inView ? 'fade-in' : ''}`}>
          {pricingData.map((plan) => (
            <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}>
              {plan.isPopular && <div className="popular-badge">Most Popular</div>}
              <h3 className="plan-title">{plan.title}</h3>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">{isYearly ? plan.yearlyPrice : plan.price}</span>
                <span className="period">/{isYearly ? 'year' : 'month'}</span>
              </div>
              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button 
                className={`plan-button ${plan.isPopular ? 'popular-btn' : ''}`}
                onClick={() => handleGetStartedClick(plan.title)}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="pricing-guarantee">
          <div className="guarantee-icon">🔒</div>
          <div className="guarantee-text">
            <h4>30-Day Money Back Guarantee</h4>
            <p>Try risk-free for 30 days. If you're not completely satisfied, simply let us know for a full refund.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
