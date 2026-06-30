import schoolImg from "../assets/projects/school.png";
import websiteImg from "../assets/projects/buisness.png";
import aiImg from "../assets/projects/ai.jpeg";
import appImg from "../assets/projects/mobile.png";

import "../styles/portfolio.css";

function Portfolio() {

const projects = [
  {
    title: "Shasa School ERP",
    category: "School Management Software",
    image: schoolImg,
    description:
      "Complete ERP platform for attendance, fees, examinations, reports, students, teachers and administration.",
    tech: ["React", "Node.js", "PostgreSQL"]
  },

  {
    title: "Business Websites",
    category: "Website Development",
    image: websiteImg,
    description:
      "Professional websites developed for schools, clinics, restaurants, jewellery stores and growing businesses.",
    tech: ["React", "Responsive", "SEO Ready"]
  },

  {
    title: "Mobile Applications",
    category: "Mobile Development",
    image: appImg,
    description:
      "Custom mobile applications built for educational institutions and business operations.",
    tech: ["Android", "React Native", "API"]
  },

  {
    title: "AI & Robotics Program",
    category: "Future Skills Education",
    image: aiImg,
    description:
      "Hands-on AI and Robotics training programs helping students explore innovation, automation and emerging technologies.",
    tech: ["AI", "Robotics", "STEM"]
  }
];

  return (
    <div className="portfolio-page">

      <section className="portfolio-hero">
        <h1>Our Portfolio</h1>
        <p>
          Real projects and solutions developed by Shasa Tech.
        </p>
      </section>

      <section className="portfolio-grid">

        {projects.map((project,index)=>(
          <div className="portfolio-card" key={index}>

            <img
              src={project.image}
              alt={project.title}
            />

            <div className="portfolio-content">

  <span className="project-category">
    {project.category}
  </span>

  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <div className="tech-stack">
    {project.tech.map((tech,index)=>(
      <span key={index}>{tech}</span>
    ))}
  </div>

<button className="project-btn">
  Learn More
</button>

</div>

          </div>
        ))}

      </section>
<section className="portfolio-cta">

  <h2>
    Have a Project in Mind?
  </h2>

  <p>
    Let's discuss how Shasa Tech can help
    transform your ideas into reality.
  </p>

  <a
    href="https://wa.me/919642659228"
    target="_blank"
    rel="noreferrer"
    className="portfolio-contact-btn"
  >
    Contact Us
  </a>

</section>
    </div>
  );
}

export default Portfolio;