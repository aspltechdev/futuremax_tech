// import React, { useEffect, useState } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { Menu, X, ArrowRight } from "lucide-react";
// import "./Header.css";

// const Header = () => {
//   const [ufSticky, setUfSticky] = useState(false);
//   const [ufMobileMenu, setUfMobileMenu] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setUfSticky(window.scrollY > 60);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setUfMobileMenu(false);
//   }, [location]);

//   useEffect(() => {
//     document.body.style.overflow = ufMobileMenu ? "hidden" : "";
//     return () => { document.body.style.overflow = ""; };
//   }, [ufMobileMenu]);

//   const ufNavItems = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About" },
//     { path: "/solutions", label: "Solutions" },
//     { path: "/products", label: "Products" },
//     { path: "/technology", label: "Technology" },
//     { path: "/industries", label: "Industries" },
//     { path: "/projects", label: "Projects" },
//   ];

//   return (
//     <header className={`uf-header ${ufSticky ? "uf-sticky" : ""} ${ufMobileMenu ? "uf-menu-open" : ""}`}>
//       <div className="uf-container">
//         <div className="uf-header-row">
//           {/* Logo */}
//           <Link to="/" className="uf-logo" onClick={() => setUfMobileMenu(false)}>
//             <svg className="uf-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="20" cy="20" r="19" stroke="#0857A1" strokeWidth="1.5" fill="none"/>
//               <path d="M14 27L20 8L26 27H14Z" fill="#0857A1"/>
//               <circle cx="20" cy="20" r="3" fill="#F2F4F6"/>
//             </svg>
//             <div className="uf-logo-text">
//               <span className="uf-logo-name">FUTUREMAX</span>
//               <span className="uf-logo-tag">Engineering Connectivity</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="uf-nav">
//             {ufNavItems.map((item) => (
//               <NavLink key={item.path} to={item.path} className="uf-nav-link" end={item.path === "/"}>
//                 {item.label}
//               </NavLink>
//             ))}
//           </nav>

