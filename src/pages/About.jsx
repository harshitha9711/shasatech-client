import "../styles/about.css";
import pardhaImg from "../assets/team/pardha-saradhi.jpeg";
import vijayImg from "../assets/team/vijay-shankar.jpeg";
import legalImg from "../assets/team/prabhakara-chary.jpeg";
import jahanaviImg from "../assets/team/jahanavi.jpeg";
import rahulImg from "../assets/team/rahul.jpeg";
import papaImg from "../assets/team/papa-chary.jpeg";
import harshaImg from "../assets/team/sri-harsha.jpeg";
import rishiImg from "../assets/team/rishi.jpeg";
function About() {
  return (
    <div className="about-page">

      <section className="about-hero">

        <h1>About Shasa Tech</h1>

        <p>
          Technology. Education. Innovation.
          Building digital solutions and future-ready
          learning experiences.
        </p>

      </section>

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

<section className="team-section">

<h2>Meet Our Team</h2>

<p className="team-subtitle">
Dedicated professionals working together to build innovative
software solutions, educational programs and technology for the future.
</p>

<div className="team-grid">

<div className="team-card">

<img src={pardhaImg} alt="Pardha Saradhi"/>

<h3>Solleti Pardha Saradhi</h3>

<span>
Founder • CEO • Web Designer
</span>

<p>
Leads the company's vision and business strategy while designing
modern websites and digital experiences that combine creativity,
innovation and functionality.
</p>

</div>

<div className="team-card">

<img src={vijayImg} alt="Vijay Shankar"/>

<h3>Chidirala Vijay Shankar</h3>

<span>
Curriculum Designer
</span>

<p>
Designs structured learning modules, educational content and
training materials for AI, Robotics and future technology programs.
</p>

</div>

<div className="team-card">

<img src={legalImg} alt="Prabhakara Chary"/>

<h3>D. Prabhakara Chary</h3>

<span>
Legal Advisor
</span>

<p>
Provides legal guidance and compliance support while helping
the company operate professionally and responsibly.
</p>

</div>

<div className="team-card">

<img src={jahanaviImg} alt="Jahanavi"/>

<h3>G. Jahanavi</h3>

<span>
Curriculum Designer • Software Tester
</span>

<p>
Develops educational content and performs software testing to
ensure quality, usability and reliability.
</p>

</div>

<div className="team-card">

<img src={rahulImg} alt="Rahul"/>

<h3>K. Rahul</h3>

<span>
Curriculum Designer
</span>

<p>
Creates practical learning materials that help students develop
technical skills through engaging activities.
</p>

</div>

<div className="team-card">

<img src={papaImg} alt="Papa Chary"/>

<h3>D. Papa Chary</h3>

<span>
Team Lead • Project Coordinator
</span>

<p>
Coordinates projects, supports teamwork and ensures smooth
communication throughout every development phase.
</p>

</div>

<div className="team-card">

<img src={harshaImg} alt="Sri Harsha"/>

<h3>K. Sri Harsha</h3>

<span>
Technical Team Member
</span>

<p>
Supports software development and contributes to technology
projects with dedication and teamwork.
</p>

</div>

<div className="team-card">

<img src={rishiImg} alt="Rishi"/>

<h3>S. Rishi</h3>

<span>
Technical Team Member
</span>

<p>
Assists in development activities and collaborates with the
team to deliver reliable technology solutions.
</p>

</div>

</div>

</section>

    </div>
  );
}

export default About;