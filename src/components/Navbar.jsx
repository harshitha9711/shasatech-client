import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="logo">
        Shasa Tech
      </div>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><Link to="/">Home</Link></li>

        <li><Link to="/services">Services</Link></li>

        <li><Link to="/portfolio">Portfolio</Link></li>

        <li><Link to="/about">About</Link></li>

        <li><Link to="/contact">Contact</Link></li>

      </ul>

      

    </nav>
  );
}

export default Navbar;