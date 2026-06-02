const founders = [
  {
    name: 'Priya Arun',
    role: 'Franchise Partner',
    points: [
      'Corporate experience with Standard Chartered Bank, Ford India, and Tech Mahindra',
      'Brings a people-first approach to service, systems, and customer experience',
    ],
  },
  {
    name: 'Arun Asok',
    role: 'Franchise Partner',
    points: [
      'Insurance-sector experience with Aviva Life Insurance and Max Life Insurance',
      'Adds strength in trust, relationship building, and operational consistency',
    ],
  },
];

const highlights = [
  {
    value: '4',
    label: 'Branches',
  },
  {
    value: '2016',
    label: 'Since',
  },
  {
    value: 'Expert',
    label: 'Experienced Team',
  },
  {
    value: 'Premium',
    label: 'Care',
  },
];

const milestones = [
  {
    year: '2016',
    title: 'Perumbakkam',
  },
  {
    year: '2017',
    title: 'Sholinganallur',
  },
  {
    year: '2019',
    title: 'ECR Link Road',
  },
  {
    year: '2024',
    title: 'Nookampalayam',
  },
  {
    year: '2025',
    title: 'Dubai Expansion',
  },
];

const storyBlocks = [
  {
    title: 'Corporate Experience',
    text: 'Priya Arun and Arun Asok bring strong professional foundations from banking, automotive, technology, and insurance backgrounds.',
  },
  {
    title: 'Customer-Centric Vision',
    text: 'Their shared vision is to build Naturals salons shaped by thoughtful systems, consistent service, and warm customer care.',
  },
  {
    title: 'Growing Naturals Journey',
    text: 'The journey spans branches across Chennai and continues internationally with the Dubai expansion.',
  },
];

function AboutUs() {
  return (
    <section className="franchise-story" id="about-us">
      <div className="about-showcase">
        <div className="about-copy-panel">
          <div className="section-heading">
            <p>About Us</p>
            <h2>From Corporate Careers to Salon Entrepreneurship</h2>
          </div>
          <p className="story-lead">
            At Naturals, every salon experience is designed around care,
            confidence, and customer happiness.
          </p>
        </div>

        <div className="about-story-list" aria-label="About Naturals story highlights">
          {storyBlocks.map((block) => (
            <article className="about-story-block" key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="founder-grid">
        {founders.map((founder) => (
          <article className="founder-card" key={founder.name}>
            <span>{founder.role}</span>
            <h3>{founder.name}</h3>
            <ul>
              {founder.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="about-highlight-grid" aria-label="Naturals highlights">
        {highlights.map((highlight) => (
          <article className="about-highlight-card" key={highlight.label}>
            <strong>{highlight.value}</strong>
            <span>{highlight.label}</span>
          </article>
        ))}
      </div>

      <div className="timeline-block">
        <div className="section-heading compact-heading">
          <p>The Naturals Journey</p>
          <h2>Growth Timeline</h2>
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
