import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Shield, Zap, Award } from "lucide-react";
import "./Industries.css";

const industries = [
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    title: "Residential Communities",
    description:
      "Reliable mobile signal booster solutions for homes, villas, apartments, gated communities, and residential towers.",
    features: ["Homes & Villas", "Apartments", "23 dBm Coverage"],
    productLink: "i Booster 23 dBm",
    accentColor: "#0755A3",
  },
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    title: "Hotels & Hospitality",
    description:
      "Uninterrupted mobile connectivity for hotels, resorts, convention centres, and luxury hospitality spaces.",
    features: ["Hotels", "Resorts", "Guest Experience"],
    productLink: "i Booster 25 dBm",
    accentColor: "#0A6FD4",
  },
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    title: "Hospitals & Healthcare",
    description:
      "Professional RF engineering solutions for hospitals, clinics, and healthcare campuses.",
    features: ["Hospitals", "Medical Centres", "Reliable Coverage"],
    productLink: "i Booster 25 dBm",
    accentColor: "#19AB3F",
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Commercial Buildings",
    description:
      "Enterprise mobile signal boosters for office buildings, IT parks, shopping malls, and business centres.",
    features: ["Office Spaces", "IT Parks", "Business Centres"],
    productLink: "i Booster 25 dBm",
    accentColor: "#7C3AED",
  },
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    title: "Education & Campuses",
    description:
      "Campus-wide wireless connectivity for schools, colleges, and universities with scalable DAS solutions.",
    features: ["Schools", "Colleges", "Universities"],
    productLink: "DAS Solutions",
    accentColor: "#EA580C",
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    title: "Industrial & Manufacturing",
    description:
      "High-capacity 27 dBm enterprise boosters for factories, warehouses, and industrial facilities.",
    features: ["Factories", "Warehouses", "Industrial Plants"],
    productLink: "i Booster 27 dBm",
    accentColor: "#DC2626",
  },
  {
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109bb05?w=600&q=80",
    title: "Airports & Public Infrastructure",
    description:
      "Advanced RF engineering for airports, railway stations, government buildings, and public projects.",
    features: ["Airports", "Government", "Public Projects"],
    productLink: "Enterprise Solutions",
    accentColor: "#0891B2",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    title: "Corporate Campuses",
    description:
      "End-to-end mobile signal enhancement for corporate headquarters and business parks.",
    features: ["Corporate Offices", "Business Parks", "Enterprise Ready"],
    productLink: "i Booster 27 dBm",
    accentColor: "#4F46E5",
  },
];

