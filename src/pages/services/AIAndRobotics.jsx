import aiPoster from "../../assets/projects/ai-poster.jpeg";
import "../../styles/service-detail.css";
import { Link } from "react-router-dom";
function AIAndRobotics() {

  const programs = [
    {
      title: "Artificial Intelligence",
      desc: "Introduction to AI concepts, machine learning and real-world applications."
    },
    {
      title: "Robotics",
      desc: "Hands-on robotics activities using sensors, motors and programmable controllers."
    },
    {
      title: "Automation",
      desc: "Understanding automation systems and intelligent technologies."
    },
    {
      title: "Innovation Projects",
      desc: "Students build practical projects that encourage creativity and problem solving."
    },
    {
      title: "Coding Fundamentals",
      desc: "Programming skills that support AI and robotics development."
    },
    {
      title: "Future Technologies",
      desc: "Exposure to emerging technologies preparing students for future careers."
    }
  ];

  const benefits = [
    "Future Ready Skills",
    "STEM Learning",
    "Problem Solving",
    "Creativity & Innovation",
    "Hands-On Experience",
    "Technology Awareness"
  ];

  return (
    <div className="service-detail">

      <section className="service-hero">
        <h1>AI & Robotics Training</h1>

        <p>
          Future-focused learning programs helping
          students explore Artificial Intelligence,
          Robotics, Automation and Innovation.
        </p>
      </section>

      <section className="erp-showcase">

        <img
          src={aiPoster}
          alt="AI & Robotics Training"
        />

      </section>

      <section className="features-section">

        <h2>Program Highlights</h2>

        <div className="features-grid">

          {programs.map((item,index)=>(
            <div key={index} className="feature-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}

        </div>

      </section>

      <section className="benefits-section">

        <h2>Benefits For Schools</h2>

        <div className="benefits-grid">

          {benefits.map((item,index)=>(
            <div key={index} className="benefit-card">
              {item}
            </div>
          ))}

        </div>

      </section>

      <section className="service-cta">

        <h2>Bring AI & Robotics To Your School</h2>

        <p>
          Help students develop future-ready skills
          through practical learning and innovation.
        </p>

       <Link to="/contact">
  <button>
    Schedule A Consultation
  </button>
</Link>
          
      </section>

    </div>
  );
}

export default AIAndRobotics;