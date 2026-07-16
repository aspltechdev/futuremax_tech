import React from "react";
import "./Technology.css";

/* ---------- inline icons ---------- */
const IconAntenna = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <path d="M20 6v22M20 6l-8 8M20 6l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="6" r="2.5" fill="currentColor" />
    <path d="M12 34h16M20 28v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconMesh = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <circle cx="9" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="31" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="22" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="9" cy="32" r="3" stroke="currentColor" strokeWidth="2" />
    <circle cx="31" cy="32" r="3" stroke="currentColor" strokeWidth="2" />
    <path d="M11 12l7 8M29 12l-7 8M11 30l7-8M29 30l-7-8M12 10h16M12 32h16" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);
const IconScan = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M10 22l5-8 4 5 4-9 4 6 3-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 32h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconTune = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <path d="M6 14h28M6 26h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="3" fill="currentColor" />
    <circle cx="27" cy="26" r="3" fill="currentColor" />
  </svg>
);
const IconTower = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <path d="M20 4v32M13 36h14M11 10a13 13 0 0 1 18 0M8 4a18 18 0 0 1 24 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
const IconHeatmap = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <rect x="6" y="6" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2" />
    <path d="M6 20h28M20 6v28" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
    <circle cx="20" cy="20" r="2" fill="currentColor" />
  </svg>
);
const IconBuilding = () => (
  <svg viewBox="0 0 40 40" fill="none">
    <rect x="9" y="8" width="22" height="28" rx="1" stroke="currentColor" strokeWidth="2" />
    <path d="M14 14h4M22 14h4M14 21h4M22 21h4M14 28h4M22 28h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

/* ---------- content ---------- */
const capabilities = [
  {
    id: "rf-engineering",
    badge: "RF Engineering",
    heading: <>Precision <span>spectrum modeling</span> before we ever run a cable</>,
    description:
      "We simulate propagation, link budgets and antenna patterns against your site's real geometry and materials, so the RF plan is built for that space — not a generic install.",
    pills: ["Link Budget Modeling", "Path Loss Analysis", "Antenna Pattern Design"],
    icon: <IconAntenna />,
    cardEyebrow: "RF ENGINEERING SOLUTION",
    cardTag: "Precision Tuned",
    cardTitle: "Spectrum & Link Budget Modeling",
    cardDesc: "Site-specific propagation modeling engineered before deployment begins.",
    cardStat: "700MHz–3800MHz",
  },
  {
    id: "wireless-network-design",
    badge: "Wireless Network Design",
    heading: <>Networks built around <span>real usage</span>, not floor plans</>,
    description:
      "Backhaul topology, mesh density and capacity planning are shaped by how the space is actually used — occupancy, device load, and structural layout — for a network that scales cleanly.",
    pills: ["Mesh & DAS Topology", "Capacity Planning", "Redundant Backhaul"],
    icon: <IconMesh />,
    cardEyebrow: "NETWORK ARCHITECTURE",
    cardTag: "Mesh Ready",
    cardTitle: "Enterprise Wireless Network Design",
    cardDesc: "Topology and capacity planning built for peak-load performance.",
    cardStat: "Wi-Fi 6E",
  },
  {
    id: "rf-site-survey",
    badge: "RF Site Survey",
    heading: <>Measured, not assumed: <span>every dead zone found</span> first</>,
    description:
      "Walk-test data, predictive heatmaps and spectrum scans surface interference and coverage gaps before a single unit is installed, grounding every design in real measurement.",
    pills: ["Predictive RF Modeling", "Walk-Test Heatmaps", "Interference Mapping"],
    icon: <IconScan />,
    cardEyebrow: "FIELD DIAGNOSTICS",
    cardTag: "Predictive",
    cardTitle: "RF Site Survey & Heatmapping",
    cardDesc: "Full-spectrum scans that reveal what a floor plan can't.",
    cardStat: "500+ Surveys",
  },
  {
    id: "signal-optimization",
    badge: "Signal Optimization",
    heading: <>Tuned continuously, <span>not just at commissioning</span></>,
    description:
      "SNR tuning, load balancing and handover optimization keep performance high under real-world load long after the install team has left the building.",
    pills: ["SNR Tuning", "Load Balancing", "Handover Optimization"],
    icon: <IconTune />,
    cardEyebrow: "PERFORMANCE TUNING",
    cardTag: "Auto-Optimized",
    cardTitle: "Signal Optimization Engine",
    cardDesc: "Ongoing tuning that keeps networks fast as load grows.",
    cardStat: "99.9% Uptime",
  },
  {
    id: "4g-5g-infrastructure",
    badge: "4G & 5G Infrastructure",
    heading: <>Next-gen throughput, <span>reaching where macro can't</span></>,
    description:
      "Small cell deployment, massive MIMO and core network integration bring true 4G and 5G performance indoors, where legacy macro towers fall short.",
    pills: ["Small Cell Deployment", "Massive MIMO", "Core Integration"],
    icon: <IconTower />,
    cardEyebrow: "NEXT-GEN INFRASTRUCTURE",
    cardTag: "5G Ready",
    cardTitle: "4G & 5G Infrastructure Deployment",
    cardDesc: "Indoor-grade throughput built on next-generation core tech.",
    cardStat: "5G NR n78",
  },
  {
    id: "coverage-analysis",
    badge: "Coverage Analysis",
    heading: <>Signal strength, turned into <span>a number you can act on</span></>,
    description:
      "RSRP/RSRQ benchmarking and coverage heatmaps quantify performance floor by floor, so decisions about where to invest next are backed by data, not guesswork.",
    pills: ["Coverage Heatmaps", "RSRP / RSRQ Benchmarking", "Dead-Zone Detection"],
    icon: <IconHeatmap />,
    cardEyebrow: "COVERAGE INTELLIGENCE",
    cardTag: "Data-Driven",
    cardTitle: "Coverage Analysis & Benchmarking",
    cardDesc: "Floor-by-floor performance data your team can act on.",
    cardStat: "Real-Time",
  },
  {
    id: "enterprise-wireless-infrastructure",
    badge: "Enterprise Wireless Infrastructure",
    heading: <>A backbone built to <span>grow with your enterprise</span></>,
    description:
      "Structured cabling, DAS integration and multi-carrier support come together as a scalable backbone designed to expand as the business does.",
    pills: ["Structured Cabling", "DAS Integration", "Multi-Carrier Support"],
    icon: <IconBuilding />,
    cardEyebrow: "ENTERPRISE BACKBONE",
    cardTag: "Scalable",
    cardTitle: "Enterprise Wireless Infrastructure",
    cardDesc: "A multi-carrier backbone designed to expand with you.",
    cardStat: "Pan-India",
  },
];

const stats = [
  { value: "3800MHz", label: "Max frequency range engineered" },
  { value: "500+", label: "RF site surveys completed" },
  { value: "99.9%", label: "Network uptime delivered" },
  { value: "14", label: "Kerala districts covered" },
];

const Technology = () => {
  return (
    <main className="page technology-page">
      {/* ---------- banner ---------- */}
      <section className="page-banner">
        <div className="grid-overlay" aria-hidden="true" />
        <div className="hero-blob hero-blob--1" aria-hidden="true" />
        <div className="hero-blob hero-blob--2" aria-hidden="true" />
        <div className="container">
          <span className="section-tag">TECHNOLOGY</span>
          <h1>Innovation Through Engineering</h1>
          <p>
            Learn about our RF engineering, IoT monitoring, wireless
            optimization and next-generation connectivity technologies.
          </p>
        </div>
      </section>

      {/* ---------- stat strip ---------- */}
      <section className="stat-strip">
        <div className="container stat-strip__grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- capability blocks ---------- */}
      <section className="capabilities">
        {capabilities.map((cap, i) => (
          <article
            id={cap.id}
            key={cap.id}
            className={`cap-block ${i % 2 === 1 ? "cap-block--reverse" : ""}`}
          >
            <div className="container cap-block__inner">
              {/* text side */}
              <div className="cap-block__text">
                <span className="pill-badge">
                  <span className="pill-badge__dot" />
                  {cap.badge}
                </span>
                <h2>{cap.heading}</h2>
                <p>{cap.description}</p>
                <ul className="cap-block__pills">
                  {cap.pills.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>

              {/* floating glass card */}
              <div className="cap-block__card">
                <div className="glass-card">
                  <div className="glass-card__art">
                    <div className="glass-card__icon">{cap.icon}</div>
                  </div>
                  <div className="glass-card__body">
                    <div className="glass-card__row">
                      <span className="glass-card__eyebrow">{cap.cardEyebrow}</span>
                      <span className="glass-card__tag">{cap.cardTag}</span>
                    </div>
                    <h3>{cap.cardTitle}</h3>
                    <p>{cap.cardDesc}</p>
                    <span className="glass-card__stat">{cap.cardStat}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ---------- closing CTA ---------- */}
      <section className="tech-cta">
        <div className="container tech-cta__inner">
          <div>
            <span className="pill-badge">
              <span className="pill-badge__dot" />
              Get Started
            </span>
            <h2>Not sure which technology your site needs?</h2>
            <p>Our engineers can benchmark your space and recommend the right RF strategy — free of charge.</p>
          </div>
          <a href="/contact" className="btn btn-primary">
            Request Site Survey <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Technology;