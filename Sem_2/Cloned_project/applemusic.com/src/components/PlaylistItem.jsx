const PlaylistItem = ({ image, title, source }) => {
  return (
    <div className="playlist-item">
      <div className="playlist-art-container">
        <img src={image} alt={title} />
        <div className="play-overlay-hover">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause hidden"></i>
        </div>
      </div>
      <span className="playlist-title">{title}</span>
      <span className="playlist-source">{source}</span>
    </div>
  );
};

export default PlaylistItem;