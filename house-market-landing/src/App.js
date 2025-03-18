import React, { lazy, Suspense } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

// Lazy loading components for performance
const Services = lazy(() => import('./components/Services/Services'));
const Pricing = lazy(() => import('./components/Pricing/Pricing'));
const UserSearch = lazy(() => import('./components/UserSearch/UserSearch'));
const Contact = lazy(() => import('./components/Contact/Contact'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      
      <Suspense fallback={<div className="loading-section">Loading...</div>}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<div className="loading-section">Loading...</div>}>
        <UserSearch />
      </Suspense>
      
      <Suspense fallback={<div className="loading-section">Loading...</div>}>
        <Pricing />
      </Suspense>
      
      <Suspense fallback={<div className="loading-section">Loading...</div>}>
        <Contact />
      </Suspense>
      
      <Suspense fallback={<div className="loading-section">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
