import "bootstrap/dist/css/bootstrap.min.css";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";

const dummyConferences = [
  {
    title: "Tech Innovations Summit 2025",
    description: "A premier event showcasing the latest in technology and innovation.",
    startDate: "2025-06-15",
    endDate: "2025-06-17",
    location: "Nairobi, Kenya",
    link: "https://example.com/tech-innovations-summit-2025",
    status: "open"
  },
  {
    title: "Global AI Conference",
    description: "Explore the future of AI with industry leaders and experts.",
    startDate: "2025-08-10",
    endDate: "2025-08-12",
    location: "San Francisco, USA",
    link: "https://example.com/global-ai-conference",
    status: "closed"
  },
  {
    title: "Renewable Energy Expo 2025",
    description: "Discover the latest trends and advancements in renewable energy.",
    startDate: "2025-09-20",
    endDate: "2025-09-22",
    location: "Berlin, Germany",
    link: "https://example.com/renewable-energy-expo",
    status: "open"
  },
  {
    title: "Tech Innovations Summit 2025",
    description: "A premier event showcasing the latest in technology and innovation.",
    startDate: "2025-06-15",
    endDate: "2025-06-17",
    location: "Nairobi, Kenya",
    link: "https://example.com/tech-innovations-summit-2025",
    status: "open"
  },
  {
    title: "Global AI Conference",
    description: "Explore the future of AI with industry leaders and experts.",
    startDate: "2025-08-10",
    endDate: "2025-08-12",
    location: "San Francisco, USA",
    link: "https://example.com/global-ai-conference",
    status: "closed"
  },
  {
    title: "Renewable Energy Expo 2025",
    description: "Discover the latest trends and advancements in renewable energy.",
    startDate: "2025-09-20",
    endDate: "2025-09-22",
    location: "Berlin, Germany",
    link: "https://example.com/renewable-energy-expo",
    status: "open"
  }
];

export default function ConferenceCards() {
  return (
    <div className="container mt-4 mb-4">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 gy-4">
        {dummyConferences.map((conference, index) => (
          <div key={index} className="col mb-4">
            <a href={conference.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none d-block">
              <div className="card shadow-sm border-0" style={{ backgroundColor: "rgba(17, 53, 65, 0.05)" }}>
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title fw-bold fs-3" style={{ color: "rgb(17, 53, 65)" }}>
                      {conference.title}
                    </h5>
                    <span className="fs-4" style={{ color: conference.status === "open" ? "green" : "red" }}>
                      {conference.status === "open" ? <FaToggleOn /> : <FaToggleOff />} {conference.status.charAt(0).toUpperCase() + conference.status.slice(1)}
                    </span>
                  </div>
                  <p className="card-text fs-5" style={{ color: "rgba(17, 53, 65, 0.8)" }}>
                    {conference.description}
                  </p>
                  <p className="fw-semibold fs-6" style={{ color: "rgb(17, 53, 65)" }}>
                    <strong>Start Date:</strong> {conference.startDate}
                  </p>
                  <p className="fw-semibold fs-6" style={{ color: "rgb(17, 53, 65)" }}>
                    <strong>End Date:</strong> {conference.endDate}
                  </p>
                  <p className="fw-semibold fs-6" style={{ color: "rgb(17, 53, 65)" }}>
                    <strong>Location:</strong> {conference.location}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
