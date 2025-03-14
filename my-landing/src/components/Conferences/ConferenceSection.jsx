import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import Swiper from "swiper";
import { Autoplay, Pagination } from "swiper/modules";
import { Calendar, Globe, MapPin, Users } from "lucide-react";
import "./Conference.css"

const ConferenceSection = () => {
  useEffect(() => {
    new Swiper(".progress-slide-carousel", {
      modules: [Autoplay, Pagination],
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".progress-slide-carousel .swiper-pagination",
        type: "progressbar",
      },
    });
  }, []);

  return (
    <div className="bg-light py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold text-primary">
            Conferences & Workshops
          </h1>
          <p className="text-secondary lead">
            Join the world's leading researchers and practitioners in shaping
            the future of climate health
          </p>
        </div>

        <div className="swiper progress-slide-carousel position-relative">
          <div className="swiper-wrapper">
            {[1, 2, 3].map((slide) => (
              <div className="swiper-slide px-3" key={slide}>
                <div className="card shadow-lg">
                  <div className="position-relative">
                    <img
                      src={`https://via.placeholder.com/600x300?text=Slide+${slide}`}
                      className="card-img-top"
                      alt={`Slide ${slide}`}
                    />
                    <div className="position-absolute bottom-0 start-0 bg-light p-2 rounded">
                      <span className="text-primary fw-semibold">Featured Event</span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Event Title {slide}</h5>
                    <ul className="list-unstyled">
                      <li className="d-flex align-items-center text-secondary">
                        <Calendar size={18} className="me-2 text-primary" />
                        March 3rd - 5th, 2025
                      </li>
                      <li className="d-flex align-items-center text-secondary">
                        <MapPin size={18} className="me-2 text-primary" />
                        Virtual & Global Hubs
                      </li>
                      <li className="d-flex align-items-center text-secondary">
                        <Users size={18} className="me-2 text-primary" />
                        5000+ Attendees Expected
                      </li>
                      <li className="d-flex align-items-center text-secondary">
                        <Globe size={18} className="me-2 text-primary" />
                        24 Time Zones Covered
                      </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        {[1, 2, 3].map((i) => (
                          <img
                            key={i}
                            src={`https://i.pravatar.cc/40?img=${i}`}
                            className="rounded-circle border border-light me-1"
                            alt={`Speaker ${i}`}
                          />
                        ))}
                        <span className="text-secondary small">+42 Speakers</span>
                      </div>
                      <a
                        href="#"
                        className="btn btn-success btn-sm shadow-sm"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination position-absolute w-50 start-50 translate-middle-x"></div>
        </div>
      </div>
    </div>
  );
};

export default ConferenceSection;
