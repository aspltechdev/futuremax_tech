import React from "react";
import "./Clients.css";

import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";
import logo10 from "../../assets/logo10.png";
import logo11 from "../../assets/logo11.png";
import logo12 from "../../assets/logo12.png";
import logo13 from "../../assets/logo13.png";
import logo14 from "../../assets/logo14.png";
import logo15 from "../../assets/logo15.png";
import logo16 from "../../assets/logo16.png";
import logo17 from "../../assets/logo17.png";
import logo18 from "../../assets/logo18.png";
import logo19 from "../../assets/logo19.png";
import logo20 from "../../assets/logo20.png";
import logo21 from "../../assets/logo21.png";
import logo22 from "../../assets/logo22.png";
import logo23 from "../../assets/logo23.png";
import logo24 from "../../assets/logo24.png";
import logo25 from "../../assets/logo25.png";
import logo26 from "../../assets/logo26.png";
import logo27 from "../../assets/logo27.png";
import logo28 from "../../assets/logo28.png";
import logo29 from "../../assets/logo29.png";
import logo30 from "../../assets/logo30.png";
import logo31 from "../../assets/logo31.png";
import logo32 from "../../assets/logo32.png";
import logo33 from "../../assets/logo33.png";
import logo34 from "../../assets/logo34.png";
import logo35 from "../../assets/logo35.png";
import logo36 from "../../assets/logo36.png";
import logo37 from "../../assets/logo37.png";
import logo38 from "../../assets/logo38.png";
import logo39 from "../../assets/logo39.png";
import logo40 from "../../assets/logo40.png";
import logo41 from "../../assets/logo41.png";
import logo42 from "../../assets/logo42.png";
import logo43 from "../../assets/logo43.png";
import logo44 from "../../assets/logo44.png";
import logo45 from "../../assets/logo45.png";
import logo46 from "../../assets/logo46.png";
import logo47 from "../../assets/logo47.png";
import logo48 from "../../assets/logo48.png";
import logo49 from "../../assets/logo49.png";

const clientLogos = [
  { id: 1, src: logo1, alt: "Client logo 1" },
  { id: 2, src: logo2, alt: "Client logo 2" },
  { id: 3, src: logo3, alt: "Client logo 3" },
  { id: 4, src: logo4, alt: "Client logo 4" },
  { id: 5, src: logo5, alt: "Client logo 5" },
  { id: 6, src: logo6, alt: "Client logo 6" },
  { id: 7, src: logo7, alt: "Client logo 7" },
  { id: 8, src: logo8, alt: "Client logo 8" },
  { id: 9, src: logo9, alt: "Client logo 9" },
  { id: 10, src: logo10, alt: "Client logo 10" },
  { id: 11, src: logo11, alt: "Client logo 11" },
  { id: 12, src: logo12, alt: "Client logo 12" },
  { id: 13, src: logo13, alt: "Client logo 13" },
  { id: 14, src: logo14, alt: "Client logo 14" },
  { id: 15, src: logo15, alt: "Client logo 15" },
  { id: 16, src: logo16, alt: "Client logo 16" },
  { id: 17, src: logo17, alt: "Client logo 17" },
  { id: 18, src: logo18, alt: "Client logo 18" },
  { id: 19, src: logo19, alt: "Client logo 19" },
  { id: 20, src: logo20, alt: "Client logo 20" },
  { id: 21, src: logo21, alt: "Client logo 21" },
  { id: 22, src: logo22, alt: "Client logo 22" },
  { id: 23, src: logo23, alt: "Client logo 23" },
  { id: 24, src: logo24, alt: "Client logo 24" },
  { id: 25, src: logo25, alt: "Client logo 25" },
  { id: 26, src: logo26, alt: "Client logo 26" },
  { id: 27, src: logo27, alt: "Client logo 27" },
  { id: 28, src: logo28, alt: "Client logo 28" },
  { id: 29, src: logo29, alt: "Client logo 29" },
  { id: 30, src: logo30, alt: "Client logo 30" },
  { id: 31, src: logo31, alt: "Client logo 31" },
  { id: 32, src: logo32, alt: "Client logo 32" },
  { id: 33, src: logo33, alt: "Client logo 33" },
  { id: 34, src: logo34, alt: "Client logo 34" },
  { id: 35, src: logo35, alt: "Client logo 35" },
  { id: 36, src: logo36, alt: "Client logo 36" },
  { id: 37, src: logo37, alt: "Client logo 37" },
  { id: 38, src: logo38, alt: "Client logo 38" },
  { id: 39, src: logo39, alt: "Client logo 39" },
  { id: 40, src: logo40, alt: "Client logo 40" },
  { id: 41, src: logo41, alt: "Client logo 41" },
  { id: 42, src: logo42, alt: "Client logo 42" },
  { id: 43, src: logo43, alt: "Client logo 43" },
  { id: 44, src: logo44, alt: "Client logo 44" },
  { id: 45, src: logo45, alt: "Client logo 45" },
  { id: 46, src: logo46, alt: "Client logo 46" },
  { id: 47, src: logo47, alt: "Client logo 47" },
  { id: 48, src: logo48, alt: "Client logo 48" },
  { id: 49, src: logo49, alt: "Client logo 49" },
];

// 49 logos split alternately into two rows (25 in row 1, 24 in row 2),
// evenly mixed rather than a plain first-half/second-half split
const row1Logos = clientLogos.filter((_, index) => index % 2 === 0);
const row2Logos = clientLogos.filter((_, index) => index % 2 !== 0);

// Duplicate each row so its marquee track can loop seamlessly (translate -50%)
const row1Marquee = [...row1Logos, ...row1Logos];
const row2Marquee = [...row2Logos, ...row2Logos];

const Clients = () => {
  return (
    <section className="cl-section">
      <div className="cl-header">
        <span className="cl-eyebrow">Our Clients</span>
        <h2 className="cl-heading">
          Trusted By <span className="cl-heading-gradient">Leading Clients</span>
        </h2>
        <p className="cl-subtitle">
          We are proud to work with organizations across industries.
        </p>
      </div>

      <div className="cl-marquee-wrapper">
        <div className="cl-marquee-track cl-marquee-track--right">
          {row1Marquee.map((logo, index) => (
            <div className="cl-logo-card" key={`row1-${logo.id}-${index}`}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="cl-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="cl-marquee-wrapper">
        <div className="cl-marquee-track cl-marquee-track--left">
          {row2Marquee.map((logo, index) => (
            <div className="cl-logo-card" key={`row2-${logo.id}-${index}`}>
              <img
                src={logo.src}
                alt={logo.alt}
                className="cl-logo-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;