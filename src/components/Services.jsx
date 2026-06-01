import { services, signatureServiceGroups } from '../data/services.js';

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p>Services</p>
        <h2>Salon Services for Every Occasion</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.name}>
            <div className="service-image">
              <img
                src={service.image}
                alt={service.name}
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="service-card-content">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <a href="#contact">Explore <span>→</span></a>
            </div>
          </article>
        ))}
      </div>

      <div className="signature-service-groups">
        {signatureServiceGroups.map((group) => (
          <article className="signature-service-group" key={group.label}>
            <div className="signature-group-visual">
              <img
                src={group.image}
                alt={`${group.label} at Naturals Signature`}
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <div className="signature-group-content">
              <span>{group.label}</span>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="signature-category-grid">
                {group.categories.map((category) => (
                  <div className="signature-category-card" key={`${group.label}-${category.name}`}>
                    <div className="signature-category-image">
                      <img
                        src={category.image}
                        alt={category.name}
                        onError={(event) => {
                          event.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <strong>{category.name}</strong>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}

export default Services;
