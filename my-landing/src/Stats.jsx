import React, { useState, useEffect } from "react";
import { TrendingUp, BarChart } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stats.css"
const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  },);

  return (
    <div className="container px-3 py-3 mx-auto">
      <div
        className={`row g-4 ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity duration-700`}
      >
        {/* Yearly Growth Card */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-success p-4 rounded position-relative overflow-hidden scale-on-hover shadow-lg">
            <div className="position-relative z-1">
              <div className="text-white">
                <h2 className="fs-6 fw-bold mb-2 group-hover-ms-1">
                  YEARLY GROWTH IN
                </h2>
                <h3 className="fs-6 mb-2 group-hover-ms-1">
                  AFRICAN RESEARCH
                </h3>
                <h3 className="fs-6 mb-4 group-hover-ms-1">
                  PUBLICATIONS
                </h3>
              </div>
              <div className="d-flex align-items-end gap-2 mt-4 scale-on-group-hover">
                <div className="fs-1 fw-bold text-white leading-none">73</div>
                <div className="fs-3 fw-bold text-white leading-none mb-2">
                  %
                </div>
              </div>
              <div className="mt-4 text-white-50 small group-hover-ms-1">
                Year-over-Year Growth 2024-2025
              </div>
            </div>
            <div className="position-absolute top-0 end-0 w-25 h-25 opacity-10 scale-on-group-hover-110 rotate-on-group-hover">
              <TrendingUp className="w-100 h-100" />
            </div>
          </div>
        </div>

        {/* Quarterly Growth Chart */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="bg-white rounded p-4 border border-success scale-on-hover shadow-lg">
            <div className="text-primary mb-4">
              <h2 className="fs-6 fw-bold group-hover-ms-1">
                PUBLICATION GROWTH
              </h2>
              <div className="text-warning fw-bold mt-2 group-hover-ms-1">
                Q1 2025: ALL-TIME HIGH
              </div>
            </div>
            <div className="position-relative mt-6" style={{ height: "180px" }}>
              <svg
                className="w-100 h-100"
                viewBox="0 0 460 250"
                preserveAspectRatio="none"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={`grid-${i}`}
                    x1="40"
                    y1={50 + i * 40}
                    x2="420"
                    y2={50 + i * 40}
                    stroke="#e5e7eb"
                    strokeWidth="1"
                    strokeDasharray="4"
                    className="transition-opacity duration-300 opacity-50"
                  />
                ))}

                <path
                  d="M 50,180 L 140,150 L 230,120 L 320,90 L 410,40"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-all duration-500"
                  style={{
                    strokeDasharray: "1000",
                    strokeDashoffset: isVisible ? "0" : "1000",
                  }}
                />

                {[
                  { x: 50, y: 180, value: 250 },
                  { x: 140, y: 150, value: 285 },
                  { x: 230, y: 120, value: 320 },
                  { x: 320, y: 90, value: 345 },
                  { x: 410, y: 40, value: 377 },
                ].map((point, i) => (
                  <g
                    key={`point-${i}`}
                    className="scale-on-group-hover-110"
                  >
                    <circle
                      cx={point.x}
                      cy={point.y}
                      r="6"
                      fill="#4ade80"
                      stroke="white"
                      strokeWidth="2"
                      className="group-hover-r-8"
                    />
                    <text
                      x={point.x}
                      y={point.y - 15}
                      textAnchor="middle"
                      className="small fw-bold text-warning group-hover-fw-bolder"
                    >
                      {point.value}
                    </text>
                  </g>
                ))}

                {["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025"].map(
                  (label, i) => (
                    <text
                      key={`label-${i}`}
                      x={50 + i * 90}
                      y="220"
                      textAnchor="middle"
                      className="small text-success group-hover-translate-y-1"
                    >
                      {label}
                    </text>
                  )
                )}
              </svg>
            </div>
          </div>
        </div>

        {/* Research Metrics */}
        <div className="col-12 col-lg-4">
          <div className="row g-4">
            {/* Academic Growth Stats */}
            <div className="col-12">
              <div className="bg-white p-4 rounded border border-success scale-on-hover shadow-lg">
                <h3 className="text-primary fs-6 fw-bold mb-3 group-hover-ms-1">
                  RESEARCH METRICS
                </h3>
                <div className="mb-3">
                  <div className="hover-ms-1">
                    <div className="d-flex justify-content-between small mb-1">
                      <span className="text-primary fw-semibold">
                        High Impact Publications
                      </span>
                      <span className="text-warning fw-bold">73%</span>
                    </div>
                    <div className="progress" style={{ height: "12px" }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: isVisible ? "73%" : "0%" }}
                        aria-valuenow="73"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="hover-ms-1">
                    <div className="d-flex justify-content-between small mb-1">
                      <span className="text-primary fw-semibold">
                        Peer-Reviewed Articles
                      </span>
                      <span className="text-warning fw-bold">85%</span>
                    </div>
                    <div className="progress" style={{ height: "12px" }}>
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: isVisible ? "85%" : "0%" }}
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="col-12">
              <div className="bg-success p-4 rounded scale-on-hover shadow-lg">
                <div className="mb-3">
                  <div className="hover-ms-1">
                    <div className="fs-5 fw-bold text-white mb-1">76%</div>
                    <div className="small text-white">CITATION GROWTH</div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: isVisible ? "76%" : "0%" }}
                        aria-valuenow="76"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="hover-ms-1">
                    <div className="fs-5 fw-bold text-white mb-1">73%</div>
                    <div className="small text-white">
                      INTERNATIONAL COLLABORATION
                    </div>
                    <div className="progress" style={{ height: "8px" }}>
                      <div
                        className="progress-bar bg-white"
                        role="progressbar"
                        style={{ width: isVisible ? "73%" : "0%" }}
                        aria-valuenow="73"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Total Publications Overview */}
        <div className="col-12 col-md-12 col-lg-8">
          <div className="bg-success p-4 rounded scale-on-hover shadow-lg">
            <div className="d-flex flex-column flex-lg-row align-items-lg-center justify-content-between gap-4">
              <div>
                <h2 className="text-white fs-6 mb-2 group-hover-ms-1">
                  TOTAL PUBLISHED
                </h2>
                <div className="text-white fs-1 fw-bold d-flex align-items-baseline gap-2 scale-on-group-hover">
                  2.3K
                  <span className="small fw-normal opacity-90">
                    RESEARCH PAPERS
                  </span>
                </div>
                <div className="mt-4 row g-4">
                  <div className="col-6 hover-ms-1">
                    <div className="text-white-50 small">Monthly Growth</div>
                    <div className="text-white fs-5 fw-bold">+12.5%</div>
                  </div>
                  <div className="col-6 hover-ms-1">
                    <div className="text-white-50 small">Year-over-Year</div>
                    <div className="text-white fs-5 fw-bold">+73%</div>
                  </div>
                </div>
              </div>
              <div className="rotate-on-group-hover">
                <div className="position-absolute top-0 bottom-0 start-0 end-0 bg-white bg-opacity-10 rounded-circle"></div>
                <BarChart className="text-white w-25 h-25 position-relative z-1" style={{ width: '48px', height: '48px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;