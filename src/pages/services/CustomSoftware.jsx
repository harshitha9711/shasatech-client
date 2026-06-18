import softwareImg from "../../assets/projects/school.png";
import "../../styles/service-detail.css";
import { Link } from "react-router-dom";
function CustomSoftware() {

  const features = [
    {
      title: "ERP Systems",
      desc: "Custom ERP solutions designed to manage business operations efficiently."
    },
    {
      title: "Automation Tools",
      desc: "Reduce repetitive tasks and improve productivity through automation."
    },
    {
      title: "Management Software",
      desc: "Centralized platforms for managing employees, customers and operations."
    },
    {
      title: "CRM Solutions",
      desc: "Customer relationship management systems tailored to your workflow."
    },
    {
      title: "Business Dashboards",
      desc: "Real-time reporting and analytics for better decision making."
    },
    {
      title: "Scalable Architecture",
      desc: "Software built to support future growth and expansion."
    }
  ];

  const benefits = [
    "Improve Operational Efficiency",
    "Reduce Manual Work",
    "Increase Productivity",
    "Better Data Management",
    "Real-Time Reporting",
    "Scalable Business Growth"
  ];

  return (
    <div className="service-detail">

      <section className="service-hero">

        <h1>Custom Software Development</h1>

        <p>
          Tailor-made software solutions designed
          specifically for your business processes,
          requirements and future growth.
        </p>

      </section>

      <section className="erp-showcase">

        <img
          src={softwareImg}
          alt="Custom Software Development"
        />

      </section>

      <section className="features-section">

        <h2>Software Solutions We Build</h2>

        <p>
          Modern systems developed to solve
          real business challenges.
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

        <h2>Benefits Of Custom Software</h2>

        <p>
          Software designed around your workflow
          delivers greater flexibility and efficiency.
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

        <h2>Need Custom Software For Your Business?</h2>

        <p>
          Let's build a solution designed specifically
          for your organization and goals.
        </p>

        <Link to="/contact">
  <button>
    Discuss Your Project
  </button>
</Link>

      </section>

    </div>
  );
}

export default CustomSoftware;