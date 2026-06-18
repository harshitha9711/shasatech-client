function WhyChooseUs() {

  const reasons = [
    {
      title: "Real Industry Experience",
      desc: "We have developed websites, school software and digital solutions for schools, clinics, restaurants and businesses."
    },
    {
      title: "Education & Technology Expertise",
      desc: "Our experience in School ERP systems and AI & Robotics programs helps educational institutions adopt technology effectively."
    },
    {
      title: "Custom Solutions",
      desc: "Every project is designed according to your requirements instead of using one-size-fits-all templates."
    },
    {
      title: "Long-Term Support",
      desc: "We provide continuous support, updates and improvements even after project delivery."
    }
  ];

  return (
    <section className="why-section">

      <div className="section-header">

        <p className="portfolio-tag">
          WHY SHASA TECH
        </p>

        <h2>Why Businesses & Schools Choose Us</h2>

        <p>
          We combine technology, education and innovation
          to create solutions that deliver real results.
        </p>

      </div>

      <div className="why-grid">

        {reasons.map((item,index)=>(

          <div
            key={index}
            className="why-card"
          >

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;