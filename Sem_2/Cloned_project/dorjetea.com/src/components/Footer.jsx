const Footer = () => {
  return (
    <footer className="bg-[#071b2b] text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-amber-400">About Us</h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Dorje Teas is based out of the heritage Selim Hill Tea Garden in Darjeeling. 
              Our mission is to revive Darjeeling. Join our Tea Club, and become a supporter 
              of our mission.
            </p>
            <div className="flex gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-blue-400 transition-colors text-2xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-pink-400 transition-colors text-2xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-blue-300 transition-colors text-2xl">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold mb-4 text-amber-400">Info</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">PRIVACY POLICY</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">REFUND POLICY</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">TERMS OF SERVICE</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">SHIPPING POLICY</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 Dorje Teas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;