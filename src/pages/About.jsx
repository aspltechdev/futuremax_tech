import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

import "./About.css";

import heroImage from "../assets/whoweare.jpeg";
import aboutImage from "../assets/whoweare.jpeg";

const About = () => {
  return (
    <main className="about-page">

      {/* ==========================================================
                            HERO SECTION - REDUCED HEIGHT
      ========================================================== */}

      <section className="about-hero">
        <img
          src={heroImage}
          alt="Futuremax Technology"
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="hero-tag">
              ABOUT FUTUREMAX TECHNOLOGY
            </span>
            <h1>
              Reliable Mobile
              <span> Signal Enhancement</span>
              <br />
              Solutions
            </h1>
            <p>
              Futuremax Technology provides mobile signal
              boosting solutions designed to improve indoor
              mobile coverage and wireless communication.
              Our focus is on delivering dependable products,
              professional installation services and quality
              technical support.
            </p>
            <a href="/contact" className="primary-btn">
              Contact Us
              <FiArrowRight />
            </a>
          </motion.div>
        </div>

        {/* Floating Glass Card */}
        <motion.div 
          className="hero-glass"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
        
        </motion.div>
      </section>

      {/* ==========================================================
                          WHO WE ARE
      ========================================================== */}

      <section className="about-company">
        <div className="container">
          <div className="about-grid">
            {/* IMAGE */}
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
            >
              <img
                src={aboutImage}
                alt="Futuremax Installation"
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
            >
              <span className="section-tag">
                WHO WE ARE
              </span>
              <h2>
                Delivering Reliable
                Mobile Connectivity
              </h2>
              <p>
                Futuremax Technology focuses on improving
                indoor mobile coverage and wireless
                communication through professional
                engineering, quality products and
                dependable technical support.
              </p>
              <p>
                With expertise in signal enhancement
                solutions, the company delivers reliable
                installations that help improve mobile
                connectivity across residential,
                commercial, hospitality and enterprise
                environments.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <FiCheckCircle />
                  <span>RF Engineering Solutions</span>
                </div>
                <div className="feature-item">
                  <FiCheckCircle />
                  <span>Enterprise Wireless Connectivity</span>
                </div>
                <div className="feature-item">
                  <FiCheckCircle />
                  <span>Indoor Signal Enhancement</span>
                </div>
                <div className="feature-item">
                  <FiCheckCircle />
                  <span>Professional Installation Support</span>
                </div>
                <div className="feature-item">
                  <FiCheckCircle />
                  <span>RF Site Survey</span>
                </div>
                <div className="feature-item">
                  <FiCheckCircle />
                  <span>Mobile Signal Booster Solutions</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================================
                    OUR EXPERTISE - PREMIUM VERSION
      ========================================================== */}

      <section className="expertise-premium">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">
              WHAT WE OFFER
            </span>
            <h2>
              Mobile Signal Solutions
            </h2>
            <p>
              Futuremax Technology offers reliable products and
              solutions designed to improve indoor mobile
              connectivity across residential, commercial and
              enterprise environments.
            </p>
          </motion.div>

          <div className="expertise-layout">
            {/* CARD 1 */}
            <motion.div
              className="premium-card large-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .6 }}
            >
              <div className="premium-number">
                01
              </div>
              <div className="premium-icon">
                📶
              </div>
              <h3>
                Mobile Signal
                Boosters
              </h3>
              <p>
                Improve indoor mobile signal coverage and reduce
                weak signal areas with professional booster
                solutions suitable for residential and commercial
                environments.
              </p>
              <span className="premium-link">
                Signal Enhancement
              </span>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="premium-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .15 }}
            >
              <div className="premium-number">
                02
              </div>
              <div className="premium-icon">
                📡
              </div>
              <h3>
                WiFi Signal
                Boosters
              </h3>
              <p>
                Wireless connectivity solutions that help improve
                network coverage and performance across indoor
                environments.
              </p>
              <span className="premium-link">
                Wireless Connectivity
              </span>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              className="premium-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .25 }}
            >
              <div className="premium-number">
                03
              </div>
              <div className="premium-icon">
                🔌
              </div>
              <h3>
                Booster
                Accessories
              </h3>
              <p>
                Professional accessories supporting efficient
                installation and long-term performance of signal
                enhancement systems.
              </p>
              <span className="premium-link">
                Installation Components
              </span>
            </motion.div>

            {/* CARD 4 */}
            <motion.div
              className="premium-card large-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: .35 }}
            >
              <div className="premium-number">
                04
              </div>
              <div className="premium-icon">
                📡
              </div>
              <h3>
                Booster
                Antennas
              </h3>
              <p>
                High-quality antennas engineered for reliable
                indoor signal enhancement and improved wireless
                communication performance.
              </p>
              <span className="premium-link">
                Reliable Coverage
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================================
            WHY CHOOSE FUTUREMAX - HORIZONTAL SCROLL CARDS
      ========================================================== */}

      <section className="why-premium">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-tag">WHY CHOOSE FUTUREMAX</span>
            <h2>Trusted Quality <span>&</span> Service</h2>
            <p>
              We are committed to delivering quality products, dependable support
              and professional installation services to help improve your mobile
              connectivity.
            </p>
          </motion.div>

          {/* Horizontal Scroll Container */}
          <div className="scroll-wrapper">
            <div className="cards-scroll">
              {[
                {
                  id: 1,
                  icon: "🚚",
                  title: "Onsite Delivery",
                  desc: "Professional onsite product delivery and installation support."
                },
                {
                  id: 2,
                  icon: "⚙️",
                  title: "Easy Setup",
                  desc: "Products designed for quick and efficient installation."
                },
                {
                  id: 3,
                  icon: "📜",
                  title: "CE / ROHS Certified",
                  desc: "Products manufactured to meet recognized quality standards."
                },
                {
                  id: 4,
                  icon: "🎧",
                  title: "Technical Support",
                  desc: "Dedicated customer assistance whenever support is required."
                },
                {
                  id: 5,
                  icon: "🛡️",
                  title: "Money-Back Guarantee",
                  desc: "Customer-focused assurance for added confidence."
                },
                {
                  id: 6,
                  icon: "📶",
                  title: "Full Bar Signal Guarantee",
                  desc: "Coverage support for areas up to 10,000 Sq Ft."
                }
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  className="feature-cube"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="cube-number">{String(item.id).padStart(2, "0")}</div>
                  <div className="cube-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
                          CONTACT CTA
      ========================================================== */}

      <section className="about-cta">
        <div className="container">
          <motion.div
            className="cta-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">
              GET IN TOUCH
            </span>
            <h2>
              Looking for Better Mobile Signal Coverage?
            </h2>
            <p>
              Whether you need mobile signal boosters,
              WiFi signal enhancement, RF engineering
              solutions or professional installation
              support, Futuremax Technology is ready to
              help improve your connectivity.
            </p>
            <div className="cta-buttons">
              <a
                href="/contact"
                className="primary-btn"
              >
                Contact Us
                <FiArrowRight />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
};

export default About;