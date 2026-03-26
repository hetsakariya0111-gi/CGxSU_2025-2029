const Card = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <p>{item.body}</p>
    </div>
  );
};

export default Card;
