import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="pb-8">
      <section className="hero-content">
        <h1>Discover new music every day.</h1>
        
        <img 
          src="https://artists.apple.com/assets/artist-og-share-c766a5950ae664ea9073ede99da0df1094ae1a24bee32b86ab9e43e7e02bce2e.jpg" 
          alt="Apple Music Icon" 
          className="music-note-icon"
        />

        <p>
          Get playlists and albums inspired by the artists and genres
          you’re listening to. 1 month free, then $10.99/month.
        </p>

        <Link to="#" className="try-free-btn">
          Try It Free
        </Link>
      </section>
    </div>
  );
};

export default HomePage;