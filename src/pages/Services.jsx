import "../styles/services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services-page">

      <section className="page-hero">

        <p className="portfolio-tag">
          WHAT WE OFFER
        </p>

        <h1>Our Services</h1>

        <p>
          Technology solutions designed for schools,
          businesses, startups and organizations looking
          to grow through innovation and digital transformation.
        </p>

      </section>

      <section className="service-list">

        <Link
          to="/services/school-management"
          className="service-box"
        >
          <h2>🏫 School ERP Software</h2>

          <p>
            Complete school management platform with
            student records, attendance, examinations,
            fee collection, reports, notifications and
            parent communication.
          </p>
           <div className="service-link">
    Learn More →
  </div>
        </Link>

        <Link
          to="/services/website-development"
          className="service-box"
        >
          <h2>🌐 Website Development</h2>

          <p>
            Professional websites for schools,
            clinics, restaurants, jewellery stores,
            startups and growing businesses designed
            to improve online presence.
          </p>
           <div className="service-link">
    Learn More →
  </div>
        </Link>

        <Link
          to="/services/mobile-app-development"
          className="service-box"
        >
          <h2>📱 Mobile Application Development</h2>

          <p>
            Android and iOS applications built with
            modern technologies to improve customer
            engagement and streamline operations.
          </p>
           <div className="service-link">
    Learn More →
  </div>
        </Link>

        <Link
          to="/services/ai-robotics"
          className="service-box"
        >
          <h2>🤖 AI & Robotics Training</h2>

          <p>
            Practical AI, Robotics and Innovation
            programs helping students develop future-ready
            skills through hands-on learning.
          </p>
           <div className="service-link">
    Learn More →
  </div>
        </Link>

        <Link
          to="/services/custom-software"
          className="service-box"
        >
          <h2>⚙️ Custom Software Development</h2>

          <p>
            Tailor-made software solutions built
            specifically around business and educational
            requirements instead of generic products.
          </p>
           <div className="service-link">
    Learn More →
  </div>
        </Link>

        <Link
          to="/contact"
          className="service-box"
        >
          <h2>💡 Technology Consulting</h2>

          <p>
            Strategic technology guidance, digital
            transformation consulting and solution
            planning for organizations adopting technology.
          </p>
           <div className="service-link">
    Learn More →
  </div>
        </Link>

      </section>

    </div>
  );
}

export default Services;