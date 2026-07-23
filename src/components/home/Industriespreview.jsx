import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Home, Hotel, Stethoscope, Building2, GraduationCap, Factory } from "lucide-react";
import "./IndustriesPreview.css";

import residentialImg from "../../assets/residential.png";
import hotelImg from "../../assets/hotels.png";
import hospitalImg from "../../assets/healthcare.png";
import commercialImg from "../../assets/offices.png";
import educationImg from "../../assets/education.png";
import factoryImg from "../../assets/factries.png";

const ipwIndustries = [
  {
    icon: <Home size={22} strokeWidth={1.5} />,
    title: "Residential Communities",
    description: "Homes, apartments, villas & gated communities.",
    image: residentialImg,
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
  },
  {
    icon: <Hotel size={22} strokeWidth={1.5} />,
    title: "Hotels & Hospitality",
    description: "Hotels, resorts & convention centres.",
    image: hotelImg,
    accentColor: "#0A6FD4",
    bgLight: "#F0F7FF",
  },
  {
    icon: <Stethoscope size={22} strokeWidth={1.5} />,
    title: "Hospitals & Healthcare",
    description: "Hospitals, clinics & medical centres.",
    image: hospitalImg,
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
  },
  {
    icon: <Building2 size={22} strokeWidth={1.5} />,
    title: "Commercial Buildings",
    description: "Offices, IT parks & business centres.",
    image: commercialImg,
    accentColor: "#7C3AED",
    bgLight: "#F5F3FF",
  },
  {
    icon: <GraduationCap size={22} strokeWidth={1.5} />,
    title: "Education & Campuses",
    description: "Schools, colleges & universities.",
    image: educationImg,
    accentColor: "#EA580C",
    bgLight: "#FFF7ED",
  },
  {
    icon: <Factory size={22} strokeWidth={1.5} />,
    title: "Industrial & Manufacturing",
    description: "Factories, warehouses & plants.",
    image: factoryImg,
    accentColor: "#DC2626",
    bgLight: "#FEF2F2",
  },
];

const IndustriesPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ipw-section" ref={sectionRef}>
      <div className="ipw-container">
        <div className={`ipw-header ${isVisible ? "visible" : ""}`}>
          <div className="ipw-header-left">
            <span className="ipw-tag">Industries We Serve</span>
            <h2 className="ipw-title">
              Solutions for Every
              <span className="ipw-accent"> Industry & Building Type</span>
            </h2>
          </div>
          <a href="/industries" className="ipw-view-all">
            View All Industries
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="ipw-grid">
          {ipwIndustries.map((industry, index) => (
            <div
              key={industry.title}
              className={`ipw-card ${isVisible ? "visible" : ""}`}
              style={{
                "--ipw-accent": industry.accentColor,
                transitionDelay: isVisible ? `${index * 0.07}s` : "0s",
              }}
            >
              <div className="ipw-card-image-wrap">
                <img src={industry.image} alt={industry.title} className="ipw-card-image" />
                <div className="ipw-card-image-shade" />
                <div
                  className="ipw-card-icon"
                  style={{ background: industry.bgLight, color: industry.accentColor }}
                >
                  {industry.icon}
                </div>
              </div>
              <div className="ipw-card-body">
                <h3 className="ipw-card-title">{industry.title}</h3>
                <p className="ipw-card-desc">{industry.description}</p>
                <a href="/industries" className="ipw-card-link" style={{ color: industry.accentColor }}>
                  Explore Industry
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;