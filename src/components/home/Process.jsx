import React, { useEffect, useRef, useState } from "react";
import { Search, Radio, PenTool, Wrench, Gauge, Headphones, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import "./Process.css";

// Import process images
import surveyImg from "../../assets/t1.png";
import planningImg from "../../assets/t2.png";
import designImg from "../../assets/t3.png";
import installImg from "../../assets/t4.png";
import testingImg from "../../assets/t5.png";
import supportImg from "../../assets/t6.png";

const prcSteps = [
  {
    id: "01",
    icon: <Search size={24} strokeWidth={1.5} />,
    title: "RF Site Survey & Signal Analysis",
    description:
      "Our RF engineers perform a comprehensive on-site survey to evaluate signal strength, identify dead zones, analyze building structures, and understand coverage requirements before recommending the ideal i Booster or DAS solution.",
    color: "#19AB3F",
    bgLight: "#E8F7EA",
    image: surveyImg,
  },
  {
    id: "02",
    icon: <Radio size={24} strokeWidth={1.5} />,
    title: "Coverage Planning & RF Design",
    description:
      "Using advanced RF engineering techniques, we analyze operator frequencies, signal propagation, interference levels, and user density to design an optimized indoor wireless coverage solution.",
    color: "#0755A3",
    bgLight: "#E8F1FA",
    image: planningImg,
  },
  {
    id: "03",
    icon: <PenTool size={24} strokeWidth={1.5} />,
    title: "Product Selection & Solution Design",
    description:
      "Based on your building size and coverage requirements, we recommend the right i Booster (23 dBm, 25 dBm, or 27 dBm), Distributed Antenna System (DAS), antennas, RF accessories, and cable routing for maximum performance.",
    color: "#19AB3F",
    bgLight: "#E8F7EA",
    image: designImg,
  },
  {
    id: "04",
    icon: <Wrench size={24} strokeWidth={1.5} />,
    title: "Professional Installation",
    description:
      "Our certified engineers install the complete wireless infrastructure with precision, ensuring optimal antenna placement, proper cable management, and seamless integration with existing mobile networks.",
    color: "#0755A3",
    bgLight: "#E8F1FA",
    image: installImg,
  },
  {
    id: "05",
    icon: <Gauge size={24} strokeWidth={1.5} />,
    title: "Testing & Performance Optimization",
    description:
      "After installation, we conduct detailed signal testing, coverage verification, and system optimization to eliminate dead zones and ensure reliable 4G & 5G connectivity throughout your property.",
    color: "#19AB3F",
    bgLight: "#E8F7EA",
    image: testingImg,
  },
  {
    id: "06",
    icon: <Headphones size={24} strokeWidth={1.5} />,
    title: "AMC & Technical Support",
    description:
      "Our commitment continues after deployment with Annual Maintenance Contracts (AMC), preventive maintenance, troubleshooting, upgrades, and dedicated technical support to ensure long-term wireless performance.",
    color: "#0755A3",
    bgLight: "#E8F1FA",
    image: supportImg,
  },
];

const Process = () => {
  const [prcVisible, setPrcVisible] = useState(false);
  const [prcActiveStep, setPrcActiveStep] = useState(0);
  const [prcScrollY, setPrcScrollY] = useState(0);
  const [prcImageLoaded, setPrcImageLoaded] = useState(false);
  const prcSectionRef = useRef(null);

  // Throttled scroll handler (requestAnimationFrame) — avoids firing a React
  // state update (and therefore a re-render) on every single scroll event.
  useEffect(() => {
    let ticking = false;
    const handlePrcScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setPrcScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handlePrcScroll, { passive: true });
    return () => window.removeEventListener("scroll", handlePrcScroll);
  }, []);

  useEffect(() => {
    const prcObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPrcVisible(true);
      },
      { threshold: 0.1 }
    );
    if (prcSectionRef.current) prcObserver.observe(prcSectionRef.current);
    return () => { if (prcSectionRef.current) prcObserver.unobserve(prcSectionRef.current); };
  }, []);

  useEffect(() => {
    if (!prcVisible) return;
    const prcInterval = setInterval(() => {
      setPrcActiveStep((prev) => (prev < prcSteps.length - 1 ? prev + 1 : 0));
      setPrcImageLoaded(false);
    }, 3000);
    return () => clearInterval(prcInterval);
  }, [prcVisible]);

  return (
    <section className="prc-section" ref={prcSectionRef}>
      {/* Background */}
      <div className="prc-bg">
        <div className="prc-bg__grid" />
        <div className="prc-bg__orb prc-bg__orb--1" style={{ transform: `translate(${prcScrollY * 0.02}px, ${-prcScrollY * 0.03}px)` }} />
        <div className="prc-bg__orb prc-bg__orb--2" style={{ transform: `translate(${-prcScrollY * 0.02}px, ${prcScrollY * 0.04}px)` }} />
      </div>

      <div className="prc-container">
        {/* Header */}
        <div className={`prc-header ${prcVisible ? 'prc-header--visible' : ''}`}>
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

        {/* Main Display - Image + Content */}
        <div className={`prc-display ${prcVisible ? 'prc-display--visible' : ''}`}>
          <div
            className="prc-display__card"
            style={{ '--prc-accent': prcSteps[prcActiveStep].color, '--prc-bg-light': prcSteps[prcActiveStep].bgLight }}
          >
            {/* Image Section */}
            <div className="prc-display__image-wrap">
              <img
                src={prcSteps[prcActiveStep].image}
                alt={prcSteps[prcActiveStep].title}
                className={`prc-display__image ${prcImageLoaded ? 'prc-display__image--loaded' : ''}`}
                onLoad={() => setPrcImageLoaded(true)}
              />
              <div className="prc-display__image-overlay" />
              
              {/* Step Badge on Image */}
              <div className="prc-display__badge" style={{ background: prcSteps[prcActiveStep].color }}>
                <span className="prc-display__badge-num">{prcSteps[prcActiveStep].id}</span>
                <span className="prc-display__badge-text">Phase</span>
              </div>

              {/* Icon on Image */}
              <div className="prc-display__icon-float" style={{ background: prcSteps[prcActiveStep].bgLight, color: prcSteps[prcActiveStep].color }}>
                {prcSteps[prcActiveStep].icon}
              </div>
            </div>

            {/* Content Section */}
            <div className="prc-display__content">
              <div className="prc-display__content-header">
                <span className="prc-display__step-label" style={{ color: prcSteps[prcActiveStep].color }}>
                  Step {prcSteps[prcActiveStep].id} of {prcSteps.length}
                </span>
                <span className="prc-display__status" style={{ color: prcSteps[prcActiveStep].color }}>
                  {prcActiveStep < prcSteps.length - 1 ? '● In Progress' : '● Complete'}
                </span>
              </div>

              <h3 className="prc-display__title">{prcSteps[prcActiveStep].title}</h3>
              <p className="prc-display__desc">{prcSteps[prcActiveStep].description}</p>

              {/* Progress Bar */}
              <div className="prc-display__progress">
                <div className="prc-display__progress-track">
                  <div
                    className="prc-display__progress-fill"
                    style={{
                      width: `${((prcActiveStep + 1) / prcSteps.length) * 100}%`,
                      background: `linear-gradient(90deg, ${prcSteps[prcActiveStep].color}, ${prcSteps[prcActiveStep].color}dd)`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stepper + Navigation */}
        <div className={`prc-stepper-wrap ${prcVisible ? 'prc-stepper-wrap--visible' : ''}`}>
          {/* Horizontal Stepper */}
          <div className="prc-stepper">
            {prcSteps.map((step, index) => (
              <button
                key={step.id}
                className={`prc-stepper__item ${index === prcActiveStep ? 'prc-stepper__item--active' : ''} ${index < prcActiveStep ? 'prc-stepper__item--done' : ''}`}
                onClick={() => { setPrcActiveStep(index); setPrcImageLoaded(false); }}
                style={{ '--prc-step-color': step.color }}
              >
                <div className="prc-stepper__dot">
                  {index < prcActiveStep ? (
                    <CheckCircle2 size={16} strokeWidth={2.5} />
                  ) : (
                    <span>{step.id}</span>
                  )}
                </div>
                <span className="prc-stepper__label">{step.title.split(' & ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Navigation Arrows + Dots */}
          <div className="prc-nav">
            <button
              className="prc-nav__btn"
              onClick={() => { setPrcActiveStep((prev) => (prev > 0 ? prev - 1 : prcSteps.length - 1)); setPrcImageLoaded(false); }}
            >
              <ChevronRight size={18} style={{ transform: 'rotate(180deg)' }} />
            </button>
            <div className="prc-nav__dots">
              {prcSteps.map((step, index) => (
                <button
                  key={step.id}
                  className={`prc-nav__dot ${index === prcActiveStep ? 'prc-nav__dot--active' : ''}`}
                  onClick={() => { setPrcActiveStep(index); setPrcImageLoaded(false); }}
                  style={{ '--prc-dot-color': step.color }}
                />
              ))}
            </div>
            <button
              className="prc-nav__btn"
              onClick={() => { setPrcActiveStep((prev) => (prev < prcSteps.length - 1 ? prev + 1 : 0)); setPrcImageLoaded(false); }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

  
      </div>
    </section>
  );
};

export default Process;