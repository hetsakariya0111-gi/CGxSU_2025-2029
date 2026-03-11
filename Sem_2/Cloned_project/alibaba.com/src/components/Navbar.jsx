import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' ? 'active' : '';
    }
    return location.pathname.includes(path) ? 'active' : '';
  };
  
  return (
    <header className="flex flex-wrap md:flex-nowrap justify-between items-center bg-black text-white px-4 md:px-10 py-2.5">
      <div className="flex items-center text-xl font-bold">
        <img 
          src="https://play-lh.googleusercontent.com/eSZC2nLJakBYTgk02Sh9VBmkn8TRaiGe9ZHnzkct_hFz55ev1aY0PKafk711JtfmCMP6leqx0O-UmyU_DvRuRQ" 
          alt="Alibaba logo" 
          className="h-7 w-auto mr-1.5"
        />
        <span>Alibaba.com</span>
      </div>
      
      <nav className="flex gap-5 items-center order-3 md:order-2 mt-2 md:mt-0">
        <Link to="/" className={`text-white no-underline text-sm pb-1 ${isActive('/') === 'active' ? 'text-orange-primary font-bold border-b-2 border-orange-primary' : ''}`}>
          All categories
        </Link>
        <Link to="/featured" className={`text-white no-underline text-sm pb-1 ${isActive('featured') === 'active' ? 'text-orange-primary font-bold border-b-2 border-orange-primary' : ''}`}>
          Featured selections
        </Link>
        <Link to="/protection" className={`text-white no-underline text-sm pb-1 ${isActive('protection') === 'active' ? 'text-orange-primary font-bold border-b-2 border-orange-primary' : ''}`}>
          Order protections
        </Link>
      </nav>
      
      <div className="flex gap-5 items-center text-sm order-2 md:order-3">
        <span className="hidden md:inline">Deliver to: IN</span>
        <span className="hidden md:inline">English-INR</span>
        <a href="#" className="text-white no-underline">Sign in</a>
        <button className="bg-orange-primary text-white border-none px-4 py-2 rounded font-semibold cursor-pointer">
          Create account
        </button>
      </div>
    </header>
  );
};

export default Navbar;