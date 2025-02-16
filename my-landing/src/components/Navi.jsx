import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
      {/* NAVBAR */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top"
        style={{
          backgroundColor: scrolled || dropdownOpen ? "#5ecf5e" : "transparent",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img
              alt="AGRA Logo"
              src="./AGRA - Sustainably Growing Africa&#39;s Food Systems_files/agralogo.png"
              width="150"
            />
          </a>
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

      {/* DROPDOWN MENU - Fixed below navbar */}
      {dropdownOpen && (
        <div
          className="dropdown-menu show w-100"
          style={{
            position: "fixed",
            top: "56px", // Stays right below navbar
            left: "0",
            backgroundColor: "#5ecf5e",
            borderTop: "3px solid white",
            padding: "20px",
            zIndex: 1050, // Ensures it stays above content
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
