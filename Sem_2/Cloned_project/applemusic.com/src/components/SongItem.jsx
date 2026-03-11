const SongItem = ({ image, title, artist, explicit }) => {
  return (
    <div className="song-item">
      <div className="album-art">
        <img src={image} alt={title} />
        <div className="play-icon-overlay">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause hidden"></i>
        </div>
      </div>
      <div className="song-info">
        <div className="title-line">
          <span className="title">{title}</span>
          {explicit && <span className="explicit-icon">E</span>}
        </div>
        <span className="artist">{artist}</span>
      </div>
      <div className="more-options">
        <i className="fa-solid fa-ellipsis"></i>
      </div>
    </div>
  );
};

export default SongItem;