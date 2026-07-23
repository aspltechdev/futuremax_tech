// import React, { useEffect, useRef, useState } from "react";
// import "./SolutionsPreview.css";

// // Import your images
// import residentialImg from "../../assets/hero1.png";
// import commercialImg from "../../assets/hero1.png";
// import enterpriseImg from "../../assets/hero1.png";
// import dasImg from "../../assets/hero1.png";
// import rfImg from "../../assets/hero1.png";
// import supportImg from "../../assets/hero1.png";

// const SolutionsPreview = () => {
//   const [scrollY, setScrollY] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const [visibleCards, setVisibleCards] = useState([]);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);
//   const cardsRef = useRef([]);

//   const solutions = [
//     {
//       power: "23 dBm",
//       title: "Residential Booster",
//       subtitle: "i Booster 23",
//       description:
//         "Stable 4G & 5G coverage for homes, apartments, villas, retail shops, and small offices.",
//       coverage: "Up to 300 m²",
//       image: residentialImg,
//       fallbackGradient: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 100%)",
//       accentColor: "#0755A3",
//     },
//     {
//       power: "25 dBm",
//       title: "Commercial Booster",
//       subtitle: "i Booster 25",
//       description:
//         "Seamless mobile connectivity for hotels, hospitals, schools, and commercial buildings.",
//       coverage: "Up to 500 m²",
//       image: commercialImg,
//       fallbackGradient: "linear-gradient(135deg, #0F172A 0%, #1A4A7A 100%)",
//       accentColor: "#0A6FD4",
//     },
//     {
//       power: "27 dBm",
//       title: "Enterprise Booster",
//       subtitle: "i Booster 27",
//       description:
//         "Maximum power for factories, IT parks, airports, and large commercial campuses.",
//       coverage: "Up to 1000+ m²",
//       image: enterpriseImg,
//       fallbackGradient: "linear-gradient(135deg, #0A1F0A 0%, #1A4A2A 100%)",
//       accentColor: "#19AB3F",
//     },
//     {
//       power: "DAS",
//       title: "Distributed Antenna Systems",
//       subtitle: "Custom Design",
//       description:
//         "Custom-engineered DAS for high-rise buildings, malls, and enterprise campuses.",
//       coverage: "Custom Coverage",
//       image: dasImg,
//       fallbackGradient: "linear-gradient(135deg, #1A1030 0%, #2D1B69 100%)",
//       accentColor: "#7C3AED",
//     },
//     {
//       power: "RF",
//       title: "RF Engineering & Survey",
//       subtitle: "Professional Analysis",
//       description:
//         "Professional site surveys, signal analysis, and coverage planning for every project.",
//       coverage: "Pan India",
//       image: rfImg,
//       fallbackGradient: "linear-gradient(135deg, #1A0F00 0%, #4A2A0A 100%)",
//       accentColor: "#EA580C",
//     },
//     {
//       power: "AMC",
//       title: "Installation & Support",
//       subtitle: "End-to-End Service",
//       description:
//         "Complete installation, testing, commissioning, and Annual Maintenance Contracts.",
//       coverage: "24/7 Support",
//       image: supportImg,
//       fallbackGradient: "linear-gradient(135deg, #0A1A0F 0%, #1A4A2A 100%)",
//       accentColor: "#16A34A",
//     },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };

//     const handleMouseMove = (e) => {
//       if (!sectionRef.current) return;
//       const rect = sectionRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100,
//       });
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = Number(entry.target.dataset.index);
//           if (entry.isIntersecting) {
//             setVisibleCards((prev) => [...new Set([...prev, index])]);
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
//     );

//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="solutions-premium" ref={sectionRef}>
//       {/* Background */}
//       <div className="solutions-bg-layer">
//         <div className="solutions-bg-grid" />
//         <div
//           className="solutions-bg-mouse-glow"
//           style={{
//             background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(7,85,163,0.04) 0%, transparent 50%)`,
//           }}
//         />
//       </div>

