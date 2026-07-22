// import React from "react";
// import { Link } from "react-router-dom";
// import { MapPin, Phone, Mail, ArrowRight, ChevronRight } from "lucide-react";
// import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer">
//       {/* Main Footer */}
//       <div className="footer-main">
//         <div className="container">
//           <div className="footer-grid">
//             {/* Company Info */}
//             <div className="footer-col footer-col--brand">
//               <Link to="/" className="footer-logo">
//                 <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="footer-logo-icon">
//                   <circle cx="20" cy="20" r="19" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.3"/>
//                   <circle cx="20" cy="20" r="19" stroke="url(#footerLogoGradient)" strokeWidth="1.5" fill="none"/>
//                   <path d="M14 27L20 8L26 27H14Z" fill="url(#footerLogoGradient)"/>
//                   <circle cx="20" cy="20" r="3" fill="#203A64"/>
//                   <defs>
//                     <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                       <stop offset="0%" stopColor="#1AA64C"/>
//                       <stop offset="100%" stopColor="#36C275"/>
//                     </linearGradient>
//                   </defs>
//                 </svg>
//                 <span className="footer-logo-text">FUTUREMAX</span>
//               </Link>
//               <p className="footer-description">
//                 Futuremax Technology delivers enterprise-grade wireless connectivity, 
//                 RF engineering and intelligent signal enhancement solutions for 
//                 commercial, industrial and residential environments.
//               </p>
//               <div className="footer-social">
//                 <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
//                   <FaLinkedinIn />
//                 </a>
//                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
//                   <FaInstagram />
//                 </a>
//                 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">
//                   <FaFacebookF />
//                 </a>
//                 <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-link" aria-label="YouTube">
//                   <FaYoutube />
//                 </a>
//               </div>
//             </div>

//             {/* Quick Links */}
//             <div className="footer-col">
//               <h3 className="footer-heading">Quick Links</h3>
//               <ul className="footer-links">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About Us</Link></li>
//                 <li><Link to="/solutions">Solutions</Link></li>
//                 <li><Link to="/products">Products</Link></li>
//                 <li><Link to="/projects">Projects</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//               </ul>
//             </div>

//             {/* Solutions */}
//             <div className="footer-col">
//               <h3 className="footer-heading">Solutions</h3>
//               <ul className="footer-links">
//                 <li><Link to="/solutions">Enterprise Connectivity</Link></li>
//                 <li><Link to="/solutions">RF Engineering</Link></li>
//                 <li><Link to="/solutions">DAS Systems</Link></li>
//                 <li><Link to="/solutions">Signal Boosters</Link></li>
//                 <li><Link to="/solutions">Site Survey</Link></li>
//                 <li><Link to="/solutions">AMC Support</Link></li>
//               </ul>
//             </div>

//             {/* Industries */}
//             <div className="footer-col">
//               <h3 className="footer-heading">Industries</h3>
//               <ul className="footer-links">
//                 <li><Link to="/industries">Hospitality</Link></li>
//                 <li><Link to="/industries">Healthcare</Link></li>
//                 <li><Link to="/industries">Corporate Offices</Link></li>
//                 <li><Link to="/industries">Industrial</Link></li>
//                 <li><Link to="/industries">Education</Link></li>
//                 <li><Link to="/industries">Residential</Link></li>
//               </ul>
//             </div>

//             {/* Contact */}
//             <div className="footer-col footer-col--contact">
//               <h3 className="footer-heading">Get in Touch</h3>
//               <div className="footer-contact-list">
//                 <div className="footer-contact-item">
//                   <MapPin size={18} strokeWidth={1.5} />
//                   <span>Kochi, Kerala, India</span>
//                 </div>
//                 <div className="footer-contact-item">
//                   <Phone size={18} strokeWidth={1.5} />
//                   <a href="tel:+918848749897">+91 88487 49897</a>
//                 </div>
//                 <div className="footer-contact-item">
//                   <Mail size={18} strokeWidth={1.5} />
//                   <a href="mailto:futuremaxtechnologies@hotmail.com">futuremaxtechnologies@hotmail.com</a>
//                 </div>
//               </div>
//               <Link to="/contact" className="footer-cta">
//                 <span>Request Site Survey</span>
//                 <ArrowRight size={15} />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Technology Bar */}
//       <div className="footer-tech">
//         <div className="container">
//           <div className="footer-tech-content">
//             <div className="footer-tech-item">
//               <span className="footer-tech-label">Technologies</span>
//               <span className="footer-tech-value">RF Engineering • 4G • 5G • IoT • DAS • Signal Boosters</span>
//             </div>
//             <div className="footer-tech-item">
//               <span className="footer-tech-label">Coverage</span>
//               <span className="footer-tech-value">Pan India Service Network</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="footer-bottom">
//         <div className="container">
//           <div className="footer-bottom-content">
//             <p className="footer-copyright">
//               © {currentYear} Futuremax Technology. All Rights Reserved.
//             </p>
//             <div className="footer-bottom-links">
//               <Link to="/privacy">Privacy Policy</Link>
//               <span className="footer-divider">•</span>
//               <Link to="/terms">Terms & Conditions</Link>
//               <span className="footer-divider">•</span>
//               <Link to="/sitemap">Sitemap</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import "./Footer.css";
import footerLogo from "../../assets/logo.png";

const Footer = () => {
  const ftrYear = new Date().getFullYear();

  const ftrQuickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/solutions", label: "Solutions" },
    { path: "/products", label: "Products" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  const ftrSolutions = [
    {  label: "Mobile Signal Boosters" },
    {  label: "RF Engineering" },
    { path: "/solutions", label: "DAS Systems" },
    { path: "/solutions", label: "Site Survey & Planning" },
    { path: "/solutions", label: "Installation & AMC" },
    { path: "/products", label: "i Booster Series" },
  ];

  const ftrIndustries = [
    { path: "/industries", label: "Hotels & Hospitality" },
    { path: "/industries", label: "Hospitals & Healthcare" },
    { path: "/industries", label: "Commercial Buildings" },
    { path: "/industries", label: "Industrial & Manufacturing" },
    { path: "/industries", label: "Education & Campuses" },
    { path: "/industries", label: "Residential Communities" },
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
                  <a
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

            {/* Quick Links */}
            <div className="ftr-col">
              <h3 className="ftr-heading">Quick Links</h3>
              <ul className="ftr-links">
                {ftrQuickLinks.map((link, index) => (
                  <li key={index}><Link to={link.path} className="ftr-links__item">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="ftr-col">
              <h3 className="ftr-heading">Solutions</h3>
              <ul className="ftr-links">
                {ftrSolutions.map((link, index) => (
                  <li key={index}><Link to={link.path} className="ftr-links__item">{link.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div className="ftr-col">
              <h3 className="ftr-heading">Industries</h3>
              <ul className="ftr-links">
                {ftrIndustries.map((link, index) => (
                  <li key={index}><Link to={link.path} className="ftr-links__item">{link.label}</Link></li>
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