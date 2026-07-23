import React, { useEffect, useRef, useState } from "react";
import {
  FaBroadcastTower,
  FaTools,
  FaUsers,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import "./WhyFuturemax.css";
import engineeringImg from "../../assets/project2.jpeg";

const wfFeatures = [
  {
    icon: <FaBroadcastTower />,
    title: "Certified RF Engineering",
    description:
      "Our experienced RF engineers perform detailed site surveys, signal analysis, and coverage planning to deliver reliable indoor mobile connectivity for residential, commercial, and enterprise environments.",
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
  },
  {
    icon: <FaTools />,
    title: "Customized Deployment",
    description:
      "Every solution is designed based on building structure, floor layout, user density, and network requirements to ensure maximum signal strength and long-term performance.",
    accentColor: "#0A6FD4",
    bgLight: "#F0F7FF",
  },
  {
    icon: <FaAward />,
    title: "Premium i Booster Solutions",
    description:
      "From 23 dBm residential boosters to 25 dBm commercial and 27 dBm enterprise systems, we provide high-performance products engineered for every coverage requirement.",
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
  },
  {
    icon: <FaUsers />,
    title: "End-to-End Technical Support",
    description:
      "From consultation and installation to testing, optimization, AMC, and ongoing technical assistance, our team ensures uninterrupted wireless connectivity throughout the product lifecycle.",
    accentColor: "#7C3AED",
    bgLight: "#F5F3FF",
  },
];

const wfStats = [
  { value: "250+", label: "Successful Installations" },
  { value: "15+", label: "Years RF Experience" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "Pan India", label: "Installation Support" },
];

const WhyFuturemax = () => {
  const [wfMousePos, setWfMousePos] = useState({ x: 50, y: 50 });
  const [wfVisibleSections, setWfVisibleSections] = useState({});
  const [wfHoveredCard, setWfHoveredCard] = useState(null);
  const wfSectionRef = useRef(null);

  // NOTE: the scroll-linked parallax transforms that used to be applied to
  // wf-header / wf-image-section / wf-stats / wf-bottom have been removed.
  // They used raw window.scrollY (unbounded, page-wide), which pushed those
  // elements outside .wf-section's overflow:hidden clip box the further
  // down the page a user scrolled — the same bug that was clipping/
  // overlapping the Process and Projects headings. The background orbs
  // (wf-bg-orb-1/2) keep their parallax since they're purely decorative and
  // contained within the absolutely-positioned, overflow-hidden wf-bg-layer.
  useEffect(() => {
    const handleWfMouseMove = (e) => {
      if (!wfSectionRef.current) return;
      const rect = wfSectionRef.current.getBoundingClientRect();
      setWfMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("mousemove", handleWfMouseMove);
    return () => window.removeEventListener("mousemove", handleWfMouseMove);
  }, []);

  // Background-orb scroll parallax only — throttled via requestAnimationFrame
  // so it doesn't trigger a React re-render on every raw scroll event.
  const [wfScrollY, setWfScrollY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const handleWfScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setWfScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleWfScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleWfScroll);
  }, []);

  useEffect(() => {
    const wfObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -50px 0px" };

    const wfObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setWfVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.wfSection]: true,
          }));
        }
      });
    }, wfObserverOptions);

    const wfElements = wfSectionRef.current?.querySelectorAll("[data-wf-section]");
    wfElements?.forEach((el) => wfObserver.observe(el));

    return () => wfObserver.disconnect();
  }, []);

  return (
    <section className="wf-section" ref={wfSectionRef}>
      {/* Background */}
      <div className="wf-bg-layer">
        <div className="wf-bg-grid" />
        <div
          className="wf-bg-orb wf-bg-orb-1"
          style={{ transform: `translate(${wfScrollY * 0.015}px, ${-wfScrollY * 0.03}px)` }}
        />
        <div
          className="wf-bg-orb wf-bg-orb-2"
          style={{ transform: `translate(${-wfScrollY * 0.02}px, ${wfScrollY * 0.04}px)` }}
        />
        <div
          className="wf-bg-mouse-glow"
          style={{
            background: `radial-gradient(500px circle at ${wfMousePos.x}% ${wfMousePos.y}%, rgba(7,85,163,0.025) 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="wf-container">
        {/* Section Header */}
        <div
          className={`wf-header ${wfVisibleSections["header"] ? "wf-header-visible" : ""}`}
          data-wf-section="header"
        >
          <span className="wf-header-tag">WHY FUTUREMAX TECHNOLOGY</span>
          <h2 className="wf-header-title">
            Engineering Reliable Mobile
            <span className="wf-header-title-accent"> Connectivity for Every Environment</span>
          </h2>
          <p className="wf-header-desc">
            Futuremax Technology specializes in Mobile Signal Boosters, RF Engineering,
            Distributed Antenna Systems (DAS), and enterprise wireless connectivity solutions.
            We help homes, hotels, hospitals, educational institutions, commercial buildings,
            factories, and corporate campuses eliminate weak mobile signals through professionally
            engineered coverage solutions designed for today's 4G and 5G networks.
          </p>
        </div>

        {/* Main Content: Image + Features */}
        <div className="wf-main-content">
          {/* Left: Image with Experience Box */}
          <div
            className={`wf-image-section ${wfVisibleSections["image"] ? "wf-image-visible" : ""}`}
            data-wf-section="image"
          >
            <div className="wf-image-wrapper">
              <img
                src={engineeringImg}
                alt="Futuremax RF Engineers performing site survey"
                className="wf-image"
              />
              <div className="wf-image-overlay" />

              {/* Experience Box */}
              <div className="wf-experience-box">
                <span className="wf-exp-number">15+</span>
                <p className="wf-exp-text">
                  Years of RF Engineering
                  <br />
                  Experience
                </p>
                <div className="wf-exp-dot" />
              </div>

              {/* Floating Badge */}
              <div className="wf-floating-badge">
                <FaAward className="wf-floating-icon" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div
            className={`wf-features-grid ${wfVisibleSections["features"] ? "wf-features-visible" : ""}`}
            data-wf-section="features"
          >
            {wfFeatures.map((feature, index) => (
              <div
                key={index}
                className={`wf-feature-card ${wfHoveredCard === index ? "wf-feature-card-hovered" : ""}`}
                style={{
                  '--wf-accent': feature.accentColor,
                  '--wf-bg-light': feature.bgLight,
                  transitionDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={() => setWfHoveredCard(index)}
                onMouseLeave={() => setWfHoveredCard(null)}
              >
                {/* Icon */}
                <div className="wf-feature-icon-wrap" style={{ background: feature.bgLight, color: feature.accentColor }}>
                  {feature.icon}
                  <div className="wf-feature-icon-glow" style={{ background: feature.accentColor }} />
                </div>

                {/* Content */}
                <div className="wf-feature-content">
                  <h3 className="wf-feature-title">{feature.title}</h3>
                  <p className="wf-feature-desc">{feature.description}</p>
                </div>

                {/* Line */}
                <div className="wf-feature-line" style={{ background: feature.accentColor }} />

                {/* Corner */}
                <div className="wf-feature-corner" style={{ borderTopColor: feature.accentColor, borderRightColor: feature.accentColor }} />
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Bar */}
        <div
          className={`wf-stats ${wfVisibleSections["stats"] ? "wf-stats-visible" : ""}`}
          data-wf-section="stats"
        >
          <div className="wf-stats-inner">
            {wfStats.map((stat, index) => (
              <div key={index} className="wf-stat-item">
                <span className="wf-stat-value">{stat.value}</span>
                <span className="wf-stat-label">{stat.label}</span>
                {index < wfStats.length - 1 && <div className="wf-stat-divider" />}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`wf-bottom ${wfVisibleSections["bottom"] ? "wf-bottom-visible" : ""}`}
          data-wf-section="bottom"
        >
          <div className="wf-bottom-card">
            {/* Decorative Orbs */}
            <div className="wf-bottom-orb wf-bottom-orb-1" />
            <div className="wf-bottom-orb wf-bottom-orb-2" />

            <div className="wf-bottom-content">
              <h3 className="wf-bottom-title">
                Complete RF Engineering & Mobile Signal Booster Solutions
              </h3>
              <p className="wf-bottom-desc">
                From RF site surveys and wireless network planning to i Booster installation,
                Distributed Antenna Systems (DAS), signal optimization, and Annual Maintenance
                Contracts (AMC), Futuremax provides complete end-to-end connectivity solutions
                tailored for residential, commercial, healthcare, hospitality, industrial, and
                enterprise projects across India.
              </p>
            </div>
            <div className="wf-bottom-actions">
              <a href="/contact" className="wf-bottom-btn">
                <span>Request Free RF Site Survey</span>
                <FaArrowRight className="wf-bottom-btn-icon" />
              </a>
              <div className="wf-bottom-trust">
                <div className="wf-bottom-trust-item">
                  <FaAward className="wf-bottom-trust-icon" />
                  <span>Enterprise RF Engineering</span>
                </div>
                <div className="wf-bottom-trust-item">
                  <FaBroadcastTower className="wf-bottom-trust-icon" />
                  <span>4G & 5G Compatible</span>
                </div>
                <div className="wf-bottom-trust-item">
                  <FaUsers className="wf-bottom-trust-icon" />
                  <span>Pan India Installation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFuturemax;