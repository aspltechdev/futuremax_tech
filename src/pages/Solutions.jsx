import React from "react";
import {
  Home,
  Building2,
  Factory,
  Hotel,
  HeartPulse,
  GraduationCap,
  Landmark,
  Briefcase,
  RadioTower,
  Wifi,
  Signal,
  Network,
  Gauge,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Rocket,
  Headset,
  MapPin,
} from "lucide-react";
import "../styles/solutions.css";

/* -------------------------------------------------------------------- */
/*  Data                                                                  */
/* -------------------------------------------------------------------- */

const industrySolutions = [
  {
    icon: Home,
    title: "Residential Wireless Solutions",
    description:
      "Whole-home mobile coverage and connectivity engineered for modern living spaces.",
  },
  {
    icon: Building2,
    title: "Commercial Wireless Solutions",
    description:
      "Reliable in-building coverage for offices, retail spaces, and mixed-use developments.",
  },
  {
    icon: Factory,
    title: "Industrial Wireless Solutions",
    description:
      "Rugged RF systems built for warehouses, plants, and large industrial footprints.",
  },
  {
    icon: Hotel,
    title: "Hospitality Solutions",
    description:
      "Seamless guest connectivity across hotels, resorts, and event venues.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Solutions",
    description:
      "Mission-critical coverage for hospitals, clinics, and care facilities.",
  },
  {
    icon: GraduationCap,
    title: "Education Solutions",
    description:
      "Campus-wide wireless infrastructure for schools, colleges, and universities.",
  },
  {
    icon: Landmark,
    title: "Government Solutions",
    description:
      "Secure, compliant wireless deployments for public sector facilities.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Wireless Solutions",
    description:
      "Scalable networking built for growing, multi-site enterprise operations.",
  },
];

const engineeringSolutions = [
  {
    icon: RadioTower,
    title: "RF Site Survey",
    description: "Precision signal mapping to engineer the right coverage plan.",
  },
  {
    icon: Signal,
    title: "Signal Enhancement",
    description: "Eliminating dead zones with targeted mobile signal boosting.",
  },
  {
    icon: Network,
    title: "Distributed Antenna System (DAS)",
    description: "In-building antenna networks for uniform, reliable coverage.",
  },
  {
    icon: Wifi,
    title: "Enterprise Wireless Infrastructure",
    description: "End-to-end wireless networks built for enterprise scale.",
  },
  {
    icon: Gauge,
    title: "4G & 5G Coverage Optimization",
    description: "Fine-tuned network performance for next-generation speeds.",
  },
];

const whyFuturemax = [
  "RF Engineering Specialists",
  "Customized Wireless Solutions",
  "Kerala-wide Deployment",
  "Professional Site Surveys",
  "Enterprise-grade Technology",
  "Fast Installation",
  "Dedicated Technical Support",
  "Future-ready Infrastructure",
];

/* -------------------------------------------------------------------- */
/*  Decorative signal-wave illustration (shared motif)                    */
/* -------------------------------------------------------------------- */

