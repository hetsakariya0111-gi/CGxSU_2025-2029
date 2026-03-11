import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="https://res.cloudinary.com/dcxu5wckd/image/upload/v1761825160/Screenshot_2025-10-30_171522_rogrzm.svg" 
            alt="Zoho"
            className="h-10"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            to="/products" 
            className={`font-medium hover:text-red-500 transition ${location.pathname === '/products' ? 'text-red-500' : 'text-gray-700'}`}
          >
            Products
          </Link>
          <Link 
            to="/community" 
            className={`font-medium hover:text-red-500 transition ${location.pathname === '/community' ? 'text-red-500' : 'text-gray-700'}`}
          >
            Community
          </Link>
          <Link 
            to="/partners" 
            className={`font-medium hover:text-red-500 transition ${location.pathname === '/partners' ? 'text-red-500' : 'text-gray-700'}`}
          >
            Partners
          </Link>
          <Link 
            to="/resources" 
            className={`font-medium hover:text-red-500 transition ${location.pathname === '/resources' ? 'text-red-500' : 'text-gray-700'}`}
          >
            Resources
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-5">
          <img 
            src="https://res.cloudinary.com/dcxu5wckd/image/upload/v1761828351/search_24dp_666666_FILL0_wght400_GRAD0_opsz24_wnmej9.svg" 
            alt="search"
            className="h-5 cursor-pointer"
          />
          <span className="text-sm text-gray-600">EN</span>
          <Link to="/signin" className="text-sm font-medium hover:text-red-500">Sign In</Link>
          <Link 
            to="/signup" 
            className="bg-red-500 text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-red-600 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t mt-4 py-4 px-4">
          <div className="flex flex-col gap-4">
            <Link to="/products" className="py-2 font-medium">Products</Link>
            <Link to="/community" className="py-2 font-medium">Community</Link>
            <Link to="/partners" className="py-2 font-medium">Partners</Link>
            <Link to="/resources" className="py-2 font-medium">Resources</Link>
            <Link to="/signin" className="py-2 font-medium">Sign In</Link>
            <Link to="/signup" className="bg-red-500 text-white px-4 py-2 rounded font-semibold text-center">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;