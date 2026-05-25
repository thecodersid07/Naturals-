import { imageSources } from '../data/images.js';

const membershipBenefits = [
  'Flat discounts on services',
  'Birthday & Anniversary offers',
  'Priority booking',
  'Exclusive grooming offers',
];

function Membership() {
  return (
    <section className="membership-section" id="signature-club">
      <div className="membership-layout">
        <div className="membership-content">
          <div className="section-heading">
            <p>Signature Club</p>
            <h2>Luxury Membership for Premium Grooming</h2>
          </div>
          <p>
            A refined club experience inspired by Naturals Signature salon rituals,
            created for guests who prefer priority service, curated grooming benefits,
            and elevated care across every visit.
          </p>
          <div className="membership-benefits">
            {membershipBenefits.map((benefit) => (
              <article className="membership-benefit-card" key={benefit}>
                <span>◆</span>
                <strong>{benefit}</strong>
              </article>
            ))}
          </div>
        </div>

        <aside className="membership-card">
          <div className="membership-ribbon">Signature</div>
          <div className="membership-image">
            <img
              src={imageSources.membership.signatureClub}
              alt="Signature Club premium membership"
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div className="membership-card-copy">
            <span>Naturals Signature</span>
            <h3>Club Privilege</h3>
            <p>Designed for premium salon guests who value elegance, consistency, and priority care.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Membership;
