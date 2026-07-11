import React, { useEffect, useRef, useState } from "react";
import { Search, Radio, PenTool, Wrench, Gauge, Headphones, ArrowRight } from "lucide-react";
import "./Process.css";

const process = [
  {
    id: "01",
    icon: <Search size={24} strokeWidth={1.5} />,
    title: "Site Survey & Assessment",
    description: "Our engineers conduct a comprehensive on-site RF survey to evaluate signal strength, identify dead zones, analyze building structures, and understand customer requirements before recommending the optimal solution.",
    color: "#1AA64C",
  },
  {
    id: "02",
    icon: <Radio size={24} strokeWidth={1.5} />,
    title: "RF Planning & Analysis",
    description: "Using advanced RF engineering techniques, we analyze network frequencies, operator coverage, interference levels, and propagation characteristics to develop an efficient wireless coverage strategy.",
    color: "#0857A1",
  },
  {
    id: "03",
    icon: <PenTool size={24} strokeWidth={1.5} />,
    title: "Solution Design",
    description: "We design a customized connectivity solution by selecting the right signal boosters, Distributed Antenna Systems (DAS), antennas, RF components, and cable routing based on the site layout.",
    color: "#1AA64C",
  },
  {
    id: "04",
    icon: <Wrench size={24} strokeWidth={1.5} />,
    title: "Professional Installation",
    description: "Our certified installation team deploys the complete wireless infrastructure with precision, ensuring compliance with industry standards and minimal disruption to ongoing operations.",
    color: "#0857A1",
  },
  {
    id: "05",
    icon: <Gauge size={24} strokeWidth={1.5} />,
    title: "Testing & Optimization",
    description: "After installation, we perform detailed coverage testing, signal measurements, and system optimization to ensure maximum performance, seamless connectivity, and consistent mobile coverage.",
    color: "#1AA64C",
  },
  {
    id: "06",
    icon: <Headphones size={24} strokeWidth={1.5} />,
    title: "Support & Maintenance",
    description: "Futuremax provides post-installation technical support, preventive maintenance, troubleshooting, and Annual Maintenance Contracts (AMC) to ensure reliable long-term performance.",
    color: "#0857A1",
  },
];

const Process = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev < process.length - 1 ? prev + 1 : prev));
      }, 400);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section className="process-section" ref={sectionRef}>
      {/* Background */}
      <div className="process-bg">
        <div className="process-bg-orb process-bg-orb-1" />
        <div className="process-bg-orb process-bg-orb-2" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Our Engineering Process</span>
          <h2 className="section-title">
            From RF survey to reliable
            <span className="section-title-accent"> wireless connectivity</span>
          </h2>
          <p className="section-description">
            Every Futuremax project follows a structured engineering methodology that ensures 
            precise planning, professional deployment, and dependable wireless connectivity 
            for every environment.
          </p>
        </div>

        {/* Timeline Progress */}
        <div className={`process-timeline ${isVisible ? 'animate' : ''}`}>
          <div className="timeline-track">
            <div 
              className="timeline-progress" 
              style={{ width: `${((activeStep + 1) / process.length) * 100}%` }}
            />
            {process.map((item, index) => (
              <div 
                key={item.id}
                className={`timeline-dot ${index <= activeStep ? 'active' : ''}`}
                style={{ left: `${(index / (process.length - 1)) * 100}%` }}
              >
                <span className="timeline-dot-number">{item.id}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process Grid */}
        <div className="process-grid">
          {process.map((item, index) => (
            <div 
              className={`process-card ${isVisible ? 'animate' : ''} ${index <= activeStep ? 'active' : ''}`} 
              key={item.id}
              style={{ 
                '--delay': `${index * 0.15}s`,
                '--card-color': item.color,
              }}
            >
              {/* Connector Line */}
              {index < process.length - 1 && (
                <div className={`process-connector ${index < activeStep ? 'active' : ''}`} />
              )}

              <div className="process-card-header">
                <span className="process-step">Step {item.id}</span>
                <div className="process-icon">
                  {item.icon}
                </div>
              </div>
              
              <h3 className="process-title">{item.title}</h3>
              <p className="process-desc">{item.description}</p>
              
              <div className="process-card-footer">
                <div className="process-status">
                  <div className={`process-status-dot ${index <= activeStep ? 'active' : ''}`} />
                  <span>{index <= activeStep ? 'Completed' : 'Pending'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`process-cta ${isVisible ? 'animate' : ''}`}>
          <p className="process-cta-text">Ready to start your connectivity project?</p>
          <a href="/contact" className="btn">
            <span>Begin Your Site Survey</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;