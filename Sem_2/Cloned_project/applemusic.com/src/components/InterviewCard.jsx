const InterviewCard = ({ image, title, subtitle, split, image2 }) => {
  return (
    <div className="interview-card">
      <div className="interview-image-container">
        {split ? (
          <div className="interview-image-split">
            <img src={image} alt={title} className="split-image" />
            <img src={image2} alt={title} className="split-image" />
          </div>
        ) : (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        )}
        <div className="play-overlay-hover">
          <i className="fa-solid fa-play"></i>
          <i className="fa-solid fa-pause hidden"></i>
        </div>
      </div>
      <span className="interview-title">{title}</span>
      <span className="interview-subtitle">{subtitle}</span>
    </div>
  );
};

export default InterviewCard;