import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">HMS</h2>

      <div>
        <Link to="/api1">API 1</Link>
        <Link to="/api2">API 2</Link>
      </div>
    </nav>
  );
};

export default Navbar;
