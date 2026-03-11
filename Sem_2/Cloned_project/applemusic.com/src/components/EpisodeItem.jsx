const EpisodeItem = ({ image, show, title, description }) => {
  return (
    <div className="episode-item">
      <div className="episode-art">
        <img src={image} alt={title} />
        <div className="play-overlay-hover">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause hidden"></i>
        </div>
      </div>
      <div className="episode-info">
        <span className="show-title">{show}</span>
        <span className="episode-title">{title}</span>
        <span className="episode-description">{description}</span>
      </div>
      <div className="episode-options">
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  );
};

export default EpisodeItem;