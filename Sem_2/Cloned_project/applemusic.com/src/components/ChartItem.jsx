const ChartItem = ({ region, image }) => {
  return (
    <div className="chart-item">
      <div className="top-100-card">
        <div className="card-top-header">
          <span className="top-100-title">Top 100</span>
          <span className="apple-music-logo-dark">
            <i className="fa-brands fa-apple"></i> Music
          </span>
        </div>
        <h3 className="region-title">{region}</h3>
        <div className="chart-image-wrapper">
          <img src={image} alt={`Top 100 ${region}`} className="chart-image" />
          <div className="play-overlay-hover">
            <i className="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
      <span className="chart-title">Top 100: {region}</span>
      <span className="chart-source">Apple Music</span>
    </div>
  );
};

export default ChartItem;