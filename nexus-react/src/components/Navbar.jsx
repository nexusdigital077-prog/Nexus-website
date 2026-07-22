import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" onClick={closeMenu}>
        <img src="/logo.png" alt="NEXUS" className="logo-img" />
      </NavLink>
      <ul className={`nav-links${isOpen ? ' open' : ''}`} id="navLinks">
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Home</NavLink></li>
        <li><NavLink to="/#products" onClick={closeMenu}>Products</NavLink></li>
        <li><NavLink to="/nexwareeny" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Nex Warrenty</NavLink></li>
        <li><NavLink to="/nexlock" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Security</NavLink></li>
        <li><NavLink to="/careers" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Careers</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={closeMenu}>Contact</NavLink></li>
      </ul>
      <button
        className="nav-toggle"
        id="navToggle"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls="navLinks"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
