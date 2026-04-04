const CityChart = ({ city, image }) => {
  return (
    <div className="city-chart-item">
      <div className="city-chart-card">
        <div className="city-card-header">
          <span className="city-chart-title-small">Top 25</span>
          <span className="apple-music-logo-dark">
            <i className="fa-brands fa-apple"></i> Music
          </span>
        </div>
        <h3 className="city-chart-title-large">{city}</h3>
        <div className="city-image-container">
          <img src={image} alt={`${city} skyline`} />
          <div className="play-overlay-hover">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
      <span className="city-chart-caption-title">Top 25: {city}</span>
      <span className="city-chart-caption-source">Apple Music</span>
    </div>
  );
};

export default CityChart;