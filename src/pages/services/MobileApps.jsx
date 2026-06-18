import mobileImg from "../../assets/projects/mobile.png";
import "../../styles/service-detail.css";
import { Link } from "react-router-dom";
function MobileApps() {

  const features = [
    {
      title: "Android Applications",
      desc: "Custom Android applications designed for businesses, schools and startups."
    },
    {
      title: "iOS Applications",
      desc: "Modern iPhone and iPad applications with smooth user experience."
    },
    {
      title: "Cross-Platform Development",
      desc: "Build once and deploy efficiently across multiple platforms."
    },
    {
      title: "API Integration",
      desc: "Connect mobile apps with payment gateways, ERP systems and external services."
    },
    {
      title: "User-Friendly Design",
      desc: "Clean interfaces focused on usability and customer engagement."
    },
    {
      title: "Secure & Scalable",
      desc: "Applications built with security, performance and future growth in mind."
    }
  ];

  const benefits = [
    "Increase Customer Engagement",
    "Improve Business Accessibility",
    "Enhance Brand Presence",
    "Streamline Operations",
    "Provide Better User Experience",
    "Support Business Growth"
  ];

  return (
    <div className="service-detail">

      <section className="service-hero">

        <h1>Mobile App Development</h1>

        <p>
          Modern Android and iOS applications
          designed to improve customer engagement,
          efficiency and business growth.
        </p>

      </section>

      <section className="erp-showcase">

        <img
          src={mobileImg}
          alt="Mobile Application Development"
        />

      </section>

      <section className="features-section">

        <h2>What We Build</h2>

        <p>
          Mobile solutions tailored to business,
          education and customer needs.
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

        <h2>Benefits Of Mobile Applications</h2>

        <p>
          Mobile apps help organizations stay
          connected with users anytime and anywhere.
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

        <h2>Ready To Build Your Mobile App?</h2>

        <p>
          Let's create a mobile solution that
          delivers value to your users and business.
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

export default MobileApps;