const TrustBanner = () => {
  return (
    <div className="trust-banner-wrapper">
      <section className="trust-banner">
        <div className="text-feature">
          India's <span className="highlight">Largest</span><br /> Watch Selling Brand
        </div>
        <div className="features-group">
          <div className="feature-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none">
              <circle className="icon-stroke" cx="12" cy="12" r="10"/>
              <path className="icon-stroke icon-stroke-linecap" d="m8 12.5 3 3 5-5"/>
            </svg>
            <div className="text-content">
              <strong>100%</strong>
              <span>Original</span>
            </div>
          </div>
          <div className="feature-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none">
              <circle className="icon-stroke" cx="12" cy="12" r="10"/>
              <path className="icon-stroke icon-stroke-linecap" d="M12 8v4l2.5 2.5"/>
              <path className="icon-stroke icon-stroke-linecap" d="M16.9 14.9A5 5 0 1 0 15 17.6"/>
            </svg>
            <div className="text-content">
              <strong>7 Day</strong>
              <span>Return</span>
            </div>
          </div>
          <div className="feature-item">
            <svg className="icon" viewBox="0 0 24 24" fill="none">
              <circle className="icon-stroke" cx="12" cy="12" r="10"/>
              <path className="icon-stroke icon-stroke-linecap" d="M8 14h5m-8 0H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1m2 0h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2m-3 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
            </svg>
            <div className="text-content">
              <strong>Free</strong>
              <span>Shipping</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrustBanner;