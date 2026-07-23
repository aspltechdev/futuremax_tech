import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const autoPlayRef = useRef(null);
  const progressInterval = useRef(null);
  const slideDuration = 6000;

  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
      tag: "Enterprise RF Solutions",
      title: "Enterprise Mobile",
      titleAccent: "Signal Booster",
      subtitle: "& RF Engineering Solutions for Modern Infrastructure",
      description:
        "Advanced Distributed Antenna Systems and intelligent signal enhancement for hotels, hospitals, educational campuses, and commercial buildings.",
      powerLabel: "Power Range",
      powerValue: "23 – 27 dBm",
      metrics: [
        { value: "4G/5G", label: "Multi-Band" },
        { value: "Multi-Operator", label: "Compatible" },
        { value: "Pan India", label: "Coverage" },
      ],
      cta: "Get Free RF Site Survey",
      ctaLink: "/contact",
      ctaSecondary: "Explore i Booster Series",
      ctaSecondaryLink: "/products",
      overlay:
        "linear-gradient(135deg, rgba(7,85,163,0.92) 0%, rgba(7,85,163,0.78) 40%, rgba(15,23,42,0.65) 100%)",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
      tag: "i Booster 23 dBm",
      title: "Residential &",
      titleAccent: "Small Office",
      subtitle: "Seamless Connectivity for Homes and Boutique Workspaces",
      description:
        "Professional 23 dBm boosters engineered specifically for residential buildings and home offices. Compact design with all-operator compatibility.",
      powerLabel: "Coverage Area",
      powerValue: "Up to 300 m²",
      metrics: [
        { value: "23 dBm", label: "Output Power" },
        { value: "Plug & Play", label: "Installation" },
        { value: "99.9%", label: "Uptime" },
      ],
      cta: "Explore 23 dBm Solution",
      ctaLink: "/products/23-dbm",
      ctaSecondary: "View Specifications",
      ctaSecondaryLink: "/products/23-dbm/specs",
      overlay:
        "linear-gradient(135deg, rgba(25,171,63,0.90) 0%, rgba(25,171,63,0.75) 40%, rgba(15,23,42,0.60) 100%)",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
      tag: "i Booster 25 dBm",
      title: "Commercial &",
      titleAccent: "Hospitality",
      subtitle: "Purpose-Built for Hotels, Hospitals & Educational Campuses",
      description:
        "Our 25 dBm commercial boosters deliver robust coverage across multi-floor buildings with high user density and remote monitoring capabilities.",
      powerLabel: "Coverage Area",
      powerValue: "Up to 500 m²",
      metrics: [
        { value: "25 dBm", label: "Output Power" },
        { value: "Multi-Floor", label: "Deployment" },
        { value: "24/7", label: "Monitoring" },
      ],
      cta: "Explore 25 dBm Solution",
      ctaLink: "/products/25-dbm",
      ctaSecondary: "Get Commercial Quote",
      ctaSecondaryLink: "/contact?type=commercial",
      overlay:
        "linear-gradient(135deg, rgba(7,85,163,0.92) 0%, rgba(5,74,142,0.80) 40%, rgba(15,23,42,0.65) 100%)",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80",
      tag: "i Booster 27 dBm",
      title: "Enterprise &",
      titleAccent: "Industrial",
      subtitle: "Maximum Power for Large-Scale Infrastructure & Smart Cities",
      description:
        "Maximum power 27 dBm enterprise boosters for factories, large commercial complexes, and smart city deployments with DAS integration.",
      powerLabel: "Coverage Area",
      powerValue: "Up to 1000+ m²",
      metrics: [
        { value: "27 dBm", label: "Output Power" },
        { value: "DAS Ready", label: "Infrastructure" },
        { value: "Custom", label: "Installation" },
      ],
      cta: "Explore 27 dBm Solution",
      ctaLink: "/products/27-dbm",
      ctaSecondary: "Request Enterprise Demo",
      ctaSecondaryLink: "/contact?type=enterprise",
      overlay:
        "linear-gradient(135deg, rgba(25,171,63,0.90) 0%, rgba(21,153,54,0.78) 40%, rgba(15,23,42,0.60) 100%)",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
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
      setTimeout(() => setIsTransitioning(false), 1000);
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
    <section className="hero-visual">
      <div className="hero-bg-images">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-bg-image ${index === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      <div className="hero-overlays">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-overlay ${index === currentSlide ? "active" : ""}`}
            style={{ background: slide.overlay }}
          />
        ))}
      </div>

      <header className={`hero-nav ${isVisible ? "visible" : ""}`}>
        <div className="nav-inner">
          <div className="nav-brand">
            <span className="nav-logo">FUTUREMAX</span>
            <span className="nav-divider" />
            <span className="nav-tagline">RF Engineering Solutions</span>
          </div>
          <div className="nav-meta">
            <span className="nav-cert">ISO 9001:2015</span>
            <span className="nav-cert">Made in India</span>
          </div>
        </div>
      </header>

      <div className="hero-content-area">
        <div className="content-inner">
          <div className={`hero-text-block ${isVisible ? "visible" : ""}`}>
            <div className="text-tag">
              <span className="tag-dot" />
              <span className="tag-label">{slides[currentSlide].tag}</span>
            </div>

            <h1 className="text-headline">
              <span className="headline-title">{slides[currentSlide].title}</span>
              <span className="headline-accent">{slides[currentSlide].titleAccent}</span>
            </h1>

            <p className="text-subtitle">{slides[currentSlide].subtitle}</p>
            <p className="text-description">{slides[currentSlide].description}</p>

            <div className="text-power-badge">
              <span className="power-label">{slides[currentSlide].powerLabel}</span>
              <span className="power-value">{slides[currentSlide].powerValue}</span>
            </div>

            <div className="text-metrics">
              {slides[currentSlide].metrics.map((metric, i) => (
                <div key={i} className="text-metric">
                  <span className="metric-val">{metric.value}</span>
                  <span className="metric-lbl">{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="text-actions">
              <a className="action-btn action-fill" href={slides[currentSlide].ctaLink}>
                <span>{slides[currentSlide].cta}</span>
                <svg viewBox="0 0 24 24" fill="none" className="action-icon">
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a className="action-btn action-outline" href={slides[currentSlide].ctaSecondaryLink}>
                <span>{slides[currentSlide].ctaSecondary}</span>
                <svg viewBox="0 0 24 24" fill="none" className="action-icon">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className={`hero-card-block ${isVisible ? "visible" : ""}`}>
            <div className="visual-card">
              <div className="card-image-area">
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].titleAccent}
                  className="card-image"
                />
                <div className="card-image-shade" />
              </div>
              <div className="card-body">
                <div className="card-header">
                  <span className="card-series">i Booster Series</span>
                  <span className="card-badge">{slides[currentSlide].tag}</span>
                </div>
                <h3 className="card-title">
                  {slides[currentSlide].title} {slides[currentSlide].titleAccent}
                </h3>
                <div className="card-specs">
                  {slides[currentSlide].metrics.map((metric, i) => (
                    <span key={i} className="card-spec">
                      {metric.value}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
                  <a className="action-btn action-fill" href={slides[currentSlide].ctaLink}>
                    <span>{slides[currentSlide].cta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`hero-controls-bar ${isVisible ? "visible" : ""}`}>
        <div className="controls-inner">
          <div className="controls-progress-dots">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`progress-dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => goToSlide(index)}
              >
                <svg viewBox="0 0 40 40" className="progress-circle">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                  <circle
                    cx="20"
                    cy="20"
                    r="16"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={`${progress} 100`}
                    transform="rotate(-90 20 20)"
                  />
                </svg>
                <span className="dot-label">{slide.tag}</span>
              </button>
            ))}
          </div>

          <div className="controls-navigation">
            <button
              className="nav-arrow"
              onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
              disabled={isTransitioning}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="nav-counter">
              <span className="counter-curr">{String(currentSlide + 1).padStart(2, "0")}</span>
              <span className="counter-div">/</span>
              <span className="counter-total">{String(slides.length).padStart(2, "0")}</span>
            </div>

            <button className="nav-arrow" onClick={nextSlide} disabled={isTransitioning}>
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;