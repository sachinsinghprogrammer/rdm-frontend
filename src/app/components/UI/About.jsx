import React from "react";
import "../../styles/about.css";
import aboutImg from "../../images/about-us.jpg";
const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: `Lorem ipsum dolor sit amet consectetur adipicing elit. Non
                  expedita vel totam.`,
  },
  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: `Lorem ipsum dolor sit amet consectetur adipicing elit. Non
                  expedita vel totam.`,
  },
  {
    icon: "ri-customer-service-2-line",
    title: "24/7 Hours support",
    desc: `Lorem ipsum dolor sit amet consectetur adipicing elit. Non
                  expedita vel totam.`,
  },
];

const About = ({ theme }) => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className="highlight">financial challenges</h2>
            <p className="description about__content_desc">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipicing elit. Non
              expedita vel totam. Culpa, facilis iusto.Lorem ipsum dolor sit
              amet consectetur adipicing elit. Non expedita vel totam. Culpa,
              facilis iusto.Lorem ipsum dolor sit amet consectetur adipicing
              elit.
            </p>
            <div className="choose__item-wrapper">
              {chooseData.map((item, index) => (
                <div className="choose__us-item" key={index}>
                  <span className="choose__us-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <p className="choose__us-title">{item.title}</p>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="about__img">
            <img src={aboutImg.src} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
