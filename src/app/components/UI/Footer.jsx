import React from "react";
import "../../styles/footer.css";

const Footer = ({ theme }) => {
  const year = new Date().getFullYear();
  const quickLink01 = [
    {
      path: "#",
      display: "Marketing",
    },
    {
      path: "#",
      display: "Analytics",
    },
    {
      path: "#",
      display: "Commerce",
    },
  ];

  const quickLink02 = [
    {
      path: "#",
      display: "Pricing",
    },
    {
      path: "#",
      display: "Documentation",
    },
    {
      path: "#",
      display: "Guides",
    },
  ];

  const quickLink03 = [
    {
      path: "#ABOUT",
      display: "About",
    },
    {
      path: "#job",
      display: "Job",
    },
    {
      path: "#blog",
      display: "Blog",
    },
  ];
  return (
    <footer className="">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__logo">
            <h2 className="">Logo</h2>
            <p className="description">Grow with us</p>
            <p className="small__text description">
              amet consectetur adipicing elit. Non expedita vel totam. Culpa,
              facilis iusto.Lorem ipsum dolor sit amet consectetur adipicing
              elit.
            </p>
          </div>
          <div className="footer__quick_links">
            <div className="quick__links-title">Solution</div>
            <ul className="quick__links">
              {quickLink01.map((item, idx) => (
                <li className="quick__link-item" key={idx}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick_links">
            <div className="quick__links-title">Support</div>
            <ul className="quick__links">
              {quickLink02.map((item, idx) => (
                <li className="quick__link-item" key={idx}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__quick_links">
            <div className="quick__links-title">Company</div>
            <ul className="quick__links">
              {quickLink03.map((item, idx) => (
                <li className="quick__link-item" key={idx}>
                  <a href={item.path}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright {year}, developed by Company. All rights reserved.{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
