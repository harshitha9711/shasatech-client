import "../styles/about.css";

import pardhaImg from "../assets/team/pardha-saradhi.jpeg";
import vijayImg from "../assets/team/vijay-shankar.jpeg";
import legalImg from "../assets/team/prabhakara-chary.jpeg";
import jahanaviImg from "../assets/team/jahanavi.jpeg";
import rahulImg from "../assets/team/rahul.jpeg";
import papaImg from "../assets/team/papa-chary.jpeg";
import harshaImg from "../assets/team/sri-harsha.jpeg";
import rishiImg from "../assets/team/rishi.jpeg";
import rajImg from "../assets/team/raj-kumar.jpeg";
import shlokImg from "../assets/team/shlok.jpeg";
function About() {

  const team = [
    {
      name: "Raj Kumar",
      role: "CEO",
      image: rajImg,
      description:
        "Leads the company's strategic direction, business growth and organizational development while driving Shasa Tech toward long-term growth and innovation."
    },

    {
      name: "Solleti Pardha Saradhi",
      role: "Team Lead • Web Designer",
      image: pardhaImg,
      description:
        "Leads the technical and design team while creating modern, responsive websites and digital experiences that combine functionality, usability and professional design."
    },

    {
      name: "Chidirala Vijay Shankar",
      role: "Curriculum Designer",
      image: vijayImg,
      description:
        "Designs structured learning modules, educational content and training materials for AI, Robotics and future technology programs."
    },

    {
      name: "D. Prabhakara Chary",
      role: "Legal Advisor",
      image: legalImg,
      description:
        "Provides legal guidance and compliance support while helping the company operate professionally and responsibly."
    },

    {
      name: "G. Jahanavi",
      role: "Curriculum Designer • Software Tester",
      image: jahanaviImg,
      description:
        "Develops educational content and performs software testing to ensure quality, usability and reliability."
    },

    {
      name: "K. Rahul",
      role: "Curriculum Designer",
      image: rahulImg,
      description:
        "Creates practical learning materials that help students develop technical skills through engaging activities."
    },

    {
      name: "D. Papa Chary",
      role: "Project Coordinator",
      image: papaImg,
      description:
        "Coordinates projects, supports teamwork and ensures smooth communication throughout every development phase."
    },

    {
      name: "K. Sri Harsha",
      role: "Technical Team Member",
      image: harshaImg,
      description:
        "Supports software development and contributes to technology projects with dedication and teamwork."
    },

    {
      name: "S. Rishi",
      role: "Technical Team Member",
      image: rishiImg,
      description:
        "Assists in development activities and collaborates with the team to deliver reliable technology solutions."
    }
    ,
    {
  name: "Shlok",
  role: "Technical Team Member",
  image: shlokImg,
  description:
    "Contributes to software development and technical activities, supporting the team in building reliable and user-focused technology solutions."
},
  ];

  return (
    <div className="about-page">

      {/* HERO */}

      <section className="about-hero">

        <h1>About Shasa Tech</h1>

        <p>
          Technology. Education. Innovation.
          Building digital solutions and future-ready
          learning experiences.
        </p>

      </section>


      {/* WHO WE ARE */}

      <section className="about-content">

        <div className="about-text">

          <h2>Who We Are</h2>

          <p>
            Shasa Tech is a technology and education
            company focused on helping schools,
            businesses and organizations adopt
            modern technology.
          </p>

          <p>
            We specialize in School ERP Software,
            Website Development, Mobile Applications,
            Custom Software Solutions and
            AI & Robotics Training Programs.
          </p>

          <p>
            Our goal is to bridge the gap between
            technology and education by developing
            practical solutions that create real impact.
          </p>

        </div>

        <div className="about-card">

          <h3>Our Mission</h3>

          <p>
            To empower schools, businesses and future
            innovators through technology, innovation
            and digital transformation.
          </p>

        </div>

      </section>


      {/* VALUES */}

      <section className="values-section">

        <h2>Our Core Values</h2>

        <div className="values-grid">

          <div className="value-card">

            <h3>Innovation</h3>

            <p>
              Building future-ready solutions
              using modern technologies.
            </p>

          </div>

          <div className="value-card">

            <h3>Quality</h3>

            <p>
              Delivering reliable software,
              websites and digital products.
            </p>

          </div>

          <div className="value-card">

            <h3>Education</h3>

            <p>
              Inspiring students through
              AI & Robotics learning programs.
            </p>

          </div>

          <div className="value-card">

            <h3>Growth</h3>

            <p>
              Helping organizations grow
              through technology adoption.
            </p>

          </div>

        </div>

      </section>


      {/* WHAT WE BUILD */}

      <section className="values-section">

        <h2>What We Build</h2>

        <div className="values-grid">

          <div className="value-card">

            <h3>School ERP</h3>

            <p>
              Student management, attendance,
              fees, examinations and reports.
            </p>

          </div>

          <div className="value-card">

            <h3>Websites</h3>

            <p>
              Professional websites for schools,
              businesses and organizations.
            </p>

          </div>

          <div className="value-card">

            <h3>Mobile Apps</h3>

            <p>
              Android and iOS applications
              designed for growth.
            </p>

          </div>

          <div className="value-card">

            <h3>AI & Robotics</h3>

            <p>
              Practical learning programs for
              future innovators.
            </p>

          </div>

        </div>

      </section>


      {/* TEAM */}

      <section className="team-section">

        <h2>Meet Our Team</h2>

        <p className="team-subtitle">
          Dedicated professionals working together to build
          innovative software solutions, educational programs
          and technology for the future.
        </p>

        <div className="team-grid">

          {team.map((member, index) => (

            <div
              className="team-card"
              key={index}
            >

              <img
                src={member.image}
                alt={member.name}
              />

              <h3>{member.name}</h3>

              <span>{member.role}</span>

              <p>{member.description}</p>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}

export default About;