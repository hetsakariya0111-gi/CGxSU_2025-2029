const ComingSoonItem = ({ image, title, artist, explicit }) => {
  return (
    <div className="coming-soon-item">
      <div className="coming-soon-art-container">
        <img src={image} alt={title} />
        <div className="play-overlay-hover">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause hidden"></i>
        </div>
      </div>
      <div className="coming-soon-info">
        <span className="coming-soon-title">{title}</span>
        {explicit && <span className="explicit-icon-small">E</span>}
      </div>
      <span className="coming-soon-artist">{artist}</span>
    </div>
  );
};

export default ComingSoonItem;