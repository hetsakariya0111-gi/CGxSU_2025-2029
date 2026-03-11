const TechBlock = ({ title, subtitle, description, image, reverse }) => {
  return (
    <div className={`tech-block ${reverse ? 'reverse' : ''}`}>
      <div className="tech-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
      <div className="tech-media">
        <img src={image} alt={title} />
        <div className="play-button">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TechBlock;