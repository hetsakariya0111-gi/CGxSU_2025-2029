import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="search-bar">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search" />
      </div>
      
      <nav className="main-nav">
        <ul>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <span className="material-icons">home</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/new" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <span className="material-icons">new_releases</span> New
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/radio" 
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              <span className="material-icons">radio</span> Radio
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;