//       <div className="solutions-premium-container">
//         {/* Section Header */}
//         <div
//           className="solutions-premium-header"
//           style={{
//             transform: `translateY(${scrollY * -0.03}px)`,
//           }}
//         >
//           <div className="header-label">
//             <span className="header-label-line" />
//             Enterprise Wireless Solutions
//           </div>
//           <h2 className="header-title">
//             Complete Mobile Signal
//             <span className="header-title-accent"> Connectivity Solutions</span>
//           </h2>
//           <p className="header-description">
//             End-to-end RF Engineering, Mobile Signal Boosters, and Distributed Antenna Systems. 
//             Our i Booster Series ensures reliable indoor coverage with professional design, 
//             installation, and support across India.
//           </p>
//         </div>

//         {/* Solutions Grid */}
//         <div className="solutions-premium-grid">
//           {solutions.map((solution, index) => (
//             <div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               data-index={index}
//               className={`solution-premium-card ${visibleCards.includes(index) ? "visible" : ""} ${hoveredCard === index ? "hovered" : ""}`}
//               style={{
//                 '--accent-color': solution.accentColor,
//                 transitionDelay: `${index * 0.08}s`,
//               }}
//               onMouseEnter={() => setHoveredCard(index)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               {/* Background Image */}
//               <div
//                 className="card-bg-image"
//                 style={{
//                   backgroundImage: `url(${solution.image})`,
//                   background: solution.fallbackGradient,
//                   transform: hoveredCard === index ? 'scale(1.08)' : 'scale(1)',
//                 }}
//               />

//               {/* Gradient Overlays */}
//               <div className="card-overlay card-overlay-dark" />
//               <div className="card-overlay card-overlay-gradient" />

//               {/* Content */}
//               <div className="card-content-wrapper">
//                 {/* Top: Power Badge */}
//                 <div className="card-top">
//                   <div className="card-power-badge">
//                     <span className="power-dot" style={{ background: solution.accentColor }} />
//                     <span className="power-value">{solution.power}</span>
//                   </div>
//                 </div>

//                 {/* Middle: Title & Description */}
//                 <div className="card-middle">
//                   <span className="card-subtitle">{solution.subtitle}</span>
//                   <h3 className="card-title">{solution.title}</h3>
//                   <p className="card-description">{solution.description}</p>
//                 </div>

//                 {/* Bottom: Coverage */}
//                 <div className="card-bottom">
//                   <div className="card-bottom-line" style={{ background: solution.accentColor }} />
//                   <div className="card-coverage">
//                     <svg viewBox="0 0 16 16" fill="none" className="coverage-icon">
//                       <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
//                       <circle cx="8" cy="8" r="3" fill="currentColor" />
//                     </svg>
//                     <span>{solution.coverage}</span>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Glow Effect */}
//               <div
//                 className="card-hover-glow"
//                 style={{
//                   background: `radial-gradient(ellipse at center, ${solution.accentColor}20 0%, transparent 70%)`,
//                   opacity: hoveredCard === index ? 1 : 0,
//                 }}
//               />
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div
//           className="solutions-premium-cta"
//           style={{
//             transform: `translateY(${scrollY * -0.02}px)`,
//           }}
//         >
//           <a href="/solutions" className="cta-link">
//             <span>View Enterprise Solutions</span>
//             <svg viewBox="0 0 24 24" fill="none">
//               <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SolutionsPreview;


import React, { useEffect, useRef, useState } from "react";
import "./SolutionsPreview.css";

// Import your images
import residentialImg from "../../assets/s1.png";
import commercialImg from "../../assets/s2.png";
import enterpriseImg from "../../assets/s3.png";
import dasImg from "../../assets/s4.png";
import rfImg from "../../assets/s5.png";
import supportImg from "../../assets/s6.png";

