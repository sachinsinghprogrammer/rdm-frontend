"use client";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import Services from "./components/UI/Services";
import About from "./components/UI/About";
import Team from "./components/UI/Team";
import Blog from "./components/UI/Blog";
import Testimonial from "./components/UI/Testimonial";
import Newsletter from "./components/UI/Newsletter";
import ContactForm from "./components/Features/contact-us/ContactForm";
import ServicesTabber from "./components/UI/ServicesTabber";
import Footer from "./components/UI/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    theme === "" ? setTheme("light-theme") : setTheme("");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      {/* <Header theme={theme} toggleTheme={toggleTheme} /> */}
      <Hero theme={theme} />
      <Counter theme={theme} />
      {/* <Services theme={theme} /> */}
      <ServicesTabber theme={theme} />
      <About theme={theme} />
      <Team theme={theme} />
      <Blog theme={theme} />
      <Testimonial theme={theme} />
      <Newsletter theme={theme} />
      {/* <ContactForm /> */}
    </>
  );
}
