import ProductCard from '../products/ProductCard';

const TrendingWatches = () => {
  const products = [
    {
      id: 1,
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa50f8711/images/Sonata/Catalog/77149SM02_1.jpg?sw=360&sh=360',
      title: 'Sonata Quartz Analog Green Dial Silver Stainless Steel Strap Watch',
      price: 1895,
      rating: 4.4,
      ratingCount: 53
    },
    {
      id: 2,
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwc99411b4/images/Sonata/Catalog/77146BM01_1.jpg?sw=360&sh=360',
      title: 'Sonata Wedding Edit Quartz Multifunction Blue Dial Watch',
      price: 4695,
      rating: 4.4,
      ratingCount: 16
    },
    {
      id: 3,
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw773e1744/images/Sonata/Catalog/77145YM01_1.jpg?sw=360&sh=360',
      title: 'Sonata Quartz Multifunction Green Dial Golden Stainless Steel Strap',
      price: 3895,
      rating: 4.6,
      ratingCount: 43
    },
    {
      id: 4,
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw8e41a7ea/images/Sonata/Catalog/77146WL01_1.jpg?sw=360&sh=360',
      title: 'Sonata Wedding Edit Quartz Multifunction Pink Dial Watch',
      price: 3945,
      rating: 4.7,
      ratingCount: 12
    },
  ];

  return (
    <section className="trending-section">
      <h2>Trending Watches</h2>
      <button className="slider-arrow left">&lsaquo;</button>
      <div className="slider-container">
        {products.map(product => (
          <ProductCard key={product.id} product={product} showSimilar={false} />
        ))}
      </div>
      <button className="slider-arrow right">&rsaquo;</button>
    </section>
  );
};

export default TrendingWatches;