const SolutionsPreview = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const solutions = [
    {
      power: "23 dBm",
      title: "Residential Booster",
      subtitle: "i Booster 23",
      description:
        "Stable 4G & 5G coverage for homes, apartments, villas, retail shops, and small offices across all major network operators.",
      coverage: "Up to 300 m²",
      image: residentialImg,
      accentColor: "#0755A3",
      tag: "Most Popular",
    },
    {
      power: "25 dBm",
      title: "Commercial Booster",
      subtitle: "i Booster 25",
      description:
        "Seamless connectivity for hotels, hospitals, schools, and commercial buildings with multi-floor coverage capability.",
      coverage: "Up to 500 m²",
      image: commercialImg,
      accentColor: "#0A6FD4",
      tag: "Best Seller",
    },
    {
      power: "27 dBm",
      title: "Enterprise Booster",
      subtitle: "i Booster 27",
      description:
        "Maximum power for factories, IT parks, airports, and large campuses requiring comprehensive indoor signal coverage.",
      coverage: "Up to 1000+ m²",
      image: enterpriseImg,
      accentColor: "#19AB3F",
      tag: "Enterprise Grade",
    },
    {
      power: "DAS",
      title: "Distributed Antenna Systems",
      subtitle: "Custom DAS Design",
      description:
        "Custom-engineered antenna systems for high-rise buildings, malls, stadiums, and enterprise campuses.",
      coverage: "Custom Coverage",
      image: dasImg,
      accentColor: "#7C3AED",
      tag: "Custom Solution",
    },
    {
      power: "RF",
      title: "RF Engineering & Site Survey",
      subtitle: "Professional Analysis",
      description:
        "Professional RF site surveys, signal strength analysis, coverage planning, and network optimization.",
      coverage: "Pan India",
      image: rfImg,
      accentColor: "#EA580C",
      tag: "Essential",
    },
    {
      power: "AMC",
      title: "Installation & AMC Support",
      subtitle: "End-to-End Service",
      description:
        "Complete installation, testing, commissioning, and Annual Maintenance Contracts for long-term performance.",
      coverage: "24/7 Support",
      image: supportImg,
      accentColor: "#16A34A",
      tag: "Lifetime Support",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-scroll through cards
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView, solutions.length]);

  // Scroll to active card
  useEffect(() => {
    const card = cardRefs.current[activeIndex];
    if (card && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = card.offsetLeft - container.offsetLeft - 20;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [activeIndex]);

  return (
    <section className="solutions-redesign" ref={sectionRef}>
      {/* Background */}
      <div className="sr-bg">
        <div className="sr-bg-gradient" />
        <div className="sr-bg-grid" />
      </div>

      <div className="sr-container">
        {/* Header Row */}
        <div className={`sr-header ${isInView ? "visible" : ""}`}>
          <div className="sr-header-left">
            <span className="sr-header-tag">Our Solutions</span>
            <h2 className="sr-header-title">
              Enterprise Wireless
              <span className="sr-header-accent"> Connectivity</span>
            </h2>
          </div>
          <div className="sr-header-right">
            <p className="sr-header-desc">
              End-to-end RF Engineering, Mobile Signal Boosters, and DAS solutions. 
              From homes to large commercial campuses, our i Booster Series ensures 
              reliable indoor coverage across India.
            </p>
            <a href="/solutions" className="sr-header-link">
              View All Solutions
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div className={`sr-scroll-container ${isInView ? "visible" : ""}`} ref={scrollContainerRef}>
          <div className="sr-scroll-track">
            {solutions.map((solution, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`sr-card ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                style={{ '--accent': solution.accentColor }}
              >
                {/* Image Section */}
                <div className="sr-card-image-wrap">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="sr-card-image"
                  />
                  <div className="sr-card-image-overlay" />
                  
                  {/* Tag */}
                  <div className="sr-card-tag" style={{ background: solution.accentColor }}>
                    {solution.tag}
                  </div>
                </div>

                {/* Content Section */}
                <div className="sr-card-body">
                  <div className="sr-card-header">
                    <span className="sr-card-subtitle" style={{ color: solution.accentColor }}>
                      {solution.subtitle}
                    </span>
                    <span className="sr-card-power">{solution.power}</span>
                  </div>
                  
                  <h3 className="sr-card-title">{solution.title}</h3>
                  <p className="sr-card-desc">{solution.description}</p>

                  <div className="sr-card-footer">
                    <div className="sr-card-coverage">
                      <span className="sr-coverage-value">{solution.coverage}</span>
                      <span className="sr-coverage-label">Coverage Area</span>
                    </div>
                    <div className="sr-card-arrow" style={{ background: solution.accentColor }}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Active Indicator */}
                <div
                  className="sr-card-progress"
                  style={{ background: solution.accentColor }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className={`sr-nav ${isInView ? "visible" : ""}`}>
          {solutions.map((_, index) => (
            <button
              key={index}
              className={`sr-nav-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
              style={{
                '--dot-color': solutions[index].accentColor,
              }}
            >
              <span className="sr-nav-dot-fill" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;