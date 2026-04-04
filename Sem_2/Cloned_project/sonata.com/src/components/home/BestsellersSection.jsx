import ProductCard from '../products/ProductCard';

const BestsellersSection = () => {
  const products = [
    {
      id: 1,
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwfd4b4d55/images/Sonata/Catalog/77086PP11W_1.jpg?sw=360&sh=360',
      title: 'Camo Multicoloured Dial Plastic Strap Watch For Men',
      price: 775,
      rating: 4.2,
      ratingCount: 89,
      bestseller: true
    },
    {
      id: 2,
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw38760e82/images/Sonata/Catalog/77134PM01W_1.jpg?sw=360&sh=360',
      title: 'SF Digital Dial Silver Stainless Steel Strap Watch For Unisex',
      price: 1495,
      rating: 4.1,
      ratingCount: 88,
      bestseller: true
    },
    {
      id: 3,
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwe06c9c99/images/Sonata/Catalog/SP70039SL01W_1.jpg?sw=360&sh=360',
      title: 'Sonata Poze Quartz Analog Black Dial Leather Strap Watch',
      price: 725,
      originalPrice: 1499,
      rating: 4.2,
      ratingCount: 60
    },
    {
      id: 4,
      image: 'https://www.sonatawatches.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa50f8711/images/Sonata/Catalog/77149SM02_1.jpg?sw=360&sh=360',
      title: 'Sonata Quartz Analog Green Dial Silver Stainless Steel Watch',
      price: 1895,
      rating: 4.4,
      ratingCount: 53
    },
  ];

  return (
    <section className="bestsellers-section">
      <h2>Bestsellers</h2>
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

export default BestsellersSection;