function SignalTowerIllustration() {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of enterprise buildings with wireless signal coverage"
    >
      {/* background dot grid */}
      <g className="dot-grid" opacity="0.5">
        {Array.from({ length: 6 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={40 + col * 68}
              cy={30 + row * 70}
              r="2"
              fill="#0B5CAD"
            />
          ))
        )}
      </g>

      {/* buildings */}
      <rect x="60" y="300" width="70" height="150" rx="8" fill="#0A3D62" />
      <rect x="140" y="250" width="80" height="200" rx="8" fill="#0B5CAD" />
      <rect x="230" y="320" width="60" height="130" rx="8" fill="#0A3D62" />

      {/* building windows */}
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <rect x="75" y={320 + r * 28} width="12" height="14" rx="2" fill="#F8FAFC" opacity="0.85" />
          <rect x="100" y={320 + r * 28} width="12" height="14" rx="2" fill="#F8FAFC" opacity="0.85" />
        </g>
      ))}
      {[0, 1, 2, 3, 4].map((r) => (
        <g key={r}>
          <rect x="155" y={270 + r * 28} width="14" height="16" rx="2" fill="#F8FAFC" opacity="0.9" />
          <rect x="185" y={270 + r * 28} width="14" height="16" rx="2" fill="#F8FAFC" opacity="0.9" />
        </g>
      ))}

      {/* signal tower */}
      <line x1="420" y1="130" x2="420" y2="450" stroke="#0A3D62" strokeWidth="6" strokeLinecap="round" />
      <path d="M400 150 L420 100 L440 150 Z" fill="none" stroke="#0A3D62" strokeWidth="5" strokeLinejoin="round" />
      <line x1="405" y1="200" x2="435" y2="200" stroke="#0A3D62" strokeWidth="5" strokeLinecap="round" />
      <line x1="400" y1="240" x2="440" y2="240" stroke="#0A3D62" strokeWidth="5" strokeLinecap="round" />

      {/* signal rings pulsing from the tower */}
      <circle className="signal-ring ring-1" cx="420" cy="110" r="30" stroke="#1BA64B" strokeWidth="3" fill="none" />
      <circle className="signal-ring ring-2" cx="420" cy="110" r="55" stroke="#1BA64B" strokeWidth="3" fill="none" />
      <circle className="signal-ring ring-3" cx="420" cy="110" r="80" stroke="#0B5CAD" strokeWidth="2.5" fill="none" />

      {/* connecting network lines between buildings and tower */}
      <line x1="175" y1="270" x2="420" y2="150" stroke="#0B5CAD" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
      <line x1="260" y1="320" x2="420" y2="170" stroke="#0B5CAD" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
      <circle cx="175" cy="270" r="4" fill="#1BA64B" />
      <circle cx="260" cy="320" r="4" fill="#1BA64B" />

      {/* ground line */}
      <line x1="20" y1="450" x2="540" y2="450" stroke="#E2E8F0" strokeWidth="2" />
    </svg>
  );
}

function EngineerIllustration() {
  return (
    <svg
      className="why-illustration"
      viewBox="0 0 480 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Illustration of an engineer configuring a wireless network"
    >
      <circle cx="240" cy="220" r="190" fill="#F8FAFC" />
      <circle className="signal-ring ring-1" cx="330" cy="120" r="26" stroke="#1BA64B" strokeWidth="3" fill="none" />
      <circle className="signal-ring ring-2" cx="330" cy="120" r="46" stroke="#0B5CAD" strokeWidth="2.5" fill="none" />

      {/* equipment rack */}
      <rect x="90" y="180" width="120" height="200" rx="10" fill="#0A3D62" />
      {[0, 1, 2, 3].map((r) => (
        <rect key={r} x="102" y={196 + r * 44} width="96" height="30" rx="4" fill="#0B5CAD" />
      ))}
      {[0, 1, 2, 3].map((r) => (
        <circle key={r} cx="188" cy={211 + r * 44} r="4" fill="#1BA64B" />
      ))}

      {/* engineer (simplified figure) */}
      <circle cx="290" cy="230" r="22" fill="#0A3D62" />
      <rect x="266" y="252" width="48" height="80" rx="16" fill="#0B5CAD" />
      <rect x="252" y="270" width="24" height="60" rx="10" fill="#0B5CAD" />
      <rect x="304" y="260" width="22" height="50" rx="10" fill="#0B5CAD" />

      {/* tablet in hand */}
      <rect x="312" y="250" width="34" height="24" rx="4" fill="#F8FAFC" stroke="#1BA64B" strokeWidth="2" />

      {/* signal wave from tower top */}
      <line x1="420" y1="60" x2="420" y2="200" stroke="#0A3D62" strokeWidth="5" strokeLinecap="round" />
      <path d="M405 75 L420 45 L435 75 Z" fill="none" stroke="#0A3D62" strokeWidth="4" strokeLinejoin="round" />

      <line x1="330" y1="120" x2="420" y2="70" stroke="#1BA64B" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />

      <line x1="60" y1="380" x2="420" y2="380" stroke="#E2E8F0" strokeWidth="2" />
    </svg>
  );
}

