const LearnMorePage = () => {
  return (
    <div>
      {/* Hero Image */}
      <div className="img-container">
        <img 
          src="https://dorjeteas.com/cdn/shop/files/DSC_0337.jpg?v=1642957180&width=1263" 
          alt="Darjeeling" 
          className="rounded-2xl"
        />
      </div>

      {/* Story Section */}
      <section className="story-section">
        <p className="story-subtitle">OUR STORY</p>
        <h1 className="story-title">With Love, from Darjeeling</h1>
        <p className="story-description">
          We left our jobs to revive our family's heritage 
          <span className="story-highlight"> Selim Hill Tea Garden</span>, in 
          <span className="story-highlight"> Darjeeling</span> by making high quality 
          organic Darjeeling Tea 
          <span className="story-bold"> available, affordable</span>, and 
          <span className="story-bold"> accessible</span> for Indians.
        </p>

        <p className="story-tags">
          SUSTAINABLE | HERITAGE | CLIMATE CONSCIOUS
        </p>

        <p className="story-text">
          Introduce your brand, products and vision statement and welcome customers to your store.
        </p>
        <button className="story-btn">OPTIONAL LINK</button>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <p className="newsletter-overline">OVERLINE TEXT</p>
        <h1>We curate a great newsletter!</h1>
        <p className="newsletter-description">
          A short sentence describing what someone will receive by subscribing
        </p>

        <div className="input-wrapper">
          <input type="email" placeholder="Email address" className="newsletter-input" />
          <button className="arrow-btn">➜</button>
        </div>
      </section>
    </div>
  );
};

export default LearnMorePage;