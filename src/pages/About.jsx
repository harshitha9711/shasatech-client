import "../styles/about.css";

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

    </div>
  );
}

export default About;