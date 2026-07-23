import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Factory, 
  Radio,
  Wrench,
  ShieldCheck,
  Phone,
  Mail,
  Search,
  Gauge,
  Headphones,
  Award,
  Zap,
  Globe
} from "lucide-react";
import "./Solutions.css";

import solutionsHeroImg from "../assets/solutionhero.jpeg";
import residentialImg from "../assets/s1.png";
import commercialImg from "../assets/s2.png";
import enterpriseImg from "../assets/s3.png";
import dasImg from "../assets/s4.png";
import rfImg from "../assets/s5.png";
import supportImg from "../assets/s6.png";

const solSolutions = [
  {
    id: "01",
    icon: <Home size={28} strokeWidth={1.5} />,
    title: "23 dBm Residential Booster",
    subtitle: "i Booster 23",
    description:
      "Designed for homes, apartments, villas, retail shops, and small offices, the i Booster 23 dBm provides stable 4G & 5G mobile coverage, eliminating call drops and improving data speeds across all major network operators.",
    features: ["Residential Coverage", "70 dB High Gain", "2G / 3G / 4G / 5G", "All Operators"],
    coverage: "Up to 300 m²",
    image: residentialImg,
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
    cta: "View 23 dBm Details",
  },
  {
    id: "02",
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "25 dBm Commercial Booster",
    subtitle: "i Booster 25",
    description:
      "Built for hotels, resorts, hospitals, schools, colleges, and commercial buildings, delivering seamless mobile connectivity across multiple rooms and floors with enterprise-grade reliability.",
    features: ["Commercial Buildings", "Multi Floor Coverage", "Multi Operator Support", "Remote Monitoring"],
    coverage: "Up to 500 m²",
    image: commercialImg,
    accentColor: "#0A6FD4",
    bgLight: "#F0F7FF",
    cta: "View 25 dBm Details",
  },
  {
    id: "03",
    icon: <Factory size={28} strokeWidth={1.5} />,
    title: "27 dBm Enterprise Booster",
    subtitle: "i Booster 27",
    description:
      "High-performance signal enhancement for factories, warehouses, IT parks, corporate offices, industrial facilities, airports, and large commercial campuses requiring maximum indoor coverage.",
    features: ["Enterprise Coverage", "Large Area Solution", "Industrial Grade", "DAS Compatible"],
    coverage: "Up to 1000+ m²",
    image: enterpriseImg,
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
    cta: "View 27 dBm Details",
  },
  {
    id: "04",
    icon: <Radio size={28} strokeWidth={1.5} />,
    title: "Distributed Antenna Systems (DAS)",
    subtitle: "Custom DAS Design",
    description:
      "Custom-designed DAS solutions for high-rise buildings, hospitals, shopping malls, airports, and enterprise campuses to ensure uniform indoor mobile signal distribution.",
    features: ["Indoor Coverage", "Enterprise RF Design", "Scalable Infrastructure", "Custom Engineering"],
    coverage: "Custom Coverage",
    image: dasImg,
    accentColor: "#7C3AED",
    bgLight: "#F5F3FF",
    cta: "Explore DAS Solutions",
  },
  {
    id: "05",
    icon: <Search size={28} strokeWidth={1.5} />,
    title: "RF Engineering & Site Survey",
    subtitle: "Professional Analysis",
    description:
      "Professional RF site surveys, signal strength analysis, coverage planning, network optimization, and deployment strategies tailored for every building and infrastructure project.",
    features: ["Site Survey", "Coverage Planning", "Network Optimization", "Pan India Service"],
    coverage: "Pan India",
    image: rfImg,
    accentColor: "#EA580C",
    bgLight: "#FFF7ED",
    cta: "Request Site Survey",
  },
  {
    id: "06",
    icon: <Headphones size={28} strokeWidth={1.5} />,
    title: "Installation & AMC Support",
    subtitle: "End-to-End Service",
    description:
      "End-to-end installation, testing, commissioning, preventive maintenance, and Annual Maintenance Contracts (AMC) to ensure long-term wireless network performance.",
    features: ["Installation", "Testing & Commissioning", "Preventive Maintenance", "24/7 Support"],
    coverage: "24/7 Support",
    image: supportImg,
    accentColor: "#16A34A",
    bgLight: "#F0FDF4",
    cta: "Get Support",
  },
];

