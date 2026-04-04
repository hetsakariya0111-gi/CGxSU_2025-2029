import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Apps and Extensions</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Mobile Apps</a></li>
              <li><a href="#" className="text-sm hover:text-white">Desktop Apps</a></li>
              <li><a href="#" className="text-sm hover:text-white">Developer Center</a></li>
              <li><a href="#" className="text-sm hover:text-white">Google Workspace</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Learn</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">Training</a></li>
              <li><a href="#" className="text-sm hover:text-white">Academy</a></li>
              <li><a href="#" className="text-sm hover:text-white">Blog</a></li>
              <li><a href="#" className="text-sm hover:text-white">Knowledge Base</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Community</h4>
            <ul className="space-y-2">
              <li><Link to="/community" className="text-sm hover:text-white">User Community</Link></li>
              <li><a href="#" className="text-sm hover:text-white">Customer Stories</a></li>
              <li><Link to="/partners" className="text-sm hover:text-white">Work With a Partner</Link></li>
              <li><a href="#" className="text-sm hover:text-white">Zoho for Nonprofits</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm hover:text-white">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white">Our Story</a></li>
              <li><a href="#" className="text-sm hover:text-white">Press</a></li>
              <li><a href="#" className="text-sm hover:text-white">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <p><span className="text-white font-medium">Phone:</span> 1 800 103 1123 | 1 800 572 3535</p>
              <p><span className="text-white font-medium">Email:</span> sales@zohocorp.com</p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Support</a>
              <a href="#" className="hover:text-white">Concierge</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>© 2025, Zoho Corporation Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;