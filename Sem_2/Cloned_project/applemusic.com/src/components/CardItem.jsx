const CardItem = ({ image, title }) => {
  return (
    <div className="card-item">
      <div className="card-image-container">
        <img src={image} alt={title} />
      </div>
      <span className="card-title">{title}</span>
    </div>
  );
};

export default CardItem;