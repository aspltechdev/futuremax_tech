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
      primaryCtaLink: "/contact",
      secondaryCta: "Explore i Booster Series",
      secondaryCtaLink: "/products",
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
      primaryCtaLink: "/products/23-dbm",
      secondaryCta: "Download Datasheet",
      secondaryCtaLink: "/downloads/datasheet-23-dbm",
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
      primaryCtaLink: "/products/25-dbm",
      secondaryCta: "Get Commercial Quote",
      secondaryCtaLink: "/contact?product=25-dbm",
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
      primaryCtaLink: "/products/27-dbm",
      secondaryCta: "Request Enterprise Demo",
      secondaryCtaLink: "/contact?product=27-dbm",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
  ];

  // CTA click handlers
  const handlePrimaryCta = (link) => {
    if (link) {
      navigate(link);
    }
  };

  const handleSecondaryCta = (link) => {
    if (link) {
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

            {/* CTAs — NOW WITH CLICK HANDLERS */}
            <div className="hero-actions">
              <button
                className="hero-btn hero-btn-primary"
                onClick={() => handlePrimaryCta(slides[currentSlide].primaryCtaLink)}
                aria-label={slides[currentSlide].primaryCta}
              >
                <span>{slides[currentSlide].primaryCta}</span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button
                className="hero-btn hero-btn-link"
                onClick={() => handleSecondaryCta(slides[currentSlide].secondaryCtaLink)}
                aria-label={slides[currentSlide].secondaryCta}
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

      {/* "We Serve" Box */}
      <div className={`hero-locations-box ${isVisible ? "visible" : ""}`}>
        <span className="hero-locations-title">We Serve</span>
        <div className="hero-locations-list">
          <span className="hero-location-item">Kochi</span>
          <span className="hero-location-item">Kozhikode</span>
          <span className="hero-location-item">Thiruvananthapuram</span>
          <span className="hero-location-item">Palakkad</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;