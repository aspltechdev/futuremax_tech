// import React from "react";
// import {
//   MapPin,
//   Phone,
//   Mail,
//   ArrowUpRight,
//   Linkedin,
//   Instagram,
//   Facebook,
//   Youtube,
// } from "lucide-react";

// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="footer">

//       <div className="container">

//         {/* Top Footer */}

//         <div className="footer-top">

//           {/* Company */}

//           <div className="footer-about">

//             <img
//               src="/images/logo-white.png"
//               alt="Futuremax Technology"
//               className="footer-logo"
//             />

//             <p>
//               Futuremax Technology delivers intelligent wireless
//               connectivity solutions, RF engineering, and enterprise
//               signal enhancement systems for commercial, industrial,
//               healthcare, hospitality, and residential environments.
//             </p>

//             <div className="social-links">

//               <a href="#">
//                 <Linkedin size={20} />
//               </a>

//               <a href="#">
//                 <Instagram size={20} />
//               </a>

//               <a href="#">
//                 <Facebook size={20} />
//               </a>

//               <a href="#">
//                 <Youtube size={20} />
//               </a>

//             </div>

//           </div>

//           {/* Quick Links */}

//           <div className="footer-links">

//             <h3>Company</h3>

//             <Link to="/">Home</Link>
//             <Link to="/about">About</Link>
//             <Link to="/solutions">Solutions</Link>
//             <Link to="/products">Products</Link>
//             <Link to="/projects">Projects</Link>

//           </div>

//           {/* Services */}

//           <div className="footer-links">

//             <h3>Solutions</h3>

//             <Link to="/">Residential</Link>
//             <Link to="/">Commercial</Link>
//             <Link to="/">Industrial</Link>
//             <Link to="/">Healthcare</Link>
//             <Link to="/">Hospitality</Link>

//           </div>

//           {/* Contact */}

//           <div className="footer-contact">

//             <h3>Contact</h3>

//             <div className="contact-item">

//               <MapPin size={18} />

//               <span>
//                 Kochi, Kerala, India
//               </span>

//             </div>

//             <div className="contact-item">

//               <Phone size={18} />

//               <span>
//                 +91 88487 49897
//               </span>

//             </div>

//             <div className="contact-item">

//               <Mail size={18} />

//               <span>
//                 futuremaxtechnologies@hotmail.com
//               </span>

//             </div>

//             <a href="/contact" className="footer-btn">

//               Contact Sales

//               <ArrowUpRight size={18}/>

//             </a>

//           </div>

//         </div>

//         {/* Middle */}

//         <div className="footer-middle">

//           <div>

//             <h4>Industries</h4>

//             <p>
//               Hospitality • Healthcare • Corporate • Industrial •
//               Education • Residential
//             </p>

//           </div>

//           <div>

//             <h4>Technology</h4>

//             <p>
//               RF Engineering • IoT • 4G • 5G • Signal Boosters
//             </p>

//           </div>

//         </div>

//         {/* Bottom */}

//         <div className="footer-bottom">

//           <p>
//             © {new Date().getFullYear()} Futuremax Technology.
//             All Rights Reserved.
//           </p>

//           <div className="footer-policy">

//             <a href="/">Privacy Policy</a>

//             <a href="/">Terms & Conditions</a>

//             <a href="/">Sitemap</a>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";

import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from "lucide-react";

import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

import "../../styles/footer.css";

// import Logo from "../../assets/logos/logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="container">

        {/* Top */}

        <div className="footer-top">

          {/* Company */}

          <div className="footer-about">

            {/* Uncomment when logo is available */}

            {/* <img src={Logo} alt="Futuremax" className="footer-logo" /> */}

            <h2 className="footer-brand">
              FUTUREMAX
            </h2>

            <p>
              Futuremax Technology delivers enterprise-grade
              wireless connectivity, RF engineering and
              intelligent signal enhancement solutions for
              commercial, industrial and residential
              environments.
            </p>

            <div className="social-links">

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Company */}

          <div className="footer-links">

            <h3>Company</h3>

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/solutions">Solutions</Link>

            <Link to="/products">Products</Link>

            <Link to="/projects">Projects</Link>

            <Link to="/contact">Contact</Link>

          </div>

          {/* Solutions */}

          <div className="footer-links">

            <h3>Solutions</h3>

            <Link to="/">Residential</Link>

            <Link to="/">Commercial</Link>

            <Link to="/">Industrial</Link>

            <Link to="/">Healthcare</Link>

            <Link to="/">Hospitality</Link>

          </div>

          {/* Contact */}

          <div className="footer-contact">

            <h3>Contact</h3>

            <div className="contact-item">

              <MapPin size={18} />

              <span>
                Kochi, Kerala, India
              </span>

            </div>

            <div className="contact-item">

              <Phone size={18} />

              <span>
                +91 88487 49897
              </span>

            </div>

            <div className="contact-item">

              <Mail size={18} />

              <span>
                futuremaxtechnologies@hotmail.com
              </span>

            </div>

            <Link
              to="/contact"
              className="footer-btn"
            >
              Contact Sales

              <ArrowUpRight size={18} />

            </Link>

          </div>

        </div>

        {/* Middle */}

        <div className="footer-middle">

          <div>

            <h4>Industries</h4>

            <p>
              Hospitality • Healthcare • Corporate • Industrial • Education • Residential
            </p>

          </div>

          <div>

            <h4>Technology</h4>

            <p>
              RF Engineering • 4G • 5G • IoT • Signal Boosters
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Futuremax Technology.
            All Rights Reserved.
          </p>

          <div className="footer-policy">

            <Link to="/">Privacy Policy</Link>

            <Link to="/">Terms & Conditions</Link>

            <Link to="/">Sitemap</Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;