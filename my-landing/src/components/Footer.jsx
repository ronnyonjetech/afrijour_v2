import React from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer_area section_padding_130_0">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-12 col-sm-6 col-lg-4">
            <div className="single-footer-widget section_padding_0_130">
              <div className="footer-logo mb-3"></div>
              <p>
                Appland is completely creative, lightweight, clean app landing
                page.
              </p>
              <div className="copywrite-text mb-5">
                <p className="mb-0">
                  Made with <i className="lni lni-heart mr-1"></i> by
                  <a
                    className="ml-1"
                    href="https://wrapbootstrap.com/user/DesigningWorld"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Designing World
                  </a>
                </p>
              </div>

              <div className="footer_social_area">
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>

                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a
                  href="#"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="YouTube"
                >
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">About</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Corporate Sale</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Policy</a>
                  </li>
                  <li>
                    <a href="#">Community</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Support</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Help &amp; Support</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-12 col-sm-6 col-lg">
            <div className="single-footer-widget section_padding_0_130">
              <h5 className="widget-title">Contact</h5>
              <div className="footer_menu">
                <ul>
                  <li>
                    <a href="#">Call Centre</a>
                  </li>
                  <li>
                    <a href="#">Email Us</a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
