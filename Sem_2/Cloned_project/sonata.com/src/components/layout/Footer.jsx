const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Top Bar */}
        <div className="bg-sonata-blue text-white flex justify-center items-center gap-4 py-5 px-5 text-lg font-medium mb-8">
          <svg className="w-5 h-5 fill-white" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58L3.654 1.328z"/>
          </svg>
          <div>Reach Us AT <span className="font-bold">1800-266-0123</span></div>
        </div>

        {/* Footer Top */}
        <div className="footer-top">
          <img src="" alt="SONATA" className="footer-logo" />
          <div className="currency-selector">INR (₹) ▼</div>
        </div>

        {/* Footer Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>CUSTOMER SERVICES</h4>
            <ul>
              <li>Payment Options</li>
              <li>Track Order</li>
              <li>Find a Store</li>
              <li>Encircle Program</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CONTACT US</h4>
            <ul>
              <li className="no-link">1800-266-0123</li>
              <li><a href="mailto:customercare@titan.co.in">customercare@titan.co.in</a></li>
              <li>Help & Contact</li>
              <li>Corporate</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>POLICIES</h4>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Wearable Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column"></div>
          <div className="footer-column">
            <h4>TITAN WORLD</h4>
            <div className="app-badges">
              <a href="#"><img src="" alt="Download on the App Store" /></a>
              <a href="#"><img src="" alt="Get it on Google Play" /></a>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        {/* About Section */}
        <div className="footer-about">
          <h3>SONATA WATCHES FOR ALL</h3>
          <p>India's largest selling watch brand, Sonata offers a wide range of styles at a great value. Make a statement with the latest trendy designs with superior quality standards.</p>
          <p>Perfectly combining style and functionality, Sonata offers a watch for every wrist and occasion, continuing to evoke pride and confidence in every customer. Sonata offers watches online at great prices and top-class services such as Cash on Delivery, free shipping and seamless return/ exchange policies.</p>
          <p>Get a wide variety of wrist watches for all. You can find watches for men, watches for women, and couple watches too. Check out our newest collections of trendy and stylish watches.</p>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.703.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm0 1.442c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.282.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.283.11-.706.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.598-.919c-.11-.282-.24-.705-.275-1.485C1.45 10.44 1.442 10.173 1.442 8s.007-2.389.046-3.232c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276C5.61 1.45 5.827 1.442 8 1.442z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 16 16">
                <path d="M8.051 1.999a.6.6 0 0 1 .587.63l-.003.515a.5.5 0 0 1-.5.5H8a.5.5 0 0 1-.5-.5L7.498 3.13a.6.6 0 0 1 .587-.63l.003.001zM11.54 4.247a1.8 1.8 0 0 0-1.448-1.57C8.512 2.5 8 2.5 8 2.5s-.512 0-2.092.177a1.8 1.8 0 0 0-1.448 1.57A18.4 18.4 0 0 0 4 8c0 2.45.163 3.498.46 3.753a1.8 1.8 0 0 0 1.448 1.57C6.012 13.5 8 13.5 8 13.5s3.988 0 5.54-.177a1.8 1.8 0 0 0 1.448-1.57A18.4 18.4 0 0 0 12 8c0-2.45-.163-3.498-.46-3.753zM6.4 10.5V5.5l4.133 2.5L6.4 10.5z"/>
              </svg>
            </a>
          </div>
          <p className="copyright">©2024 Titan Company Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;