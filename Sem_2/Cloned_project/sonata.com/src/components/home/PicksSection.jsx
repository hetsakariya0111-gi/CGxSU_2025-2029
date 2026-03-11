const PicksSection = () => {
  const picks = [
    { image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dwb237c562/images/homepage/desktop/ShopBy_Sale_D.jpg', label: 'Sale' },
    { image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw761c751a/images/homepage/desktop/ShopBy_Men_D.jpg', label: 'For Him' },
    { image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw71681026/images/homepage/desktop/ShopBy_Women_D.jpg', label: 'For Her' },
    { image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw5052334b/images/homepage/desktop/ShopBy_Couple_D.jpg', label: 'Couple' },
    { image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw5a3debe2/images/homepage/desktop/ShopBy_Bestsellers_D.jpg', label: 'Bestseller' },
  ];

  return (
    <section className="picks-section">
      <h2>What's Your Pick?</h2>
      <div className="picks-container">
        {picks.map((pick, index) => (
          <div key={index} className="pick-item">
            <div className="pick-image">
              <img src={pick.image} alt={pick.label} />
            </div>
            <span className="pick-label">{pick.label}</span>
          </div>
        ))}
      </div>
      <div className="picks-arrow left">
        <i className="fa-solid fa-chevron-left"></i>
      </div>
      <div className="picks-arrow right">
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </section>
  );
};

export default PicksSection;