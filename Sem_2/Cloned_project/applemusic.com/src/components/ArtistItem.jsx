const ArtistItem = ({ bgColor, image, title, source }) => {
  return (
    <div className="artist-item">
      <div className={`artist-card-visual ${bgColor}`}>
        <span className="apple-music-logo">
          <i className="fa-brands fa-apple"></i> Music
        </span>
        <span className="track-by-track-label">Track by Track</span>
        <img src={image} alt={title} className="artist-album-art" />
      </div>
      <div className="artist-card-info">
        <span className="artist-title">{title}</span>
        <span className="artist-source">{source}</span>
      </div>
    </div>
  );
};

export default ArtistItem;