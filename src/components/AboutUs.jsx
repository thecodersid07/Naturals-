const founders = [
  {
    name: 'Priya Arun',
    role: 'Salon Partner',
    bio: 'Priya Arun built her early career with Standard Chartered Bank, Ford India, and Tech Mahindra, where she developed a strong understanding of people, operating systems, and customer experience.',
  },
  {
    name: 'Arun Asok',
    role: 'Salon Partner',
    bio: 'Arun Asok brought valuable experience from the insurance sector through his work with Aviva Life Insurance and Max Life Insurance, adding depth in service, trust, and relationship building.',
  },
];

const milestones = [
  {
    year: '2016',
    title: 'Naturals, Perumbakkam',
  },
  {
    year: '2017',
    title: 'Naturals, Sholinganallur',
  },
  {
    year: '2019',
    title: 'Naturals, ECR Link Road',
  },
  {
    year: '2024',
    title: 'Naturals, Nookampalayam',
  },
  {
    year: '2025',
    title: 'International Expansion (Dubai)',
  },
];

function AboutUs() {
  return (
    <section className="franchise-story" id="about-us">
      <div className="story-intro">
        <div className="section-heading">
          <p>About Us</p>
          <h2>From Corporate Paths to Customer-Centric Salons</h2>
        </div>
        <p className="story-copy">
          Priya Arun and Arun Asok transitioned from successful professional careers into
          entrepreneurship with a shared vision: to build premium Naturals salons defined by
          consistent service, thoughtful systems, and memorable customer care.
        </p>
      </div>

      <div className="founder-grid">
        {founders.map((founder) => (
          <article className="founder-card" key={founder.name}>
            <span>{founder.role}</span>
            <h3>{founder.name}</h3>
            <p>{founder.bio}</p>
          </article>
        ))}
      </div>

      <div className="timeline-block">
        <div className="section-heading compact-heading">
          <p>The Naturals Journey</p>
          <h2>Growth Across Chennai and Beyond</h2>
        </div>
        <div className="timeline">
          {milestones.map((milestone) => (
            <article className="timeline-item" key={`${milestone.year}-${milestone.title}`}>
              <span>{milestone.year}</span>
              <h3>{milestone.title}</h3>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
}

export default AboutUs;
