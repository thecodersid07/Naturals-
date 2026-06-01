import { useEffect, useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <a className="nav-brand" href="#top" aria-label="Naturals home">
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
        <a href="#top" onClick={closeMenu}>Home</a>
        <a href="#about-us" onClick={closeMenu}>About Us</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#social-media" onClick={closeMenu}>Social Media</a>
        <a href="#recruitment" onClick={closeMenu}>Recruitment</a>
        <a href="#contact" onClick={closeMenu}>Contact Us</a>
      </nav>
      <a className="nav-appointment" href="#contact" onClick={closeMenu}>
        Book Appointment
      </a>
    </header>
  );
}

export default Navbar;
