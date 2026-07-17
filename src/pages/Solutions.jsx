import React, { useState } from "react";
import { ArrowRight, BarChart3, Building, CheckCircle2, Factory, GraduationCap, Hotel, MapPin, Radio, Shield, Stethoscope, Wifi } from "lucide-react";
import "./Solutions.css";
import heroProduct from "../assets/sixthimage.png";
import rfEngineeringImg from "../assets/RFimage.png";
import dasImage from "../assets/DASIMAGE.png";
import enterpriseImage from "../assets/sixthimage.png";
import signalBoosterImage from "../assets/signalboosters.png";
import siteSurveyImage from "../assets/sixthimage.png";
import amcImage from "../assets/amcsupport.png";

/* ==========================================================
   SOLUTIONS DATA
========================================================== */

const solutions = [
  {
    id: "enterprise",
    title: "Enterprise Connectivity",
    shortDesc: "Reliable enterprise wireless infrastructure for businesses of every size.",
    image: enterpriseImage,
    overview: "Futuremax Technology delivers enterprise-grade wireless connectivity solutions designed to provide seamless, secure and scalable network infrastructure for offices, campuses, industries and public facilities.",
    features: ["Enterprise Wi-Fi", "High-Speed Connectivity", "Centralized Network Management", "Secure Wireless Access"],
    applications: ["Corporate Offices", "Commercial Buildings", "Educational Campuses", "Healthcare Facilities"],
    benefits: ["Reliable Connectivity", "High Performance", "Scalable Infrastructure", "Enterprise Security"],
  },
  {
    id: "rf",
    title: "RF Engineering",
    shortDesc: "Professional RF planning, wireless design and optimization services.",
    image: rfEngineeringImg,
    overview: "Our RF Engineering team performs comprehensive site analysis, coverage planning and optimization to deliver maximum wireless performance with minimum interference.",
    features: ["RF Planning", "Coverage Analysis", "Heat Mapping", "Capacity Planning"],
    applications: ["Factories", "Hotels", "Hospitals", "Large Campuses"],
    benefits: ["Better Coverage", "Reduced Interference", "Reliable Performance", "Future Scalability"],
  },
  {
    id: "das",
    title: "DAS Systems",
    shortDesc: "Distributed Antenna Systems for superior indoor mobile coverage.",
    image: dasImage,
    overview: "Futuremax designs and deploys Distributed Antenna Systems that improve indoor cellular coverage across large buildings and complex environments.",
    features: ["Indoor Coverage", "Signal Distribution", "Multi-Operator Support", "Network Integration"],
    applications: ["Shopping Malls", "Hospitals", "Airports", "Commercial Towers"],
    benefits: ["Strong Indoor Signal", "Reliable Voice Calls", "Fast Data", "Better User Experience"],
  },
  {
    id: "boosters",
    title: "Signal Boosters",
    shortDesc: "Improve weak cellular coverage with professional signal boosting solutions.",
    image: signalBoosterImage,
    overview: "Our signal booster solutions eliminate weak signal areas by enhancing cellular reception in residential, commercial and industrial environments.",
    features: ["4G/5G Boosting", "Indoor Signal Enhancement", "Outdoor Coverage", "Multi-Network Support"],
    applications: ["Homes", "Office Buildings", "Warehouses", "Remote Locations"],
    benefits: ["Improved Signal", "Clear Voice Calls", "Faster Internet", "Better Connectivity"],
  },
  {
    id: "survey",
    title: "Site Survey",
    shortDesc: "Professional RF surveys for accurate wireless network planning.",
    image: siteSurveyImage,
    overview: "Futuremax conducts detailed site surveys to identify interference, dead zones and optimal equipment placement before deployment.",
    features: ["RF Analysis", "Coverage Survey", "Heat Maps", "Deployment Planning"],
    applications: ["New Buildings", "Office Renovations", "Industrial Sites", "Campuses"],
    benefits: ["Accurate Planning", "Lower Deployment Cost", "Better Performance", "Reliable Coverage"],
  },
  {
    id: "amc",
    title: "AMC Support",
    shortDesc: "Annual Maintenance Contracts for reliable network performance.",
    image: amcImage,
    overview: "Futuremax provides preventive maintenance, troubleshooting and continuous monitoring to keep your wireless infrastructure operating efficiently.",
    features: ["Preventive Maintenance", "Performance Monitoring", "Troubleshooting", "Technical Support"],
    applications: ["Corporate Networks", "Hospitals", "Educational Institutions", "Industrial Facilities"],
    benefits: ["Reduced Downtime", "Long-Term Reliability", "Fast Issue Resolution", "Peace of Mind"],
  },
];

