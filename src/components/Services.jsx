import { services } from '../data/services.js';

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p>Our Services</p>
        <h2>Our Services</h2>
        <span>
          Personalized beauty and grooming services designed around care, confidence, and expert attention.
        </span>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-image">
              <img
                src={service.image}
                alt={`${service.title} at Naturals salon`}
                onError={(event) => {
                  event.currentTarget.parentElement.classList.add('is-missing');
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="service-card-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-highlights" aria-label={`${service.title} highlights`}>
                {service.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;
