import { HeartIcon as HeartOutline } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';
import { useState } from 'react';

const ProductCard = ({ 
  product,
  showSimilar = true,
  gridView = true
}) => {
  const [wishlisted, setWishlisted] = useState(false);
  
  const {
    image,
    title,
    price,
    originalPrice,
    rating,
    ratingCount,
    colors,
    bestseller,
    trending,
    discount
  } = product;

  const discountPercentage = originalPrice 
    ? Math.round(((originalPrice - price) / originalPrice) * 100) 
    : discount;

  return (
    <div className={`product-card ${!gridView ? 'w-full' : ''}`}>
      <div className="product-image-container">
        <img src={image} alt={title} />
        {bestseller && <span className="bestseller-tag">Best Seller</span>}
        {trending && <span className="trending-tag">Trending</span>}
        <div 
          className="wishlist-icon"
          onClick={() => setWishlisted(!wishlisted)}
        >
          {wishlisted ? (
            <HeartSolid className="w-6 h-6 text-red-500" />
          ) : (
            <HeartOutline className="w-6 h-6" />
          )}
        </div>
        {rating && (
          <div className="rating-badge">
            {rating} ({ratingCount})
          </div>
        )}
      </div>
      
      <div className="product-info">
        <div className="info-top-row">
          {rating && <span className="product-rating">⭐ {rating} ({ratingCount})</span>}
          {colors && <span className="product-colors">+{colors} Colors</span>}
        </div>
        
        <h5 className="product-name">{title}</h5>
        
        <div className="product-price-group">
          <span className="product-price">₹ {price.toLocaleString()}</span>
          {originalPrice && (
            <>
              <span className="original-price">₹ {originalPrice.toLocaleString()}</span>
              <span className="discount-percentage">{discountPercentage}% OFF</span>
            </>
          )}
        </div>
      </div>
      
      {showSimilar && (
        <a href="#" className="view-similar-btn">
          <span className="material-icons-outlined text-base">search</span>
          View Similar
        </a>
      )}
    </div>
  );
};

export default ProductCard;