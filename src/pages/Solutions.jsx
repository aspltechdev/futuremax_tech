import React, { useState } from "react";
import "./Solutions.css";
import heroProduct from "../assets/sixthimage.png";
import rfEngineeringImg from "../assets/RFimage.png";
import dasImage from "../assets/DASIMAGE.png";
import enterpriseImage from "../assets/sixthimage.png";
import signalBoosterImage from "../assets/signalboosters.png";
import siteSurveyImage from "../assets/sixthimage.png";
import amcImage from "../assets/amcsupport.png";

/* ==========================================================
   SOLUTIONS DATA WITH IMAGES
========================================================== */

const solutions = [
  {
    id: "enterprise",
    title: "Enterprise Connectivity",
    shortDesc:
      "Reliable enterprise wireless infrastructure for businesses of every size.",
    image: enterpriseImage,
    overview:
      "Futuremax Technology delivers enterprise-grade wireless connectivity solutions designed to provide seamless, secure and scalable network infrastructure for offices, campuses, industries and public facilities.",
    features: [
      "Enterprise Wi-Fi",
      "High-Speed Connectivity",
      "Centralized Network Management",
      "Secure Wireless Access",
    ],
    applications: [
      "Corporate Offices",
      "Commercial Buildings",
      "Educational Campuses",
      "Healthcare Facilities",
    ],
    benefits: [
      "Reliable Connectivity",
      "High Performance",
      "Scalable Infrastructure",
      "Enterprise Security",
    ],
  },

  {
    id: "rf",
    title: "RF Engineering",
    shortDesc:
      "Professional RF planning, wireless design and optimization services.",
    image: rfEngineeringImg,
    overview:
      "Our RF Engineering team performs comprehensive site analysis, coverage planning and optimization to deliver maximum wireless performance with minimum interference.",
    features: [
      "RF Planning",
      "Coverage Analysis",
      "Heat Mapping",
      "Capacity Planning",
    ],
    applications: [
      "Factories",
      "Hotels",
      "Hospitals",
      "Large Campuses",
    ],
    benefits: [
      "Better Coverage",
      "Reduced Interference",
      "Reliable Performance",
      "Future Scalability",
    ],
  },

  {
    id: "das",
    title: "DAS Systems",
    shortDesc:
      "Distributed Antenna Systems for superior indoor mobile coverage.",
    image: dasImage,
    overview:
      "Futuremax designs and deploys Distributed Antenna Systems that improve indoor cellular coverage across large buildings and complex environments.",
    features: [
      "Indoor Coverage",
      "Signal Distribution",
      "Multi-Operator Support",
      "Network Integration",
    ],
    applications: [
      "Shopping Malls",
      "Hospitals",
      "Airports",
      "Commercial Towers",
    ],
    benefits: [
      "Strong Indoor Signal",
      "Reliable Voice Calls",
      "Fast Data",
      "Better User Experience",
    ],
  },

  {
    id: "boosters",
    title: "Signal Boosters",
    shortDesc:
      "Improve weak cellular coverage with professional signal boosting solutions.",
    image: signalBoosterImage,
    overview:
      "Our signal booster solutions eliminate weak signal areas by enhancing cellular reception in residential, commercial and industrial environments.",
    features: [
      "4G/5G Boosting",
      "Indoor Signal Enhancement",
      "Outdoor Coverage",
      "Multi-Network Support",
    ],
    applications: [
      "Homes",
      "Office Buildings",
      "Warehouses",
      "Remote Locations",
    ],
    benefits: [
      "Improved Signal",
      "Clear Voice Calls",
      "Faster Internet",
      "Better Connectivity",
    ],
  },

  {
    id: "survey",
    title: "Site Survey",
    shortDesc:
      "Professional RF surveys for accurate wireless network planning.",
    image: siteSurveyImage,
    overview:
      "Futuremax conducts detailed site surveys to identify interference, dead zones and optimal equipment placement before deployment.",
    features: [
      "RF Analysis",
      "Coverage Survey",
      "Heat Maps",
      "Deployment Planning",
    ],
    applications: [
      "New Buildings",
      "Office Renovations",
      "Industrial Sites",
      "Campuses",
    ],
    benefits: [
      "Accurate Planning",
      "Lower Deployment Cost",
      "Better Performance",
      "Reliable Coverage",
    ],
  },

  {
    id: "amc",
    title: "AMC Support",
    shortDesc:
      "Annual Maintenance Contracts for reliable network performance.",
    image: amcImage,
    overview:
      "Futuremax provides preventive maintenance, troubleshooting and continuous monitoring to keep your wireless infrastructure operating efficiently.",
    features: [
      "Preventive Maintenance",
      "Performance Monitoring",
      "Troubleshooting",
      "Technical Support",
    ],
    applications: [
      "Corporate Networks",
      "Hospitals",
      "Educational Institutions",
      "Industrial Facilities",
    ],
    benefits: [
      "Reduced Downtime",
      "Long-Term Reliability",
      "Fast Issue Resolution",
      "Peace of Mind",
    ],
  },
];

