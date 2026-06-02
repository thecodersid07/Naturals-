import { useEffect, useRef, useState } from 'react';

const navItems = [
  { id: 'top', label: 'Home' },
  { id: 'about-us', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'social-media', label: 'Social Media' },
  { id: 'recruitment', label: 'Recruitment' },
  { id: 'contact', label: 'Contact Us' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
  const [logoFailed, setLogoFailed] = useState(false);
  const clickLockRef = useRef(false);
  const unlockTimerRef = useRef(null);

  useEffect(() => {
    let animationFrameId = null;

    const updateActiveSection = () => {
      if (clickLockRef.current) {
        return;
      }

      const pageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12;

      if (pageBottom) {
        setActiveSection('contact');
        return;
      }

      const scrollMarker = window.scrollY + window.innerHeight * 0.32;
      const currentSection = navItems.reduce((currentItem, item) => {
        const section = document.getElementById(item.id);

        if (section && section.offsetTop <= scrollMarker) {
          return item.id;
        }

        return currentItem;
      }, 'top');

      setActiveSection((currentActiveSection) =>
        currentActiveSection === currentSection ? currentActiveSection : currentSection
      );
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);

      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrameId = null;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateActiveSection);

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }

      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }
    };
  }, []);

  const closeMenu = (sectionId) => {
    if (sectionId) {
      clickLockRef.current = true;
      setActiveSection(sectionId);

      if (unlockTimerRef.current) {
        window.clearTimeout(unlockTimerRef.current);
      }

      unlockTimerRef.current = window.setTimeout(() => {
        clickLockRef.current = false;
      }, 650);
    }

    setIsOpen(false);
  };

  return (
    <header className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <a className="nav-brand" href="#top" aria-label="Naturals home" onClick={() => closeMenu('top')}>
        {logoFailed ? (
          <span className="nav-logo-fallback">Naturals</span>
        ) : (
          <img
            className="navbar-logo"
            src="/images/naturals-navbar-logo.png"
            alt="Naturals Logo"
            onError={(event) => {
              event.currentTarget.style.display = 'none';
              setLogoFailed(true);
            }}
          />
        )}
      </a>
      <button
        className={isOpen ? 'menu-toggle open' : 'menu-toggle'}
        onClick={() => setIsOpen((currentState) => !currentState)}
        type="button"
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={isOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a
            className={activeSection === item.id ? 'active' : undefined}
            href={`#${item.id}`}
            key={item.id}
            onClick={() => closeMenu(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-appointment" href="#contact" onClick={() => closeMenu('contact')}>
        Book Appointment
      </a>
    </header>
  );
}

export default Navbar;
