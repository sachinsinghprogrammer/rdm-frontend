import React, { useState, useEffect } from "react";
import "../../styles/hero.css";
import heroDarkImg from "../../images/hero-img.png";
import LightImg from "../../images/light-hero-bg.jpg";
import heroDarkImg2 from "../../images/hero-img2.png";
const Hero = ({ theme }) => {
  const heroSlides = [
    {
      title: ["Creative Designs", "Smart Marketing", "Real Growth"],
      description:
        "Transform your ideas into reality with cutting-edge designs.Your Brand’s Journey to Unstoppable Success.",
      lightImg: LightImg,
      darkImg: heroDarkImg,
    },
    {
      title: ["Innovate Your Business", "With Stunning", "Digital Solutions"],
      description: "Where Personal Branding Becomes Business Success.",
      lightImg: LightImg,
      darkImg: heroDarkImg2,
    },
    {
      title: ["Innovate Your Business", "With Stunning", "Digital Solutions"],
      description: "Transforming Personal Brands Into Lasting Success",
      // "Transform your ideas into reality with cutting-edge designs.",
      lightImg: LightImg,
      darkImg: heroDarkImg2,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="hero__section">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <div>
              {slide.title.map((line, index) => (
                <h2
                  key={index}
                  className={
                    index === slide.title.length - 1 ? "highlight" : ""
                  }
                >
                  {line}
                </h2>
              ))}
            </div>
            <p className="description">{slide.description}</p>
            <div className="hero__btns">
              <button className="primary__btn">Get Started Now</button>
              <button className="secondary__btn">Discover More</button>
            </div>
          </div>
          <div className="hero__img">
            <img
              src={
                theme === "light-theme" ? slide.lightImg.src : slide.darkImg.src
              }
              alt="hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
