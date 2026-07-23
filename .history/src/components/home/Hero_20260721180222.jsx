import React, { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import hero1 from "../../assets/hero1.png";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef(null);
  const progressInterval = useRef(null);
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const slideDuration = 5000;

  const slides = [
    {
      id: 1,
      bgImage: hero1,
      tagline: "Enterprise RF Engineering",
      title: "Mobile Signal Booster",
      titleAccent: "& RF Solutions",
      subtitle: "For Homes, Hotels, Hospitals & Commercial Buildings",
      description:
        "Futuremax Technology delivers advanced Mobile Signal Boosters, Distributed Antenna Systems (DAS), and Enterprise Wireless Connectivity across India.",
      specs: [
        { label: "Power Range", value: "23 – 27 dBm" },
        { label: "Technology", value: "4G / 5G Multi-Band" },
        { label: "Coverage", value: "Up to 1000+ m²" },
        { label: "Operators", value: "All Major Networks" },
      ],
      primaryCta: "Get Free RF Site Survey",
      primaryLink: "/contact",
      secondaryCta: "Explore i Booster Series →",
      secondaryLink: "/products",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
    {
      id: 2,
      bgImage: hero1,
      tagline: "i Booster 23 dBm",
      title: "Residential &",
      titleAccent: "Small Office",
      subtitle: "Crystal clear coverage for homes and boutique workspaces",
      description:
        "Professional 23 dBm boosters engineered for residential buildings and home offices. Compact design, easy installation, all-operator compatibility.",
      specs: [
        { label: "Power Output", value: "23 dBm" },
        { label: "Coverage", value: "Up to 300 m²" },
        { label: "Installation", value: "Plug & Play" },
        { label: "Support", value: "All Operators" },
      ],
      primaryCta: "View 23 dBm Specs",
      primaryLink: "/products/23",
      secondaryCta: "Download Datasheet →",
      secondaryLink: "/datasheet/23",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
    {
      id: 3,
      bgImage: hero1,
      tagline: "i Booster 25 dBm",
      title: "Commercial &",
      titleAccent: "Hospitality",
      subtitle: "Purpose-built for hotels, hospitals & educational campuses",
      description:
        "Robust 25 dBm coverage for medium to large facilities. Multi-floor deployment with 24/7 remote monitoring and multi-operator support.",
      specs: [
        { label: "Power Output", value: "25 dBm" },
        { label: "Coverage", value: "Up to 500 m²" },
        { label: "Deployment", value: "Multi-Floor" },
        { label: "Monitoring", value: "24/7 Remote" },
      ],
      primaryCta: "View 25 dBm Specs",
      primaryLink: "/products/25",
      secondaryCta: "Get Commercial Quote →",
      secondaryLink: "https://wa.me/1234567890?text=I%20want%20a%20commercial%20quote",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
    {
      id: 4,
      bgImage: hero1,
      tagline: "i Booster 27 dBm",
      title: "Enterprise &",
      titleAccent: "Industrial",
      subtitle: "Maximum power for large infrastructure & smart cities",
      description:
        "Maximum power 27 dBm for factories, large commercial complexes, and smart city deployments. DAS-ready with industrial-grade reliability.",
      specs: [
        { label: "Power Output", value: "27 dBm" },
        { label: "Coverage", value: "1000+ m²" },
        { label: "Infrastructure", value: "DAS Ready" },
        { label: "Installation", value: "Custom Design" },
      ],
      primaryCta: "View 27 dBm Specs",
      primaryLink: "/products/27",
      secondaryCta: "Request Enterprise Demo →",
      secondaryLink: "/demo",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
  ];

  // Helper function to handle navigation
  const handleNavigation = (link) => {
    if (!link) return;
    if (link.startsWith('http://') || link.startsWith('https://')) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate(link);
    }
  };

  useEffect(() => {
    setIsVisible(true);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const startProgress = useCallback(() => {
    setProgress(0);
    const step = (50 / slideDuration) * 100;
    if (progressInterval.current) clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          return 100;
        }
        return prev + step;
      });
    }, 50);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      startProgress();
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [currentSlide, isTransitioning, startProgress]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    startProgress();
    autoPlayRef.current = setInterval(nextSlide, slideDuration);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [currentSlide, nextSlide, startProgress]);

  return (
    <section
      className="hero-cinematic"
      ref={heroRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Floating Particles */}
      <div className="hero-particles-layer">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              opacity: 0.1 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* Background Layer with Parallax */}
      <div className="hero-bg-layer" ref={parallaxRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-bg-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)`,
            }}
          />
        ))}
        <div className="hero-bg-overlay" />
        <div className="hero-bg-ambient" />
        <div
          className="hero-bg-mouse-glow"
          style={{
            background: `radial-gradient(${isHovering ? '800px' : '600px'} circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
            transition: 'background 0.8s ease-out',
          }}
        />
      </div>

      {/* Geometric Lines */}
      <div className="hero-geometric">
        <div className="geo-line geo-line-h" style={{ top: '30%', transform: `translateX(${-scrollY * 0.2}px)` }} />
        <div className="geo-line geo-line-v" style={{ left: '25%', transform: `translateY(${-scrollY * 0.15}px)` }} />
        <div className="geo-line geo-line-h" style={{ bottom: '25%', transform: `translateX(${scrollY * 0.2}px)` }} />
        <div className="geo-circle" style={{ transform: `scale(${1 + scrollY * 0.0005})` }} />
      </div>

      {/* Main Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content-grid">
          {/* Left Column - Main Content */}
          <div
            className={`hero-left ${isVisible ? "visible" : ""}`}
            style={{
              transform: `translateY(${isVisible ? scrollY * -0.1 : 40}px)`,
              opacity: isVisible ? Math.max(0, 1 - scrollY * 0.002) : 0,
            }}
          >
            {/* Tag */}
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span className="hero-tag-text">{slides[currentSlide].tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              <span className="hero-headline-main">{slides[currentSlide].title}</span>
              <span className="hero-headline-accent">{slides[currentSlide].titleAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>

            {/* Description */}
            <p className="hero-description">{slides[currentSlide].description}</p>

            {/* Specs Grid */}
            <div className="hero-specs">
              {slides[currentSlide].specs.map((spec, i) => (
                <div
                  key={i}
                  className="hero-spec-item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="hero-spec-value">{spec.value}</span>
                  <span className="hero-spec-label">{spec.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-actions">
              <button
                className="hero-btn hero-btn-primary"
                onClick={() => handleNavigation(slides[currentSlide].primaryLink)}
              >
                <span>{slides[currentSlide].primaryCta}</span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="hero-btn hero-btn-link"
                onClick={() => handleNavigation(slides[currentSlide].secondaryLink)}
              >
                {slides[currentSlide].secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Column - Product Showcase */}
          <div
            className={`hero-right ${isVisible ? "visible" : ""}`}
            style={{
              transform: `translateY(${isVisible ? scrollY * -0.05 : 40}px)`,
              opacity: isVisible ? Math.max(0, 1 - scrollY * 0.0015) : 0,
            }}
          >
            {/* Product Image Display */}
            <div
              className="hero-product-showcase"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePos.x - 50) * 0.03}deg) rotateX(${(50 - mousePos.y) * 0.03}deg)`,
              }}
            >
              <div className="hero-product-image-wrapper">
                <img
                  src={slides[currentSlide].bgImage}
                  alt={slides[currentSlide].title}
                  className="hero-product-image"
                  style={{
                    transform: `scale(${1 + scrollY * 0.0002})`,
                  }}
                />
                <div className="hero-product-image-shade" />
                <div className="hero-product-image-glare" />
              </div>
              <div className="hero-product-label">
                <span className="product-label-series">i Booster Series</span>
                <span className="product-label-name">{slides[currentSlide].specs[0].value}</span>
              </div>
            </div>

            {/* Product Cards */}
            <div className="hero-product-cards">
              {slides[currentSlide].products.map((product, i) => (
                <button
                  key={i}
                  className={`hero-product-card ${i === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                  style={{
                    '--card-color': product.color,
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <div className="product-card-content">
                    <span className="product-card-power">{product.power}</span>
                    <span className="product-card-type">{product.type}</span>
                  </div>
                  <div className="product-card-coverage">{product.coverage}</div>
                  <div className="product-card-indicator" />
                </button>
              ))}
            </div>

            {/* Progress Navigation */}
            <div className="hero-progress-nav">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-progress-dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                >
                  <div
                    className="hero-progress-fill"
                    style={{
                      width: i === currentSlide ? `${progress}%` : "0%",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ===== NEW "WE SERVE" SECTION ===== */}
        <div className={`hero-locations ${isVisible ? "visible" : ""}`}>
          <div className="locations-header">
            <span className="locations-tag">Service Areas</span>
            <h2 className="locations-title">We Serve</h2>
            <p className="locations-subtitle">
              Enterprise‑grade mobile signal boosting across Kerala, with primary focus on
              <span className="locations-highlight"> Kochi</span>,
              <span className="locations-highlight"> Kozhikode</span>, and
              <span className="locations-highlight"> Thiruvananthapuram</span>
            </p>
          </div>
          <div className="locations-grid">
            <div className="location-item primary">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="location-info">
                <span className="location-name">Kochi (Ernakulam)</span>
                <span className="location-tagline">Primary Hub</span>
              </div>
            </div>
            <div className="location-item primary">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="location-info">
                <span className="location-name">Kozhikode (Calicut)</span>
                <span className="location-tagline">Primary Hub</span>
              </div>
            </div>
            <div className="location-item primary">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="location-info">
                <span className="location-name">Thiruvananthapuram</span>
                <span className="location-tagline">Primary Hub</span>
              </div>
            </div>
            <div className="location-item">
              <div className="location-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="location-info">
                <span className="location-name">Palakkad</span>
                <span className="location-tagline">Extended Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`hero-scroll-hint ${isVisible ? "visible" : ""}`}
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.004),
          transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`,
        }}
      >
        <span className="scroll-text">Discover i Booster Series</span>
        <div className="scroll-line" />
      </div>

      {/* ===== NEW STYLES FOR THE LOCATIONS SECTION ===== */}
      <style>{`
        .hero-locations {
          width: 100%;
          max-width: 1280px;
          margin: 60px auto 0;
          padding: 0 2rem;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero-locations.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .locations-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        .locations-tag {
          display: inline-block;
          padding: 0.25rem 1rem;
          background: rgba(255,255,255,0.08);
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 0.75rem;
          backdrop-filter: blur(4px);
        }
        .locations-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }
        .locations-subtitle {
          color: rgba(255,255,255,0.6);
          font-size: 1rem;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .locations-highlight {
          color: #19AB3F;
          font-weight: 600;
        }
        .locations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
        }
        .location-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem 1.5rem;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          transition: background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        }
        .location-item:hover {
          background: rgba(255,255,255,0.08);
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }
        .location-item.primary {
          border-color: rgba(25,171,63,0.3);
          background: rgba(25,171,63,0.06);
        }
        .location-item.primary:hover {
          background: rgba(25,171,63,0.12);
        }
        .location-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          color: #19AB3F;
        }
        .location-icon svg {
          width: 20px;
          height: 20px;
        }
        .location-info {
          display: flex;
          flex-direction: column;
        }
        .location-name {
          font-weight: 600;
          font-size: 1.05rem;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .location-tagline {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: rgba(255,255,255,0.4);
          margin-top: 2px;
        }
        .location-item.primary .location-tagline {
          color: #19AB3F;
        }
        @media (max-width: 768px) {
          .hero-locations {
            margin-top: 40px;
            padding: 0 1rem;
          }
          .locations-title {
            font-size: 1.75rem;
          }
          .locations-grid {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .location-item {
            padding: 1rem;
          }
        }
        @media (max-width: 480px) {
          .locations-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;