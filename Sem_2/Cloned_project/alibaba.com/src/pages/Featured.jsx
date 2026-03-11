const Featured = () => {
  return (
    <div>
      {/* Breadcrumbs */}
      <div className="px-4 md:px-10 py-3 text-xs text-gray-500 bg-white border-b border-gray-200">
        Home <span className="mx-1 text-gray-400">{'>'}</span> Featured Selections <span className="mx-1 text-gray-400">{'>'}</span> Top Trending Products
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row max-w-[1400px] mx-auto my-5 px-5 gap-5">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-60 flex-shrink-0 bg-white rounded-lg p-5 h-fit">
          <div className="filter-group mb-6 border-b border-gray-200 pb-4">
            <div className="filter-title font-bold mb-2.5 text-sm text-gray-800">Features</div>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2.5" /> Ready to Ship
            </label>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2.5" /> Paid Samples
            </label>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2.5" defaultChecked /> Trade Assurance
            </label>
          </div>

          <div className="filter-group mb-6 border-b border-gray-200 pb-4">
            <div className="filter-title font-bold mb-2.5 text-sm text-gray-800">Supplier Types</div>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="radio" name="supplier" className="mr-2.5" /> Trade Assurance
            </label>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="radio" name="supplier" className="mr-2.5" defaultChecked /> Verified Supplier
            </label>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="radio" name="supplier" className="mr-2.5" /> {'<'} 1h Response Time
            </label>
          </div>

          <div className="filter-group mb-6 border-b border-gray-200 pb-4">
            <div className="filter-title font-bold mb-2.5 text-sm text-gray-800">Min. Order Quantity</div>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2.5" /> Less than 10
            </label>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2.5" /> Less than 100
            </label>
            <label className="filter-option flex items-center mb-2 text-sm text-gray-500 cursor-pointer">
              <input type="checkbox" className="mr-2.5" /> Less than 1000
            </label>
          </div>

          <div className="filter-group mb-6">
            <div className="filter-title font-bold mb-2.5 text-sm text-gray-800">Price (INR)</div>
            <div className="flex gap-1">
              <input type="text" placeholder="Min" className="w-2/5 p-1 border border-gray-300 rounded" />
              <span>-</span>
              <input type="text" placeholder="Max" className="w-2/5 p-1 border border-gray-300 rounded" />
            </div>
          </div>
        </aside>

        {/* Product Section */}
        <section className="flex-1">
          <div className="section-header bg-white p-4 rounded-lg mb-5 flex justify-between items-center">
            <h2 className="text-xl m-0">Featured Products for You</h2>
            <select className="p-2 rounded border border-gray-300 text-sm">
              <option>Sort by: Best Match</option>
              <option>Sort by: Price Low to High</option>
              <option>Sort by: Newest</option>
            </select>
          </div>

          <div className="grid-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Product 1 */}
            <div className="product-card">
              <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600" className="product-img" alt="Product" />
              <div className="product-title">Professional DSLR Camera 4K Video Waterproof Digital Camera</div>
              <div className="product-price">₹45,000 - ₹52,000</div>
              <div className="product-moq">Min. Order: 2 Pieces</div>
              <div className="supplier-info flex items-center text-xs text-gray-500 mt-2.5 pt-2.5 border-t border-gray-200">
                <span className="verified-badge">✔ Verified</span>
                <span>Shenzhen Tech Co.</span>
              </div>
              <a href="#" className="contact-btn">Contact Supplier</a>
            </div>

            {/* Product 2 */}
            <div className="product-card">
              <img src="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=600" className="product-img" alt="Product" />
              <div className="product-title">Smart Watch Series 8 Bluetooth Call Heart Rate Monitor</div>
              <div className="product-price">₹1,200 - ₹1,500</div>
              <div className="product-moq">Min. Order: 50 Pieces</div>
              <div className="supplier-info flex items-center text-xs text-gray-500 mt-2.5 pt-2.5 border-t border-gray-200">
                <span className="verified-badge">✔ Verified</span>
                <span>Guangzhou Elec.</span>
              </div>
              <a href="#" className="contact-btn">Contact Supplier</a>
            </div>

            {/* Product 3 */}
            <div className="product-card">
              <img src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600" className="product-img" alt="Product" />
              <div className="product-title">Wireless Noise Cancelling Headphones Over Ear Gaming Headset</div>
              <div className="product-price">₹850 - ₹1,100</div>
              <div className="product-moq">Min. Order: 100 Pieces</div>
              <div className="supplier-info flex items-center text-xs text-gray-500 mt-2.5 pt-2.5 border-t border-gray-200">
                <span className="verified-badge">✔ Verified</span>
                <span>AudioMasters Ltd.</span>
              </div>
              <a href="#" className="contact-btn">Contact Supplier</a>
            </div>

            {/* Product 4 */}
            <div className="product-card">
              <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600" className="product-img" alt="Product" />
              <div className="product-title">Healthy Organic Pancake Mix - Gluten Free Breakfast</div>
              <div className="product-price">₹200 - ₹350</div>
              <div className="product-moq">Min. Order: 500 Boxes</div>
              <div className="supplier-info flex items-center text-xs text-gray-500 mt-2.5 pt-2.5 border-t border-gray-200">
                <span className="verified-badge">✔ Verified</span>
                <span>Nature Foods Inc.</span>
              </div>
              <a href="#" className="contact-btn">Contact Supplier</a>
            </div>

            {/* Product 5 */}
            <div className="product-card">
              <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=600" className="product-img" alt="Product" />
              <div className="product-title">Modern Office Ergonomic Chair Mesh Back Support</div>
              <div className="product-price">₹3,500 - ₹4,200</div>
              <div className="product-moq">Min. Order: 10 Pieces</div>
              <div className="supplier-info flex items-center text-xs text-gray-500 mt-2.5 pt-2.5 border-t border-gray-200">
                <span className="verified-badge">✔ Verified</span>
                <span>Furniture Hub</span>
              </div>
              <a href="#" className="contact-btn">Contact Supplier</a>
            </div>

            {/* Product 6 */}
            <div className="product-card">
              <img src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600" className="product-img" alt="Product" />
              <div className="product-title">Running Shoes Breathable Mesh Sneakers for Men</div>
              <div className="product-price">₹650 - ₹900</div>
              <div className="product-moq">Min. Order: 20 Pairs</div>
              <div className="supplier-info flex items-center text-xs text-gray-500 mt-2.5 pt-2.5 border-t border-gray-200">
                <span className="verified-badge">✔ Verified</span>
                <span>Sports Gear CN</span>
              </div>
              <a href="#" className="contact-btn">Contact Supplier</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Featured;