import React from "react";
import "../../styles/team.css";

import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Courtny Hurry",
    position: "Product Developer",
  },
  {
    imgUrl: team02,
    name: "Courtny Hurry",
    position: "Product Developer",
  },
  {
    imgUrl: team03,
    name: "Courtny Hurry",
    position: "Product Developer",
  },
  {
    imgUrl: team04,
    name: "Courtny Hurry",
    position: "Product Developer",
  },
];

const Team = ({ theme }) => {
  return (
    <section>
      <div className="container">
        <div className="team__content">
          <h6 className="subtitle">Our Team</h6>
          <h2 className="">
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>
        <div className="team__wrapper">
          {teamMembers.map((item, key) => (
            <div className="team__item" key={key}>
              <div className="team__img">
                <img src={item.imgUrl.src} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team__member-social">
                  <span>
                    <i className="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
