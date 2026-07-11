import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePosition({
        x: (clientX / innerWidth - 0.5) * 20,
        y: (clientY / innerHeight - 0.5) * 20,
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

  return (
    <section className="hero" ref={heroRef}>
      {/* Background Layer */}
      <div className="hero-background">
        <div 
          className="hero-bg-image"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
            transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`,
          }}
        />
        <div className="hero-bg-overlay" />
        <div className="hero-bg-noise" />
      </div>

      {/* Grid Lines */}
      <div className="hero-grid-lines">
        <div className="grid-line grid-line-h grid-line-h-1" />
        <div className="grid-line grid-line-h grid-line-h-2" />
        <div className="grid-line grid-line-v grid-line-v-1" />
        <div className="grid-line grid-line-v grid-line-v-2" />
      </div>

      {/* Main Container */}
      <div className="hero-main">
        <div className="container">
          <div className="hero-layout">
            {/* Left Column - Content */}
            <div className="hero-content">
              {/* Enterprise Badge */}
              <div className={`hero-badge ${isVisible ? 'animate' : ''}`}>
                <span className="hero-badge-dot" />
                <span className="hero-badge-text">Enterprise Wireless Engineering</span>
              </div>

              {/* Headline */}
              <h1 className={`hero-headline ${isVisible ? 'animate' : ''}`}>
                <span className="hero-headline-primary">
                  We engineer
                  <span className="hero-headline-accent"> wireless connectivity </span>
                  that powers modern enterprise
                </span>
              </h1>

              {/* Description */}
              <p className={`hero-description ${isVisible ? 'animate' : ''}`}>
                Futuremax delivers enterprise-grade RF engineering, Distributed Antenna Systems, 
                and intelligent signal enhancement solutions trusted by 5000+ businesses across India.
              </p>

              {/* CTAs */}
              <div className={`hero-cta-group ${isVisible ? 'animate' : ''}`}>
                <a href="/contact" className="btn btn-primary">
                  <span>Get Free Site Survey</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="/solutions" className="btn btn-secondary">
                  <span>Explore Solutions</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Metrics Row */}
              <div className={`hero-metrics ${isVisible ? 'animate' : ''}`}>
                <div className="hero-metric">
                  <span className="hero-metric-value">5,000+</span>
                  <span className="hero-metric-label">Enterprise Deployments</span>
                </div>
                <div className="hero-metric-separator" />
                <div className="hero-metric">
                  <span className="hero-metric-value">99.9%</span>
                  <span className="hero-metric-label">Coverage Success Rate</span>
                </div>
                <div className="hero-metric-separator" />
                <div className="hero-metric">
                  <span className="hero-metric-value">24/7</span>
                  <span className="hero-metric-label">NOC Technical Support</span>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="hero-visual">
              <div 
                className="hero-visual-container"
                style={{
                  transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`,
                }}
              >
                {/* Main Product Card */}
                <div className="hero-product-card">
                  <div className="hero-product-image-area">
                    <div className="hero-product-image-bg" />
                    <img 
                      src="https://images.unsplash.com/photo-1614032686061-f7123a1751e3?w=800&q=80"
                      alt="Futuremax Enterprise Signal Enhancement System"
                      className="hero-product-image"
                    />
                    <div className="hero-product-reflection" />
                  </div>
                  <div className="hero-product-details">
                    <div className="hero-product-header">
                      <span className="hero-product-category">Enterprise Solution</span>
                      <span className="hero-product-badge">5G Ready</span>
                    </div>
                    <h3 className="hero-product-name">Signal Enhancement System</h3>
                    <p className="hero-product-desc">
                      Professional-grade wireless infrastructure for maximum coverage and reliability
                    </p>
                    <div className="hero-product-specs">
                      <span className="hero-product-spec">4G/5G Multi-Band</span>
                      <span className="hero-product-spec">Multi-Operator</span>
                      <span className="hero-product-spec">RF Engineered</span>
                    </div>
                  </div>
                </div>

                {/* Floating Stats Card */}
                <div 
                  className="hero-floating-stats"
                  style={{
                    transform: `translate(${mousePosition.x * -0.4}px, ${mousePosition.y * -0.4}px)`,
                  }}
                >
                  <div className="floating-stat-item">
                    <span className="floating-stat-number">Pan India</span>
                    <span className="floating-stat-text">Service Network</span>
                  </div>
                  <div className="floating-stat-progress">
                    <div className="floating-stat-progress-bar" style={{ width: '98%' }} />
                  </div>
                  <span className="floating-stat-small">98% Client Retention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="hero-scroll-cue">
        <span className="scroll-cue-text">Scroll</span>
        <div className="scroll-cue-line" />
      </div>
    </section>
  );
};

export default Hero;