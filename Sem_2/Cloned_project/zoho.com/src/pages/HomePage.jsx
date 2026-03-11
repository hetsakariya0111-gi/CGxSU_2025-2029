import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Your life's work,<br />powered by our life's work</h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">A unique and powerful software suite to transform the way you work. Designed for businesses of all sizes, built by a company that values your privacy.</p>
          <Link to="/signup" className="bg-red-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 inline-block">
            Get Started for free
          </Link>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-gray-500 mb-8">FEATURED APPS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'CRM', desc: 'Comprehensive CRM Platform for customer-facing team.' },
              { name: 'Mail', desc: 'Secure email service for teams of all sizes.' },
              { name: 'Books', desc: 'Powerful accounting platform for growing businesses.' },
              { name: 'People', desc: 'Organize, automate, and simplify your HR Processes.' },
              { name: 'Projects', desc: 'Manage, track, and collaborate on project with teams.' },
            ].map((app, i) => (
              <div key={i} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition">
                <div>
                  <h3 className="text-2xl font-bold">{app.name}</h3>
                  <p className="text-gray-600">{app.desc}</p>
                </div>
                <div className="text-3xl text-gray-400">›</div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end mt-6 text-blue-600 font-semibold">
            <span>EXPLORE ALL PRODUCTS</span>
            <span className="text-2xl ml-2">›</span>
          </div>
        </div>
      </section>

      {/* Zoho One Section */}
      <section className="bg-yellow-400 py-20">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-2">Zoho One</h2>
              <p className="text-lg mb-4">The Operating System for businesses</p>
              <p className="text-gray-800 mb-6">Run your entire business on Zoho with our unified cloud software, designed to help you break down silos between departments and increase organizational efficiency.</p>
              <button className="bg-red-500 text-white px-6 py-3 rounded font-bold">Try Zoho One</button>
            </div>
          </div>
          <div className="bg-white/20 p-8 rounded-lg">
            <p className="text-2xl mb-4">"You can be a startup, mid-sized company, or an enterprise—Zoho One is a boon for all."</p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-400 rounded-full"></div>
              <div>
                <h4 className="font-bold">Prakash Gagdani</h4>
                <p className="text-sm">CEO, 5paisa.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-8">Brands That Trust Us</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-5xl mx-auto">
          {['IIFL', 'SpiceJet', 'L\'Oreal', 'Amazon', 'Tata Play', 'Zomato', 'Max Life'].map((brand, i) => (
            <div key={i} className="text-xl font-semibold text-gray-600">{brand}</div>
          ))}
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <svg width="56" height="56" viewBox="0 0 48 56" className="mx-auto mb-6 text-blue-500" fill="none">
            <path d="M24 2L2 12V26C2 40 24 54 24 54C24 54 46 40 46 26V12L24 2Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 28L18 34L24 40L30 34L24 28Z" fill="currentColor" />
          </svg>
          <h2 className="text-4xl font-medium mb-4">Your privacy is our responsibility</h2>
          <p className="text-lg text-gray-600 mb-8">We believe that trust is paramount in a relationship. We do not own or sell your data, and we most certainly do not bank on advertising-based business models.</p>
          <button className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded font-medium hover:bg-blue-50">WATCH VIDEO</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;