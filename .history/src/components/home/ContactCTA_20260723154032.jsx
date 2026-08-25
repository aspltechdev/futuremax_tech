import React, { useEffect, useRef, useState } from "react";
import { PhoneCall, Mail, MapPin, ArrowRight, Shield, Zap, Award } from "lucide-react";
import "./ContactCTA.css";

const ContactCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  const contactDetails = [
    {
      icon: <PhoneCall size={18} strokeWidth={1.5} />,
      label: "Call Us",
      value: "+91 88487 49897",
       value: "+91 944786717,
      href: "tel:+918848749897",
    },
    {
      icon: <Mail size={18} strokeWidth={1.5} />,
      label: "Email Us",
      value: "futuremaxtech@hotmail.com",
      href: "mailto:futuremaxtech@hotmail.com",
    },
    {
      icon: <MapPin size={18} strokeWidth={1.5} />,
      label: "Location",
      value: "Kochi, Kerala, India",
      href: "#",
    },
  ];

  const trustBadges = [
    { icon: <Shield size={16} strokeWidth={1.5} />, text: "Enterprise Grade" },
    { icon: <Zap size={16} strokeWidth={1.5} />, text: "5G Ready" },
    { icon: <Award size={16} strokeWidth={1.5} />, text: "Certified Engineers" },
  ];

  return (
    <section className="contact-cta" ref={sectionRef}>
      {/* Background */}
      <div className="cta-bg">
        <div className="cta-bg-image" />
        <div className="cta-bg-overlay" />
        <div className="cta-bg-pattern" />
        <div className="cta-bg-orb cta-bg-orb-1" />
        <div className="cta-bg-orb cta-bg-orb-2" />
      </div>

      <div className="container">
        <div className="cta-layout">
          {/* Left Content */}
          <div className={`cta-content ${isVisible ? 'animate' : ''}`}>
            <span className="cta-tag">Let's Connect</span>
            <h2 className="cta-title">
              Ready to transform
              <span className="cta-title-accent"> your connectivity?</span>
            </h2>
            <p className="cta-description">
              Whether you're planning a new deployment or upgrading an existing network, 
              our RF engineering team is ready to design the right connectivity solution 
              for your business.
            </p>

            {/* Trust Badges */}
            <div className="cta-trust">
              {trustBadges.map((badge, index) => (
                <div key={index} className="cta-trust-item">
                  <span className="cta-trust-icon">{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="cta-actions">
              <a href="/contact" className="btn-primary">
                <span>Request Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <a href="tel:+918848749897" className="btn-secondary">
                <PhoneCall size={16} strokeWidth={1.5} />
                <span>Call Our Experts</span>
              </a>
            </div>
          </div>

          {/* Right Content - Contact Cards */}
          <div className={`cta-cards ${isVisible ? 'animate' : ''}`}>
            {contactDetails.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="cta-card"
                style={{ '--delay': `${index * 0.12}s` }}
              >
                <div className="cta-card-icon">
                  {item.icon}
                </div>
                <div className="cta-card-info">
                  <span className="cta-card-label">{item.label}</span>
                  <span className="cta-card-value">{item.value}</span>
                </div>
                <div className="cta-card-arrow">
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}

            {/* Stats Card */}
            <div className="cta-stats-card">
              <div className="cta-stats-grid">
                <div className="cta-stat">
                  <span className="cta-stat-value">5,000+</span>
                  <span className="cta-stat-label">Projects</span>
                </div>
                <div className="cta-stat-divider" />
                <div className="cta-stat">
                  <span className="cta-stat-value">98%</span>
                  <span className="cta-stat-label">Satisfaction</span>
                </div>
                <div className="cta-stat-divider" />
                <div className="cta-stat">
                  <span className="cta-stat-value">24/7</span>
                  <span className="cta-stat-label">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;