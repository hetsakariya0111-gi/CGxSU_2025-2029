const ProductCard = ({ image, title, description, price, rating = 4 }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <div className="product-title">{title}</div>
      <div className="star-rating">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z" />
          </svg>
        ))}
      </div>
      <div className="product-description">{description}</div>
      <div className="product-price">
        <span className="price-from">From</span>
        RS. {price}.00
      </div>
      <button className="buy-btn">Buy Now</button>
    </div>
  );
};

export default ProductCard;