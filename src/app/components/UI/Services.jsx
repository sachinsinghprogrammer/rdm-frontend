import React from "react";
import "../../styles/services.css";

const serviceData = [
  {
    icon: "ri-apps-line",
    title: "App Development",
    desc: `Lorem ipsum dolor sit amet consectetur adipicing elit. Non
              expedita vel totam. Culpa, facilis iusto. Lorem ipsum dolor sit
              amet consectetur adipicing elit. Non expedita vel totam. Culpa
              facilis iusto.`,
  },
  {
    icon: "ri-code-s-slash-fill",
    title: "Web Design",
    desc: `Lorem ipsum dolor sit amet consectetur adipicing elit. Non
              expedita vel totam. Culpa, facilis iusto. Lorem ipsum dolor sit
              amet consectetur adipicing elit. Non expedita vel totam. Culpa
              facilis iusto.`,
  },
  {
    icon: "ri-landscape-line",
    title: "Graphic Design",
    desc: `Lorem ipsum dolor sit amet consectetur adipicing elit. Non
              expedita vel totam. Culpa, facilis iusto. Lorem ipsum dolor sit
              amet consectetur adipicing elit. Non expedita vel totam. Culpa
              facilis iusto.`,
  },

  {
    icon: "ri-rocket-line",
    title: "Digital Marketing",
    desc: `Lorem ipsum dolor sit amet consectetur adipicing elit. Non
              expedita vel totam. Culpa, facilis iusto. Lorem ipsum dolor sit
              amet consectetur adipicing elit. Non expedita vel totam. Culpa
              facilis iusto.`,
  },
];
const Services = ({ theme }) => {
  return (
    <section id="services">
      <div className="container">
        <div className="services__top-content">
          <h6 className="subtitle">Our Services</h6>
          <h2>Save time managing your business with</h2>
          <h2 className="highlight">our best services</h2>
        </div>
        <div className="service__item-wrapper">
          {serviceData &&
            serviceData.length &&
            serviceData.map((item, i) => (
              <div className="services__item" key={i}>
                <span className="services__icon">
                  <i className={item.icon}></i>
                </span>

                <h3 className="service__title">{item.title}</h3>
                <p className="description">{item.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
