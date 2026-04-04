const ExploreItem = ({ title }) => {
  return (
    <a href="#" className="explore-item">
      <span>{title}</span>
      <span className="chevron">›</span>
    </a>
  );
};

export default ExploreItem;