const industrySolutions = [
  { icon: Building, title: "Commercial Real Estate", description: "Multi-tenant buildings requiring reliable coverage across floors and parking areas." },
  { icon: Hotel, title: "Hospitality", description: "Hotels and resorts needing seamless Wi-Fi for guests and operational systems." },
  { icon: GraduationCap, title: "Education", description: "Schools and universities requiring campus-wide connectivity for students and staff." },
  { icon: Stethoscope, title: "Healthcare", description: "Hospitals and clinics where reliable communication is critical for patient care." },
  { icon: Factory, title: "Industrial", description: "Factories and warehouses with challenging RF environments and machinery interference." },
  { icon: Building, title: "Government", description: "Public facilities requiring secure and reliable wireless infrastructure." },
];

const engineeringSolutions = [
  { icon: Wifi, title: "Wireless Design", description: "End-to-end wireless network architecture and deployment planning." },
  { icon: Radio, title: "RF Optimization", description: "Fine-tuning radio frequency parameters for peak performance." },
  { icon: Shield, title: "Network Security", description: "Enterprise-grade security protocols to protect wireless infrastructure." },
  { icon: BarChart3, title: "Performance Monitoring", description: "Continuous monitoring and analytics for proactive maintenance." },
];

const whyFuturemax = [
  "10+ years of RF engineering and wireless deployment experience",
  "Certified engineers with expertise across multiple technologies",
  "Custom solutions designed for specific business requirements",
  "End-to-end project management from survey to maintenance",
  "Dedicated support across all 14 districts of Kerala",
  "Proven track record with enterprise and government clients",
];

/* ==========================================================
   ILLUSTRATIONS
========================================================== */

function SignalTowerIllustration() {
  return (
    <svg className="hero-illustration" viewBox="0 0 560 480" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Signal tower illustration">
      {/* building 1 */}
      <rect x="40" y="280" width="120" height="170" rx="6" fill="#0A3D62" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <rect x="52" y={295 + r * 32} width="14" height="16" rx="2" fill="#F8FAFC" opacity="0.85" />
          <rect x="80" y={295 + r * 32} width="14" height="16" rx="2" fill="#F8FAFC" opacity="0.85" />
          <rect x="108" y={295 + r * 32} width="14" height="16" rx="2" fill="#F8FAFC" opacity="0.85" />
        </g>
      ))}

      {/* building 2 */}
      <rect x="190" y="230" width="140" height="220" rx="6" fill="#0B5CAD" />
      {[0, 1, 2, 3, 4].map((r) => (
        <g key={r}>
          <rect x="205" y={248 + r * 34} width="16" height="18" rx="2" fill="#F8FAFC" opacity="0.9" />
          <rect x="240" y={248 + r * 34} width="16" height="18" rx="2" fill="#F8FAFC" opacity="0.9" />
          <rect x="275" y={248 + r * 34} width="16" height="18" rx="2" fill="#F8FAFC" opacity="0.9" />
          <rect x="310" y={248 + r * 34} width="16" height="18" rx="2" fill="#F8FAFC" opacity="0.9" />
        </g>
      ))}

      {/* building 3 */}
      <rect x="360" y="300" width="100" height="150" rx="6" fill="#0A3D62" />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <rect x="375" y={320 + r * 28} width="12" height="14" rx="2" fill="#F8FAFC" opacity="0.85" />
          <rect x="400" y={320 + r * 28} width="12" height="14" rx="2" fill="#F8FAFC" opacity="0.85" />
        </g>
      ))}

      {/* signal tower */}
      <line x1="420" y1="130" x2="420" y2="450" stroke="#0A3D62" strokeWidth="6" strokeLinecap="round" />
      <path d="M400 150 L420 100 L440 150 Z" fill="none" stroke="#0A3D62" strokeWidth="5" strokeLinejoin="round" />
      <line x1="405" y1="200" x2="435" y2="200" stroke="#0A3D62" strokeWidth="5" strokeLinecap="round" />
      <line x1="400" y1="240" x2="440" y2="240" stroke="#0A3D62" strokeWidth="5" strokeLinecap="round" />

      {/* signal rings */}
      <circle className="signal-ring ring-1" cx="420" cy="110" r="30" stroke="#1BA64B" strokeWidth="3" fill="none" />
      <circle className="signal-ring ring-2" cx="420" cy="110" r="55" stroke="#1BA64B" strokeWidth="3" fill="none" />
      <circle className="signal-ring ring-3" cx="420" cy="110" r="80" stroke="#0B5CAD" strokeWidth="2.5" fill="none" />

      {/* network lines */}
      <line x1="260" y1="270" x2="420" y2="150" stroke="#0B5CAD" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
      <line x1="330" y1="300" x2="420" y2="170" stroke="#0B5CAD" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.6" />
      <circle cx="260" cy="270" r="4" fill="#1BA64B" />
      <circle cx="330" cy="300" r="4" fill="#1BA64B" />

      {/* ground line */}
      <line x1="20" y1="450" x2="540" y2="450" stroke="#E2E8F0" strokeWidth="2" />
    </svg>
  );
}

