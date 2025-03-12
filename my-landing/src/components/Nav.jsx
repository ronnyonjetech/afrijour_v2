import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const toggleDropdown = (e) => {
  //   e.preventDefault();
  //   setDropdownOpen(!dropdownOpen);
  // };

  return (
    <>
      {/* #6eb444 */}
      {/* <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: scrolled || dropdownOpen ? "#08444c" : "transparent",
          transition: "background-color 0.3s ease-in-out",
        }}
      > */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor:
            scrolled || dropdownOpen ? "rgba(8, 68, 76, 0.6)" : "transparent",
          backdropFilter: scrolled || dropdownOpen ? "blur(6px)" : "none", // Only apply blur when scrolled
          boxShadow: scrolled ? "0 4px 6px rgba(0, 0, 0, 0.05)" : "none", // Optional subtle shadow when scrolled
          transition:
            "background-color 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
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
            <li className="nav-item">
                {/* <a className="nav-link text-white" href="#">
                  Our Impact
                </a> */}
                 <Link className="nav-link text-white" to="/impact">
                  Our Impact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/map">
                  Explore
                </Link>
              </li>
              
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Research
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/testimonial">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/faqs">
                  Faqs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
