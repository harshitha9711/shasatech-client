import { Link } from "react-router-dom";

import rajImg from "../assets/team/raj-kumar.jpeg";
import pardhaImg from "../assets/team/pardha-saradhi.jpeg";
import papaImg from "../assets/team/papa-chary.jpeg";
import vijayImg from "../assets/team/vijay-shankar.jpeg";

function TeamPreview() {

  const team = [

    {
      name: "Raj Kumar",
      role: "CEO",
      image: rajImg
    },

    {
      name: "Solleti Pardha Saradhi",
      role: "Team Lead • Web Designer",
      image: pardhaImg
    },

    {
      name: "D. Papa Chary",
      role: "Project Coordinator",
      image: papaImg
    },

    {
      name: "Chidirala Vijay Shankar",
      role: "Curriculum Designer",
      image: vijayImg
    }

  ];

  return (

    <section className="team-preview">

      <div className="section-header">

        <p className="portfolio-tag">
          OUR TEAM
        </p>

        <h2>Meet The Team Behind Shasa Tech</h2>

        <p>
          A passionate team working together to deliver
          innovative software solutions, educational
          technology and AI-powered learning experiences.
        </p>

      </div>


      <div className="team-preview-grid">

        {team.map((member, index) => (

          <div
            className="team-preview-card"
            key={index}
          >

            <img
              src={member.image}
              alt={member.name}
            />

            <h3>{member.name}</h3>

            <span>{member.role}</span>

          </div>

        ))}

      </div>


      <div className="team-btn">

        <Link to="/about">

          <button className="primary-btn">
            View Complete Team
          </button>

        </Link>

      </div>

    </section>

  );

}

export default TeamPreview;