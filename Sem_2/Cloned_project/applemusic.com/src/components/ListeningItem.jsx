const ListeningItem = ({ image, title, source, explicit, isEssentials }) => {
  return (
    <div className="listening-item">
      <div className="listening-art-container">
        <img src={image} alt={title} />
        {isEssentials && (
          <div className="essentials-overlay">
            <span className="apple-music-logo-large">
              <i className="fa-brands fa-apple"></i> Music
            </span>
            <span className="essentials-text">Essentials</span>
          </div>
        )}
        <div className="play-overlay-hover">
          <i className="fa-solid fa-play"></i>
        </div>
      </div>
      <div className="listening-info">
        <span className="listening-title">{title}</span>
        {explicit && <span className="explicit-icon-small">E</span>}
      </div>
      <span className="listening-source">{source}</span>
    </div>
  );
};

export default ListeningItem;