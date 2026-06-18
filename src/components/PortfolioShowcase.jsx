function PortfolioShowcase() {
  return (
    <section className="portfolio-section">

      <div className="section-header">

        <p className="portfolio-tag">
          OUR WORK
        </p>

        <h2>Projects & Solutions Delivered</h2>

        <p>
          Real projects developed by Shasa Tech
          for schools, businesses and educational institutions.
        </p>

      </div>

      <div className="portfolio-grid">

        <div className="project-card">

          <span className="project-type">
            SCHOOL ERP SOFTWARE
          </span>

          <h3>Shasa School ERP</h3>

          <p>
            Complete school management platform with
            student records, attendance, fees,
            examinations, reports and parent communication.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>PostgreSQL</span>
          </div>

        </div>

        <div className="project-card">

          <span className="project-type">
            WEBSITE DEVELOPMENT
          </span>

          <h3>Business & School Websites</h3>

          <p>
            Professional websites developed for
            schools, clinics, restaurants,
            jewellery stores and local businesses.
          </p>

          <div className="project-tech">
            <span>React</span>
            <span>Responsive</span>
            <span>SEO Ready</span>
          </div>

        </div>

        <div className="project-card">

          <span className="project-type">
            MOBILE APPLICATIONS
          </span>

          <h3>Custom Mobile Solutions</h3>

          <p>
            Mobile applications designed for
            schools and businesses with modern
            user experience and secure access.
          </p>

          <div className="project-tech">
            <span>Android</span>
            <span>React Native</span>
            <span>API Integration</span>
          </div>

        </div>

        <div className="project-card">

          <span className="project-type">
            AI & ROBOTICS EDUCATION
          </span>

          <h3>Future Skills Program</h3>

          <p>
            Practical AI and Robotics programs
            helping students learn innovation,
            automation and emerging technologies.
          </p>

          <div className="project-tech">
            <span>AI</span>
            <span>Robotics</span>
            <span>STEM Learning</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default PortfolioShowcase;