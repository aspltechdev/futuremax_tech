import React from "react";
import {
  Radio,
  Network,
  RadioTower,
  SignalHigh,
  Gauge,
  Wifi,
  ClipboardCheck,
  Radar,
  PencilRuler,
  Wrench,
  Settings2,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import "../styles/technology.css";

/* -------------------------------------------------------------------- */
/*  Data                                                                  */
/* -------------------------------------------------------------------- */

const expertiseCards = [
  {
    icon: Radio,
    title: "RF Engineering",
    description: "Professional RF planning and wireless system design.",
  },
  {
    icon: Network,
    title: "Wireless Network Design",
    description: "Scalable enterprise wireless infrastructure.",
  },
  {
    icon: RadioTower,
    title: "RF Site Survey",
    description: "Coverage analysis, signal measurement, and optimization.",
  },
  {
    icon: SignalHigh,
    title: "Signal Optimization",
    description: "Improve indoor mobile signal and eliminate dead zones.",
  },
  {
    icon: Gauge,
    title: "4G & 5G Infrastructure",
    description: "Future-ready wireless communication systems.",
  },
  {
    icon: Wifi,
    title: "Enterprise Wireless Infrastructure",
    description: "Reliable connectivity solutions for modern organizations.",
  },
];

const timelineSteps = [
  {
    icon: ClipboardCheck,
    title: "Site Assessment",
    description: "Understanding your space and connectivity needs.",
  },
  {
    icon: Radar,
    title: "RF Analysis",
    description: "Measuring signal strength and identifying gaps.",
  },
  {
    icon: PencilRuler,
    title: "Solution Design",
    description: "Engineering the right coverage and network plan.",
  },
  {
    icon: Wrench,
    title: "Installation & Testing",
    description: "Deploying equipment and validating performance.",
  },
  {
    icon: Settings2,
    title: "Optimization & Ongoing Support",
    description: "Fine-tuning performance with continued support.",
  },
];

const whyTechnology = [
  "Advanced RF Engineering",
  "Optimized Wireless Coverage",
  "Enterprise-grade Infrastructure",
  "Scalable Network Design",
  "Future-ready 4G & 5G Solutions",
  "Professional Technical Support",
];

/* -------------------------------------------------------------------- */
/*  Illustrations                                                        */
/* -------------------------------------------------------------------- */

function HeroSignalPanel() {
  return (
    <div className="tech-hero-panel">
      <svg
        className="tech-hero-panel-svg"
        viewBox="0 0 560 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Abstract wireless signal graphic in Futuremax brand colors"
      >
        <defs>
          <linearGradient id="techHeroGradient" x1="0" y1="0" x2="560" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B5CAD" />
            <stop offset="100%" stopColor="#0A3D62" />
          </linearGradient>
          <radialGradient id="techHeroGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1BA64B" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1BA64B" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="560" height="480" rx="24" fill="url(#techHeroGradient)" />

        <g opacity="0.18">
          {Array.from({ length: 7 }).map((_, row) =>
            Array.from({ length: 8 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={40 + col * 68}
                cy={30 + row * 65}
                r="2"
                fill="#FFFFFF"
              />
            ))
          )}
        </g>

        <circle cx="280" cy="240" r="150" fill="url(#techHeroGlow)" />

        <circle className="signal-ring ring-1" cx="280" cy="240" r="46" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.9" />
        <circle className="signal-ring ring-2" cx="280" cy="240" r="80" stroke="#1BA64B" strokeWidth="2.5" fill="none" opacity="0.85" />
        <circle className="signal-ring ring-3" cx="280" cy="240" r="114" stroke="#FFFFFF" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="280" cy="240" r="150" stroke="#1BA64B" strokeWidth="1.5" fill="none" opacity="0.35" />

        <circle cx="280" cy="240" r="10" fill="#1BA64B" />
        <circle cx="280" cy="240" r="18" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.7" />
      </svg>
    </div>
  );
}

function NetworkAbstractIllustration() {
  return (
    <svg
      className="tech-why-illustration"
      viewBox="0 0 480 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract illustration of a connected RF network"
    >
      <circle cx="240" cy="220" r="190" fill="#F8FAFC" />

      {/* network nodes and connecting lines */}
      <g stroke="#0B5CAD" strokeWidth="1.5" strokeDasharray="3 6" opacity="0.55">
        <line x1="140" y1="150" x2="240" y2="220" />
        <line x1="240" y1="220" x2="340" y2="140" />
        <line x1="240" y1="220" x2="330" y2="290" />
        <line x1="240" y1="220" x2="150" y2="300" />
        <line x1="340" y1="140" x2="380" y2="200" />
      </g>

      <circle cx="240" cy="220" r="20" fill="#0B5CAD" />
      <circle cx="140" cy="150" r="10" fill="#1BA64B" />
      <circle cx="340" cy="140" r="10" fill="#1BA64B" />
      <circle cx="330" cy="290" r="10" fill="#1BA64B" />
      <circle cx="150" cy="300" r="10" fill="#1BA64B" />
      <circle cx="380" cy="200" r="8" fill="#0A3D62" />

      <circle className="signal-ring ring-1" cx="240" cy="220" r="46" stroke="#0B5CAD" strokeWidth="2" fill="none" opacity="0.7" />
      <circle className="signal-ring ring-2" cx="240" cy="220" r="70" stroke="#1BA64B" strokeWidth="2" fill="none" opacity="0.5" />

      <line x1="60" y1="380" x2="420" y2="380" stroke="#E2E8F0" strokeWidth="2" />
    </svg>
  );
}

/* -------------------------------------------------------------------- */
/*  Sections                                                              */
/* -------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="tech-hero">
      <div className="container tech-hero-grid">
        <div className="tech-hero-copy">
          <span className="tech-eyebrow">TECHNOLOGY</span>
          <h1>
            Powering Reliable Wireless Connectivity Through Advanced RF
            Engineering
          </h1>
          <p className="tech-hero-paragraph">
            Futuremax Technology combines RF engineering expertise with
            modern wireless technologies to design, optimize, and deploy
            reliable communication infrastructure. Our solutions improve
            mobile coverage, network performance, and enterprise
            connectivity for businesses across Kerala.
          </p>
          <div className="tech-hero-actions">
            <button className="btn btn-primary">
              Explore Technologies
              <ArrowRight size={18} strokeWidth={2.4} />
            </button>
            <button className="btn btn-outline-white">
              Request Site Survey
            </button>
          </div>
        </div>
        <div className="tech-hero-visual">
          <HeroSignalPanel />
        </div>
      </div>
    </section>
  );
}

function TechnologyExpertise() {
  return (
    <section className="tech-section tech-section-light">
      <div className="container">
        <div className="tech-section-heading">
          <h2>Core Technologies We Specialize In</h2>
        </div>

        <div className="tech-card-grid">
          {expertiseCards.map(({ icon: Icon, title, description }) => (
            <div className="tech-expertise-card" key={title}>
              <div className="tech-expertise-icon">
                <Icon size={26} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringApproach() {
  return (
    <section className="tech-section tech-section-white">
      <div className="container">
        <div className="tech-section-heading">
          <h2>How We Deliver Reliable Connectivity</h2>
        </div>

        <div className="timeline">
          {timelineSteps.map(({ icon: Icon, title, description }, index) => (
            <div className="timeline-step" key={title}>
              <div className="timeline-icon-wrap">
                <div className="timeline-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                {index < timelineSteps.length - 1 && (
                  <span className="timeline-connector" />
                )}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyOurTechnology() {
  return (
    <section className="tech-section tech-section-light">
      <div className="container tech-why-grid">
        <div className="tech-why-visual">
          <NetworkAbstractIllustration />
        </div>

        <div className="tech-why-copy">
          <h2>Built for Performance, Reliability &amp; Growth</h2>

          <ul className="tech-checklist">
            {whyTechnology.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} strokeWidth={2} className="tech-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="tech-highlight-box">
            <MapPin size={22} strokeWidth={2} />
            <p>
              Futuremax Technology delivers RF Engineering and Wireless
              Connectivity solutions across all 14 districts of Kerala, with
              dedicated support in Kochi (Ernakulam), Kozhikode, and
              Thiruvananthapuram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="tech-cta">
      <div className="tech-cta-bg">
        <svg
          className="tech-cta-network"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.35">
            <line x1="60" y1="90" x2="270" y2="170" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="270" y1="170" x2="470" y2="80" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="470" y1="80" x2="690" y2="210" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="690" y1="210" x2="930" y2="110" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="930" y1="110" x2="1140" y2="230" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="270" y1="170" x2="470" y2="290" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="690" y1="210" x2="520" y2="320" stroke="#FFFFFF" strokeWidth="1" />
          </g>
          {[
            [60, 90], [270, 170], [470, 80], [690, 210],
            [930, 110], [1140, 230], [470, 290], [520, 320],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4" fill="#1BA64B" opacity="0.8" />
          ))}
          <circle className="signal-ring ring-1" cx="880" cy="90" r="26" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.5" />
          <circle className="signal-ring ring-2" cx="880" cy="90" r="48" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.35" />
        </svg>
      </div>

      <div className="container tech-cta-content">
        <h2>Ready to Strengthen Your Wireless Infrastructure?</h2>
        <p>
          From RF engineering and site surveys to enterprise wireless
          deployments and signal optimization, Futuremax Technology helps
          businesses build reliable, high-performance communication
          networks.
        </p>
        <div className="tech-cta-actions">
          <button className="btn btn-primary">Request Site Survey</button>
          <button className="btn btn-outline-white">
            Contact Our Engineers
          </button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  Page                                                                  */
/* -------------------------------------------------------------------- */

export default function Technology() {
  return (
    <main className="tech-page">
      <Hero />
      <TechnologyExpertise />
      <EngineeringApproach />
      <WhyOurTechnology />
      <CallToAction />
    </main>
  );
}