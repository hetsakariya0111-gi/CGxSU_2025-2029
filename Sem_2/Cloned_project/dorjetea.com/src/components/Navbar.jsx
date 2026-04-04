import { Link, useLocation } from 'react-router-dom';
import { MagnifyingGlassIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-teal-primary font-bold' : '';
  };

  return (
    <nav>
      <div className="top-bar">
        25% OFF ON PURCHASE ABOVE RS. 799
      </div>
      <div className="flex justify-between items-center p-4 md:p-6 flex-wrap">
        <div className="flex items-center gap-4 md:gap-8 cursor-pointer flex-wrap">
          <img 
            src="https://dorjeteas.com/cdn/shop/files/dorje-logo.png?v=1725257276&width=50" 
            alt="Dorje Teas logo" 
            className="h-8 w-auto"
          />
          <Link to="/" className={`nav-link ${isActive('/')}`}>SHOP NOW</Link>
          <Link to="/" className="nav-link">NEWLY LAUNCHED</Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog')}`}>BLOGS</Link>
          <Link to="/learn" className={`nav-link ${isActive('/learn')}`}>LEARN MORE</Link>
        </div>
        <div className="flex gap-2 cursor-pointer">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-600" />
          <UserIcon className="w-6 h-6 text-gray-600" />
          <ShoppingBagIcon className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;