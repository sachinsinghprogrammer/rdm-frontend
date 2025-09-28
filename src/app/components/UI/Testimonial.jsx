"use client"; // IMPORTANT for app directory

import React from "react";
import dynamic from "next/dynamic";
import ava01 from "../../images/ava-1.jpg";
import ava02 from "../../images/ava-2.jpg";
import ava03 from "../../images/ava-3.jpg";

// ✅ Dynamically import Slider with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// ✅ CSS imports must come after "use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/testimonial.css";

const Testimonial = ({ theme }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonialData = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipicing elit. Non expedita vel totam. Culpa, facilis iusto. Lorem ipsum dolor sit amet consectetur adipicing elit. Non expedita vel totam. Culpa, facilis iusto.",
      img: ava01,
      name: "John Doe",
      role: "CEO, Work Creation",
    },
    {
      text: "Exceptional service and seamless collaboration. A game-changer for our business. Exceptional service and seamless collaboration. A game-changer for our business.",
      img: ava02,
      name: "Jane Smith",
      role: "CTO, TechEdge",
    },
    {
      text: "The professionalism and attention to detail really stood out. Highly recommend! The professionalism and attention to detail really stood out. Highly recommend!",
      img: ava03,
      name: "Alex Johnson",
      role: "Founder, Creatify",
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="slider__content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more that <span className="highlight">5,000</span>
          </h2>
        </div>
        <div className="slider__wrapper">
          <Slider {...settings}>
            {testimonialData.map((item, index) => (
              <div className="slider__item" key={index}>
                <p className="description">{item.text}</p>
                <div className="customer__details">
                  <div className="customer__img">
                    <img src={item.img.src} alt={item.name} />
                  </div>
                  <div>
                    <h5 className="customer__name">{item.name}</h5>
                    <p className="description">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
