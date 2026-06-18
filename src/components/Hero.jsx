import schoolImg from "../assets/projects/school.png";
import businessImg from "../assets/projects/buisness.png";
import mobileImg from "../assets/projects/mobile.png";
import aiImg from "../assets/projects/ai.png";

import "../styles/home.css";

function Hero() {
  return (
    <section className="hero">

  <div className="hero-left">

    <p className="tagline">
      TECHNOLOGY • EDUCATION • INNOVATION
    </p>

    <h1>
      Building Software.
      <br />
      Empowering Education.
      <br />
      Inspiring Innovation.
    </h1>

    <p className="hero-description">
      Shasa Tech develops School ERP Software,
      Professional Websites, Mobile Applications
      and AI & Robotics Training Programs for
      schools, businesses and future innovators.
    </p>

    <div className="hero-buttons">

      <button className="primary-btn">
        Explore Services
      </button>

      <button className="secondary-btn">
        View Portfolio
      </button>

    </div>

  </div>

<div className="hero-right">

  <div className="showcase-card">
    <img src={schoolImg} alt="School ERP" />
    <span>School ERP</span>
  </div>

  <div className="showcase-card">
    <img src={businessImg} alt="Website Development" />
    <span>Web Development</span>
  </div>

  <div className="showcase-card">
    <img src={mobileImg} alt="Mobile App" />
    <span>Mobile Apps</span>
  </div>

  <div className="showcase-card">
    <img src={aiImg} alt="AI Solutions" />
    <span>AI Solutions</span>
  </div>

</div>

</section>
  );
}

export default Hero;