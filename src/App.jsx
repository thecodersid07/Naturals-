import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Branches from './components/Branches.jsx';
import FranchiseStory from './components/FranchiseStory.jsx';
import Services from './components/Services.jsx';
import Products from './components/Products.jsx';
import SmileProviders from './components/SmileProviders.jsx';
import Contact from './components/Contact.jsx';
import BackToTop from './components/BackToTop.jsx';
import Footer from './components/Footer.jsx';

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(
      'section, .branch-card, .founder-card, .timeline-item, .corner-card, .service-card, .product-card, .employee-card, .rate-card-panel, .contact-form'
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
        <FranchiseStory />
        <Services />
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
