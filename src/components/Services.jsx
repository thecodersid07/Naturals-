import { useState } from 'react';
import { rateCards, services } from '../data/services.js';

function Services() {
  const [activeTab, setActiveTab] = useState(rateCards[0].name);
  const activeRateCard = rateCards.find((card) => card.name === activeTab);

  return (
    <section className="services-section" id="services">
      <div className="section-heading">
        <p>Services & Rate Card</p>
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
              <span className="service-icon">{service.name.slice(0, 2)}</span>
              <h3>{service.name}</h3>
            </div>
          </article>
        ))}
      </div>

      <div className="rate-card-panel">
        <div className="rate-card-head">
          <div>
            <p>Rate Card</p>
            <h2>Sample Pricing</h2>
          </div>
          <p className="rate-note">
            Prices may vary by branch. Taxes applicable/inclusive as per branch rate card.
          </p>
        </div>

        <div className="rate-tabs" role="tablist" aria-label="Rate card categories">
          {rateCards.map((card) => (
            <button
              className={card.name === activeTab ? 'rate-tab active' : 'rate-tab'}
              key={card.name}
              onClick={() => setActiveTab(card.name)}
              type="button"
              role="tab"
              aria-selected={card.name === activeTab}
            >
              {card.name}
            </button>
          ))}
        </div>

        <div className="rate-list" role="tabpanel">
          {activeRateCard.rates.map((item) => (
            <div className="rate-row" key={`${activeRateCard.name}-${item.service}`}>
              <span>{item.service}</span>
              <strong>{item.price}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
