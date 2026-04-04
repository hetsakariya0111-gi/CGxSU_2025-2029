import { useState } from 'react';
import { mensProducts } from '../data/productsData';

const MensWatchesPage = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [products] = useState(mensProducts);

  return (
    <div>
      {/* Page Header */}
      <div className="page-header">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span className="separator">&gt;</span>
          <span className="font-medium text-gray-900">Men</span>
        </nav>
        <h1 className="page-title">678 Watches For Men</h1>
      </div>

      {/* Main Container */}
      <div className="page-container">
        {/* Filters Sidebar */}
        <aside className="filters-sidebar">
          <div className="filter-header">
            <h3>
              <span className="material-icons-outlined">filter_list</span>
              Filters
            </h3>
            <a href="#" className="clear-all">Clear all</a>
          </div>

          {/* Price Filter */}
          <div className="filter-section">
            <h4>Price</h4>
            <div className="price-slider"></div>
            <div className="price-inputs">
              <input type="text" value="₹ 595" readOnly />
              <span>to</span>
              <input type="text" value="₹ 5995" readOnly />
            </div>
          </div>

          {/* Strap Material */}
          <div className="filter-section">
            <h4>Strap Material</h4>
            <ul className="filter-list">
              <li><input type="checkbox" /> Plastic (136)</li>
              <li><input type="checkbox" /> Silicone (8)</li>
              <li><input type="checkbox" /> Leather (129)</li>
              <li><input type="checkbox" /> Bi Metal (7)</li>
            </ul>
            <a href="#" className="more-link">+11 More</a>
          </div>

          {/* Strap Color */}
          <div className="filter-section">
            <h4>Strap Color</h4>
            <ul className="filter-list">
              <li><input type="checkbox" /> Black (213)</li>
              <li><input type="checkbox" /> White (2)</li>
              <li><input type="checkbox" /> Blue (2)</li>
              <li><input type="checkbox" /> Green (20)</li>
            </ul>
          </div>

          {/* Dial Color */}
          <div className="filter-section">
            <h4>Dial Color</h4>
            <ul className="filter-list">
              <li><input type="checkbox" /> Beige (2)</li>
              <li><input type="checkbox" /> Black (188)</li>
              <li><input type="checkbox" /> Blue (96)</li>
              <li><input type="checkbox" /> Brown (25)</li>
            </ul>
            <a href="#" className="more-link">+22 More</a>
          </div>

          {/* Discounts */}
          <div className="filter-section">
            <h4>Discounts</h4>
            <ul className="filter-list">
              <li><input type="checkbox" /> Upto 10% Off (4)</li>
              <li><input type="checkbox" /> 10% - 20% Off (8)</li>
              <li><input type="checkbox" /> 20% - 30% Off (119)</li>
              <li><input type="checkbox" /> 30% - 40% Off (6)</li>
            </ul>
            <a href="#" className="more-link">+5 More</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="product-content">
          {/* Sort Bar */}
          <div className="sort-bar">
            <div className="sort-select">
              <label className="text-sm text-gray-600">Sort By:</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popularity">Popularity</option>
                <option value="price_low_high">Price: Low to High</option>
                <option value="price_high_low">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <img src={product.image} alt={product.title} />
                  {product.bestseller && <span className="bestseller-tag">Best Seller</span>}
                  <div className="wishlist-icon">
                    <span className="material-icons-outlined">favorite_border</span>
                  </div>
                  {product.rating && (
                    <div className="rating-badge">
                      ★ {product.rating} ({product.ratingCount})
                    </div>
                  )}
                </div>
                
                <div className="product-info">
                  <div className="product-meta">
                    {product.rating ? (
                      <span className="product-rating">★ {product.rating} ({product.ratingCount})</span>
                    ) : (
                      <span className="product-rating opacity-0">★ 0.0 (0)</span>
                    )}
                    {product.colors && (
                      <span className="product-colors">+{product.colors} Colors</span>
                    )}
                  </div>
                  
                  <h5 className="product-name">{product.title}</h5>
                  
                  <div className="product-price-row">
                    <span className="current-price">₹ {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <>
                        <span className="original-price">₹ {product.originalPrice.toLocaleString()}</span>
                        <span className="discount">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>
                
                <a href="#" className="view-similar-btn">
                  <span className="material-icons-outlined text-base">search</span>
                  View Similar
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MensWatchesPage;