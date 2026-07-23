import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  const ftrYear = new Date().getFullYear();

  // Real pages -> rendered as <Link>
  const ftrQuickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/solutions", label: "Solutions" },
    { path: "/products", label: "Products" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  // Not separate pages -> plain data/text only
  const ftrSolutions = [
    { label: "Mobile Signal Boosters" },
    { label: "RF Engineering" },
    { label: "DAS Systems" },
    { label: "Site Survey & Planning" },
    { label: "Installation & AMC" },
    { label: "i Booster Series" },
  ];

  // Not separate pages -> plain data/text only
  const ftrIndustries = [
    { label: "Hotels & Hospitality" },
    { label: "Hospitals & Healthcare" },
    { label: "Commercial Buildings" },
    { label: "Industrial & Manufacturing" },
    { label: "Education & Campuses" },
    { label: "Residential Communities" },
  ];

  const ftrSocialLinks = [
    { icon: <FaLinkedinIn />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" },
    { icon: <FaFacebookF />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaYoutube />, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="ftr-footer">
      {/* Main Footer */}
      <div className="ftr-main">
        <div className="ftr-container">
          <div className="ftr-grid">
            {/* Company Info */}
            <div className="ftr-col ftr-col--brand">
              <Link to="/" className="ftr-logo">
                <div className="ftr-logo__mark">
                  <img src={footerLogo} alt="Futuremax Technology" className="ftr-logo__img" />
                </div>
                <span className="ftr-logo__name">FUTUREMAX</span>
              </Link>
              <p className="ftr-desc">
                Futuremax Technology delivers enterprise-grade wireless connectivity,
                RF engineering and intelligent signal enhancement solutions for
                commercial, industrial and residential environments across India.
              </p>
              <div className="ftr-social">
                {ftrSocialLinks.map((social, index) => (
                  
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="ftr-social__link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links - actual pages, rendered as Link */}
            <div className="ftr-col">
              <h3 className="ftr-heading">Quick Links</h3>
              <ul className="ftr-links">
                {ftrQuickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="ftr-links__item">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions - not real pages, plain text data */}
            <div className="ftr-col">
              <h3 className="ftr-heading">Solutions</h3>
              <ul className="ftr-links">
                {ftrSolutions.map((item, index) => (
                  <li key={index}>
                    <span className="ftr-links__item ftr-links__item--static">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries - not real pages, plain text data */}
            <div className="ftr-col">
              <h3 className="ftr-heading">Industries</h3>
              <ul className="ftr-links">
                {ftrIndustries.map((item, index) => (
                  <li key={index}>
                    <span className="ftr-links__item ftr-links__item--static">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="ftr-col ftr-col--contact">
              <h3 className="ftr-heading">Get in Touch</h3>
              <div className="ftr-contact">
                <div className="ftr-contact__item">
                  <MapPin size={18} strokeWidth={1.5} className="ftr-contact__icon" />
                  <span>Kochi, Kerala, India</span>
                </div>
                <div className="ftr-contact__item">
                  <Phone size={18} strokeWidth={1.5} className="ftr-contact__icon" />
                  <a href="tel:+918848749897">+91 88487 49897</a>
                </div>
                <div className="ftr-contact__item">
                  <Mail size={18} strokeWidth={1.5} className="ftr-contact__icon" />
                  <a href="mailto:futuremaxtechnologies@hotmail.com">futuremaxtechnologies@hotmail.com</a>
                </div>
              </div>
              <Link to="/contact" className="ftr-cta">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Bar */}
      <div className="ftr-tech">
        <div className="ftr-container">
          <div className="ftr-tech__content">
            <div className="ftr-tech__item">
              <span className="ftr-tech__label">Technologies</span>
              <span className="ftr-tech__value">RF Engineering • 4G • 5G • DAS • Signal Boosters • IoT</span>
            </div>
            <div className="ftr-tech__item">
              <span className="ftr-tech__label">Coverage</span>
              <span className="ftr-tech__value">Pan India Service Network</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="ftr-bottom">
        <div className="ftr-container">
          <div className="ftr-bottom__content">
            <p className="ftr-bottom__copyright">
              © {ftrYear} Futuremax Technology. All Rights Reserved.
            </p>
            <div className="ftr-bottom__links">
              <Link to="/privacy" className="ftr-bottom__link">Privacy Policy</Link>
              <span className="ftr-bottom__divider">•</span>
              <Link to="/terms" className="ftr-bottom__link">Terms & Conditions</Link>
              <span className="ftr-bottom__divider">•</span>
              <Link to="/sitemap" className="ftr-bottom__link">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;