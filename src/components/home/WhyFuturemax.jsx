import React, { useEffect, useRef, useState } from "react";
import { MapPinned, Radio, Cpu, Building2, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import "./WhyFuturemax.css";

const features = [
  {
    icon: <MapPinned size={28} strokeWidth={1.5} />,
    title: "Professional RF Site Survey",
    desc: "Every project begins with a detailed RF site survey and signal analysis to design the most effective wireless coverage solution.",
    color: "#1AA64C",
  },
  {
    icon: <Radio size={28} strokeWidth={1.5} />,
    title: "RF Engineering Expertise",
    desc: "Our experienced engineers design and deploy optimized mobile signal enhancement and Distributed Antenna System (DAS) solutions.",
    color: "#0857A1",
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "4G & 5G Ready Solutions",
    desc: "Future-ready wireless infrastructure supporting multi-operator 4G LTE and 5G networks for seamless connectivity.",
    color: "#1AA64C",
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "Enterprise Connectivity",
    desc: "Scalable wireless solutions for commercial buildings, hospitals, hotels, industries, educational institutions, and residential communities.",
    color: "#0857A1",
  },
  {
    icon: <Wrench size={28} strokeWidth={1.5} />,
    title: "End-to-End Project Delivery",
    desc: "From consultation and RF planning to installation, testing, optimization, and annual maintenance, we manage every stage of the project.",
    color: "#1AA64C",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "Reliable Performance & Support",
    desc: "High-quality equipment, professional installation, and responsive technical support ensure long-term reliability and customer satisfaction.",
    color: "#0857A1",
  },
];

const stats = [
  { value: "5,000+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "24/7", label: "Technical Support" },
];

const WhyFuturemax = () => {
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
    <section className="why-futuremax" ref={sectionRef}>
      {/* Background Animation */}
      <div className="why-bg">
        <div className="why-bg-orb why-bg-orb-1" />
        <div className="why-bg-orb why-bg-orb-2" />
        <div className="why-bg-grid" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Why Futuremax Technology</span>
          <h2 className="section-title">
            Engineering reliable wireless
            <span className="section-title-accent"> connectivity with precision</span>
          </h2>
          <p className="section-description">
            Futuremax Technology delivers intelligent wireless connectivity solutions through 
            expert RF engineering, professional deployment, and customer-focused support. We help 
            businesses, industries, institutions, and residential communities eliminate signal dead 
            zones and achieve seamless communication.
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`stats-bar ${isVisible ? 'animate' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="stats-item">
              <span className="stats-value">{stat.value}</span>
              <span className="stats-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="why-grid">
          {features.map((item, index) => (
            <div 
              className={`why-card ${isVisible ? 'animate' : ''}`} 
              key={index}
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--card-color': item.color,
              }}
            >
              <div className="why-card-number">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="why-card-icon">
                {item.icon}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
              <div className="why-card-line" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`why-cta ${isVisible ? 'animate' : ''}`}>
          <div className="why-cta-content">
            <h3 className="why-cta-title">Ready to eliminate dead zones?</h3>
            <p className="why-cta-desc">Let our RF engineers design the perfect solution for your space.</p>
            <a href="/contact" className="btn">
              <span>Get Free Site Survey</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFuturemax;