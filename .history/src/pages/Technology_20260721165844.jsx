import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Search,
  Layers,
  ClipboardCheck,
  Settings,
  Microscope,
  Headphones,
  Phone,
  Mail,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import "./Technologies.css";

import HeroImg from "../assets/thero.jpeg";
import rfSurveyImg from "../assets/t1.png";
import dasImg from "../assets/t2.png";
import boosterTechImg from "../assets/t3.png";
import tImg from "../assets/t4.png";
import testingImg from "../assets/t5.png";
import techImg from "../assets/t6.png";

const tgyTechnologies = [
  {
    id: "01",
    icon: <Search size={24} strokeWidth={1.5} />,
    title: "RF Site Survey & Analysis",
    subtitle: "Professional Signal Assessment",
    description:
      "Our certified RF engineers use advanced spectrum analyzers and signal measurement tools to conduct comprehensive on-site surveys. We evaluate signal strength, identify dead zones, analyze building materials, and map coverage requirements before designing any solution.",
    features: [
      "Spectrum Analysis",
      "Signal Strength Mapping",
      "Dead Zone Identification",
      "Building Material Analysis",
      "Coverage Requirement Assessment",
      "Operator Frequency Analysis",
    ],
    tools: ["Spectrum Analyzers", "Signal Meters", "RF Mapping Software", "Coverage Prediction Tools"],
    image: rfSurveyImg,
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
  },
  {
    id: "02",
    icon: <Layers size={24} strokeWidth={1.5} />,
    title: "Coverage Planning & RF Design",
    subtitle: "Network Architecture & Planning",
    description:
      "Using advanced RF engineering techniques, we analyze operator frequencies, signal propagation, interference levels, and user density to design an optimized indoor wireless coverage solution with proper DAS architecture.",
    features: [
      "Operator Frequency Analysis",
      "Signal Propagation Modeling",
      "Interference Assessment",
      "User Density Planning",
      "DAS Architecture Design",
      "Coverage Heat Mapping",
    ],
    tools: ["RF Planning Software", "Coverage Simulators", "CAD Tools", "Network Analyzers"],
    image: dasImg,
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
  },
  {
    id: "03",
    icon: <ClipboardCheck size={24} strokeWidth={1.5} />,
    title: "Product Selection & Solution Design",
    subtitle: "i Booster & Component Selection",
    description:
      "Based on your building size and coverage requirements, we recommend the right i Booster (23 dBm, 25 dBm, or 27 dBm), Distributed Antenna System (DAS), antennas, RF accessories, and cable routing for maximum performance.",
    features: [
      "i Booster Selection (23/25/27 dBm)",
      "DAS Component Sizing",
      "Antenna Type Selection",
      "Cable Routing Design",
      "Budget Optimization",
      "Scalability Planning",
    ],
    tools: ["Product Configurator", "Bill of Materials", "Design Documentation", "Compliance Checks"],
    image: boosterTechImg,
    accentColor: "#7C3AED",
    bgLight: "#F5F3FF",
  },
  {
    id: "04",
    icon: <Settings size={24} strokeWidth={1.5} />,
    title: "Professional Installation",
    subtitle: "Certified Deployment Team",
    description:
      "Our certified engineers install the complete wireless infrastructure with precision, ensuring optimal antenna placement, proper cable management, and seamless integration with existing mobile networks.",
    features: [
      "Antenna Mounting & Placement",
      "Cable Routing & Management",
      "Booster Configuration",
      "Network Integration",
      "Quality Assurance Checks",
      "Minimal Disruption Process",
    ],
    tools: ["Installation Kits", "Mounting Hardware", "Cable Testers", "Safety Equipment"],
    image: tImg,
    accentColor: "#EA580C",
    bgLight: "#FFF7ED",
  },
  {
    id: "05",
    icon: <Microscope size={24} strokeWidth={1.5} />,
    title: "Testing & Optimization",
    subtitle: "Performance Verification",
    description:
      "After installation, we conduct detailed signal testing, coverage verification, and system optimization to eliminate dead zones and ensure reliable 4G & 5G connectivity throughout your property.",
    features: [
      "Signal Strength Measurement",
      "Coverage Area Verification",
      "Gain & Power Optimization",
      "Interference Mitigation",
      "QoS Testing & Validation",
      "Performance Documentation",
    ],
    tools: ["Signal Meters", "Spectrum Analyzers", "Coverage Mappers", "QoS Testers"],
    image: testingImg,
    accentColor: "#DC2626",
    bgLight: "#FEF2F2",
  },
  {
    id: "06",
    icon: <Headphones size={24} strokeWidth={1.5} />,
    title: "AMC & Technical Support",
    subtitle: "Long-Term Network Reliability",
    description:
      "Our commitment continues after deployment with Annual Maintenance Contracts (AMC), preventive maintenance, troubleshooting, upgrades, and dedicated technical support to ensure long-term wireless performance.",
    features: [
      "Preventive Maintenance",
      "Remote System Monitoring",
      "Troubleshooting Support",
      "Firmware & System Updates",
      "Performance Audits",
      "24/7 NOC Support",
    ],
    tools: ["Remote Monitoring", "Diagnostic Tools", "Performance Analytics", "Support Portal"],
    image: techImg,
    accentColor: "#0891B2",
    bgLight: "#ECFEFF",
  },
];

