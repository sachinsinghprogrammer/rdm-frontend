"use client";
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import logo from "../../images/rmd-logo.png";
import "./header.css";

const Header = ({ theme, toggleTheme }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const router = useRouter();

  const nav__links = [
    { path: "#home", display: "Home" },
    { path: "#services", display: "Services" },
    { path: "#projects", display: "Projects" },
    { path: "#blog", display: "Blog" },
    { path: "#about", display: "About" },
    { path: "/career", display: "Career" },
    { path: "/contact-us", display: "Contact Us" },
  ];

  // Shrink header on scroll
  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("header__shrink");
    } else {
      headerRef.current.classList.remove("header__shrink");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);
    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  // Handle clicks
  const handleClick = async (e, path) => {
    if (path.startsWith("#")) {
      e.preventDefault();

      // If already on home → scroll to section
      if (window.location.pathname === "/") {
        const target = document.querySelector(path);
        if (target) {
          const location = target.offsetTop;
          window.scrollTo({
            left: 0,
            top: location - 80,
            behavior: "smooth",
          });
        }
      } else {
        // If not on home → go to home first with hash
        router.push("/" + path);
      }
    }
    // else → let Next.js handle /career, /contact-us
  };

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header" ref={headerRef} id="home">
      <div className="container">
        <div className="nav__wrapper">
          {/* ============================== Logo ============================ */}
          <div className="logo">
            <img src={logo.src} alt="logo" style={{ height: "50px" }} />
          </div>

          {/* ============================== Navigation ============================ */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu">
              {nav__links.map((item, index) => (
                <li className="menu__item" key={index}>
                  <a
                    href={
                      item.path.startsWith("#") ? "/" + item.path : item.path
                    }
                    className="menu__link"
                    onClick={(e) => handleClick(e, item.path)}
                  >
                    {item.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ============================== Theme Toggle ============================ */}
          <div className={theme === "light-theme" ? "" : "light__mode"}>
            <span onClick={toggleTheme}>
              {theme === "light-theme" ? (
                <span>
                  <i className="ri-moon-line"></i> Dark
                </span>
              ) : (
                <span>
                  <i className="ri-sun-line"></i> Light
                </span>
              )}
            </span>
          </div>

          {/* ============================== Mobile Menu ============================ */}
          <div className="mobile__menu" onClick={toggleMenu}>
            <i className="ri-menu-line"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
