import websiteImg from "../../assets/projects/website-showcase.png";
import "../../styles/service-detail.css";
import { Link } from "react-router-dom";
function WebsiteDevelopment() {

  const features = [
    {
      title: "Business Websites",
      desc: "Professional websites designed to build trust, showcase services and generate leads."
    },
    {
      title: "School Websites",
      desc: "Modern websites for schools with admissions, announcements and information portals."
    },
    {
      title: "Responsive Design",
      desc: "Optimized for desktop, tablet and mobile devices."
    },
    {
      title: "SEO Friendly",
      desc: "Built following search engine best practices to improve visibility."
    },
    {
      title: "Fast Performance",
      desc: "Optimized loading speed for better user experience."
    },
    {
      title: "Custom Design",
      desc: "Unique website designs aligned with your brand identity."
    }
  ];

  const benefits = [
    "Increase Business Credibility",
    "Generate More Leads",
    "24/7 Online Presence",
    "Improve Customer Trust",
    "Showcase Products & Services",
    "Expand Business Reach"
  ];

  return (
    <div className="service-detail">

      <section className="service-hero">

        <h1>Website Development</h1>

        <p>
          Professional websites designed to help
          businesses, schools and organizations
          establish a strong online presence.
        </p>

      </section>

      <section className="erp-showcase">

        <img
          src={websiteImg}
          alt="Website Development"
        />

      </section>

      <section className="features-section">

        <h2>What We Build</h2>

        <p>
          Modern, responsive and business-focused
          websites tailored to your goals.
        </p>

        <div className="features-grid">

          {features.map((item, index) => (
            <div
              key={index}
              className="feature-card"
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>

      </section>

      <section className="benefits-section">

        <h2>Benefits Of A Professional Website</h2>

        <p>
          A strong online presence helps businesses
          attract customers and grow faster.
        </p>

        <div className="benefits-grid">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="benefit-card"
            >
              {item}
            </div>
          ))}

        </div>

      </section>

      <section className="service-cta">

        <h2>Need A Professional Website?</h2>

        <p>
          Let's build a website that reflects your
          brand and helps your business grow.
        </p>

<Link to="/contact">
  <button>
    Get Free Consultation
  </button>
</Link>
      

      </section>

    </div>
  );
}

export default WebsiteDevelopment;