//           {/* CTA & Mobile Toggle */}
//           <div className="uf-header-right">
//             <Link to="/contact" className="uf-btn">
//               <span>Get Free Survey</span>
//               <ArrowRight size={15} />
//             </Link>
//             <button
//               className={`uf-menu-btn ${ufMobileMenu ? "uf-active" : ""}`}
//               onClick={() => setUfMobileMenu(!ufMobileMenu)}
//               aria-label="Toggle menu"
//             >
//               {ufMobileMenu ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`uf-mobile-overlay ${ufMobileMenu ? "uf-active" : ""}`} onClick={() => setUfMobileMenu(false)} />
//       <div className={`uf-mobile-menu ${ufMobileMenu ? "uf-active" : ""}`}>
//         <div className="uf-mobile-menu-top">
//           <Link to="/" className="uf-logo" onClick={() => setUfMobileMenu(false)}>
//             <svg className="uf-logo-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <circle cx="20" cy="20" r="19" stroke="#0857A1" strokeWidth="1.5" fill="none"/>
//               <path d="M14 27L20 8L26 27H14Z" fill="#0857A1"/>
//               <circle cx="20" cy="20" r="3" fill="#F2F4F6"/>
//             </svg>
//             <div className="uf-logo-text">
//               <span className="uf-logo-name">FUTUREMAX</span>
//               <span className="uf-logo-tag">Engineering Connectivity</span>
//             </div>
//           </Link>
//           <button className="uf-menu-close" onClick={() => setUfMobileMenu(false)}>
//             <X size={20} />
//           </button>
//         </div>
//         <nav className="uf-mobile-nav">
//           {ufNavItems.map((item) => (
//             <NavLink key={item.path} to={item.path} className="uf-mobile-link" end={item.path === "/"} onClick={() => setUfMobileMenu(false)}>
//               {item.label}
//             </NavLink>
//           ))}
//         </nav>
//         <div className="uf-mobile-menu-bottom">
//           <Link to="/contact" className="uf-btn uf-btn-full" onClick={() => setUfMobileMenu(false)}>
//             <span>Get Free Site Survey</span>
//             <ArrowRight size={15} />
//           </Link>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const navItems = [
    {
      label: "Solutions",
      path: "/solutions",
      dropdown: [
        { label: "Mobile Signal Booster", path: "/solutions/mobile-signal-booster" },
        { label: "DAS Systems", path: "/solutions/das-systems" },
        { label: "RF Engineering", path: "/solutions/rf-engineering" },
        { label: "Wireless Connectivity", path: "/solutions/wireless-connectivity" },
      ],
    },
    {
      label: "Products",
      path: "/products",
      dropdown: [
        { label: "i Booster 23 dBm", path: "/products/i-booster-23" },
        { label: "i Booster 25 dBm", path: "/products/i-booster-25" },
        { label: "i Booster 27 dBm", path: "/products/i-booster-27" },
        { label: "View All Products", path: "/products" },
      ],
    },
    { label: "Industries", path: "/industries" },
    { label: "Projects", path: "/projects" },
    { label: "Technology", path: "/technology" },
    { label: "About", path: "/about" },
  ];

  return (
    <header
      ref={headerRef}
      className={`header-premium ${isSticky ? "header-sticky" : ""} ${isMobileOpen ? "header-mobile-open" : ""}`}
    >
      {/* Top Utility Bar */}
      <div className="header-utility">
        <div className="header-utility-inner">
          <div className="utility-left">
            <span className="utility-item">
              <svg viewBox="0 0 16 16" fill="none" className="utility-icon">
                <path d="M8 1L10.5 6L16 7L11.5 10.5L13 16L8 13L3 16L4.5 10.5L0 7L5.5 6L8 1Z" fill="currentColor"/>
              </svg>
              ISO 9001:2015 Certified
            </span>
            <span className="utility-divider">|</span>
            <span className="utility-item">Made in India</span>
            <span className="utility-divider">|</span>
            <span className="utility-item">Pan India Service Network</span>
          </div>
          <div className="utility-right">
            <a href="tel:+919876543210" className="utility-link">
              <svg viewBox="0 0 16 16" fill="none" className="utility-icon">
                <path d="M3 1h3l1 3-2 1.5a9 9 0 005.5 5.5L12 9l3 1v3a2 2 0 01-2 2A13 13 0 011 3a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              +91 98765 43210
            </a>
            <span className="utility-divider">|</span>
            <a href="mailto:info@futuremax.com" className="utility-link">
              <svg viewBox="0 0 16 16" fill="none" className="utility-icon">
                <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                <path d="M1.5 3.5L8 9l6.5-5.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              </svg>
              info@futuremax.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="header-main">
        <div className="header-main-inner">
          {/* Logo */}
          <Link to="/" className="header-logo" onClick={() => setIsMobileOpen(false)}>
            <div className="logo-mark">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                <path d="M14 27L20 8L26 27H14Z" fill="currentColor"/>
                <circle cx="20" cy="20" r="3" fill="white"/>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-name">FUTUREMAX</span>
              <span className="logo-subtitle">RF Engineering & Wireless Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="nav-item-wrapper"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? "nav-link-active" : ""}`}
                  end={item.path === "/"}
                >
                  {item.label}
                  {item.dropdown && (
                    <svg viewBox="0 0 16 16" fill="none" className="nav-chevron">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </NavLink>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.label && (
                  <div className="nav-dropdown">
                    <div className="dropdown-inner">
                      {item.dropdown.map((subItem) => (
                        <Link key={subItem.path} to={subItem.path} className="dropdown-link">
                          <span className="dropdown-link-text">{subItem.label}</span>
                          <svg viewBox="0 0 16 16" fill="none" className="dropdown-arrow">
                            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="header-actions">
            <Link to="/contact" className="header-cta">
              <span>Get Free RF Survey</span>
              <svg viewBox="0 0 20 20" fill="none" className="cta-arrow">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>

            {/* Mobile Toggle */}
            <button
              className={`header-mobile-toggle ${isMobileOpen ? "active" : ""}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="toggle-bar toggle-bar-1" />
              <span className="toggle-bar toggle-bar-2" />
              <span className="toggle-bar toggle-bar-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-overlay ${isMobileOpen ? "active" : ""}`}
        onClick={() => setIsMobileOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div className={`mobile-panel ${isMobileOpen ? "active" : ""}`}>
        <div className="mobile-panel-inner">
          {/* Mobile Logo & Close */}
          <div className="mobile-panel-header">
            <Link to="/" className="header-logo" onClick={() => setIsMobileOpen(false)}>
              <div className="logo-mark">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <path d="M14 27L20 8L26 27H14Z" fill="currentColor"/>
                  <circle cx="20" cy="20" r="3" fill="white"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-name">FUTUREMAX</span>
              </div>
            </Link>
            <button className="mobile-close-btn" onClick={() => setIsMobileOpen(false)}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="mobile-nav">
            {navItems.map((item) => (
              <div key={item.path} className="mobile-nav-group">
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? "active" : ""}`}
                  onClick={() => setIsMobileOpen(false)}
                  end={item.path === "/"}
                >
                  {item.label}
                </NavLink>
                {item.dropdown && (
                  <div className="mobile-subnav">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className="mobile-subnav-link"
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="mobile-panel-footer">
            <Link to="/contact" className="mobile-cta" onClick={() => setIsMobileOpen(false)}>
              <span>Get Free RF Site Survey</span>
              <svg viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <div className="mobile-contact">
              <a href="tel:+919876543210" className="mobile-contact-link">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 1h3l1 3-2 1.5a9 9 0 005.5 5.5L12 9l3 1v3a2 2 0 01-2 2A13 13 0 011 3a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                </svg>
                +91 98765 43210
              </a>
              <a href="mailto:info@futuremax.com" className="mobile-contact-link">
                <svg viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="3" width="14" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                  <path d="M1.5 3.5L8 9l6.5-5.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                </svg>
                info@futuremax.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;