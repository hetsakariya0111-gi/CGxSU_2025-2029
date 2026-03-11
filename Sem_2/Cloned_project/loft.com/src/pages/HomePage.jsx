import MissionCard from '../components/MissionCard';
import NewsCard from '../components/NewsCard';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const missions = [
    {
      id: 1,
      image: 'https://loftorbital.com/wp-content/uploads/physical-missions.jpg',
      title: 'Physical Missions',
      description: 'Rapidly deploy and operate physical payloads on proven satellite platforms.'
    },
    {
      id: 2,
      image: 'https://loftorbital.com/wp-content/uploads/virtual-missions.jpg',
      title: 'Virtual Missions',
      description: 'Rapidly deploy and operate physical payloads on proven satellite platforms.'
    },
    {
      id: 3,
      image: 'https://loftorbital.com/wp-content/uploads/on-demand-missions.jpg',
      title: 'On Demand Missions',
      description: 'Rapidly deploy and operate physical payloads on proven satellite platforms.'
    }
  ];

  const news = [
    {
      id: 1,
      image: 'https://loftorbital.com/wp-content/uploads/newsroom-kathleen-hicks-final-scaled.jpg',
      title: 'Former Deputy Secretary of Defense Dr. Kathleen Hicks Joins Loft Board of Directors'
    },
    {
      id: 2,
      image: 'https://loftorbital.com/wp-content/uploads/iac-2025-newsroom-cover-scaled.jpg',
      title: 'Unlocking Rapid, Reliable National Access to Space'
    },
    {
      id: 3,
      image: 'https://loftorbital.com/wp-content/uploads/microsoft-ai-loft-video-post-newsroom-creative-scaled.jpg',
      title: 'Inside Loft Orbital: Building smarter satellites with AI'
    }
  ];

  const customers = [
    'https://loftorbital.com/wp-content/uploads/2024/06/wyvern-1.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/sda.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/eutelsat-1.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/agenium-space.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/csa-asc.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/darpa.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/honeywell.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/microsoft.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/nasa.svg',
    'https://loftorbital.com/wp-content/uploads/2024/06/viasat-1.svg'
  ];

  return (
    <div>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <p>Check out our new Technology page to learn more about Loft's end-to-end space infrastructure platform!</p>
        <Link to="/technology">Read more</Link>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <video className="hero-video" autoPlay muted loop>
          <source src="/src/assets/videos/clouds-home.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Space Made Simple</h1>
        </div>
      </section>

      {/* Center Section */}
      <section className="center-section">
        <div className="center-left">
          <h2>Space Infrastructure for Any Mission</h2>
        </div>
        <div className="center-right">
          <p>Loft builds space infrastructure to let any company, government, or institution harness the benefits of space.</p>
          <div className="learn-more-link">
            Learn more about our offerings
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path fillRule="evenodd" d="M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </section>

      {/* Missions Grid */}
      <section className="missions-grid">
        {missions.map(mission => (
          <MissionCard key={mission.id} {...mission} />
        ))}
      </section>

      {/* Customers Section */}
      <section className="customers-section">
        <h2>Our Customers</h2>
        <div className="logo-cloud">
          {customers.map((customer, index) => (
            <img key={index} src={customer} alt={`Customer ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* News Section */}
      <section className="news-section">
        <h2>Latest News</h2>
        <div className="news-grid">
          {news.map(item => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>
        <div className="view-all-news">
          <h3>See All News</h3>
        </div>
      </section>
    </div>
  );
};

export default HomePage;