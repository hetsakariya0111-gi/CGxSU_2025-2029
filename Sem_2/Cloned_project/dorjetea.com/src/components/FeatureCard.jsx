const FeatureCard = ({ image, text }) => {
  return (
    <div className="feature-card">
      <img src={image} alt={text} />
      <div className="feature-text">{text}</div>
    </div>
  );
};

export default FeatureCard;