import React, { useContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { LanguageContext } from "../contexts/LanguageContext";

const languageOptions = {
  en: "English",
  fr: "Français",
  portuguese: "Português",
  zulu: "IsiZulu",
};

const Nav = () => {
  const { language, setLanguage, translations } = useContext(LanguageContext);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current route path
  const [activeNav, setActiveNav] = useState(location.pathname); // Track active item

  // Load saved language from local storage on mount
  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, [setLanguage]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveNav(location.pathname); // Update active nav on route change
  }, [location.pathname]);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      style={{
        backgroundColor: scrolled ? "rgba(8, 68, 76, 0.6)" : "transparent",
        backdropFilter: scrolled ? "blur(6px)" : "none",
        transition: "background-color 0.3s, backdrop-filter 0.3s",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          <img alt="AGRA Logo" src="/logo1.png" width="100" height="auto" />
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
        >
          Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            {[
              { path: "/impact", label: translations.impact },
              { path: "/about", label: translations.about },
              { path: "/research", label: translations.research },
              { path: "/testimonial", label: translations.testimonials },
              { path: "/faqs", label: translations.faqs },
              { path: "/conference", label: translations.conferences },
              { path: "#", label: translations.funds_grants },
            ].map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link ${
                    activeNav === item.path ? "text-warning" : "text-white"
                  }`}
                  to={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="nav-item d-flex align-items-center me-3">
              <span className="text-white me-2 nav-link">
                {translations.language}:
              </span>
              <select
                className="form-select bg-transparent text-white border-0 nav-link"
                value={language}
                onChange={handleLanguageChange}
                style={{
                  cursor: "pointer",
                  appearance: "none",
                  backgroundColor: "transparent",
                  color: "white",
                  width: "120px",
                  borderBottom: "1px solid white",
                }}
              >
                {Object.entries(languageOptions).map(([lang, label]) => (
                  <option
                    key={lang}
                    style={{ backgroundColor: "black", color: "white" }}
                    value={lang}
                  >
                    {label}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
