import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { UserIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const TopHeader = () => {
  return (
    <header className="top-header">
      <div className="logo-search">
        <div className="logo">SONATA</div>
        <div className="search-bar">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 mr-2" />
          <input type="text" placeholder="Search product, style, & more..." />
          <i className="fa-solid fa-microphone text-gray-500"></i>
        </div>
      </div>
      
      <div className="header-icons">
        <UserIcon className="w-6 h-6 cursor-pointer hover:text-sonata-blue" />
        <HeartIcon className="w-6 h-6 cursor-pointer hover:text-sonata-blue" />
        <ShoppingBagIcon className="w-6 h-6 cursor-pointer hover:text-sonata-blue" />
      </div>
    </header>
  );
};

export default TopHeader;