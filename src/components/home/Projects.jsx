import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, MapPin, Building2 } from "lucide-react";
import "./Projects.css";

const projects = [
  {
    category: "Hospitality",
    title: "Hotel & Resort Wireless Coverage",
    description: "Designed reliable indoor mobile coverage solutions for hotels and resorts, ensuring uninterrupted voice and data connectivity across guest rooms, lobbies, restaurants, banquet halls, and recreational spaces.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    stats: "50+ Hotels",
    location: "Pan India",
  },
  {
    category: "Healthcare",
    title: "Hospital Communication Infrastructure",
    description: "Implemented RF-engineered mobile signal enhancement systems for hospitals and healthcare facilities to eliminate dead zones and improve communication across emergency departments, ICUs, operation theatres, and patient wards.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    stats: "30+ Hospitals",
    location: "Metro Cities",
  },
  {
    category: "Corporate",
    title: "Enterprise Office Connectivity",
    description: "Delivered enterprise-grade wireless connectivity for corporate offices, IT parks, and commercial buildings, ensuring seamless mobile coverage across workspaces, meeting rooms, and business floors.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    stats: "100+ Offices",
    location: "15 Cities",
  },
  {
    category: "Industrial",
    title: "Factory & Warehouse Signal Enhancement",
    description: "Designed robust RF infrastructure for manufacturing plants, warehouses, and logistics centres, enabling reliable communication in large industrial environments.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    stats: "40+ Facilities",
    location: "Industrial Zones",
  },
  {
    category: "Residential",
    title: "Residential Mobile Coverage Solutions",
    description: "Enhanced indoor mobile signal strength for villas, apartments, and gated communities by eliminating weak signal areas and improving overall network performance.",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80",
    stats: "200+ Projects",
    location: "Premium Locations",
  },
  {
    category: "Education",
    title: "Campus Connectivity Solutions",
    description: "Provided wireless coverage solutions for schools, colleges, and universities, supporting uninterrupted communication across classrooms, libraries, auditoriums, and administrative blocks.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    stats: "25+ Campuses",
    location: "Major Cities",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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
    <section className="projects-section" ref={sectionRef}>
      {/* Background */}
      <div className="projects-bg">
        <div className="projects-bg-orb projects-bg-orb-1" />
        <div className="projects-bg-orb projects-bg-orb-2" />
        <div className="projects-bg-grid" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">
            Proven connectivity solutions
            <span className="section-title-accent"> across diverse industries</span>
          </h2>
          <p className="section-description">
            Futuremax Technology delivers customized RF engineering and wireless connectivity 
            solutions across hospitality, healthcare, commercial, industrial, educational, and 
            residential environments. Every deployment is designed to maximize coverage, improve 
            communication, and ensure long-term reliability.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-card ${isVisible ? 'animate' : ''} ${hoveredIndex === index ? 'hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''}`}
              key={index}
              style={{ '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Image */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/F8FAFC/0857A1?text=${encodeURIComponent(project.category)}`;
                  }}
                />
                <div className="project-image-overlay" />
                <span className="project-category">{project.category}</span>
                <div className="project-image-stats">
                  <span className="project-stats-value">{project.stats}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="project-content">
                <div className="project-content-header">
                  <div className="project-location">
                    <MapPin size={14} strokeWidth={1.5} />
                    <span>{project.location}</span>
                  </div>
                  <div className="project-icon">
                    <Building2 size={16} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <a href="/projects" className="project-link">
                  <span>View Case Study</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Hover Gradient Border */}
              <div className="project-card-border" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`projects-cta ${isVisible ? 'animate' : ''}`}>
          <a href="/projects" className="btn">
            <span>View All Case Studies</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;