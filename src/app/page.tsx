"use client";
import Hero from "./components/UI/Hero";
import Counter from "./components/UI/Counter";
import About from "./components/UI/About";
import Team from "./components/UI/Team";
import Blog from "./components/UI/Blog";
import Testimonial from "./components/UI/Testimonial";
import Newsletter from "./components/UI/Newsletter";
import ServicesTabber from "./components/UI/ServicesTabber";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Hero theme={theme} />
      <Counter theme={theme} />
      <ServicesTabber theme={theme} />
      <About theme={theme} />
      <Team theme={theme} />
      <Blog theme={theme} />
      <Testimonial theme={theme} />
      <Newsletter theme={theme} />
    </>
  );
}
