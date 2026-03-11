import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      {/* CTA Section - Fixed */}
<div className="bg-gradient-to-r from-loft-orange to-loft-orange-light text-white rounded-xl w-[90%] mx-auto py-8 px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 my-16">
  <div className="text-center md:text-left">
    <h3 className="text-3xl md:text-4xl font-bold mb-2">Fly With Us</h3>
    <p className="text-lg text-white/90">Get in touch with our team</p>
  </div>
  <div>
    <a href="/lets-talk" className="inline-block bg-black text-white px-8 py-3 rounded-md font-bold hover:scale-105 transition-transform cursor-pointer no-underline">
      Let's Talk!
    </a>
  </div>
</div>

      {/* Footer Links */}
      <div className="main-footer">
        <div className="footer-logo-section">
          <h2>loft</h2>
          <div className="social-icons">
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
            </svg>
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
            </svg>
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <circle cx="16" cy="8" r="2" fill="currentColor"/>
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"/>
            </svg>
          </div>
        </div>

        <div className="footer-links">
          <h4>Fly with us</h4>
          <ul>
            <li>Physical Missions</li>
            <li>Virtual Missions</li>
            <li>On Demand Missions</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Loft</h4>
          <ul>
            <li>About</li>
            <li>Fly With Us</li>
            <li>Technology</li>
            <li>Newsroom</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>PRESS</h4>
          <ul>
            <li>press@loftorbital.com</li>
          </ul>
          <h4 className="mt-4">CUSTOMERS</h4>
          <ul>
            <li>sales@loftorbital.com</li>
          </ul>
          <h4 className="mt-4">GENERAL</h4>
          <ul>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2025 Loft Orbital, Inc. All Rights Reserved.</p>
        <div className="footer-bottom-links">
          <span>DATA POLICY</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;