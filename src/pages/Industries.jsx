import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, Shield, Zap, Award } from "lucide-react";
import "./Industries.css";

const industries = [
  {
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    title: "Hospitality",
    description: "Deliver seamless mobile connectivity across hotels, resorts, convention centres, and guest facilities.",
    features: ["5-Star Hotel Ready", "Guest Coverage", "Banquet Halls"],
  },
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    title: "Healthcare",
    description: "Reliable indoor wireless coverage for hospitals, clinics, and healthcare campuses.",
    features: ["Emergency Ready", "HIPAA Compliant", "24/7 Reliability"],
  },
  {
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    title: "Corporate Offices",
    description: "Enterprise-grade wireless infrastructure for office buildings and IT parks.",
    features: ["Multi-Floor Coverage", "Conference Ready", "Productivity Boost"],
  },
  {
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    title: "Industrial & Manufacturing",
    description: "Robust RF engineering solutions for factories, warehouses, and logistics facilities.",
    features: ["Heavy Duty", "Large Areas", "Machine Compatible"],
  },
  {
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    title: "Retail & Commercial",
    description: "Reliable indoor coverage for shopping malls, supermarkets, and retail stores.",
    features: ["Customer Experience", "POS Connectivity", "Multi-Tenant"],
  },
  {
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80",
    title: "Education",
    description: "Campus-wide connectivity for schools, colleges, and universities.",
    features: ["Campus Wide", "Smart Classroom", "Research Ready"],
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    title: "Residential",
    description: "Improve indoor mobile coverage for villas, apartments, and gated communities.",
    features: ["4G/5G Ready", "Aesthetic Design", "Low Maintenance"],
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    title: "Government & Public",
    description: "Scalable wireless communication for government buildings and smart cities.",
    features: ["High Security", "Scalable", "Smart City Ready"],
  },
];

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto scroll cards
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      let scrollAmount = 0;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      autoScrollRef.current = setInterval(() => {
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
        } else {
          scrollAmount += 1;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }, 30);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, []);

  // Auto rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="hero-bg-animation">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
          <div className="hero-orb hero-orb-3" />
        </div>
        <div className="container">
          <div className={`section-header ${isVisible ? 'animate' : ''}`}>
            <span className="section-tag">Industries We Serve</span>
            <h1 className="section-title">
              Connectivity solutions tailored
              <span className="section-title-accent"> for every industry</span>
            </h1>
            <p className="section-description">
              Futuremax Technology designs and deploys intelligent wireless connectivity solutions 
              across diverse industries with RF engineering expertise that ensures reliable 
              communication where it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Auto-Scrolling Cards Strip */}
      <section className="industries-scroll-strip">
        <div className="scroll-strip-container" ref={scrollRef}>
          <div className="scroll-strip-track">
            {[...industries, ...industries].map((item, index) => (
              <div 
                className="scroll-strip-card" 
                key={index}
                style={{
                  '--card-index': index,
                }}
              >
                <div className="scroll-card-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="scroll-card-content">
                  <span className="scroll-card-title">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries Grid */}
      <section className="industries-grid-section">
        <div className="container">
          <div className={`section-header ${isVisible ? 'animate' : ''}`}>
            <span className="section-tag">Industry Expertise</span>
            <h2 className="section-title">
              Wireless connectivity for
              <span className="section-title-accent"> every environment</span>
            </h2>
            <p className="section-description">
              Every industry has unique communication challenges. Our engineering team develops 
              customized RF solutions that improve indoor coverage and eliminate dead zones.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((item, index) => (
              <div 
                className={`industry-card ${isVisible ? 'animate' : ''}`} 
                key={index}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="industry-card-image">
                  <img src={item.image} alt={item.title} />
                  <div className="industry-card-overlay" />
                </div>
                <div className="industry-card-body">
                  <h3 className="industry-card-title">{item.title}</h3>
                  <p className="industry-card-desc">{item.description}</p>
                  <div className="industry-card-features">
                    {item.features.map((feature, i) => (
                      <span key={i} className="industry-feature">
                        <Check size={14} strokeWidth={2.5} />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a href="/contact" className="industry-card-link">
                    <span>Learn More</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="industries-cta">
        <div className="cta-bg-animation">
          <div className="cta-orb cta-orb-1" />
          <div className="cta-orb cta-orb-2" />
        </div>
        <div className="container">
          <div className={`cta-content ${isVisible ? 'animate' : ''}`}>
            <h2 className="cta-title">
              Looking for a custom connectivity solution?
            </h2>
            <p className="cta-desc">
              Speak with our RF engineering specialists to design a wireless coverage 
              solution tailored to your industry and requirements.
            </p>
            <div className="cta-actions">
              <a href="/contact" className="btn-primary">
                <span>Request a Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <div className="cta-trust">
                <div className="cta-trust-item">
                  <Shield size={16} strokeWidth={1.5} />
                  <span>Enterprise Grade</span>
                </div>
                <div className="cta-trust-item">
                  <Zap size={16} strokeWidth={1.5} />
                  <span>5G Ready</span>
                </div>
                <div className="cta-trust-item">
                  <Award size={16} strokeWidth={1.5} />
                  <span>Certified Engineers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Industries;