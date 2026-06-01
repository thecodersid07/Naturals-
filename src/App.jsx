import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Branches from './components/Branches.jsx';
import AboutUs from './components/AboutUs.jsx';
import Services from './components/Services.jsx';
import Membership from './components/Membership.jsx';
import Products from './components/Products.jsx';
import SmileProviders from './components/SmileProviders.jsx';
import Contact from './components/Contact.jsx';
import BackToTop from './components/BackToTop.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(
      'section, .branch-card, .founder-card, .timeline-item, .service-card, .signature-service-group, .signature-category-card, .membership-benefit-card, .membership-card, .product-card, .employee-card, .contact-form'
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      }
    );

    revealItems.forEach((item) => {
      item.classList.add('reveal-item');
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Branches />
        <AboutUs />
        <Services />
        <Membership />
        <Products />
        <SmileProviders />
        <Contact />
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

export default App;
