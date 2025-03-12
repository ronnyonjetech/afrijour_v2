
import React, { useEffect, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsJournals } from "react-icons/bs";
import { FaLaptop, FaClock, FaFile } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { LuListOrdered } from "react-icons/lu";

const statisticsData = [
  { id: 1, icon: <BsJournals />, value: 2004, label: "Journals" },
  { id: 2, icon: <FaLaptop />, value: 377, label: "Thematic Areas" },
  { id: 3, icon: <FaClock />, value: 54, label: "Countries" },
  { id: 4, icon: <IoLanguage />, value: 64, label: "Languages" },
  { id: 5, icon: <LuListOrdered />, value: 7692, label: "Volumes" },
  { id: 6, icon: <FaFile />, value: 14753, label: "Articles" },
  { id: 7, icon: <FaLaptop />, value: 12, label: "Abstracts" },
  { id: 8, icon: <FaLaptop />, value: 12, label: "Publishers" },
];

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = endValue / 100;
          const duration = 1000;
          const stepTime = Math.abs(Math.floor(duration / 100));

          const timer = setInterval(() => {
            start += increment;
            if (start >= endValue) {
              clearInterval(timer);
              setCount(endValue);
            } else {
              setCount(Math.ceil(start));
            }
          }, stepTime);

          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [endValue]);

  return <h2 ref={ref} className="fw-bold">{count}</h2>;
};

const StatisticsSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleItems((prev) => {
          const newSet = new Set(prev);
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              newSet.add(entry.target.dataset.id);
            }
          });
          return newSet;
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".stats-item").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-5 bg-light text-center">
      <Container fluid>
        <Row className="justify-content-center">
          {statisticsData.map(({ id, icon, value, label }) => (
            <Col key={id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <div
                data-id={id}
                className={`stats-item transition-opacity ${
                  visibleItems.has(id.toString()) ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="fs-1 text-primary mb-2">{icon}</div>
                <Counter endValue={value} />
                
                {/* Fix: Centered Line */}
                <div className="my-2 bg-primary mx-auto d-inline-block" style={{ width: "50px", height: "4px" }}></div>
                
                <p className="fw-semibold text-secondary">{label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StatisticsSection;

