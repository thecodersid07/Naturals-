import branches from '../data/branches.js';

function Branches() {
  return (
    <section className="branches" id="branches">
      <div className="section-heading">
        <p>Our Chennai Locations</p>
        <h2>Find Your Nearest Naturals Salon</h2>
      </div>
      <div className="branch-grid">
        {branches.map((branch) => (
          <article className="branch-card" key={branch.id}>
            <div className="branch-image">
              <img
                src={branch.image}
                alt={branch.imageAlt ?? `${branch.name} salon`}
                onError={(event) => {
                  event.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <span>{branch.area}</span>
            <h3>{branch.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Branches;
