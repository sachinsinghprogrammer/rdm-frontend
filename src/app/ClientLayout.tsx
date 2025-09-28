"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/UI/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "" ? "light-theme" : "");
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      {children}
      <Footer theme={theme} />
    </>
  );
}