const solProcess = [
  { step: "01", title: "RF Site Survey", icon: <Search size={18} strokeWidth={1.5} /> },
  { step: "02", title: "Coverage Planning", icon: <Radio size={18} strokeWidth={1.5} /> },
  { step: "03", title: "Solution Design", icon: <Wrench size={18} strokeWidth={1.5} /> },
  { step: "04", title: "Installation", icon: <Building2 size={18} strokeWidth={1.5} /> },
  { step: "05", title: "Testing", icon: <Gauge size={18} strokeWidth={1.5} /> },
  { step: "06", title: "Support & AMC", icon: <ShieldCheck size={18} strokeWidth={1.5} /> },
];

const Solutions = () => {
  const [solScrollY, setSolScrollY] = useState(0);
  const [solMousePos, setSolMousePos] = useState({ x: 50, y: 50 });
  const [solVisible, setSolVisible] = useState({
    hero: false,
    solutions: false,
    process: false,
    cta: false,
  });
  const [solActiveSolution, setSolActiveSolution] = useState(0);
  const solSectionRef = useRef(null);

  useEffect(() => {
    const handleSolScroll = () => setSolScrollY(window.scrollY);
    const handleSolMouse = (e) => {
      if (!solSectionRef.current) return;
      const rect = solSectionRef.current.getBoundingClientRect();
      setSolMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("scroll", handleSolScroll, { passive: true });
    window.addEventListener("mousemove", handleSolMouse);
    return () => {
      window.removeEventListener("scroll", handleSolScroll);
      window.removeEventListener("mousemove", handleSolMouse);
    };
  }, []);

  useEffect(() => {
    const solObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.solSection;
          if (sectionName) {
            setSolVisible((prev) => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    const solObserver = new IntersectionObserver(handleIntersect, solObserverOptions);
    const solElements = solSectionRef.current?.querySelectorAll("[data-sol-section]");
    solElements?.forEach((el) => solObserver.observe(el));

    setTimeout(() => {
      setSolVisible((prev) => ({ ...prev, hero: true }));
    }, 100);

    return () => solObserver.disconnect();
  }, []);

  return (
    <main className="sol-page" ref={solSectionRef}>
      {/* ==================== */}
      {/* Hero Section         */}
      {/* ==================== */}
      <section className="sol-hero">
        <div className="sol-hero__bg">
          <div className="sol-hero__image" style={{ backgroundImage: `url(${solutionsHeroImg})` }} />
          <div className="sol-hero__overlay" />
          <div className="sol-hero__grid" />
          <div className="sol-hero__glow" style={{ background: `radial-gradient(600px circle at ${solMousePos.x}% ${solMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        </div>
        <div className="sol-container">
          <div className={`sol-hero__content ${solVisible.hero ? 'sol-hero__content--visible' : ''}`} data-sol-section="hero">
            <span className="sol-hero__tag">Enterprise Wireless Solutions</span>
            <h1 className="sol-hero__title">
              Complete Mobile Signal
              <span className="sol-hero__accent"> Connectivity Solutions</span>
            </h1>
            <p className="sol-hero__desc">
              Futuremax Technology provides end-to-end RF Engineering, Mobile Signal Boosters, 
              Distributed Antenna Systems (DAS), and enterprise wireless connectivity solutions. 
              From 23 dBm residential boosters to 27 dBm enterprise systems, our i Booster Series 
              ensures reliable indoor mobile coverage with professional design, installation, and 
              technical support across India.
            </p>
            <div className="sol-hero__actions">
              <a href="/contact" className="sol-hero__btn sol-hero__btn--primary">
                <span>Get Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <a href="#solutions" className="sol-hero__btn sol-hero__btn--secondary">
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* Solutions Grid       */}
      {/* ==================== */}
      <section className="sol-grid-section" id="solutions">
        <div className="sol-container">
          <div className={`sol-grid__header ${solVisible.solutions ? 'sol-grid__header--visible' : ''}`} data-sol-section="solutions">
            <span className="sol-grid__tag">Our Solutions</span>
            <h2 className="sol-grid__title">
              Professional Mobile Signal Boosters &
              <span className="sol-grid__accent"> Enterprise RF Solutions</span>
            </h2>
            <p className="sol-grid__desc">
              Explore Futuremax Technology's complete portfolio of i Booster Mobile Signal Boosters, 
              Distributed Antenna Systems (DAS), RF antennas, accessories, and enterprise wireless 
              connectivity solutions designed for homes, commercial buildings, hospitals, hotels, 
              educational campuses, factories, and large enterprise environments.
            </p>
          </div>

          <div className="sol-grid__wrapper">
            {solSolutions.map((solution, index) => (
              <div
                key={solution.id}
                className={`sol-card ${solVisible.solutions ? 'sol-card--visible' : ''}`}
                data-sol-section="solutions"
                style={{
                  '--sol-accent': solution.accentColor,
                  '--sol-bg-light': solution.bgLight,
                  transitionDelay: solVisible.solutions ? `${index * 0.08}s` : '0s',
                }}
              >
                {/* Card Image */}
                <div className="sol-card__image-wrap">
                  <img src={solution.image} alt={solution.title} className="sol-card__image" />
                  <div className="sol-card__image-shade" />
                  <span className="sol-card__power" style={{ background: solution.accentColor }}>
                    {solution.subtitle}
                  </span>
                </div>

                {/* Card Body */}
                <div className="sol-card__body">
                  <div className="sol-card__icon-wrap" style={{ background: solution.bgLight, color: solution.accentColor }}>
                    {solution.icon}
                  </div>
                  <h3 className="sol-card__title">{solution.title}</h3>
                  <p className="sol-card__desc">{solution.description}</p>

                  {/* Features */}
                  <div className="sol-card__features">
                    {solution.features.map((feature, i) => (
                      <span key={i} className="sol-card__feature">
                        <CheckCircle2 size={12} style={{ color: solution.accentColor }} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Coverage & CTA */}
                  <div className="sol-card__footer">
                    <span className="sol-card__coverage">
                      <Zap size={14} style={{ color: solution.accentColor }} />
                      {solution.coverage}
                    </span>
                    <a href="/contact" className="sol-card__btn" style={{ color: solution.accentColor }}>
                      {solution.cta}
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Bottom Line */}
                <div className="sol-card__line" style={{ background: solution.accentColor }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* Process Section      */}
      {/* ==================== */}
      <section className="sol-process">
        <div className="sol-container">
          <div className={`sol-process__header ${solVisible.process ? 'sol-process__header--visible' : ''}`} data-sol-section="process">
            <span className="sol-process__tag">Our Engineering Process</span>
            <h2 className="sol-process__title">
              Systematic RF Engineering
              <span className="sol-process__accent"> Deployment Approach</span>
            </h2>
            <p className="sol-process__desc">
              Every Futuremax solution follows a proven 6-step engineering methodology ensuring 
              optimal wireless coverage and long-term network reliability.
            </p>
          </div>

          <div className={`sol-process__grid ${solVisible.process ? 'sol-process__grid--visible' : ''}`} data-sol-section="process">
            {solProcess.map((step, index) => (
              <div
                key={step.step}
                className="sol-process__item"
                style={{ transitionDelay: solVisible.process ? `${index * 0.1}s` : '0s' }}
              >
                <div className="sol-process__step-num">{step.step}</div>
                <div className="sol-process__icon">{step.icon}</div>
                <span className="sol-process__step-title">{step.title}</span>
                {index < solProcess.length - 1 && (
                  <div className="sol-process__connector">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* CTA Section          */}
      {/* ==================== */}
      <section className="sol-cta">
        <div className="sol-container">
          <div
            className={`sol-cta__card ${solVisible.cta ? 'sol-cta__card--visible' : ''}`}
            data-sol-section="cta"
            style={{ transform: `translateY(${solScrollY * -0.01}px)` }}
          >
            <div className="sol-cta__content">
              <h2 className="sol-cta__title">Need a Custom Wireless Solution?</h2>
              <p className="sol-cta__desc">
                Our RF engineering team will analyze your site, recommend the optimal i Booster or DAS 
                configuration, and deliver end-to-end implementation with professional installation 
                and ongoing support.
              </p>
            </div>
            <div className="sol-cta__actions">
              <a href="/contact" className="sol-cta__btn">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <div className="sol-cta__contact">
                <a href="tel:+919876543210" className="sol-cta__contact-link">
                  <Phone size={14} />
                  94478671740
                </a>
                <a href="mailto:info@futuremax.com" className="sol-cta__contact-link">
                  <Mail size={14} />
                  info@futuremax.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Solutions;