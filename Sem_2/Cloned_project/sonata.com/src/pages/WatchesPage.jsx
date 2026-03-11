import { useState } from 'react';
import { mensProducts, womensProducts } from '../data/productsData';

const WatchesPage = () => {
  const [sortBy, setSortBy] = useState('popularity');
  const allProducts = [...mensProducts, ...womensProducts].slice(0, 32);

  return (
    <div>
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <nav className="text-sm text-gray-600 mb-2">
          <a href="/" className="hover:text-blue-600">home</a>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-gray-900 font-medium">Watches</span>
        </nav>
        <h1 className="text-2xl font-semibold text-gray-800">1,229 Watches</h1>
      </div>

      {/* FIXED: Hero Banner */}
      <div className="h-[200px] md:h-[300px] bg-gradient-to-r from-blue-900 to-blue-700 relative flex items-center justify-center">
        <h2 className="text-white text-5xl md:text-7xl font-light tracking-wider">WATCHES</h2>
      </div>

      {/* REMOVED: Empty SF banner container */}

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 py-6 gap-6">
        {/* Filters Sidebar */}
        <aside className="w-full lg:w-72 bg-white rounded-lg border p-5 h-fit sticky top-4">
          <div className="flex justify-between items-center pb-4 border-b mb-4">
            <h3 className="font-semibold flex items-center gap-2 text-base">
              <span className="material-icons-outlined text-lg">filter_list</span>
              Filters
            </h3>
            <a href="#" className="text-sm text-blue-600 hover:underline">Clear all</a>
          </div>

          {/* Price Filter */}
          <div className="mb-6 pb-5 border-b border-gray-200">
            <h4 className="font-semibold mb-3 text-sm">Price</h4>
            <div className="h-1 bg-gray-300 mb-4 relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full cursor-pointer"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full cursor-pointer"></div>
            </div>
            <div className="flex items-center justify-between gap-2">
              <input type="text" value="₹ 595" readOnly className="w-20 p-2 border border-gray-300 rounded text-sm text-center" />
              <span className="text-gray-500">to</span>
              <input type="text" value="₹ 5995" readOnly className="w-20 p-2 border border-gray-300 rounded text-sm text-center" />
            </div>
          </div>

          {/* Gender Filter */}
          <div className="mb-6 pb-5 border-b border-gray-200">
            <h4 className="font-semibold mb-3 text-sm">Gender</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Men (654)</li>
              <li className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Women (501)</li>
              <li className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Pair (52)</li>
              <li className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Unisex (22)</li>
            </ul>
          </div>

          {/* Strap Material */}
          <div className="mb-6 pb-5 border-b border-gray-200">
            <h4 className="font-semibold mb-3 text-sm">Strap Material</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Plastic (186)</li>
              <li className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Silicone (9)</li>
              <li className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Leather (227)</li>
              <li className="flex items-center text-sm"><input type="checkbox" className="mr-2" /> Bi Metal (5)</li>
            </ul>
            <a href="#" className="text-xs text-blue-600 font-semibold mt-2 inline-block">+16 More</a>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Sort Bar */}
          <div className="flex justify-end mb-5">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Sort By:</label>
              <select 
                className="p-2 border border-gray-300 rounded bg-white text-sm cursor-pointer"
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="popularity">Popularity</option>
                <option value="price_low_high">Price: Low to High</option>
                <option value="price_high_low">Price: High to Low</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* You Could Be Interested In */}
          <div className="bg-green-50 p-5 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">You Could Be Interested In</h2>
              <div className="flex gap-2">
                <button className="w-8 h-8 border border-gray-300 rounded-full bg-white hover:bg-gray-100">&lt;</button>
                <button className="w-8 h-8 border border-gray-300 rounded-full bg-white hover:bg-gray-100">&gt;</button>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {allProducts.slice(0, 4).map(product => (
                <div key={product.id} className="bg-white border rounded-lg overflow-hidden">
                  <div className="aspect-square bg-gray-100 p-2">
                    <img src={product.image} alt={product.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="p-2">
                    {product.bestseller && <span className="text-xs bg-red-500 text-white px-1 py-0.5 rounded">Best Seller</span>}
                    <p className="text-xs mt-1 line-clamp-2">{product.title.substring(0, 30)}...</p>
                    <span className="text-sm font-semibold">₹ {product.price.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {allProducts.map(product => (
              <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative bg-gray-100 aspect-square">
                  <img src={product.image} alt={product.title} className="w-full h-full object-contain p-2" />
                  {product.bestseller && (
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Best Seller</span>
                  )}
                  <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1.5 cursor-pointer">
                    <span className="material-icons-outlined text-lg">favorite_border</span>
                  </div>
                  {product.rating && (
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                      ★ {product.rating} ({product.ratingCount})
                    </div>
                  )}
                </div>
                
                <div className="p-3">
                  <div className="flex justify-between items-center mb-2">
                    {product.rating ? (
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded">★ {product.rating} ({product.ratingCount})</span>
                    ) : (
                      <span className="bg-gray-100 text-xs px-2 py-1 rounded opacity-0">★ 0.0 (0)</span>
                    )}
                    {product.colors && (
                      <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">+{product.colors} Colors</span>
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-700 line-clamp-2 mb-2 h-10">{product.title}</p>
                  
                  <div className="flex items-baseline flex-wrap gap-2">
                    <span className="text-lg font-semibold text-gray-900">₹ {product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <>
                        <span className="text-xs text-gray-500 line-through">₹ {product.originalPrice.toLocaleString()}</span>
                        <span className="text-xs font-semibold text-green-600">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </span>
                      </>
                    )}
                  </div>
                </div>
                
                <a href="#" className="flex items-center justify-center gap-2 p-3 border-t border-gray-200 text-blue-600 font-medium hover:bg-gray-50">
                  <span className="material-icons-outlined text-base">search</span>
                  View Similar
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default WatchesPage;