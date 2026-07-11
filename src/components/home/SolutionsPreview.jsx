import React from "react";
import { Home, Building2, Factory, Hospital, Hotel, Radio } from "lucide-react";
import "./SolutionsPreview.css";

const solutions = [
  {
    icon: <Home size={32} strokeWidth={1.5} />,
    title: "Residential Connectivity",
    description: "Enhance indoor mobile signal strength for villas, apartments, gated communities, and high-rise residences with reliable 4G & 5G coverage.",
  },
  {
    icon: <Building2 size={32} strokeWidth={1.5} />,
    title: "Commercial Solutions",
    description: "Deliver seamless wireless connectivity across office buildings, IT parks, shopping malls, and business centres for uninterrupted communication.",
  },
  {
    icon: <Factory size={32} strokeWidth={1.5} />,
    title: "Industrial Infrastructure",
    description: "High-performance RF engineering and signal enhancement solutions designed for factories, warehouses, manufacturing plants, and logistics hubs.",
  },
  {
    icon: <Hospital size={32} strokeWidth={1.5} />,
    title: "Healthcare Networks",
    description: "Ensure mission-critical mobile coverage for hospitals, clinics, diagnostic centres, and healthcare campuses where reliable communication is essential.",
  },
  {
    icon: <Hotel size={32} strokeWidth={1.5} />,
    title: "Hospitality Coverage",
    description: "Provide uninterrupted mobile connectivity for hotels, resorts, convention centres, and luxury hospitality environments to enhance guest experience.",
  },
  {
    icon: <Radio size={32} strokeWidth={1.5} />,
    title: "RF Engineering & DAS",
    description: "Comprehensive RF site surveys, Distributed Antenna Systems (DAS), wireless network planning, and enterprise-grade coverage optimization.",
  },
];

const SolutionsPreview = () => {
  return (
    <section className="solutions-preview">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Our Solutions</span>
          <h2 className="section-title">
            Intelligent wireless connectivity
            <span className="section-title-accent"> engineered for every industry</span>
          </h2>
          <p className="section-description">
            Futuremax Technology delivers end-to-end wireless connectivity solutions that eliminate 
            mobile signal dead zones, optimize network performance, and provide reliable communication 
            across residential, commercial, industrial, healthcare, hospitality, and enterprise environments.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div className="solution-card" key={index}>
              <div className="solution-card-icon">
                {item.icon}
              </div>
              <h3 className="solution-card-title">{item.title}</h3>
              <p className="solution-card-desc">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="section-cta">
          <a href="/solutions" className="btn">
            Explore All Solutions
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;