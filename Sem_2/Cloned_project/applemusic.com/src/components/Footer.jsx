const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-languages">
        <a href="#" className="active">United States</a>
        <a href="#">Español (México)</a>
        <a href="#">العربية</a>
        <a href="#">Русский</a>
        <a href="#">简体中文</a>
        <a href="#">Français (France)</a>
        <a href="#">한국어</a>
        <a href="#">Português (Brazil)</a>
        <a href="#">Tiếng Việt</a>
        <a href="#">繁體中文 (台灣)</a>
      </div>
      
      <div className="footer-bottom">
        <p className="footer-copyright">Copyright © 2025 Apple Inc. All rights reserved.</p>
        <nav className="footer-service-links">
          <a href="#">Internet Service Terms</a>
          <a href="#">Apple Music & Privacy</a>
          <a href="#">Cookie Warning</a>
          <a href="#">Support</a>
          <a href="#">Feedback</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;