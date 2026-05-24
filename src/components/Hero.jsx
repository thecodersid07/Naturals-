function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow">Naturals</p>
        <p className="tagline">World&rsquo;s Fastest Growing Salon</p>
        <h1>Premium Salon Experiences Across Chennai</h1>
        <div className="hero-actions">
          <a className="button primary" href="#contact">
            Book Appointment
          </a>
          <a className="button secondary" href="#branches">
            View Branches
          </a>
        </div>
        <div className="hero-badges" aria-label="Naturals highlights">
          <div>
            <strong>4+</strong>
            <span>Branches</span>
          </div>
          <div>
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>
          <div>
            <strong>Premium</strong>
            <span>Care</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
