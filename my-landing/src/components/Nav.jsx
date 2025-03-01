import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: scrolled || dropdownOpen ? "#6eb444" : "transparent",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <img alt="AGRA Logo" src="/logo.png" width="100" height="auto" />
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
                <a className="nav-link text-white" href="#">
                  Our Impact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Research
                </a>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/map">
                  Map
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white" to="/testimonial">
                  Testimonials
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-white"
                  href="#"
                  onClick={toggleDropdown}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span className="fw-bold">What we do</span>
                  <FontAwesomeIcon icon={faPlus} className="text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {dropdownOpen && (
        <div
          className="dropdown-menu show w-100"
          style={{
            position: "fixed",
            top: "44px", // Move dropdown further down
            left: "0",
            backgroundColor: "#6eb444",
            borderTop: "4px solid white",
            borderRadius: "0",
            padding: "20px",
            // zIndex: 1050, // Ensure it stays on top
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h6 className="text-white">Thematic Areas</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Seed Systems
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Sustainable Farming
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="text-white">Projects</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Climate Resilience
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Food Security
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h6 className="text-white">More</h6>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Reports & Publications
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Contact Us
                    </a>
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
