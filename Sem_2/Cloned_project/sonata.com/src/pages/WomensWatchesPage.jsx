import { useState } from 'react';
import { womensProducts } from '../data/productsData';

const WomensWatchesPage = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const [products] = useState(womensProducts);

  return (
    <div>
      {/* Hero Banner */}
      <div 
        className="hero-banner"
        style={{
          backgroundImage: 'url(https://www.sonatawatches.in/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dwff9e6528/images/Category%20Banners/plp-shopfor-women-desktop.jpg)'
        }}
      >
      </div>

      {/* Page Header */}
      <div className="page-header">
        <nav className="breadcrumb">
          <a href="/">Home</a>
          <span className="separator">&gt;</span>
          <span className="font-medium text-gray-900">Women</span>
        </nav>
        <h1 className="page-title">505 Watches For Women</h1>
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

          <div className="filter-section">
            <h4>Price</h4>
            <div className="price-slider"></div>
            <div className="price-inputs">
              <input type="text" value="₹ 649" readOnly />
              <span>to</span>
              <input type="text" value="₹ 5695" readOnly />
            </div>
          </div>

          <div className="filter-section">
            <h4>Strap Material</h4>
            <ul className="filter-list">
              <li><input type="checkbox" /> Plastic (32)</li>
              <li><input type="checkbox" /> Silicone (1)</li>
              <li><input type="checkbox" /> Leather (102)</li>
              <li><input type="checkbox" /> Bi Metal (3)</li>
            </ul>
            <a href="#" className="more-link">+13 More</a>
          </div>

          <div className="filter-section">
            <h4>Strap Color</h4>
            <ul className="filter-list">
              <li><input type="checkbox" /> Black (86)</li>
              <li><input type="checkbox" /> White (4)</li>
              <li><input type="checkbox" /> Blue (30)</li>
              <li><input type="checkbox" /> Green (6)</li>
            </ul>
            <a href="#" className="more-link">+24 More</a>
          </div>

          <div className="filter-section">
            <h4>Dial Color</h4>
            <ul className="filter-list">
              <li><input type="checkbox" /> Beige (2)</li>
              <li><input type="checkbox" /> Black (88)</li>
              <li><input type="checkbox" /> Blue (45)</li>
              <li><input type="checkbox" /> Brown (15)</li>
            </ul>
            <a href="#" className="more-link">+31 More</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="product-content">
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

          {/* Recommended Section */}
          <div className="recommend-section">
            <div className="section-header">
              <h2>Recommended For You</h2>
              <div className="carousel-nav">
                <button>&lt;</button>
                <button>&gt;</button>
              </div>
            </div>
            <div className="recommend-grid">
              {products.slice(0, 4).map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img src={product.image} alt={product.title} />
                    {product.bestseller && <span className="bestseller-tag">Best Seller</span>}
                  </div>
                  <div className="product-info">
                    <span className="product-rating">★ {product.rating} ({product.ratingCount})</span>
                    <h5 className="product-name text-xs">{product.title.substring(0, 30)}...</h5>
                    <span className="current-price text-sm">₹ {product.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WomensWatchesPage;