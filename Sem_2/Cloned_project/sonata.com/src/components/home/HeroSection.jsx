const HeroSection = () => {
  return (
    <section className="hero-section">
      <img 
        src="https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw9b065cea/images/homepage/desktop/Magna_Watches_D.jpg" 
        alt="Sonata Hero Banner" 
      />
      <div className="slider-dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </section>
  );
};

export default HeroSection;