const CollectionSection = () => {
  const collections = [
    {
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dw0c2fb74b/images/homepage/desktop/AW2024_D.jpg',
      title: 'A/W 2024'
    },
    {
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dwcf81189c/images/homepage/desktop/Poze_D.jpg',
      title: 'Poze'
    },
    {
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Library-Sites-SonataSharedLibrary/default/dwfee643cf/images/homepage/desktop/Blush_D.jpg',
      title: 'Blush'
    },
  ];

  return (
    <section className="collection-section">
      <h2>Shop By Collection</h2>
      <div className="slider-wrapper">
        <button className="slider-arrow left">&lsaquo;</button>
        <div className="collection-grid">
          {collections.map((collection, index) => (
            <div key={index} className="collection-card">
              <img src={collection.image} alt={collection.title} />
              <div className="card-overlay">
                <span>{collection.title}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-arrow right">&rsaquo;</button>
      </div>
    </section>
  );
};

export default CollectionSection;