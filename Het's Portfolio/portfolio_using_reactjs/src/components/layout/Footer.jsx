import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              Portfolio<span>.</span>
            </Link>
            <p>
              A passionate developer creating amazing web experiences. 
              Let's build something awesome together!
            </p>
            <div className="footer-social">
              <a href="https://github.com" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com" className="social-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4>Services</h4>
            <ul>
              <li><a href="#web">Web Development</a></li>
              <li><a href="#ui">UI/UX Design</a></li>
              <li><a href="#mobile">Mobile Apps</a></li>
              <li><a href="#consulting">Consulting</a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on new projects.</p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email"
                className="newsletter-input"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="footer-links-bottom">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;