/* -------------------------------------------------------------------- */
/*  Sections                                                              */
/* -------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">SOLUTIONS</span>
          <h1>Engineering Reliable Wireless Connectivity Solutions</h1>
          <p className="hero-paragraph">
            Futuremax Technology provides advanced RF engineering, wireless
            connectivity, Distributed Antenna Systems (DAS), mobile signal
            enhancement, and enterprise networking solutions for businesses
            across Kerala. We proudly serve all 14 districts, with dedicated
            expertise in Kochi (Ernakulam), Kozhikode, and Thiruvananthapuram.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              Request Site Survey
              <ArrowRight size={18} strokeWidth={2.4} />
            </button>
            <button className="btn btn-outline-blue">Talk to an Expert</button>
          </div>
        </div>
        <div className="hero-visual">
          <SignalTowerIllustration />
        </div>
      </div>
    </section>
  );
}

function IndustrySolutions() {
  return (
    <section className="section section-light">
      <div className="container">
        <div className="section-heading">
          <h2>Solutions Designed for Every Industry</h2>
          <p>
            Every industry has unique connectivity challenges. Futuremax
            delivers customized RF engineering and wireless solutions that
            improve communication, mobile coverage, and operational
            efficiency.
          </p>
        </div>

        <div className="card-grid industry-grid">
          {industrySolutions.map(({ icon: Icon, title, description }) => (
            <div className="industry-card" key={title}>
              <div className="industry-card-icon">
                <Icon size={26} strokeWidth={1.8} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a className="learn-more" href="#">
                Learn More
                <ArrowRight size={16} strokeWidth={2.2} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringExpertise() {
  return (
    <section className="section section-white">
      <div className="container">
        <div className="section-heading">
          <h2>Our Engineering Expertise</h2>
          <p>
            From RF planning to enterprise wireless deployment, our
            engineering solutions are designed to deliver seamless
            connectivity and long-term performance.
          </p>
        </div>

        <div className="card-grid engineering-grid">
          {engineeringSolutions.map(({ icon: Icon, title, description }) => (
            <div className="engineering-card" key={title}>
              <div className="engineering-card-icon">
                <Icon size={30} strokeWidth={1.7} />
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

function WhyFuturemax() {
  return (
    <section className="section section-light">
      <div className="container why-grid">
        <div className="why-visual">
          <EngineerIllustration />
        </div>

        <div className="why-copy">
          <h2>Why Businesses Choose Futuremax Technology</h2>

          <ul className="checklist">
            {whyFuturemax.map((item) => (
              <li key={item}>
                <CheckCircle2 size={20} strokeWidth={2} className="check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="highlight-box">
            <MapPin size={22} strokeWidth={2} />
            <p>
              Serving businesses across all 14 districts of Kerala with
              dedicated support in Kochi, Kozhikode, and Thiruvananthapuram.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-bg">
        <svg
          className="cta-network"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.35">
            <line x1="60" y1="80" x2="260" y2="180" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="260" y1="180" x2="480" y2="90" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="480" y1="90" x2="700" y2="220" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="700" y1="220" x2="940" y2="120" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="940" y1="120" x2="1150" y2="240" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="260" y1="180" x2="480" y2="300" stroke="#FFFFFF" strokeWidth="1" />
            <line x1="700" y1="220" x2="520" y2="330" stroke="#FFFFFF" strokeWidth="1" />
          </g>
          {[
            [60, 80], [260, 180], [480, 90], [700, 220],
            [940, 120], [1150, 240], [480, 300], [520, 330],
          ].map(([cx, cy], i) => (
            <circle key={i} cx={cx} cy={cy} r="4" fill="#1BA64B" opacity="0.8" />
          ))}
          <circle className="signal-ring ring-1" cx="900" cy="80" r="28" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.5" />
          <circle className="signal-ring ring-2" cx="900" cy="80" r="50" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.35" />
        </svg>
      </div>

      <div className="container cta-content">
        <h2>Ready to Improve Your Wireless Connectivity?</h2>
        <p>
          Whether you need better mobile signal coverage, RF engineering
          consultation, DAS deployment, or enterprise wireless
          infrastructure, Futuremax Technology is ready to help.
        </p>
        <div className="cta-actions">
          <button className="btn btn-primary">Request Site Survey</button>
          <button className="btn btn-outline-white">Contact Our Team</button>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------- */
/*  Page                                                                  */
/* -------------------------------------------------------------------- */

export default function SolutionsPage() {
  return (
    <main className="futuremax-page">
      <Hero />
      <IndustrySolutions />
      <EngineeringExpertise />
      <WhyFuturemax />
      <CallToAction />
    </main>
  );
}