import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { ArrowRight, Zap, Shield, Wrench, Radio } from "lucide-react";
import "./Impact.css";

const stats = [
  {
    number: 4,
    suffix: "G/5G",
    title: "Future-Ready Connectivity",
    description: "Wireless solutions designed to support modern 4G LTE and 5G mobile networks across diverse environments.",
    icon: <Radio size={24} strokeWidth={1.5} />,
    color: "#1AA64C",
  },
  {
    number: 360,
    suffix: "°",
    title: "End-to-End Engineering",
    description: "From RF site surveys and solution design to installation, optimization, and long-term technical support.",
    icon: <Wrench size={24} strokeWidth={1.5} />,
    color: "#0857A1",
  },
  {
    number: 24,
    suffix: "/7",
    title: "Technical Assistance",
    description: "Responsive technical support and maintenance services to ensure reliable network performance.",
    icon: <Shield size={24} strokeWidth={1.5} />,
    color: "#1AA64C",
  },
  {
    number: 100,
    suffix: "%",
    title: "Customized Solutions",
    description: "Every deployment is engineered specifically for the site's coverage requirements and operational needs.",
    icon: <Zap size={24} strokeWidth={1.5} />,
    color: "#0857A1",
  },
];

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="impact-section" ref={sectionRef}>
      {/* Background */}
      <div className="impact-bg">
        <div className="impact-bg-orb impact-bg-orb-1" />
        <div className="impact-bg-orb impact-bg-orb-2" />
        <div className="impact-bg-grid" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Why Futuremax</span>
          <h2 className="section-title">
            Engineering reliable wireless
            <span className="section-title-accent"> connectivity with precision</span>
          </h2>
          <p className="section-description">
            Futuremax Technology combines RF engineering expertise, advanced wireless 
            technologies, and professional project execution to deliver reliable mobile 
            coverage solutions for every environment.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="impact-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`impact-card ${isVisible ? 'animate' : ''}`}
              style={{ 
                '--delay': `${index * 0.12}s`,
                '--card-color': item.color,
              }}
            >
              <div className="impact-card-header">
                <div className="impact-card-icon">
                  {item.icon}
                </div>
                <div className="impact-card-number">
                  <span className="impact-number-line" />
             <h3>
  {item.number}
  <span className="impact-suffix">{item.suffix}</span>
</h3>
                </div>
              </div>
              <h4 className="impact-card-title">{item.title}</h4>
              <p className="impact-card-desc">{item.description}</p>
              <div className="impact-card-line" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`impact-cta ${isVisible ? 'animate' : ''}`}>
          <div className="impact-cta-content">
            <div className="impact-cta-text">
              <h3>Ready to eliminate dead zones?</h3>
              <p>Let our RF engineers design the perfect connectivity solution for your space.</p>
            </div>
            <a href="/about" className="btn">
              <span>Discover Futuremax</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;