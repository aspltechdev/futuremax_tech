import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import "./Header.css";

const Header = () => {
  const [ufSticky, setUfSticky] = useState(false);
  const [ufMobileMenu, setUfMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setUfSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setUfMobileMenu(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = ufMobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [ufMobileMenu]);

  const ufNavItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/solutions", label: "Solutions" },
    { path: "/products", label: "Products" },
    { path: "/technology", label: "Technology" },
    { path: "/industries", label: "Industries" },
    { path: "/projects", label: "Projects" },
  ];

  return (
    <header className={`uf-header ${ufSticky ? "uf-sticky" : ""} ${ufMobileMenu ? "uf-menu-open" : ""}`}>
      <div className="uf-container">
        <div className="uf-header-row">
          {/* Logo */}
          <Link to="/" className="uf-logo" onClick={() => setUfMobileMenu(false)}>
            <svg className="uf-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="#0857A1" strokeWidth="1.5" fill="none"/>
              <path d="M14 27L20 8L26 27H14Z" fill="#0857A1"/>
              <circle cx="20" cy="20" r="3" fill="#F2F4F6"/>
            </svg>
            <div className="uf-logo-text">
              <span className="uf-logo-name">FUTUREMAX</span>
              <span className="uf-logo-tag">Engineering Connectivity</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="uf-nav">
            {ufNavItems.map((item) => (
              <NavLink key={item.path} to={item.path} className="uf-nav-link" end={item.path === "/"}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="uf-header-right">
            <Link to="/contact" className="uf-btn">
              <span>Get Free Survey</span>
              <ArrowRight size={15} />
            </Link>
            <button
              className={`uf-menu-btn ${ufMobileMenu ? "uf-active" : ""}`}
              onClick={() => setUfMobileMenu(!ufMobileMenu)}
              aria-label="Toggle menu"
            >
              {ufMobileMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`uf-mobile-overlay ${ufMobileMenu ? "uf-active" : ""}`} onClick={() => setUfMobileMenu(false)} />
      <div className={`uf-mobile-menu ${ufMobileMenu ? "uf-active" : ""}`}>
        <div className="uf-mobile-menu-top">
          <Link to="/" className="uf-logo" onClick={() => setUfMobileMenu(false)}>
            <svg className="uf-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="19" stroke="#0857A1" strokeWidth="1.5" fill="none"/>
              <path d="M14 27L20 8L26 27H14Z" fill="#0857A1"/>
              <circle cx="20" cy="20" r="3" fill="#F2F4F6"/>
            </svg>
            <div className="uf-logo-text">
              <span className="uf-logo-name">FUTUREMAX</span>
              <span className="uf-logo-tag">Engineering Connectivity</span>
            </div>
          </Link>
          <button className="uf-menu-close" onClick={() => setUfMobileMenu(false)}>
            <X size={20} />
          </button>
        </div>
        <nav className="uf-mobile-nav">
          {ufNavItems.map((item) => (
            <NavLink key={item.path} to={item.path} className="uf-mobile-link" end={item.path === "/"} onClick={() => setUfMobileMenu(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="uf-mobile-menu-bottom">
          <Link to="/contact" className="uf-btn uf-btn-full" onClick={() => setUfMobileMenu(false)}>
            <span>Get Free Site Survey</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;