/* ==========================================================
   COMPONENT
========================================================== */

export default function Solutions() {

  const [activeSolution, setActiveSolution] = useState(solutions[0]);

  return (

    <main className="solutions-page">

      {/* ==========================================================
          HERO
      ========================================================== */}

      <section className="solutions-hero">

        <div className="container">

          <span className="section-tag">
            FUTUREMAX SOLUTIONS
          </span>

          <h1>
            Enterprise Wireless
            <br />
            Connectivity Solutions
          </h1>

          <p>
            From RF Engineering and Enterprise Connectivity to DAS Systems,
            Signal Boosters, Site Surveys and AMC Support, Futuremax Technology
            delivers reliable, scalable and future-ready wireless solutions
            for every business.
          </p>

          <div className="hero-buttons">

            <button className="primary-btn">
              Request Site Survey
            </button>

            <button className="secondary-btn">
              Contact Us
            </button>

          </div>

        </div>

      </section>

      {/* ==========================================================
          OUR SOLUTIONS
      ========================================================== */}

      <section className="solutions-overview">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">
              OUR SOLUTIONS
            </span>

            <h2>
              Smart Wireless Solutions
              <br />
              For Every Business
            </h2>

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
                className={`solution-card ${
                  activeSolution.id === service.id
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveSolution(service)
                }
              >

                <div className="solution-icon">

                  {service.title
                    .split(" ")
                    .map(word => word[0])
                    .join("")
                    .substring(0,2)}

                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.shortDesc}
                </p>

                <span className="solution-link">
                  View Details →
                </span>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ==========================================================
          INTERACTIVE SOLUTION DETAILS
      ========================================================== */}

      <section className="solution-details">

        <div className="container">

          <div className="details-header">

            <span className="section-tag">
              SELECTED SOLUTION
            </span>

            <h2>
              {activeSolution.title}
            </h2>

            <p>
              {activeSolution.overview}
            </p>

          </div>

          <div className="details-top">

            <div className="details-image">

              <img
                src={activeSolution.image}
                alt={activeSolution.title}
                className="solution-detail-image"
              />

            </div>

            <div className="details-content">

              <h3>
                Solution Overview
              </h3>

              <p>
                {activeSolution.overview}
              </p>

            </div>

          </div>

          {/* ==========================================================
              FEATURES & APPLICATIONS
          ========================================================== */}

          <div className="details-grid">

            {/* FEATURES */}

            <div className="detail-card">

              <div className="card-title">

                <span>01</span>

                <h3>Core Features</h3>

              </div>

              <ul>

                {activeSolution.features.map((feature, index) => (

                  <li key={index}>

                    ✓ {feature}

                  </li>

                ))}

              </ul>

            </div>

            {/* APPLICATIONS */}

            <div className="detail-card">

              <div className="card-title">

                <span>02</span>

                <h3>Applications</h3>

              </div>

              <ul>

                {activeSolution.applications.map((application, index) => (

                  <li key={index}>

                    ✓ {application}

                  </li>

                ))}

              </ul>

            </div>

          </div>

          {/* ==========================================================
              KEY BENEFITS
          ========================================================== */}

          <div className="benefits-wrapper">

            <div className="section-heading">

              <span className="section-tag">

                KEY BENEFITS

              </span>

              <h2>

                Why Choose This Solution?

              </h2>

            </div>

            <div className="benefits-grid">

              {activeSolution.benefits.map((benefit, index) => (

                <div
                  className="benefit-card"
                  key={index}
                >

                  <div className="benefit-icon">

                    {index + 1}

                  </div>

                  <h4>

                    {benefit}

                  </h4>

                  <p>

                    Designed to deliver reliable,
                    secure and scalable wireless
                    infrastructure for long-term
                    business growth.

                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* ==========================================================
              PROJECT SHOWCASE
          ========================================================== */}

          <div className="projects-section">

            <div className="section-heading">

              <span className="section-tag">
                PROJECT SHOWCASE
              </span>

              <h2>
                Recent Installations
              </h2>

              <p>
                Every Futuremax deployment is engineered to deliver
                reliable connectivity, professional installation and
                long-term network performance.
              </p>

            </div>

            <div className="projects-grid">

              <div className="project-card">

                <div className="project-image">

                  <img src={activeSolution.image} alt="Project" />

                </div>

                <div className="project-content">

                  <h4>

                    {activeSolution.title} Deployment

                  </h4>

                  <p>

                    Professional installation and optimization
                    for enterprise-grade wireless connectivity.

                  </p>

                </div>

              </div>

              <div className="project-card">

                <div className="project-image">

                  <img src={activeSolution.image} alt="Project" />

                </div>

                <div className="project-content">

                  <h4>

                    Wireless Infrastructure

                  </h4>

                  <p>

                    Professional RF deployment and wireless
                    optimization projects.

                  </p>

                </div>

              </div>

              <div className="project-card">

                <div className="project-image">

                  <img src={activeSolution.image} alt="Project" />

                </div>

                <div className="project-content">

                  <h4>

                    Connectivity Solutions

                  </h4>

                  <p>

                    Reliable networking solutions designed
                    for long-term scalability.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ==========================================================
              INDUSTRIES SERVED
          ========================================================== */}

          <div className="industries-served">

            <div className="section-heading">

              <span className="section-tag">

                INDUSTRIES SERVED

              </span>

              <h2>

                Where This Solution Is Used

              </h2>

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

      {/* ==========================================================
          OUR SOLUTION METHODOLOGY
      ========================================================== */}

      <section className="methodology-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">
              OUR METHODOLOGY
            </span>

            <h2>
              From Planning to Performance
            </h2>

            <p>
              Every Futuremax solution follows a structured engineering
              process to ensure reliable connectivity, optimal coverage
              and long-term performance.
            </p>

          </div>

          <div className="timeline">

            <div className="timeline-step">

              <div className="step-circle">
                1
              </div>

              <h4>
                Requirement Analysis
              </h4>

              <p>
                Understanding business needs,
                environment and objectives.
              </p>

            </div>

            <div className="timeline-line"></div>

            <div className="timeline-step">

              <div className="step-circle">
                2
              </div>

              <h4>
                RF Site Survey
              </h4>

              <p>
                Analyze signal strength,
                interference and coverage.
              </p>

            </div>

            <div className="timeline-line"></div>

            <div className="timeline-step">

              <div className="step-circle">
                3
              </div>

              <h4>
                Solution Design
              </h4>

              <p>
                Design a customized
                wireless infrastructure.
              </p>

            </div>

            <div className="timeline-line"></div>

            <div className="timeline-step">

              <div className="step-circle">
                4
              </div>

              <h4>
                Installation
              </h4>

              <p>
                Professional deployment
                by certified engineers.
              </p>

            </div>

            <div className="timeline-line"></div>

            <div className="timeline-step">

              <div className="step-circle">
                5
              </div>

              <h4>
                Testing & Optimization
              </h4>

              <p>
                Validate performance
                and optimize coverage.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================================
          CONTACT CTA
      ========================================================== */}

      <section className="solutions-cta">

        <div className="container">

          <span className="section-tag">

            LET'S CONNECT

          </span>

          <h2>

            Ready To Build A
            Reliable Wireless Network?

          </h2>

          <p>

            Whether you need Enterprise Connectivity,
            RF Engineering, DAS Systems, Signal
            Boosters, Site Surveys or AMC Support,
            Futuremax Technology is ready to deliver
            the right solution for your business.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">

              Request Site Survey

            </button>

            <button className="secondary-btn">

              Contact Us

            </button>

          </div>

        </div>

      </section>

    </main>

  );

}