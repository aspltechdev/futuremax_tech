import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-tag">
            ENGINEERING THE FUTURE OF CONNECTIVITY
          </span>

          <h1>
            Intelligent Wireless <br />
            Connectivity <span>Solutions</span>
          </h1>

          <p>
            Futuremax Technology delivers enterprise-grade mobile signal
            enhancement, RF engineering, and smart connectivity solutions for
            commercial, industrial, healthcare, hospitality, and residential
            environments.
          </p>

          <div className="hero-buttons">

            <a href="/contact" className="btn-primary">
              Request Site Survey
            </a>

            <a href="/products" className="btn-secondary">
              Explore Solutions
            </a>

          </div>

          <div className="hero-stats">

            <div className="stat">
              <h2>5000+</h2>
              <p>Projects Delivered</p>
            </div>

            <div className="stat">
              <h2>98%</h2>
              <p>Coverage Success</p>
            </div>

            <div className="stat">
              <h2>24/7</h2>
              <p>Technical Support</p>
            </div>

          </div>

        </div>

        <div className="hero-image">

          <img
            src="/images/hero-network.png"
            alt="Futuremax Technology"
          />

        </div>

      </div>

    </section>
  );
};

export default Hero;