const Technology = () => {
  const [tgyScrollY, setTgyScrollY] = useState(0);
  const [tgyMousePos, setTgyMousePos] = useState({ x: 50, y: 50 });
  const [tgyVisible, setTgyVisible] = useState({ hero: false, process: false, technologies: false, cta: false });
  const [tgyActiveTech, setTgyActiveTech] = useState(0);
  const tgySectionRef = useRef(null);
  const tgyProcessRef = useRef(null);

  useEffect(() => {
    const handleTgyScroll = () => setTgyScrollY(window.scrollY);
    const handleTgyMouse = (e) => {
      if (!tgySectionRef.current) return;
      const rect = tgySectionRef.current.getBoundingClientRect();
      setTgyMousePos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
    };
    window.addEventListener("scroll", handleTgyScroll, { passive: true });
    window.addEventListener("mousemove", handleTgyMouse);
    return () => { window.removeEventListener("scroll", handleTgyScroll); window.removeEventListener("mousemove", handleTgyMouse); };
  }, []);

  useEffect(() => {
    const tgyObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.tgySection;
          if (sectionName) setTgyVisible((prev) => ({ ...prev, [sectionName]: true }));
        }
      });
    };
    const tgyObserver = new IntersectionObserver(handleIntersect, tgyObserverOptions);
    const tgyElements = tgySectionRef.current?.querySelectorAll("[data-tgy-section]");
    tgyElements?.forEach((el) => tgyObserver.observe(el));
    setTimeout(() => { setTgyVisible((prev) => ({ ...prev, hero: true })); }, 100);
    return () => tgyObserver.disconnect();
  }, []);

  // Auto-rotate technologies
  useEffect(() => {
    if (!tgyVisible.technologies) return;
    const interval = setInterval(() => {
      setTgyActiveTech((prev) => (prev + 1) % tgyTechnologies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [tgyVisible.technologies]);

  const handleProcessPrev = () => setTgyActiveTech((prev) => (prev > 0 ? prev - 1 : tgyTechnologies.length - 1));
  const handleProcessNext = () => setTgyActiveTech((prev) => (prev + 1) % tgyTechnologies.length);

  return (
    <main className="tgy-page" ref={tgySectionRef}>
      {/* Hero Section */}
      <section className="tgy-hero">
        <div className="tgy-hero__bg">
          <div className="tgy-hero__image" style={{ backgroundImage: `url(${HeroImg})` }} />
          <div className="tgy-hero__overlay" />
          <div className="tgy-hero__grid" />
          <div className="tgy-hero__glow" style={{ background: `radial-gradient(600px circle at ${tgyMousePos.x}% ${tgyMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        </div>
        <div className="tgy-container">
          <div className={`tgy-hero__content ${tgyVisible.hero ? 'tgy-hero__content--visible' : ''}`} data-tgy-section="hero">
            <span className="tgy-hero__tag">Our Technology</span>
            <h1 className="tgy-hero__title">
              Advanced RF Engineering &
              <span className="tgy-hero__accent"> Wireless Technology</span>
            </h1>
            <p className="tgy-hero__desc">
              Futuremax Technology leverages advanced RF engineering techniques, professional-grade 
              equipment, and systematic deployment processes to deliver reliable indoor mobile coverage 
              using i Booster Series, Distributed Antenna Systems (DAS), and enterprise wireless solutions.
              Trusted by customers across Kerala, including Trivandrum, Kochi, Kozhikode, and Palakkad, 
              we provide high-performance RF solutions for reliable and seamless mobile connectivity.
            </p>
            <div className="tgy-hero__actions">
              <a href="/contact" className="tgy-hero__btn tgy-hero__btn--primary">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <a href="#tgy-process" className="tgy-hero__btn tgy-hero__btn--secondary">Our Process</a>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Process - Horizontal Card Flow */}
      <section className="tgy-process" id="tgy-process" ref={tgyProcessRef}>
        <div className="tgy-container">
          <div className={`tgy-process__header ${tgyVisible.process ? 'tgy-process__header--visible' : ''}`} data-tgy-section="process">
            <span className="tgy-process__tag">Our Engineering Process</span>
            <h2 className="tgy-process__title">
              Systematic RF Deployment
              <span className="tgy-process__accent"> Methodology</span>
            </h2>
            <p className="tgy-process__subtitle">
              A proven 6-step approach that ensures optimal wireless coverage for every project
            </p>
          </div>

          {/* Active Step Display */}
          <div className={`tgy-process__display ${tgyVisible.process ? 'tgy-process__display--visible' : ''}`} data-tgy-section="process">
            <div className="tgy-process__display-card" style={{ '--tgy-accent': tgyTechnologies[tgyActiveTech]?.accentColor, '--tgy-bg-light': tgyTechnologies[tgyActiveTech]?.bgLight }}>
              {/* Step Number Badge */}
              <div className="tgy-process__display-badge" style={{ background: tgyTechnologies[tgyActiveTech]?.accentColor }}>
                Step {tgyTechnologies[tgyActiveTech]?.id}
              </div>

              <div className="tgy-process__display-grid">
                {/* Left: Image */}
                <div className="tgy-process__display-image-wrap">
                  <img src={tgyTechnologies[tgyActiveTech]?.image} alt={tgyTechnologies[tgyActiveTech]?.title} className="tgy-process__display-image" />
                  <div className="tgy-process__display-image-overlay" />
                  <div className="tgy-process__display-icon" style={{ background: tgyTechnologies[tgyActiveTech]?.bgLight, color: tgyTechnologies[tgyActiveTech]?.accentColor }}>
                    {tgyTechnologies[tgyActiveTech]?.icon}
                  </div>
                </div>

                {/* Right: Content */}
                <div className="tgy-process__display-content">
                  <span className="tgy-process__display-subtitle" style={{ color: tgyTechnologies[tgyActiveTech]?.accentColor }}>
                    {tgyTechnologies[tgyActiveTech]?.subtitle}
                  </span>
                  <h3 className="tgy-process__display-title">{tgyTechnologies[tgyActiveTech]?.title}</h3>
                  <p className="tgy-process__display-desc">{tgyTechnologies[tgyActiveTech]?.description}</p>

                  <div className="tgy-process__display-features">
                    {tgyTechnologies[tgyActiveTech]?.features.map((feature, i) => (
                      <span key={i} className="tgy-process__display-feature">
                        <CheckCircle2 size={14} style={{ color: tgyTechnologies[tgyActiveTech]?.accentColor }} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="tgy-process__display-tools">
                    <span className="tgy-process__display-tools-label">Tools & Equipment</span>
                    <div className="tgy-process__display-tools-list">
                      {tgyTechnologies[tgyActiveTech]?.tools.map((tool, i) => (
                        <span key={i} className="tgy-process__display-tool" style={{ borderColor: tgyTechnologies[tgyActiveTech]?.accentColor, color: tgyTechnologies[tgyActiveTech]?.accentColor }}>
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Navigation Cards */}
            <div className="tgy-process__steps">
              <button className="tgy-process__steps-arrow" onClick={handleProcessPrev}>
                <ChevronLeft size={20} />
              </button>
              <div className="tgy-process__steps-track">
                {tgyTechnologies.map((tech, index) => (
                  <button
                    key={tech.id}
                    className={`tgy-process__steps-card ${index === tgyActiveTech ? 'tgy-process__steps-card--active' : ''} ${index < tgyActiveTech ? 'tgy-process__steps-card--done' : ''}`}
                    onClick={() => setTgyActiveTech(index)}
                    style={{ '--tgy-step-color': tech.accentColor }}
                  >
                    <div className="tgy-process__steps-card-num">
                      {index < tgyActiveTech ? <CheckCircle2 size={16} strokeWidth={2.5} /> : tech.id}
                    </div>
                    <div className="tgy-process__steps-card-icon">{tech.icon}</div>
                    <span className="tgy-process__steps-card-title">{tech.title.split(' & ')[0]}</span>
                    <div className={`tgy-process__steps-card-line ${index <= tgyActiveTech ? 'tgy-process__steps-card-line--active' : ''}`} style={{ background: tech.accentColor }} />
                  </button>
                ))}
              </div>
              <button className="tgy-process__steps-arrow" onClick={handleProcessNext}>
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Progress Bar */}
            <div className="tgy-process__progress">
              <div className="tgy-process__progress-track">
                <div
                  className="tgy-process__progress-fill"
                  style={{ width: `${((tgyActiveTech + 1) / tgyTechnologies.length) * 100}%` }}
                />
              </div>
              <span className="tgy-process__progress-text">
                Step {tgyActiveTech + 1} of {tgyTechnologies.length} — {tgyActiveTech < tgyTechnologies.length - 1 ? 'In Progress' : 'Complete'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="tgy-tech" id="tgy-technologies">
        <div className="tgy-container">
          <div className={`tgy-tech__header ${tgyVisible.technologies ? 'tgy-tech__header--visible' : ''}`} data-tgy-section="technologies">
            <span className="tgy-tech__tag">Core Technologies</span>
            <h2 className="tgy-tech__title">
              Professional RF Engineering
              <span className="tgy-tech__accent"> & Infrastructure</span>
            </h2>
          </div>

          <div className={`tgy-tech__grid ${tgyVisible.technologies ? 'tgy-tech__grid--visible' : ''}`} data-tgy-section="technologies">
            {tgyTechnologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`tgy-tech__card ${index === tgyActiveTech ? 'tgy-tech__card--active' : ''}`}
                onClick={() => setTgyActiveTech(index)}
                style={{ '--tgy-accent': tech.accentColor, '--tgy-bg-light': tech.bgLight, transitionDelay: `${index * 0.06}s` }}
              >
                <div className="tgy-tech__card-image-wrap">
                  <img src={tech.image} alt={tech.title} className="tgy-tech__card-image" />
                  <div className="tgy-tech__card-image-shade" />
                  <div className="tgy-tech__card-icon" style={{ background: tech.bgLight, color: tech.accentColor }}>{tech.icon}</div>
                </div>
                <div className="tgy-tech__card-body">
                  <span className="tgy-tech__card-subtitle" style={{ color: tech.accentColor }}>{tech.subtitle}</span>
                  <h3 className="tgy-tech__card-title">{tech.title}</h3>
                  <p className="tgy-tech__card-desc">{tech.description}</p>
                  <div className="tgy-tech__card-features">
                    {tech.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="tgy-tech__card-feature"><CheckCircle2 size={12} style={{ color: tech.accentColor }} />{feature}</span>
                    ))}
                    {tech.features.length > 3 && <span className="tgy-tech__card-more" style={{ color: tech.accentColor }}>+{tech.features.length - 3}</span>}
                  </div>
                  <div className="tgy-tech__card-tools">
                    {tech.tools.map((tool, i) => (<span key={i} className="tgy-tech__card-tool">{tool}</span>))}
                  </div>
                </div>
                <div className="tgy-tech__card-line" style={{ background: tech.accentColor }} />
              </div>
            ))}
          </div>

          <div className="tgy-tech__nav">
            {tgyTechnologies.map((tech, index) => (
              <button key={tech.id} className={`tgy-tech__nav-dot ${index === tgyActiveTech ? 'tgy-tech__nav-dot--active' : ''}`} onClick={() => setTgyActiveTech(index)} style={{ '--tgy-dot-color': tech.accentColor }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tgy-cta">
        <div className="tgy-container">
          <div className={`tgy-cta__card ${tgyVisible.cta ? 'tgy-cta__card--visible' : ''}`} data-tgy-section="cta" style={{ transform: `translateY(${tgyScrollY * -0.01}px)` }}>
            <div className="tgy-cta__content"><h2 className="tgy-cta__title">Ready to Deploy Professional RF Solutions?</h2><p className="tgy-cta__desc">Let our engineering team assess your site and design the optimal wireless coverage solution.</p></div>
            <div className="tgy-cta__actions">
              <a href="/contact" className="tgy-cta__btn"><span>Request Free RF Site Survey</span><ArrowRight size={16} /></a>
              <div className="tgy-cta__contact">
                <a href="tel:+919876543210" className="tgy-cta__contact-link"><Phone size={14} />+91 98765 43210</a>
                <a href="mailto:info@futuremax.com" className="tgy-cta__contact-link"><Mail size={14} />info@futuremax.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Technology;