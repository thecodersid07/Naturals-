import { socialBranches } from '../data/socialBranches.js';

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  );
}

function SocialMedia() {
  return (
    <section className="instagram-section" id="social-media">
      <div className="instagram-header">
        <div className="section-heading">
          <p>Connect With Our Branches</p>
          <h2>Follow Naturals Online</h2>
        </div>
        <p className="instagram-subtitle">
          Follow your nearest Naturals branch for the latest transformations, offers, styling
          inspiration, and salon updates.
        </p>
      </div>

      <div className="instagram-grid">
        {socialBranches.map((branch) => (
          <article className="instagram-card" key={branch.name}>
            <div className="instagram-card-icon">
              <InstagramIcon />
            </div>
            <div className="instagram-card-copy">
              <h3>{branch.name}</h3>
              <p>{branch.description}</p>
            </div>
            <a
              className="instagram-follow-button"
              href={branch.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow ${branch.name} on Instagram`}
            >
              <InstagramIcon />
              <span>Follow on Instagram</span>
            </a>
          </article>
        ))}
      </div>

      <p className="instagram-note">Official branch handles will be updated soon.</p>
    </section>
  );
}

export default SocialMedia;
