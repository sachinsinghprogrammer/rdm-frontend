import React from "react";
import "../../styles/newsletter.css";

const Newsletter = ({ theme }) => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter__wrapper">
          <div className="newsletter_content">
            <h6 className="subtitle">Let's work</h6>
            <h2 className="">
              Explore the <span className="highlight">hidden</span> ideas and
              subscribe!
            </h2>
          </div>
          <div className="newsletter__form">
            <input id="f" type="email" placeholder="Email" />
            <button className="secondary__btn subscribe__btn">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
