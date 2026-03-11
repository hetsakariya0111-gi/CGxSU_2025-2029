import { FunnelIcon } from '@heroicons/react/24/outline';

const FiltersSidebar = ({ type = 'men' }) => {
  return (
    <aside className="filters-sidebar">
      <div className="filter-header">
        <h3><FunnelIcon className="w-5 h-5" /> Filters</h3>
        <a href="#" className="clear-all">Clear all</a>
      </div>

      {/* Price Filter */}
      <div className="filter-section">
        <h4>Price</h4>
        <div className="price-slider-placeholder"></div>
        <div className="price-inputs">
          <input type="text" value="₹ 595" readOnly />
          <span>to</span>
          <input type="text" value="₹ 5995" readOnly />
        </div>
      </div>

      {/* Strap Material */}
      <div className="filter-section">
        <h4>Strap Material</h4>
        <ul className="filter-list">
          <li><input type="checkbox" id="plastic" /><label htmlFor="plastic">Plastic (136)</label></li>
          <li><input type="checkbox" id="silicone" /><label htmlFor="silicone">Silicone (8)</label></li>
          <li><input type="checkbox" id="leather" /><label htmlFor="leather">Leather (129)</label></li>
          <li><input type="checkbox" id="metal" /><label htmlFor="metal">Bi Metal (7)</label></li>
        </ul>
        <a href="#" className="more-link">+11 More</a>
      </div>

      {/* Strap Color */}
      <div className="filter-section">
        <h4>Strap Color</h4>
        <ul className="filter-list">
          <li><input type="checkbox" id="black-strap" /><label htmlFor="black-strap">Black (213)</label></li>
          <li><input type="checkbox" id="white-strap" /><label htmlFor="white-strap">White (2)</label></li>
          <li><input type="checkbox" id="blue-strap" /><label htmlFor="blue-strap">Blue (2)</label></li>
          <li><input type="checkbox" id="green-strap" /><label htmlFor="green-strap">Green (20)</label></li>
        </ul>
      </div>

      {/* Dial Color */}
      <div className="filter-section">
        <h4>Dial Color</h4>
        <ul className="filter-list">
          <li><input type="checkbox" id="beige" /><label htmlFor="beige">Beige (2)</label></li>
          <li><input type="checkbox" id="black" /><label htmlFor="black">Black (188)</label></li>
          <li><input type="checkbox" id="blue" /><label htmlFor="blue">Blue (96)</label></li>
          <li><input type="checkbox" id="brown" /><label htmlFor="brown">Brown (25)</label></li>
        </ul>
        <a href="#" className="more-link">+22 More</a>
      </div>

      {/* Discounts */}
      <div className="filter-section">
        <h4>Discounts</h4>
        <ul className="filter-list">
          <li><input type="checkbox" id="dis10" /><label htmlFor="dis10">Upto 10% Off (4)</label></li>
          <li><input type="checkbox" id="dis20" /><label htmlFor="dis20">10% - 20% Off (8)</label></li>
          <li><input type="checkbox" id="dis30" /><label htmlFor="dis30">20% - 30% Off (119)</label></li>
          <li><input type="checkbox" id="dis40" /><label htmlFor="dis40">30% - 40% Off (6)</label></li>
        </ul>
        <a href="#" className="more-link">+5 More</a>
      </div>

      {/* Brands */}
      <div className="filter-section">
        <h4>Brands</h4>
        <ul className="filter-list">
          <li><input type="checkbox" id="poze" /><label htmlFor="poze">Poze (125)</label></li>
          <li><input type="checkbox" id="sf" /><label htmlFor="sf">SF (134)</label></li>
          <li><input type="checkbox" id="sonata" /><label htmlFor="sonata">Sonata (408)</label></li>
        </ul>
      </div>

      {/* Availability */}
      <div className="filter-section">
        <h4>Availability</h4>
        <ul className="filter-list">
          <li><input type="checkbox" id="out-of-stock" /><label htmlFor="out-of-stock">Include Out Of Stock</label></li>
        </ul>
      </div>
    </aside>
  );
};

export default FiltersSidebar;