import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <span className="logo-chip">
          <img src="/logo.png" alt="NEXUS" className="logo-img" />
        </span>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/nexwareeny">Nexwareeny</Link></li>
          <li><Link to="/nexlock">Nexlock</Link></li>
          <li><Link to="/careers">Careers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <p className="footer-bottom">&copy; 2026 NEXUS. All rights reserved.</p>
    </footer>
  );
}