const Industries = () => {
  const [indScrollY, setIndScrollY] = useState(0);
  const [indIsPaused, setIndIsPaused] = useState(false);
  const [indHoveredCard, setIndHoveredCard] = useState(null);
  const indSectionRef = useRef(null);

  useEffect(() => {
    const handleIndScroll = () => setIndScrollY(window.scrollY);
    window.addEventListener("scroll", handleIndScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleIndScroll);
  }, []);

  return (
    <section className="ind-section" ref={indSectionRef}>
      {/* Background */}
      <div className="ind-bg-layer">
        <div className="ind-bg-grid" />
        <div
          className="ind-bg-orb ind-bg-orb-1"
          style={{ transform: `translate(${indScrollY * 0.02}px, ${-indScrollY * 0.03}px)` }}
        />
        <div
          className="ind-bg-orb ind-bg-orb-2"
          style={{ transform: `translate(${-indScrollY * 0.02}px, ${indScrollY * 0.04}px)` }}
        />
      </div>

      <div className="ind-container">
        {/* Section Header */}
        <div
          className="ind-header"
          style={{ transform: `translateY(${indScrollY * -0.02}px)` }}
        >
          <span className="ind-header-tag">Industries We Serve</span>
          <h2 className="ind-header-title">
            Enterprise Wireless Connectivity
            <span className="ind-header-title-accent"> Solutions for Every Industry</span>
          </h2>
          <p className="ind-header-desc">
            Futuremax Technology delivers RF Engineering, Mobile Signal Boosters, Distributed 
            Antenna Systems (DAS), and enterprise wireless connectivity solutions for residential 
            communities, hotels, hospitals, educational campuses, commercial buildings, factories, 
            corporate offices, and public infrastructure across India.Delivering reliable RF engineering
             solutions across Kerala, including Trivandrum, Kochi, Kozhikode, and Palakkad, we ensure 
             seamless mobile connectivity for every environment.
          </p>
        </div>

        {/* Marquee Cards Strip */}
        <div 
          className="ind-marquee-wrapper"
          onMouseEnter={() => setIndIsPaused(true)}
          onMouseLeave={() => {
            setIndIsPaused(false);
            setIndHoveredCard(null);
          }}
        >
          <div className={`ind-marquee-track ${indIsPaused ? 'ind-marquee-paused' : ''}`}>
            {/* First set */}
            {industries.map((item, index) => (
              <div
                className={`ind-marquee-card ${indHoveredCard === index ? 'ind-marquee-card-active' : ''}`}
                key={`first-${index}`}
                style={{ '--ind-accent': item.accentColor }}
                onMouseEnter={() => setIndHoveredCard(index)}
                onMouseLeave={() => setIndHoveredCard(null)}
              >
                {/* Card Image */}
                <div className="ind-marquee-card-img-wrap">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="ind-marquee-card-img"
                    loading="lazy"
                  />
                  <div className="ind-marquee-card-img-overlay" />
                  <span 
                    className="ind-marquee-card-badge" 
                    style={{ background: item.accentColor }}
                  >
                    {item.productLink}
                  </span>
                </div>

                {/* Card Content */}
                <div className="ind-marquee-card-body">
                  <h3 className="ind-marquee-card-title">{item.title}</h3>
                  <p className="ind-marquee-card-desc">{item.description}</p>
                  
                  <div className="ind-marquee-card-features">
                    {item.features.map((feature, i) => (
                      <span key={i} className="ind-marquee-card-feature">
                        <Check size={12} strokeWidth={2.5} style={{ color: item.accentColor }} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a href="/contact" className="ind-marquee-card-link" style={{ color: item.accentColor }}>
                    <span>Explore Industry</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="ind-marquee-card-line" style={{ background: item.accentColor }} />
              </div>
            ))}

            {/* Duplicate set */}
            {industries.map((item, index) => (
              <div
                className={`ind-marquee-card ${indHoveredCard === index + industries.length ? 'ind-marquee-card-active' : ''}`}
                key={`second-${index}`}
                style={{ '--ind-accent': item.accentColor }}
                onMouseEnter={() => setIndHoveredCard(index + industries.length)}
                onMouseLeave={() => setIndHoveredCard(null)}
              >
                <div className="ind-marquee-card-img-wrap">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="ind-marquee-card-img"
                    loading="lazy"
                  />
                  <div className="ind-marquee-card-img-overlay" />
                  <span 
                    className="ind-marquee-card-badge" 
                    style={{ background: item.accentColor }}
                  >
                    {item.productLink}
                  </span>
                </div>

                <div className="ind-marquee-card-body">
                  <h3 className="ind-marquee-card-title">{item.title}</h3>
                  <p className="ind-marquee-card-desc">{item.description}</p>
                  
                  <div className="ind-marquee-card-features">
                    {item.features.map((feature, i) => (
                      <span key={i} className="ind-marquee-card-feature">
                        <Check size={12} strokeWidth={2.5} style={{ color: item.accentColor }} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a href="/contact" className="ind-marquee-card-link" style={{ color: item.accentColor }}>
                    <span>Explore Industry</span>
                    <ArrowRight size={14} />
                  </a>
                </div>

                <div className="ind-marquee-card-line" style={{ background: item.accentColor }} />
              </div>
            ))}
          </div>
        </div>

   
      </div>
    </section>
  );
};

export default Industries;