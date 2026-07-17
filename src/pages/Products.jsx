import React, { useEffect, useRef, useState } from "react";
import "./Products.css";

// Import product images
import booster23Img from "../assets/hero1.png";
import booster25Img from "../assets/hero1.png";
import booster27Img from "../assets/hero1.png";
import dasImg from "../assets/hero1.png";
import antennaImg from "../assets/hero1.png";

const ProductsPreview = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [activeProduct, setActiveProduct] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isCtaVisible, setIsCtaVisible] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const ctaRef = useRef(null);
  const cardsRef = useRef([]);

  const categories = [
    {
      image: booster23Img,
      title: "i Booster 23 dBm",
      subtitle: "Residential Signal Booster",
      description:
        "The ideal mobile signal booster for homes, apartments, villas, retail stores, and small offices. Designed to eliminate weak mobile signals, reduce call drops, and improve 4G & 5G data performance across all major telecom operators.",
      features: ["Residential Coverage", "70 dB High Gain", "2G / 3G / 4G / 5G"],
      power: "23 dBm",
      coverage: "Up to 300 m²",
      accentColor: "#0755A3",
      gradient: "linear-gradient(135deg, #E8F1FA 0%, #D0E4F7 100%)",
      tag: "Best Seller",
    },
    {
      image: booster25Img,
      title: "i Booster 25 dBm",
      subtitle: "Commercial Signal Booster",
      description:
        "Professional-grade mobile signal booster for hotels, hospitals, resorts, schools, colleges, shopping complexes, and commercial buildings requiring reliable indoor mobile coverage across multiple floors.",
      features: ["Commercial Buildings", "Multi Floor Coverage", "Multi Operator Support"],
      power: "25 dBm",
      coverage: "Up to 500 m²",
      accentColor: "#0A6FD4",
      gradient: "linear-gradient(135deg, #F0F7FF 0%, #E0EEFF 100%)",
      tag: "Most Popular",
    },
    {
      image: booster27Img,
      title: "i Booster 27 dBm",
      subtitle: "Enterprise Signal Booster",
      description:
        "Enterprise mobile signal booster engineered for factories, warehouses, IT parks, airports, corporate campuses, industrial facilities, and large commercial infrastructures with high-capacity coverage requirements.",
      features: ["Enterprise Coverage", "Large Area Solution", "Industrial Grade"],
      power: "27 dBm",
      coverage: "Up to 1000+ m²",
      accentColor: "#19AB3F",
      gradient: "linear-gradient(135deg, #E8F7EA 0%, #D0F0D5 100%)",
      tag: "Enterprise Grade",
    },
    {
      image: dasImg,
      title: "Distributed Antenna Systems (DAS)",
      subtitle: "Custom RF Infrastructure",
      description:
        "Advanced Distributed Antenna Systems designed for hospitals, airports, malls, universities, hotels, and high-rise buildings to provide uniform indoor mobile signal distribution.",
      features: ["Indoor Coverage", "Enterprise RF Design", "Scalable Infrastructure"],
      power: "DAS",
      coverage: "Custom Design",
      accentColor: "#7C3AED",
      gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE5FF 100%)",
      tag: "Custom Solution",
    },
    {
      image: antennaImg,
      title: "RF Antennas & Accessories",
      subtitle: "Professional Components",
      description:
        "Complete range of indoor antennas, outdoor antennas, omni antennas, directional antennas, RF cables, splitters, couplers, lightning arrestors, connectors, and installation accessories for professional deployments.",
      features: ["Indoor & Outdoor", "Low Signal Loss", "Professional Quality"],
      power: "RF",
      coverage: "All Types",
      accentColor: "#EA580C",
      gradient: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)",
      tag: "Essential",
    },
  ];

  const trustItems = [
    "Enterprise RF Engineering",
    "4G & 5G Compatible",
    "Pan India Installation",
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

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

  // Header visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsHeaderVisible(true);
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Cards visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
    return () => observer.disconnect();
  }, []);

  // CTA visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsCtaVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ctaRef.current) observer.observe(ctaRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="products-premium" ref={sectionRef}>
      {/* Background */}
      <div className="products-bg-layer">
        <div className="products-bg-grid" />
        <div
          className="products-bg-orb products-bg-orb-1"
          style={{ transform: `translate(${scrollY * 0.02}px, ${-scrollY * 0.04}px)` }}
        />
        <div
          className="products-bg-orb products-bg-orb-2"
          style={{ transform: `translate(${-scrollY * 0.03}px, ${scrollY * 0.05}px)` }}
        />
        <div
          className="products-bg-mouse-glow"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(7,85,163,0.03) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="products-container">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`products-header ${isHeaderVisible ? "visible" : ""}`}
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        >
          <span className="products-header-tag">Enterprise RF Products</span>
          <h2 className="products-header-title">
            Professional Mobile Signal Boosters &
            <span className="products-header-accent"> Enterprise RF Solutions</span>
          </h2>
          <p className="products-header-desc">
            Explore Futuremax Technology's complete portfolio of i Booster Mobile Signal Boosters, 
            Distributed Antenna Systems (DAS), RF antennas, accessories, and enterprise wireless 
            connectivity solutions. Designed for homes, commercial buildings, hospitals, hotels, 
            educational campuses, factories, and large enterprise environments.
          </p>
        </div>

        {/* Featured Product - Large Showcase */}
        <div
          className={`products-featured ${isHeaderVisible ? "visible" : ""}`}
          style={{ transform: `translateY(${scrollY * -0.02}px)` }}
        >
          <div
            className="featured-card"
            style={{
              '--accent': categories[activeProduct].accentColor,
              '--gradient': categories[activeProduct].gradient,
            }}
          >
            <div className="featured-image-wrap">
              <img
                src={categories[activeProduct].image}
                alt={categories[activeProduct].title}
                className="featured-image"
              />
              <div className="featured-image-overlay" />
              <div className="featured-tag" style={{ background: categories[activeProduct].accentColor }}>
                {categories[activeProduct].tag}
              </div>
            </div>
            <div className="featured-content">
              <div className="featured-header">
                <span className="featured-subtitle" style={{ color: categories[activeProduct].accentColor }}>
                  {categories[activeProduct].subtitle}
                </span>
                <span className="featured-power">{categories[activeProduct].power}</span>
              </div>
              <h3 className="featured-title">{categories[activeProduct].title}</h3>
              <p className="featured-desc">{categories[activeProduct].description}</p>
              <div className="featured-features">
                {categories[activeProduct].features.map((feature, i) => (
                  <span key={i} className="featured-feature">
                    <svg viewBox="0 0 16 16" fill="none" className="feature-check">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
              <div className="featured-actions">
                <a href="#" className="featured-cta" style={{ background: categories[activeProduct].accentColor }}>
                  View Specifications
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <span className="featured-coverage">
                  Coverage: {categories[activeProduct].coverage}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Selector */}
        <div className="products-selector">
          {categories.map((product, index) => (
            <button
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className={`product-selector-card ${activeProduct === index ? "active" : ""} ${visibleCards.includes(index) ? "visible" : ""}`}
              onClick={() => setActiveProduct(index)}
              style={{
                '--accent': product.accentColor,
                '--gradient': product.gradient,
                transitionDelay: `${index * 0.06}s`,
              }}
            >
              <div className="selector-image-wrap">
                <img src={product.image} alt={product.title} className="selector-image" />
                <div className="selector-image-shade" />
              </div>
              <div className="selector-content">
                <span className="selector-power" style={{ color: product.accentColor }}>
                  {product.power}
                </span>
                <span className="selector-title">{product.title}</span>
              </div>
              <div className="selector-indicator" style={{ background: product.accentColor }} />
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef}
          className={`products-cta ${isCtaVisible ? "visible" : ""}`}
          style={{ transform: `translateY(${scrollY * -0.015}px)` }}
        >
          <div className="products-cta-card">
            <div className="cta-card-content">
              <h3 className="cta-card-title">
                Looking for the Right Mobile Signal Booster?
              </h3>
              <p className="cta-card-desc">
                Whether you need reliable mobile coverage for a home, hotel, hospital, commercial 
                building, educational campus, or industrial facility, our RF engineering experts will 
                recommend the ideal i Booster solution based on your coverage requirements, building 
                structure, and network environment.
              </p>
              <div className="cta-card-actions">
                <a href="/contact" className="cta-primary-btn">
                  Request Free RF Site Survey
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="/contact" className="cta-secondary-btn">
                  Talk to an RF Expert
                </a>
              </div>
              <div className="cta-trust">
                {trustItems.map((item, i) => (
                  <span key={i} className="cta-trust-item">
                    <svg viewBox="0 0 16 16" fill="none" className="trust-icon">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;