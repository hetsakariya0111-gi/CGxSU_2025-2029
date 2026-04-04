import ProductCard from '../components/ProductCard';
import SponsorMarquee from '../components/SponsorMarquee';
import FeatureCard from '../components/FeatureCard';

const HomePage = () => {
  const products = [
    {
      id: 1,
      image: 'https://dorjeteas.com/cdn/shop/files/First_Flush_Tea_Listing-01.jpg?v=1749137002&width=300',
      title: 'First Flush Darjeeling Tea',
      description: 'It\'s a limited edition spring harvest Darjeeling Tea produced from just the best bushes in spring.....',
      price: '419.00'
    },
    {
      id: 2,
      image: 'https://dorjeteas.com/cdn/shop/files/Roasted_Flush_Tea_Listing-01.jpg?v=1749137140&width=300',
      title: 'Roasted Darjeeling Black Tea',
      description: 'SPECIAL OFFER: BUY 2, GET 1 FREE. It\'s a limited edition monsoon harvest Darjeeling Tea produced.....',
      price: '249.00',
      rating: 5
    },
    {
      id: 3,
      image: 'https://dorjeteas.com/cdn/shop/files/Second_Flush_Tea_Listing-01.jpg?v=1749137073&width=300',
      title: 'Second Flush-Darjeeling Tea',
      description: 'With the onset of summer, Selim Hill\'s Black Teas start developting the amber colour that.....',
      price: '299.00'
    },
    {
      id: 4,
      image: 'https://dorjeteas.com/cdn/shop/files/OG_Chai_Listing-01.jpg?v=1749138144&width=300',
      title: 'The Original Chai | Doodh Waali Chai',
      description: 'Original Chai Special Mix is a premium Chai prepared with Gently Rolled Aromatic CTC leaves. Made.....',
      price: '249.00',
      rating: 5
    },
    {
      id: 5,
      image: 'https://dorjeteas.com/cdn/shop/files/First_Flush_Green_Tea_Listing-01.jpg?v=1749137709&width=300',
      title: 'First Flush - Green Tea',
      description: 'The two leaves-and-a-bud form Selim Hill, that makeup the pickings of the First Flush contain.....',
      price: '419.00',
      rating: 5
    },
    {
      id: 6,
      image: 'https://dorjeteas.com/cdn/shop/files/Kashmiri_Kahwa_Tea_Listing-01_d6aa9317-abbf-4614-ac16-0654a7892b7a.jpg?v=1748865169&width=300',
      title: 'Kashmiri Kahwa Tea',
      description: 'Inspired from Kashmir; Prepared in Dargeeling. Our Kashmiri Kahwa is a unique blend of spices,.....',
      price: '399.00',
      rating: 5
    },
    {
      id: 7,
      image: 'https://dorjeteas.com/cdn/shop/files/Autumn_Flush_Tea_Listing-01.jpg?v=1749137100&width=300',
      title: 'Autumn Flush - Darjeeling Tea',
      description: 'Just before drawing the year to a close, The dancing mist and the winter winds.....',
      price: '299.00',
      rating: 5
    },
    {
      id: 8,
      image: 'https://dorjeteas.com/cdn/shop/files/Chamomile_Tea-01.jpg?v=1748864801&width=300',
      title: 'Chamomile Tea',
      description: 'An evening tea, our Chamomile Blend will put you into a deep and peaceful slumber.....',
      price: '399.00',
      rating: 5
    },
    {
      id: 9,
      image: 'https://dorjeteas.com/cdn/shop/files/CHAMOMILE_IMAGES-AMAZON-01.jpg?v=1753972489&width=300',
      title: 'Chamomile Tea Pyramid Teabags',
      description: 'Our specious pyramid sachets hold only whole-leaf, farm--fresh tea, never dusty fannings.....',
      price: '225.00',
      rating: 5
    }
  ];

  const features = [
    { id: 1, image: '/src/assets/images/train-darjeeling.jpeg', text: 'Darjeeling Hills' },
    { id: 2, image: '/src/assets/images/tea-plunking.jpeg', text: 'Handplucked' },
    { id: 3, image: '/src/assets/images/handsorting.jpeg', text: 'Handsorted' },
    { id: 4, image: '/src/assets/images/tea-gardens.jpeg', text: 'At a 100% Organic Tea Garden' },
  ];

  const availableOn = [
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/amazon.webp?v=152918973153019686511727182792', alt: 'amazone', height: 50, width: 150 },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/bb.png?v=92642451575419395661727182806', alt: 'bigbasket', height: 60 },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/swiggy.png?v=175293061464581867231727183017', alt: 'swiggy', height: 60 },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/blink-it.png?v=101599175144682131781727182931', alt: 'blink-it', height: 60 },
    { src: 'https://dorjeteas.com/cdn/shop/t/12/assets/jio-mart.png?v=46131010494829066381727182973', alt: 'jio-mart', height: 60 },
  ];

  return (
    <div>
      {/* Hero Image */}
      <div className="img-container">
        <a href="#">
          <img 
            src="https://dorjeteas.com/cdn/shop/files/Homepage_Banners_1.jpg?v=1748675306&width=1200" 
            alt="Explore" 
          />
        </a>
      </div>

      {/* As Seen On Section */}
      <div id="ads">
        <h1 className="section-title">As seen on</h1>
        <SponsorMarquee />
      </div>

      {/* Our Best Sellers */}
      <h1 className="section-title">Our Best Sellers</h1>
      <div className="boxes flex justify-center flex-wrap gap-8 mt-8">
        {products.slice(0, 3).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="boxes flex justify-center flex-wrap gap-8 mt-4">
        {products.slice(3, 6).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="boxes flex justify-center flex-wrap gap-8 mt-4 mb-8">
        {products.slice(6, 9).map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Available On */}
      <div className="ads2">
        <h1 className="section-title">Available On</h1>
        <div className="sponsor-grid gap-16">
          {availableOn.map((item, index) => (
            <img 
              key={index}
              src={item.src} 
              alt={item.alt} 
              height={item.height} 
              width={item.width}
              className="sponsor-item"
            />
          ))}
        </div>
      </div>

      {/* At the heart of Darjeeling */}
      <h2 className="section-title">At the heart of Darjeeling</h2>
      <p className="section-subtitle">
        Darje Teas, in Darjeeling's Selim Hills, offers authentic black tea, meticulously crafted on our estate.
        Experience the essence of Darjeeling in every sip – where passion meets perfection.
      </p>

      <div className="card-container flex justify-center flex-wrap gap-5 px-5 pb-16">
        {features.map(feature => (
          <FeatureCard key={feature.id} image={feature.image} text={feature.text} />
        ))}
      </div>

      {/* Shark Tank Section */}
      <div className="bg-cream-dark py-10">
        <h2 className="section-title mt-0">Brewing Tea for over 1,00,000 lakh customers</h2>
        <p className="section-subtitle">Here's what people of the industry say about us</p>
        <div className="text-center">
          <img 
            src="https://dorjeteas.com/cdn/shop/files/anupam-web.jpg?v=1725452620&width=1200" 
            alt="anupam mittal" 
            className="rounded-3xl max-w-[90%] mx-auto cursor-pointer"
          />
        </div>
      </div>

      {/* Second Shark Tank Section */}
      <div className="py-10">
        <h2 className="section-title mt-0">Brewing Tea for over 1,00,000 lakh customers</h2>
        <p className="section-subtitle">Here's what people of the industry say about us</p>
        <div className="text-center">
          <img 
            src="https://dorjeteas.com/cdn/shop/files/jazz-for-tea-time.webp?v=1727171647&width=1100" 
            alt="jazz for tea" 
            className="rounded-3xl max-w-[90%] mx-auto cursor-pointer"
          />
        </div>
      </div>
{/* Darjeeling Image */}
<div className="w-full max-w-5xl mx-auto mt-20 px-4">
  <div className="relative rounded-2xl overflow-hidden shadow-xl">
    <img 
      src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
      alt="Darjeeling Tea Gardens" 
      className="w-full h-auto object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
      <h2 className="text-white text-2xl md:text-3xl font-bold">Darjeeling Tea Gardens</h2>
    </div>
  </div>
</div>
    </div>
  );
};

export default HomePage;