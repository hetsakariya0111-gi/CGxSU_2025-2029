import { Link } from 'react-router-dom';

const CommunityPage = () => {
  // Product Forums Data with ACTUAL Zoho product images
  const products = [
    { 
      name: 'CRM', 
      icon: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/crm.svg',
      color: 'bg-blue-100'
    },
    { 
      name: 'Mail', 
      icon: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/mail.svg',
      color: 'bg-purple-100'
    },
    { 
      name: 'Creator', 
      icon: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/creator.svg',
      color: 'bg-green-100'
    },
    { 
      name: 'Projects', 
      icon: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/projects.svg',
      color: 'bg-yellow-100'
    },
    { 
      name: 'Books', 
      icon: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/books.svg',
      color: 'bg-red-100'
    },
    { 
      name: 'Desk', 
      icon: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/desk.svg',
      color: 'bg-indigo-100'
    },
    { 
      name: 'Campaigns', 
      icon: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/campaigns.svg',
      color: 'bg-pink-100'
    },
    { 
      name: 'Recruit', 
      icon: 'https://www.zohowebstatic.com/sites/zweb/images/productlogos/recruit.svg',
      color: 'bg-orange-100'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Zoho Community</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Where Zoho enthusiasts connect, engage, and learn from each other.</p>
          <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-600">
            JOIN NOW
          </button>
        </div>
      </section>

      {/* Search Section */}
      <section className="bg-white py-8 border-b">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center border rounded-full overflow-hidden shadow-sm">
            <input 
              type="text" 
              placeholder="Search..." 
              className="flex-1 px-6 py-3 outline-none"
            />
            <button className="px-6 py-3 bg-gray-50 hover:bg-gray-100">🔍</button>
          </div>
        </div>
      </section>

      {/* Product Forums Section - WITH IMAGES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Zoho Product Forums</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {products.map((product, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition cursor-pointer group"
              >
                <div className={`w-16 h-16 ${product.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition`}>
                  <img 
                    src={product.icon} 
                    alt={product.name}
                    className="w-10 h-10 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://via.placeholder.com/40/3b82f6/ffffff?text=${product.name[0]}`;
                    }}
                  />
                </div>
                <span className="font-medium text-sm">{product.name}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="text-blue-600 font-semibold hover:underline">VIEW ALL PRODUCTS →</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;