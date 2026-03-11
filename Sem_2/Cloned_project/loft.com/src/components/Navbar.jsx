import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isTechnologyPage = location.pathname === '/technology';
  
  return (
    <nav className={`navbar ${isTechnologyPage ? 'bg-transparent' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">loft</Link>
        <div className="nav-links">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/fly-with-us" className="nav-link main">Fly With Us</Link>
          <Link to="/technology" className={`nav-link ${location.pathname === '/technology' ? 'active' : ''}`}>Technology</Link>
          <Link to="/newsroom" className="nav-link">Newsroom</Link>
          <Link to="/careers" className="nav-link">Careers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;