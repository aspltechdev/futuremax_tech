import React, { useEffect, useRef, useState } from "react";
import { Search, Radio, PenTool, Wrench, Gauge, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";
import "./Process.css";

const prcSteps = [
  {
    id: "01",
    icon: <Search size={22} strokeWidth={1.5} />,
    title: "RF Site Survey & Signal Analysis",
    description:
      "Our RF engineers perform a comprehensive on-site survey to evaluate signal strength, identify dead zones, analyze building structures, and understand coverage requirements before recommending the ideal i Booster or DAS solution.",
    color: "#19AB3F",
    bgLight: "#E8F7EA",
    bgGradient: "linear-gradient(135deg, #E8F7EA 0%, #D4F0D8 100%)",
  },
  {
    id: "02",
    icon: <Radio size={22} strokeWidth={1.5} />,
    title: "Coverage Planning & RF Design",
    description:
      "Using advanced RF engineering techniques, we analyze operator frequencies, signal propagation, interference levels, and user density to design an optimized indoor wireless coverage solution.",
    color: "#0755A3",
    bgLight: "#E8F1FA",
    bgGradient: "linear-gradient(135deg, #E8F1FA 0%, #D4E4F5 100%)",
  },
  {
    id: "03",
    icon: <PenTool size={22} strokeWidth={1.5} />,
    title: "Product Selection & Solution Design",
    description:
      "Based on your building size and coverage requirements, we recommend the right i Booster (23 dBm, 25 dBm, or 27 dBm), Distributed Antenna System (DAS), antennas, RF accessories, and cable routing for maximum performance.",
    color: "#19AB3F",
    bgLight: "#E8F7EA",
    bgGradient: "linear-gradient(135deg, #E8F7EA 0%, #D4F0D8 100%)",
  },
  {
    id: "04",
    icon: <Wrench size={22} strokeWidth={1.5} />,
    title: "Professional Installation",
    description:
      "Our certified engineers install the complete wireless infrastructure with precision, ensuring optimal antenna placement, proper cable management, and seamless integration with existing mobile networks.",
    color: "#0755A3",
    bgLight: "#E8F1FA",
    bgGradient: "linear-gradient(135deg, #E8F1FA 0%, #D4E4F5 100%)",
  },
  {
    id: "05",
    icon: <Gauge size={22} strokeWidth={1.5} />,
    title: "Testing & Performance Optimization",
    description:
      "After installation, we conduct detailed signal testing, coverage verification, and system optimization to eliminate dead zones and ensure reliable 4G & 5G connectivity throughout your property.",
    color: "#19AB3F",
    bgLight: "#E8F7EA",
    bgGradient: "linear-gradient(135deg, #E8F7EA 0%, #D4F0D8 100%)",
  },
  {
    id: "06",
    icon: <Headphones size={22} strokeWidth={1.5} />,
    title: "AMC & Technical Support",
    description:
      "Our commitment continues after deployment with Annual Maintenance Contracts (AMC), preventive maintenance, troubleshooting, upgrades, and dedicated technical support to ensure long-term wireless performance.",
    color: "#0755A3",
    bgLight: "#E8F1FA",
    bgGradient: "linear-gradient(135deg, #E8F1FA 0%, #D4E4F5 100%)",
  },
];

const Process = () => {
  const [prcVisible, setPrcVisible] = useState(false);
  const [prcActiveStep, setPrcActiveStep] = useState(0);
  const [prcScrollY, setPrcScrollY] = useState(0);
  const [prcHoveredCard, setPrcHoveredCard] = useState(null);
  const prcSectionRef = useRef(null);

  useEffect(() => {
    const handlePrcScroll = () => setPrcScrollY(window.scrollY);
    window.addEventListener("scroll", handlePrcScroll, { passive: true });
    return () => window.removeEventListener("scroll", handlePrcScroll);
  }, []);

  useEffect(() => {
    const prcObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPrcVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (prcSectionRef.current) {
      prcObserver.observe(prcSectionRef.current);
    }

    return () => {
      if (prcSectionRef.current) {
        prcObserver.unobserve(prcSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (prcVisible) {
      const prcInterval = setInterval(() => {
        setPrcActiveStep((prev) => (prev < prcSteps.length - 1 ? prev + 1 : prev));
      }, 300);
      return () => clearInterval(prcInterval);
    }
  }, [prcVisible]);

  return (
    <section className="prc-section" ref={prcSectionRef}>
      {/* Background */}
      <div className="prc-bg">
        <div className="prc-bg-grid" />
        <div className="prc-bg-orb prc-bg-orb--1" style={{ transform: `translate(${prcScrollY * 0.02}px, ${-prcScrollY * 0.03}px)` }} />
        <div className="prc-bg-orb prc-bg-orb--2" style={{ transform: `translate(${-prcScrollY * 0.02}px, ${prcScrollY * 0.04}px)` }} />
      </div>

      <div className="prc-container">
        {/* Header */}
        <div
          className={`prc-header ${prcVisible ? 'prc-header--visible' : ''}`}
          style={{ transform: `translateY(${prcScrollY * -0.03}px)` }}
        >
          <span className="prc-header__tag">Engineering Process</span>
          <h2 className="prc-header__title">
            Our Proven RF Engineering
            <span className="prc-header__accent"> Deployment Process</span>
          </h2>
          <p className="prc-header__desc">
            Futuremax Technology follows a systematic RF engineering process—from site survey 
            and wireless coverage planning to professional installation, optimization, and ongoing 
            technical support. Every project is designed to deliver reliable indoor mobile coverage 
            using our i Booster Series, Distributed Antenna Systems (DAS), and enterprise wireless 
            connectivity solutions.
          </p>
        </div>

        {/* Main Process Layout */}
        <div className="prc-main">
          {/* Left: Vertical Timeline */}
          <div className={`prc-timeline ${prcVisible ? 'prc-timeline--visible' : ''}`}>
            <div className="prc-timeline__track">
              <div
                className="prc-timeline__fill"
                style={{ height: `${((prcActiveStep + 1) / prcSteps.length) * 100}%` }}
              />
            </div>
            {prcSteps.map((step, index) => (
              <div
                key={step.id}
                className={`prc-timeline__step ${index <= prcActiveStep ? 'prc-timeline__step--active' : ''}`}
                style={{ '--prc-step-color': step.color }}
              >
                <div className="prc-timeline__node">
                  {index <= prcActiveStep ? (
                    <CheckCircle2 size={28} strokeWidth={2} />
                  ) : (
                    <span className="prc-timeline__number">{step.id}</span>
                  )}
                </div>
                <div className="prc-timeline__content">
                  <span className="prc-timeline__phase">Phase {step.id}</span>
                  <h4 className="prc-timeline__title">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Active Card Display */}
          <div className={`prc-display ${prcVisible ? 'prc-display--visible' : ''}`}>
            <div
              className="prc-display__card"
              style={{
                '--prc-display-color': prcSteps[prcActiveStep].color,
                '--prc-display-bg': prcSteps[prcActiveStep].bgGradient,
              }}
            >
              {/* Large Step Number */}
              <div className="prc-display__number" style={{ color: prcSteps[prcActiveStep].color }}>
                {prcSteps[prcActiveStep].id}
              </div>

              {/* Icon */}
              <div
                className="prc-display__icon"
                style={{
                  background: prcSteps[prcActiveStep].bgLight,
                  color: prcSteps[prcActiveStep].color,
                }}
              >
                {prcSteps[prcActiveStep].icon}
              </div>

              {/* Content */}
              <h3 className="prc-display__title">{prcSteps[prcActiveStep].title}</h3>
              <p className="prc-display__desc">{prcSteps[prcActiveStep].description}</p>

              {/* Status */}
              <div className="prc-display__status">
                <div className="prc-display__status-bar">
                  <div
                    className="prc-display__status-fill"
                    style={{
                      width: `${((prcActiveStep + 1) / prcSteps.length) * 100}%`,
                      background: prcSteps[prcActiveStep].color,
                    }}
                  />
                </div>
                <span className="prc-display__status-text" style={{ color: prcSteps[prcActiveStep].color }}>
                  Step {prcActiveStep + 1} of {prcSteps.length} — {prcActiveStep < prcSteps.length - 1 ? 'In Progress' : 'Complete'}
                </span>
              </div>
            </div>

            {/* Mini Navigation Dots */}
            <div className="prc-display__nav">
              {prcSteps.map((step, index) => (
                <button
                  key={step.id}
                  className={`prc-display__dot ${index === prcActiveStep ? 'prc-display__dot--active' : ''} ${index <= prcActiveStep ? 'prc-display__dot--done' : ''}`}
                  onClick={() => setPrcActiveStep(index)}
                  style={{
                    '--prc-dot-color': step.color,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`prc-cta ${prcVisible ? 'prc-cta--visible' : ''}`}
          style={{ transform: `translateY(${prcScrollY * -0.01}px)` }}
        >
          <div className="prc-cta__card">
            <div className="prc-cta__content">
              <h3 className="prc-cta__title">
                Let's Design the Right Mobile Signal Solution for Your Building
              </h3>
              <p className="prc-cta__desc">
                Our RF engineers will analyze your site, recommend the optimal i Booster or DAS 
                configuration, and deliver end-to-end implementation with professional installation 
                and ongoing technical support.
              </p>
            </div>
            <a href="/contact" className="prc-cta__btn">
              <span>Request Free RF Site Survey</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;