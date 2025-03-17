
// import React, { useContext, useEffect, useState, useRef } from "react";
// import "../css/footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   const { translations } = useContext(LanguageContext);
//   return (
//     <footer className="footer_area section_padding_130_0">
//       <div className="container">
//         <div className="row align-items-start">
         
//           <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column justify-content-center">
//             <div className="single-footer-widget">
//               <div className="footer-logo mb-3">
//                 <img
//                   src="/logo1.png"
//                   alt="hero-img"
//                   width={150}
//                   height={150}
//                   className="img-fluid rounded-circle"
//                 />
//               </div>
//               <p>
//                 Afrikajournal is a free online journal indexing platform that makes African journal visible
//               </p>
//               <div className="copywrite-text mb-5">
//                 <p className="mb-0">
//                   Made with <i className="lni lni-heart mr-1"></i> by
//                   <a
//                     className="ml-1"
//                     href="#"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     Afrikajournal
//                   </a>
//                 </p>
//               </div>

//               <div className="footer_social_area">
//                 <a
//                   href="#"
//                   data-toggle="tooltip"
//                   data-placement="top"
//                   title="Facebook"
//                 >
//                   <FontAwesomeIcon icon={faFacebook} size="2x" />
//                 </a>

//                 <a
//                   href="#"
//                   data-toggle="tooltip"
//                   data-placement="top"
//                   title="Twitter"
//                 >
//                   <FontAwesomeIcon icon={faTwitter} size="2x" />
//                 </a>
//                 <a
//                   href="#"
//                   data-toggle="tooltip"
//                   data-placement="top"
//                   title="YouTube"
//                 >
//                   <FontAwesomeIcon icon={faYoutube} size="2x" />
//                 </a>
//               </div>
//             </div>
//           </div>

         
//           <div className="col-12 col-sm-6 col-lg d-flex flex-column justify-content-start mt-4">
//             <div className="single-footer-widget">
//               <h5 className="widget-title">About</h5>
//               <div className="footer_menu">
//                 <ul>
//                   <li>
//                     <a href="#">About Us</a>
//                   </li>
//                   <li>
//                     <a href="#">Corporate Sale</a>
//                   </li>
//                   <li>
//                     <a href="#">Terms &amp; Policy</a>
//                   </li>
//                   <li>
//                     <a href="#">Community</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

         
//           <div className="col-12 col-sm-6 col-lg d-flex flex-column justify-content-start mt-4">
//             <div className="single-footer-widget">
//               <h5 className="widget-title">Support</h5>
//               <div className="footer_menu">
//                 <ul>
//                   <li>
//                     <a href="#">Help</a>
//                   </li>
//                   <li>
//                     <a href="#">Support</a>
//                   </li>
//                   <li>
//                     <a href="#">Privacy Policy</a>
//                   </li>
//                   <li>
//                     <a href="#">Terms &amp; Conditions</a>
//                   </li>
//                   <li>
//                     <a href="#">Help &amp; Support</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

         
//           <div className="col-12 col-sm-6 col-lg d-flex flex-column justify-content-start mt-4">
//             <div className="single-footer-widget">
//               <h5 className="widget-title">Contact</h5>
//               <div className="footer_menu">
//                 <ul>
//                   <li>
//                     <a href="#">Call Centre</a>
//                   </li>
//                   <li>
//                     <a href="#">Email Us</a>
//                   </li>
//                   <li>
//                     <a href="#">Terms &amp; Conditions</a>
//                   </li>
//                   <li>
//                     <a href="#">Help Center</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React, { useContext } from "react";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { LanguageContext } from "../contexts/LanguageContext";

const Footer = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <footer className="footer_area section_padding_130_0">
      <div className="container">
        <div className="row align-items-start">
          {/* About Section */}
          <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column justify-content-center">
            <div className="single-footer-widget">
              <div className="footer-logo mb-3">
                <img
                  src="/logo1.png"
                  alt="hero-img"
                  width={150}
                  height={150}
                  className="img-fluid rounded-circle"
                />
              </div>
              <p>{translations.description}</p>
              <div className="copywrite-text mb-5">
                <p className="mb-0">
                  {translations.madeWith} <i className="lni lni-heart mr-1"></i> {translations.by}
                  <a
                    className="ml-1"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Afrikajournal
                  </a>
                </p>
              </div>

              <div className="footer_social_area">
                <a href="#" title="Facebook">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="#" title="Twitter">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="#" title="YouTube">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="col-12 col-sm-6 col-lg d-flex flex-column justify-content-start mt-4">
            <div className="single-footer-widget">
              <h5 className="widget-title">{translations.about}</h5>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">{translations.aboutUs}</a></li>
                  <li><a href="#">{translations.corporateSale}</a></li>
                  <li><a href="#">{translations.termsPolicy}</a></li>
                  <li><a href="#">{translations.community}</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="col-12 col-sm-6 col-lg d-flex flex-column justify-content-start mt-4">
            <div className="single-footer-widget">
              <h5 className="widget-title">{translations.support}</h5>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">{translations.help}</a></li>
                  <li><a href="#">{translations.support}</a></li>
                  <li><a href="#">{translations.privacyPolicy}</a></li>
                  <li><a href="#">{translations.termsConditions}</a></li>
                  <li><a href="#">{translations.helpSupport}</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="col-12 col-sm-6 col-lg d-flex flex-column justify-content-start mt-4">
            <div className="single-footer-widget">
              <h5 className="widget-title">{translations.contact}</h5>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">{translations.callCentre}</a></li>
                  <li><a href="#">{translations.emailUs}</a></li>
                  <li><a href="#">{translations.termsConditions}</a></li>
                  <li><a href="#">{translations.helpCenter}</a></li>
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
