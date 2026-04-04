import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-[url('/alibaba.webp')] bg-cover bg-center h-[500px] text-white flex flex-col justify-center items-center text-center relative">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 max-w-[700px] px-4">
          <p className="text-sm text-gray-300">Learn about Alibaba.com</p>
          <h1 className="text-2xl md:text-3xl font-bold my-4">The leading B2B ecommerce platform for global trade</h1>
          
          {/* Search Box */}
          <div className="flex justify-center items-center mt-5">
            <input 
              type="text" 
              placeholder="iphones 15 pro max" 
              className="w-[250px] md:w-[400px] p-3 border-none rounded-l-full outline-none text-sm text-black"
            />
            <button className="bg-orange-primary text-white border-none p-3 px-6 rounded-r-full cursor-pointer text-sm font-semibold">
              Search
            </button>
          </div>
          
          {/* Frequent Search */}
          <div className="flex gap-3 justify-center mt-4 flex-wrap">
            <button className="bg-transparent border border-white text-white px-4 py-1.5 rounded-full cursor-pointer text-sm">
              iphones 15 pro max
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-1.5 rounded-full cursor-pointer text-sm">
              watch
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-1.5 rounded-full cursor-pointer text-sm">
              labubu
            </button>
            <button className="bg-transparent border border-white text-white px-4 py-1.5 rounded-full cursor-pointer text-sm">
              mobile phones
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="bg-[#3b1f0e] py-16 px-4">
        <div className="w-full max-w-[1300px] mx-auto flex flex-wrap justify-between gap-5">
          {/* Card 1 */}
          <div className="bg-[#4b2813] text-white flex-1 min-w-[250px] rounded-xl p-8 transition-all hover:-translate-y-1 hover:bg-[#5c3017]">
            <div className="text-4xl mb-4">⬛</div>
            <h3 className="text-xl mb-2.5">Millions of business offerings</h3>
            <p className="text-gray-300">Explore products and suppliers for your business from millions of offerings worldwide.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#4b2813] text-white flex-1 min-w-[250px] rounded-xl p-8 transition-all hover:-translate-y-1 hover:bg-[#5c3017]">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl mb-2.5">Assured quality and transactions</h3>
            <p className="text-gray-300">Ensure production quality from verified suppliers, with your orders protected from payment to delivery.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#4b2813] text-white flex-1 min-w-[250px] rounded-xl p-8 transition-all hover:-translate-y-1 hover:bg-[#5c3017]">
            <div className="text-4xl mb-4">🛒</div>
            <h3 className="text-xl mb-2.5">One-stop trading solution</h3>
            <p className="text-gray-300">Order seamlessly from product/supplier search to order management, payment, and fulfillment.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#4b2813] text-white flex-1 min-w-[250px] rounded-xl p-8 transition-all hover:-translate-y-1 hover:bg-[#5c3017]">
            <div className="text-4xl mb-4">💼</div>
            <h3 className="text-xl mb-2.5">Tailored trading experience</h3>
            <p className="text-gray-300">Get curated benefits, such as exclusive discounts, enhanced protection, and extra support.</p>
          </div>
        </div>
      </div>

      {/* Explore Offerings Section */}
      <section className="bg-white text-black py-20 px-4 text-center">
        <div className="w-full max-w-[1200px] mx-auto">
          {/* Heading */}
          <div className="flex flex-wrap justify-between items-start">
            <div className="flex-1 min-w-[500px] text-left">
              <h2 className="text-3xl font-bold mb-5">
                Explore millions of offerings <br /> tailored to your business needs
              </h2>
            </div>

            {/* Stats */}
            <div className="flex-1 min-w-[300px] text-left leading-relaxed">
              <p><span className="text-orange-primary font-bold text-2xl">200M+</span> products</p>
              <p><span className="text-orange-primary font-bold text-2xl">200K+</span> suppliers</p>
              <p><span className="text-orange-primary font-bold text-2xl">5,900</span> product categories</p>
              <p><span className="text-orange-primary font-bold text-2xl">200+</span> countries and regions</p>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-16 flex justify-center flex-wrap gap-8">
            {[
              { icon: '🌱', name: 'Environment' },
              { icon: '👕', name: 'Apparel & Accessories' },
              { icon: '🏠', name: 'Home & Garden' },
              { icon: '💼', name: 'Commercial Equipment' },
              { icon: '💄', name: 'Beauty' },
              { icon: '💎', name: 'Jewelry & Eyewear' },
              { icon: '🏭', name: 'Industrial Machinery' },
              { icon: '🎧', name: 'Consumer Electronics' },
              { icon: '🏋️', name: 'Sports & Entertainment' },
              { icon: '🚗', name: 'Vehicle Parts' },
              { icon: '📦', name: 'Packaging & Printing' },
              { icon: '🧰', name: 'Tools & Hardware' },
            ].map((category, index) => (
              <div key={index} className="w-[130px] h-[130px] border-2 border-gray-300 rounded-full flex flex-col justify-center items-center transition-colors hover:border-orange-primary">
                <div className="text-3xl">{category.icon}</div>
                <p className="mt-2.5 text-xs">{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discover Business Opportunity Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="w-full max-w-[1300px] mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Discover your next business opportunity</h2>

          <div className="flex flex-wrap justify-between gap-5">
            {/* Column 1: Top ranking */}
            <div className="flex-1 min-w-[400px] bg-white rounded-xl p-5">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">Top ranking</h3>
                <a href="#" className="no-underline text-black text-sm">View more</a>
              </div>
              <h4 className="text-base font-semibold">Hot selling</h4>
              <p className="text-sm text-gray-500">Copy Paper</p>
              <div className="mt-2.5 rounded-xl overflow-hidden">
                <img 
                  src="https://s.alicdn.com/@sc04/kf/H2cfa0219b00e4c6bb12633a21a65ecd8x.jpg_720x720q50.jpg" 
                  alt="Product Image" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* Column 2: New arrivals */}
            <div className="flex-1 min-w-[400px] bg-white rounded-xl p-5">
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-semibold">New arrivals</h3>
                <a href="#" className="no-underline text-black text-sm">View more</a>
              </div>
              <h4 className="text-base font-semibold">124,000+ products added today</h4>
              <div className="grid grid-cols-2 gap-2.5 mt-2.5">
                <img src="https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="New arrival 1" className="w-full rounded-lg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRciw9QdWvswFs027YpONhLhA4qh6kirvGzIMz5ZC8twE22g9KUhinfurhsgKCfZ-UG4o&usqp=CAU" alt="New arrival 2" className="w-full rounded-lg" />
                <img src="https://sahibgroup.in/products/assets/images/Insecticides/096eee59-a5f0-4508-bd20-29c14b012ce2-Alibaba.png" alt="New arrival 3" className="w-full rounded-lg" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuI_6tJJETtx9IfLgeLwaHuGveg8T2nFRTjw&s" alt="New arrival 4" className="w-full rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trade With Confidence Section */}
      <section className="relative text-white">
        <div className="bg-[url('/your-background-image.jpg')] bg-cover bg-center w-full h-[500px] flex items-center justify-center flex-col text-center">
          <h2 className="text-3xl font-bold w-4/5 max-w-[800px] leading-tight mb-10">
            Trade with confidence from production quality to purchase protection
          </h2>

          <div className="flex justify-center flex-wrap gap-8">
            {/* Verified Supplier Card */}
            <div className="bg-[rgba(78,52,46,0.9)] text-white p-8 rounded-2xl w-[400px] text-left">
              <h3 className="text-sm font-medium mb-2.5">Ensure production quality with</h3>
              <h2 className="text-2xl font-bold text-white">
                <span className="text-blue-500">V</span>erified Supplier
              </h2>
              <p className="text-sm leading-relaxed my-4">
                Connect with a variety of suppliers with third-party-verified credentials and capabilities. Look
                for the "Verified" logo to begin sourcing with experienced suppliers your business could rely on.
              </p>
              <div className="flex items-center gap-5 mt-4">
                <a href="#" className="no-underline text-white border border-white rounded-full px-4 py-2 text-sm">▶ Watch video</a>
                <a href="#" className="no-underline text-white text-sm">Learn more</a>
              </div>
            </div>

            {/* Trade Assurance Card */}
            <div className="bg-[rgba(78,52,46,0.9)] text-white p-8 rounded-2xl w-[400px] text-left">
              <h3 className="text-sm font-medium mb-2.5">Protect your purchase with</h3>
              <h2 className="text-2xl font-bold text-white">
                <span className="text-yellow-400">💲</span> Trade Assurance
              </h2>
              <p className="text-sm leading-relaxed my-4">
                Source confidently with access to secure payment options, protection against product or shipping
                issues, and mediation support for any purchase-related concerns when you order and pay on Alibaba.com.
              </p>
              <div className="flex items-center gap-5 mt-4">
                <a href="#" className="no-underline text-white border border-white rounded-full px-4 py-2 text-sm">▶ Watch video</a>
                <a href="#" className="no-underline text-white text-sm">Learn more</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Businesses Section */}
      <section className="bg-white text-gray-800 text-center py-16 px-5">
        <h2 className="text-3xl font-bold text-[#4a2c18] mb-4">Empowering businesses through global trade</h2>
        <p className="text-base text-gray-500 max-w-[800px] mx-auto mb-12">
          Alibaba.com offers one-stop B2B trading solutions for global small and medium-sized businesses,
          empowering them to transform through digital trade, grasp opportunities, and accelerate growth internationally.
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-[1100px] mx-auto">
          {/* Left Image Card */}
          <div className="flex-1 min-w-[300px] rounded-xl overflow-hidden relative">
            <img 
              src="https://media.licdn.com/dms/image/v2/C4E12AQEInM2QkpJCtA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520161978330?e=2147483647&v=beta&t=6ZSyh1COqur63aCXKYC-17SBkA2_0l3iu-rz0skP5xM" 
              alt="Our Mission" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-5 left-5 text-left text-white">
              <p className="text-sm text-orange-primary mb-0">OUR MISSION</p>
              <h3 className="text-2xl font-bold mt-1">Make it easy to do business</h3>
            </div>
          </div>

          {/* Right Top Card */}
          <div className="flex-1 min-w-[300px] bg-[#f7efec] rounded-xl p-8 text-left">
            <p className="text-sm text-orange-primary mb-0">OUR LOCATIONS</p>
            <h3 className="text-2xl font-bold text-[#4a2c18] mt-1">We have teams around the world.</h3>
            <p className="text-sm text-gray-800 leading-relaxed mt-4">
              Hangzhou, China<br />
              Paris, France<br />
              Munich, Germany<br />
              Tokyo, Japan<br />
              Seoul, Korea<br />
              London, UK<br />
              New York, US<br />
              ...<br />
              and many other locations worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;