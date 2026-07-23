import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import logoImg from "../../assets/logo.png";

const Header = () => {
  const [hdrSticky, setHdrSticky] = useState(false);
  const [hdrMobileOpen, setHdrMobileOpen] = useState(false);
  const location = useLocation();
  const hdrRef = useRef(null);

  useEffect(() => {
    const handleHdrScroll = () => {
      setHdrSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleHdrScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleHdrScroll);
  }, []);

  useEffect(() => {
    setHdrMobileOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = hdrMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [hdrMobileOpen]);

  const hdrNavItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/solutions", label: "Solutions" },
    { path: "/products", label: "Products" },
    { path: "/industries", label: "Industries" },
    { path: "/projects", label: "Projects" },
    { path: "/technology", label: "Technology" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      ref={hdrRef}
      className={`hdr-header ${hdrSticky ? "hdr-header--sticky" : ""} ${hdrMobileOpen ? "hdr-header--mobile-open" : ""}`}
    >
      {/* Top Utility Bar */}
      <div className="hdr-utility">
        <div className="hdr-utility__inner">
          <div className="hdr-utility__left">
            <span className="hdr-utility__item">
              <svg viewBox="0 0 16 16" fill="none" className="hdr-utility__icon">
                <path d="M8 1L10.5 6L16 7L11.5 10.5L13 16L8 13L3 16L4.5 10.5L0 7L5.5 6L8 1Z" fill="currentColor"/>
              </svg>
              ISO 9001:2015 Certified
            </span>
            <span className="hdr-utility__divider">|</span>
            <span className="hdr-utility__item">Made in India</span>
            <span className="hdr-utility__divider">|</span>
            <span className="hdr-utility__item">Pan India Service Network</span>
          </div>
          <div className="hdr-utility__right">
            <a href="tel:+918848749897" className="hdr-utility__link">
  <svg viewBox="0 0 16 16" fill="none" className="hdr-utility__icon">
    <path d="M3 1h3l1 3-2 1.5a9 9 0 005.5 5.5L12 9l3 1v3a2 2 0 01-2 2A13 13 0 011 3a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
  +91 88487 49897
</a>
<span className="hdr-utility__divider">|</span>
<a href="mailto:futuremaxtech@hotmail.com" className="hdr-utility__link">
  <svg viewBox="0 0 16 16" fill="none" className="hdr-utility__icon">
    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M1.5 3.5L8 9l6.5-5.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
  futuremaxtech@hotmail.com
</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="hdr-main">
        <div className="hdr-main__inner">
          {/* Logo */}
          <Link to="/" className="hdr-logo" onClick={() => setHdrMobileOpen(false)}>
            <div className="hdr-logo__mark">
              <img src={logoImg} alt="Futuremax Technology" className="hdr-logo__img" />
            </div>
            <div className="hdr-logo__text">
              <span className="hdr-logo__name">FUTUREMAX</span>
              <span className="hdr-logo__tagline">RF Engineering & Wireless Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hdr-nav">
            {hdrNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `hdr-nav__link ${isActive ? "hdr-nav__link--active" : ""}`}
                end={item.path === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hdr-actions">
            <Link to="/contact" className="hdr-actions__cta">
              <span>Get Free RF Survey</span>
              <svg viewBox="0 0 20 20" fill="none" className="hdr-actions__cta-icon">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile Toggle */}
            <button
              className={`hdr-mobile-toggle ${hdrMobileOpen ? "hdr-mobile-toggle--active" : ""}`}
              onClick={() => setHdrMobileOpen(!hdrMobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="hdr-mobile-toggle__bar hdr-mobile-toggle__bar--1" />
              <span className="hdr-mobile-toggle__bar hdr-mobile-toggle__bar--2" />
              <span className="hdr-mobile-toggle__bar hdr-mobile-toggle__bar--3" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`hdr-mobile-overlay ${hdrMobileOpen ? "hdr-mobile-overlay--active" : ""}`}
        onClick={() => setHdrMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`hdr-mobile-panel ${hdrMobileOpen ? "hdr-mobile-panel--active" : ""}`}>
        <div className="hdr-mobile-panel__inner">
          {/* Mobile Logo & Close */}
          <div className="hdr-mobile-panel__header">
            <Link to="/" className="hdr-logo" onClick={() => setHdrMobileOpen(false)}>
              <div className="hdr-logo__mark">
                <img src={logoImg} alt="Futuremax Technology" className="hdr-logo__img" />
              </div>
              <div className="hdr-logo__text">
                <span className="hdr-logo__name">FUTUREMAX</span>
              </div>
            </Link>
            <button className="hdr-mobile-panel__close" onClick={() => setHdrMobileOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="hdr-mobile-nav">
            {hdrNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `hdr-mobile-nav__link ${isActive ? "hdr-mobile-nav__link--active" : ""}`}
                onClick={() => setHdrMobileOpen(false)}
                end={item.path === "/"}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="hdr-mobile-panel__footer">
            <Link to="/contact" className="hdr-mobile-panel__cta" onClick={() => setHdrMobileOpen(false)}>
              <span>Get Free RF Site Survey</span>
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="hdr-mobile-panel__contact">
              <a href="tel:+918848749897" className="hdr-mobile-panel__contact-link">
  <svg viewBox="0 0 16 16" fill="none">
    <path d="M3 1h3l1 3-2 1.5a9 9 0 005.5 5.5L12 9l3 1v3a2 2 0 01-2 2A13 13 0 011 3a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
  +91 88487 49897
</a>
<a href="mailto:futuremaxtech@hotmail.com" className="hdr-mobile-panel__contact-link">
  <svg viewBox="0 0 16 16" fill="none">
    <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    <path d="M1.5 3.5L8 9l6.5-5.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
  </svg>
  futuremaxtech@hotmail.com
</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;