import TechBlock from '../components/TechBlock';
import { Link } from 'react-router-dom';

const TechnologyPage = () => {
  const missions = [
    {
      id: 1,
      image: 'https://loftorbital.com/wp-content/uploads/virtual-missions.jpg',
      title: 'Physical Missions',
      description: 'Rapidly deploy and operate physical payloads on proven satellite platforms.'
    },
    {
      id: 2,
      image: 'https://loftorbital.com/wp-content/uploads/on-demand-missions.jpg',
      title: 'Physical Missions',
      description: 'Rapidly deploy and operate physical payloads on proven satellite platforms.'
    },
    {
      id: 3,
      image: 'https://loftorbital.com/wp-content/uploads/on-demand-missions.jpg',
      title: 'Physical Missions',
      description: 'Rapidly deploy and operate physical payloads on proven satellite platforms.'
    }
  ];

  const techBlocks = [
    {
      id: 1,
      title: 'Mission Catalog',
      subtitle: 'A growing library of hosted payloads, sensors, and software',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://loftorbital.com/wp-content/uploads/virtual-missions.jpg'
    },
    {
      id: 2,
      title: 'Mission Control',
      subtitle: 'An integrated software platform for mission management',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'https://loftorbital.com/wp-content/uploads/virtual-missions.jpg',
      reverse: true
    }
  ];

  return (
    <div>
      {/* Technology Hero */}
      <section className="tech-hero">
        <div className="tech-hero-content">
          <h1 className="tech-hero-title">Technology</h1>
          <p className="tech-hero-subtitle">Our end-to-end space infrastructure platform delivers the highest reliability and lowest cost to orbit.</p>
          <Link to="#" className="tech-hero-btn">Learn More</Link>
        </div>
      </section>

      {/* Missions Grid */}
      <section className="missions-grid">
        {missions.map((mission, index) => (
          <div key={index} className="mission-card">
            <img src={mission.image} alt={mission.title} />
            <div className="mission-card-content">
              <hr className="bold-line" />
              <h3>
                {mission.title}
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 20 20" fill="#16273D">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06" clipRule="evenodd" />
                </svg>
              </h3>
              <hr />
              <p>{mission.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Platform Section */}
      <section className="platform-section">
        <h2>An end-to-end platform</h2>
        <div className="platform-nav">
          <span className="platform-nav-item active">Overview</span>
          <span className="platform-nav-item">Mission Catalog</span>
          <span className="platform-nav-item">Mission Control</span>
          <span className="platform-nav-item">Ground Segment</span>
        </div>
        <div className="video-container">
          <div className="video-overlay-text">
            Loft Orbital Platform Overview
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="core-tech-section">
        <h2>Our core technologies</h2>
        {techBlocks.map(block => (
          <TechBlock key={block.id} {...block} />
        ))}
      </section>
    </div>
  );
};

export default TechnologyPage;