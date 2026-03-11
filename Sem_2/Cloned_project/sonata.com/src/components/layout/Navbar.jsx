import { Link, useLocation } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/men', label: 'Men' },
    { path: '/women', label: 'Women' },
    { path: '/watches', label: 'Watches' },
    { path: '/trending', label: 'Trending' },
    { path: '/sf-watches', label: 'SF Watches' },
    { path: '/poze', label: 'Poze by Sonata' },
    { path: '/sale', label: 'Sale' },
    { path: '/more', label: 'More' },
  ];

  return (
    <nav className="main-nav">
      <ul className="nav-links">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link 
              to={item.path} 
              className={location.pathname === item.path ? 'text-sonata-blue font-bold' : ''}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="location-selector">
        <MapPinIcon className="w-4 h-4 inline mr-1 text-blue-600" />
        <span>Select a location to see product availability</span>
        <a href="#" className="ml-2">Add Address</a>
      </div>
    </nav>
  );
};

export default Navbar;