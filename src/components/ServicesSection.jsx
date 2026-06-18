function ServicesSection() {

  const services = [
    {
      title: "School ERP Software",
      desc: "Complete school management platform for students, teachers, attendance, fees, exams, reports and notifications."
    },
    {
      title: "Website Development",
      desc: "Professional websites for schools, clinics, restaurants, jewellery stores and growing businesses."
    },
    {
      title: "Mobile Applications",
      desc: "Custom Android and iOS applications designed to improve customer engagement and business operations."
    },
    {
      title: "AI & Robotics Training",
      desc: "Hands-on AI, Robotics and Innovation programs for schools to prepare students for future technologies."
    }
  ];

  return (
    <section className="services-section">

      <div className="section-header">

        <p className="portfolio-tag">
          WHAT WE DO
        </p>

        <h2>Our Core Services</h2>

        <p>
          We build software solutions, digital products and
          future-ready learning programs for schools,
          businesses and students.
        </p>

      </div>

      <div className="services-grid">

        {services.map((service, index) => (

          <div
            key={index}
            className="service-card"
          >

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ServicesSection;