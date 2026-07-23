import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Home,
  Building2,
  Factory,
  Radio,
  Wrench,
  ShieldCheck,
  Globe,
} from "lucide-react";
import "./Impact.css";

const stats = [
  {
    number: 23,
    suffix: " dBm",
    title: "Residential Signal Booster",
    description:
      "High-performance i Booster solutions designed for homes, apartments, villas, retail stores, and small offices with reliable indoor mobile coverage.",
    icon: <Home size={24} strokeWidth={1.5} />,
    color: "#0755A3",
    bgLight: "#E8F1FA",
  },
  {
    number: 25,
    suffix: " dBm",
    title: "Commercial Connectivity",
    description:
      "Professional mobile signal boosters for hotels, hospitals, schools, colleges, commercial buildings, and hospitality environments.",
    icon: <Building2 size={24} strokeWidth={1.5} />,
    color: "#0A6FD4",
    bgLight: "#F0F7FF",
  },
  {
    number: 27,
    suffix: " dBm",
    title: "Enterprise Coverage",
    description:
      "Enterprise-grade wireless connectivity solutions for factories, warehouses, IT parks, airports, corporate offices, and industrial facilities.",
    icon: <Factory size={24} strokeWidth={1.5} />,
    color: "#19AB3F",
    bgLight: "#E8F7EA",
  },
  {
    number: 100,
    suffix: "%",
    title: "Customized RF Engineering",
    description:
      "Every deployment is planned through professional RF site surveys, coverage analysis, system design, installation, testing, and optimization.",
    icon: <Radio size={24} strokeWidth={1.5} />,
    color: "#7C3AED",
    bgLight: "#F5F3FF",
  },
];

const coreServices = [
  { icon: <Radio size={20} strokeWidth={1.5} />, label: "RF Site Survey" },
  { icon: <Home size={20} strokeWidth={1.5} />, label: "Mobile Signal Booster Solutions" },
  { icon: <Building2 size={20} strokeWidth={1.5} />, label: "Distributed Antenna Systems (DAS)" },
  { icon: <Wrench size={20} strokeWidth={1.5} />, label: "Professional Installation" },
  { icon: <ShieldCheck size={20} strokeWidth={1.5} />, label: "Annual Maintenance Contracts (AMC)" },
  { icon: <Globe size={20} strokeWidth={1.5} />, label: "Pan India Technical Support" },
];

const Impact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
    <section className="impact-section" ref={sectionRef}>
      {/* Background */}
      <div className="impact-bg">
        <div className="impact-bg-grid" />
        <div
          className="impact-bg-orb impact-bg-orb-1"
          style={{ transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.03}px)` }}
        />
        <div
          className="impact-bg-orb impact-bg-orb-2"
          style={{ transform: `translate(${-scrollY * 0.02}px, ${scrollY * 0.04}px)` }}
        />
        <div
          className="impact-bg-mouse-glow"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(7,85,163,0.03) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="impact-container">
        {/* Section Header */}
        <div
          className={`impact-header ${isVisible ? "visible" : ""}`}
          style={{ transform: `translateY(${scrollY * -0.02}px)` }}
        >
          <span className="impact-header-tag">Why Choose Futuremax</span>
          <h2 className="impact-header-title">
            Trusted RF Engineering &
            <span className="impact-header-accent"> Enterprise Wireless Solutions</span>
          </h2>
          <p className="impact-header-desc">
            Futuremax Technology specializes in Mobile Signal Boosters, RF Engineering,
            Distributed Antenna Systems (DAS), and enterprise wireless connectivity
            solutions. From residential homes to hospitals, hotels, educational campuses,
            commercial buildings, and industrial facilities, we deliver reliable indoor
            mobile coverage with professionally engineered solutions tailored to every project.
          </p>
        </div>

        {/* i Booster Stats Cards */}
        <div className="impact-grid">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`impact-card ${isVisible ? "visible" : ""}`}
              style={{
                '--card-color': item.color,
                '--card-bg': item.bgLight,
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {/* Card Icon */}
              <div className="impact-card-icon-wrap" style={{ background: item.bgLight, color: item.color }}>
                {item.icon}
              </div>

              {/* Number */}
              <div className="impact-card-number">
                <span className="impact-number" style={{ color: item.color }}>
                  {item.number}
                </span>
                <span className="impact-suffix">{item.suffix}</span>
              </div>

              {/* Content */}
              <h3 className="impact-card-title">{item.title}</h3>
              <p className="impact-card-desc">{item.description}</p>

              {/* Bottom Line */}
              <div className="impact-card-line" style={{ background: item.color }} />
            </div>
          ))}
        </div>

        {/* Core Services */}
        <div className={`impact-services ${isVisible ? "visible" : ""}`}>
          <div className="impact-services-grid">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="impact-service-item"
                style={{ transitionDelay: `${index * 0.06}s` }}
              >
                <div className="impact-service-icon">
                  {service.icon}
                </div>
                <span className="impact-service-label">{service.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
   
      </div>
    </section>
  );
};

export default Impact;