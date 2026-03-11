const MusicHeader = () => {
  return (
    <header className="music-header">
      <div className="nav-left">
        <i className="fa-brands fa-apple logo-icon"></i>
        <span>Music</span>
      </div>

      <div className="nav-main">
        <div className="player-controls">
          <button title="Shuffle">
            <i className="fa-solid fa-shuffle"></i>
          </button>
          <button title="Previous">
            <i className="fa-solid fa-backward-step"></i>
          </button>
          <button title="Play" className="play-button">
            <i className="fa-solid fa-play"></i>
          </button>
          <button title="Next">
            <i className="fa-solid fa-forward-step"></i>
          </button>
          <button title="Repeat">
            <i className="fa-solid fa-repeat"></i>
          </button>
          <i className="fa-solid fa-music text-[#b0b0b0] text-lg"></i>
        </div>

        <div className="nav-center-wrapper">
          <div className="header-spacer"></div>
          <div className="center-logo-box">
            <i className="fa-brands fa-apple center-apple-icon"></i>
          </div>
          <div className="header-spacer"></div>
        </div>

        <div className="right-controls">
          <i className="fa-solid fa-volume-high icon-btn"></i>
          <input type="range" className="volume-slider" min="0" max="100" defaultValue="80" />
          <i className="fa-solid fa-list-ul icon-btn"></i>
          <button className="btn-signin">
            <i className="fa-solid fa-user"></i>
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default MusicHeader;