function EngineerIllustration() {
  return (
    <svg className="why-illustration" viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Engineer illustration">
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

      {/* engineer */}
      <circle cx="290" cy="230" r="22" fill="#0A3D62" />
      <rect x="266" y="252" width="48" height="80" rx="16" fill="#0B5CAD" />
      <rect x="252" y="270" width="24" height="60" rx="10" fill="#0B5CAD" />
      <rect x="304" y="260" width="22" height="50" rx="10" fill="#0B5CAD" />

      {/* tablet */}
      <rect x="312" y="250" width="34" height="24" rx="4" fill="#F8FAFC" stroke="#1BA64B" strokeWidth="2" />

      {/* signal tower */}
      <line x1="420" y1="60" x2="420" y2="200" stroke="#0A3D62" strokeWidth="5" strokeLinecap="round" />
      <path d="M405 75 L420 45 L435 75 Z" fill="none" stroke="#0A3D62" strokeWidth="4" strokeLinejoin="round" />

      <line x1="330" y1="120" x2="420" y2="70" stroke="#1BA64B" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.7" />
      <line x1="60" y1="380" x2="420" y2="380" stroke="#E2E8F0" strokeWidth="2" />
    </svg>
  );
}

/* ==========================================================
   MAIN COMPONENT
========================================================== */

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (
    <main className="solutions-page">
      {/* HERO */}
      <section className="solutions-hero">
        <div className="container">
          <span className="section-tag">FUTUREMAX SOLUTIONS</span>
          <h1>Enterprise Wireless<br />Connectivity Solutions</h1>
          <p className="hero-paragraph">
            Futuremax Technology provides advanced RF engineering, wireless
            connectivity, Distributed Antenna Systems (DAS), mobile signal
            enhancement, and enterprise networking solutions for businesses
            across Kerala. We proudly serve all 14 districts, with dedicated
            expertise in Kochi (Ernakulam), Kozhikode, and Thiruvananthapuram.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Request Site Survey</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </section>

      {/* OUR SOLUTIONS */}
      <section className="solutions-overview">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">OUR SOLUTIONS</span>
            <h2>Smart Wireless Solutions<br />For Every Business</h2>
            <p>
              Explore Futuremax Technology's comprehensive wireless
              solutions designed to improve connectivity, optimize
              network performance and deliver seamless communication
              across enterprise, commercial and industrial
              environments.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((service) => (
              <div
                key={service.id}
                className={`solution-card ${activeSolution.id === service.id ? "active" : ""}`}
                onClick={() => setActiveSolution(service)}
              >
                <div className="solution-icon">
                  {service.title.split(" ").map(word => word[0]).join("").substring(0, 2)}
                </div>
                <h3>{service.title}</h3>
                <p>{service.shortDesc}</p>
                <span className="solution-link">View Details →</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION DETAILS */}
      <section className="solution-details">
        <div className="container">
          <div className="details-header">
            <span className="section-tag">SELECTED SOLUTION</span>
            <h2>{activeSolution.title}</h2>
            <p>{activeSolution.overview}</p>
          </div>

          <div className="details-top">
            <div className="details-image">
              <img src={activeSolution.image} alt={activeSolution.title} className="solution-detail-image" />
            </div>
            <div className="details-content">
              <h3>Solution Overview</h3>
              <p>{activeSolution.overview}</p>
            </div>
          </div>

          {/* FEATURES & APPLICATIONS */}
          <div className="details-grid">
            <div className="detail-card">
              <div className="card-title">
                <span>01</span>
                <h3>Core Features</h3>
              </div>
              <ul>
                {activeSolution.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="detail-card">
              <div className="card-title">
                <span>02</span>
                <h3>Applications</h3>
              </div>
              <ul>
                {activeSolution.applications.map((application, index) => (
                  <li key={index}>✓ {application}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* KEY BENEFITS */}
          <div className="benefits-wrapper">
            <div className="section-heading">
              <span className="section-tag">KEY BENEFITS</span>
              <h2>Why Choose This Solution?</h2>
            </div>
            <div className="benefits-grid">
              {activeSolution.benefits.map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <div className="benefit-icon">{index + 1}</div>
                  <h4>{benefit}</h4>
                  <p>Designed to deliver reliable, secure and scalable wireless infrastructure for long-term business growth.</p>
                </div>
              ))}
            </div>
          </div>

          {/* PROJECT SHOWCASE */}
          <div className="projects-section">
            <div className="section-heading">
              <span className="section-tag">PROJECT SHOWCASE</span>
              <h2>Recent Installations</h2>
              <p>Every Futuremax deployment is engineered to deliver reliable connectivity, professional installation and long-term network performance.</p>
            </div>
            <div className="projects-grid">
              {[1, 2, 3].map((i) => (
                <div className="project-card" key={i}>
                  <div className="project-image">
                    <img src={activeSolution.image} alt="Project" />
                  </div>
                  <div className="project-content">
                    <h4>{activeSolution.title} Deployment</h4>
                    <p>Professional installation and optimization for enterprise-grade wireless connectivity.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INDUSTRIES SERVED */}
          <div className="industries-served">
            <div className="section-heading">
              <span className="section-tag">INDUSTRIES SERVED</span>
              <h2>Where This Solution Is Used</h2>
            </div>
            <div className="industry-tags">
              <span>Commercial Buildings</span>
              <span>Healthcare</span>
              <span>Hospitality</span>
              <span>Education</span>
              <span>Industrial Facilities</span>
              <span>Government</span>
              <span>Residential</span>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="methodology-section">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">OUR METHODOLOGY</span>
            <h2>From Planning to Performance</h2>
            <p>Every Futuremax solution follows a structured engineering process to ensure reliable connectivity, optimal coverage and long-term performance.</p>
          </div>
          <div className="timeline">
            {["Requirement Analysis", "RF Site Survey", "Solution Design", "Installation", "Testing & Optimization"].map((step, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="timeline-line"></div>}
                <div className="timeline-step">
                  <div className="step-circle">{i + 1}</div>
                  <h4>{step}</h4>
                  <p>{["Understanding business needs, environment and objectives.", "Analyze signal strength, interference and coverage.", "Design a customized wireless infrastructure.", "Professional deployment by certified engineers.", "Validate performance and optimize coverage."][i]}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="solutions-cta">
        <div className="container">
          <span className="section-tag">LET'S CONNECT</span>
          <h2>Ready To Build A Reliable Wireless Network?</h2>
          <p>
            Whether you need Enterprise Connectivity, RF Engineering, DAS Systems, Signal
            Boosters, Site Surveys or AMC Support, Futuremax Technology is ready to deliver
            the right solution for your business.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Request Site Survey</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </main>
  );
}