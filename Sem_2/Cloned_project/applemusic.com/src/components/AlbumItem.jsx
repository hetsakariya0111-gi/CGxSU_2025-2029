const AlbumItem = ({ image, title, artist, explicit }) => {
  return (
    <div className="album-item">
      <div className="album-art-container">
        <img src={image} alt={title} />
        <div className="play-overlay-hover">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause hidden"></i>
        </div>
      </div>
      <div className="album-title-line">
        <span className="album-title">{title}</span>
        {explicit && <span className="explicit-icon-small">E</span>}
      </div>
      <span className="album-artist">{artist}</span>
    </div>
  );
};

export default AlbumItem;