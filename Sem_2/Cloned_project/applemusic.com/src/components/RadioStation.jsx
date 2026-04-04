const RadioStation = ({ logo, name, color }) => {
  return (
    <div className="radio-item">
      <div className="radio-card">
        <img src={logo} alt={name} className="station-logo" />
        <div className="play-overlay">
          <div className="play-circle">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
        {name === 'Apple Music 1' && (
          <>
            <span className="apple-music-logo-dark absolute bottom-3 left-3">
              <i className="fa-brands fa-apple"></i> Music
            </span>
            <span className="live-indicator">···</span>
          </>
        )}
        {name !== 'Apple Music 1' && (
          <div className="apple-music-radio-logo-bottom">
            <span><i className="fa-brands fa-apple"></i> Music</span>
            <span className={`radio-logo-text ${color}`}> Radio</span>
          </div>
        )}
      </div>
      <div className="radio-info">
        <span className="radio-title">{name}</span>
        {name === 'Apple Música Uno' && <span className="explicit-icon-small ml-1">E</span>}
      </div>
      <span className="radio-source">Apple Music</span>
    </div>
  );
};

export default RadioStation;