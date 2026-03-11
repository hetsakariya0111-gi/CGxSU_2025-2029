const NewsCard = ({ image, title }) => {
  return (
    <div className="news-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default NewsCard;