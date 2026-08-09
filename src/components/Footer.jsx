import "../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">

    

      <div className="footer-grid">

        <div className="footer-brand">

          <h3>Shasa Tech</h3>

          <p>
            Building websites, software systems,
            mobile applications and AI-powered
            solutions for modern businesses.
          </p>

        </div>

        <div>

          <h4>Services</h4>

          <ul>
            <li>Website Development</li>
            <li>Mobile Applications</li>
            <li>School ERP Systems</li>
            <li>AI and Robotics</li>
          </ul>

        </div>

        <div>

          <h4>Company</h4>

          <ul>
            <li><Link to="/">Home</Link></li>
<li><Link to="/services">Services</Link></li>
<li><Link to="/portfolio">Portfolio</Link></li>
<li><Link to="/about">About</Link></li>
<li><Link to="/contact">Contact</Link></li>
          </ul>

        </div>

        <div>

          <h4>Contact</h4>

          <p>📞 +91 96426 59228</p>

          <p>✉️ shasatech0910@gmail.com</p>

          <p>📍 Telangana, India</p>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Shasa Tech. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;