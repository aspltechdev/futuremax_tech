import React from "react";
import "./About.css";

const About = () => {
  return (
    <main className="page about-page">
      <section className="page-banner">
        <div className="container">
          <span className="section-tag">ABOUT US</span>

          <h1>Engineering the Future of Connectivity</h1>

          <p>
            Learn about Futuremax Technology, our journey, mission,
            engineering expertise and commitment to delivering reliable
            wireless connectivity solutions.
          </p>
        </div>
      </section>
            {/* ==========================================================
          WHO WE ARE
      ========================================================== */}

      <section className="who-we-are">

        <div className="container who-grid">

          {/* IMAGE */}

          <div className="who-image">

            <div className="image-placeholder">

              Company / Office Image

            </div>

          </div>

          {/* CONTENT */}

          <div className="who-content">

            <span className="section-tag">

              WHO WE ARE

            </span>

            <h2>

              Building Reliable Wireless
              Infrastructure Through
              Engineering Excellence

            </h2>

            <p>

              Futuremax Technology is a trusted provider of
              enterprise wireless connectivity solutions,
              delivering reliable network infrastructure
              across commercial, industrial, healthcare,
              hospitality, educational and government
              environments.

            </p>

            <p>

              Our engineering-driven approach combines
              RF expertise, modern technologies and
              professional project execution to provide
              secure, scalable and future-ready
              communication solutions.

            </p>

            <div className="service-list">

              {companyInfo.services.map((service, index) => (

                <div
                  className="service-item"
                  key={index}
                >

                  <span>✓</span>

                  <p>{service}</p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================================
          OUR STORY
      ========================================================== */}

      <section className="our-story">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">

              OUR STORY

            </span>

            <h2>

              Growing Through Innovation
              & Engineering

            </h2>

            <p>

              From our beginnings in wireless connectivity
              to delivering enterprise communication
              solutions across multiple industries,
              Futuremax continues to evolve through
              innovation, engineering excellence and
              customer trust.

            </p>

          </div>

          <div className="story-timeline">

            <div className="timeline-item">

              <div className="timeline-year">

                2015

              </div>

              <div className="timeline-content">

                <h3>

                  Company Founded

                </h3>

                <p>

                  Started with a vision of providing
                  reliable wireless connectivity
                  solutions through engineering
                  excellence.

                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">

                2018

              </div>

              <div className="timeline-content">

                <h3>

                  Enterprise Expansion

                </h3>

                <p>

                  Expanded services into enterprise
                  connectivity and RF engineering
                  projects.

                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">

                2021

              </div>

              <div className="timeline-content">

                <h3>

                  Large Scale Deployments

                </h3>

                <p>

                  Successfully completed multiple
                  commercial and industrial wireless
                  infrastructure projects.

                </p>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-year">

                Today

              </div>

              <div className="timeline-content">

                <h3>

                  Future Ready

                </h3>

                <p>

                  Delivering innovative enterprise
                  wireless solutions with continuous
                  technical support and engineering
                  expertise.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ==========================================================
          VISION & MISSION
      ========================================================== */}

      <section className="vision-mission">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">

              OUR PURPOSE

            </span>

            <h2>

              Vision That Inspires.
              Mission That Delivers.

            </h2>

            <p>

              Every project we undertake is driven by a commitment
              to engineering excellence, customer satisfaction and
              innovation in wireless communication.

            </p>

          </div>

          <div className="vision-grid">

            {/* Vision */}

            <div className="vision-card">

              <div className="vision-icon">

                👁

              </div>

              <h3>

                Our Vision

              </h3>

              <p>

                To become one of India's most trusted providers
                of enterprise wireless infrastructure by delivering
                innovative, secure and future-ready connectivity
                solutions that empower businesses to grow.

              </p>

            </div>

            {/* Mission */}

            <div className="vision-card">

              <div className="vision-icon">

                🚀

              </div>

              <h3>

                Our Mission

              </h3>

              <p>

                To design, deploy and maintain reliable wireless
                communication systems through advanced engineering,
                quality-driven execution and long-term customer
                partnerships.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================================
          ENGINEERING EXCELLENCE
      ========================================================== */}

      <section className="engineering-section">

        <div className="container engineering-grid">

          {/* LEFT */}

          <div className="engineering-content">

            <span className="section-tag">

              ENGINEERING EXCELLENCE

            </span>

            <h2>

              Engineering That Powers
              Reliable Connectivity

            </h2>

            <p>

              Futuremax combines practical field experience,
              RF expertise and enterprise technologies to
              deliver dependable wireless communication
              solutions across diverse industries.

            </p>

            <div className="engineering-features">

              <div className="engineering-item">

                <h4>

                  RF Engineering

                </h4>

                <p>

                  Professional planning, optimization
                  and coverage analysis.

                </p>

              </div>

              <div className="engineering-item">

                <h4>

                  Enterprise Deployment

                </h4>

                <p>

                  Reliable implementation for
                  organizations of every size.

                </p>

              </div>

              <div className="engineering-item">

                <h4>

                  Certified Team

                </h4>

                <p>

                  Experienced professionals
                  ensuring quality execution.

                </p>

              </div>

              <div className="engineering-item">

                <h4>

                  Long-Term Support

                </h4>

                <p>

                  Continuous monitoring,
                  maintenance and optimization.

                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="engineering-image">

            <div className="image-placeholder">

              Engineering /
              RF Survey Image

            </div>

            <div className="experience-box">

              <h2>

                250+

              </h2>

              <p>

                Successful
                Deployments

              </p>

            </div>

          </div>

        </div>

      </section>
            {/* ==========================================================
          CORE VALUES
      ========================================================== */}

      <section className="core-values">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">

              CORE VALUES

            </span>

            <h2>

              The Values That Drive Every Project

            </h2>

            <p>

              Every wireless solution we deliver is guided by strong
              engineering principles, customer commitment and a passion
              for continuous innovation.

            </p>

          </div>

          <div className="values-grid">

            <div className="value-card">

              <div className="value-icon">⚙</div>

              <h3>

                Engineering Excellence

              </h3>

              <p>

                Every deployment is designed using
                proven engineering practices and
                industry standards.

              </p>

            </div>

            <div className="value-card">

              <div className="value-icon">🤝</div>

              <h3>

                Customer First

              </h3>

              <p>

                We build long-term partnerships by
                understanding every customer's
                unique connectivity needs.

              </p>

            </div>

            <div className="value-card">

              <div className="value-icon">💡</div>

              <h3>

                Innovation

              </h3>

              <p>

                We continuously adopt modern
                technologies to deliver
                future-ready solutions.

              </p>

            </div>

            <div className="value-card">

              <div className="value-icon">🛡</div>

              <h3>

                Quality

              </h3>

              <p>

                Reliable products, professional
                installation and strict quality
                assurance on every project.

              </p>

            </div>

            <div className="value-card">

              <div className="value-icon">📈</div>

              <h3>

                Continuous Improvement

              </h3>

              <p>

                Learning, adapting and improving
                with every successful deployment.

              </p>

            </div>

            <div className="value-card">

              <div className="value-icon">🌍</div>

              <h3>

                Responsibility

              </h3>

              <p>

                Delivering dependable wireless
                infrastructure that businesses
                can rely on every day.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================================
          CERTIFICATIONS & PARTNERS
      ========================================================== */}

      <section className="certifications">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">

              CERTIFICATIONS & PARTNERS

            </span>

            <h2>

              Trusted Standards.
              Trusted Technology.

            </h2>

            <p>

              Futuremax works with quality products and
              industry-recognized standards to deliver
              reliable wireless infrastructure.

            </p>

          </div>

          <div className="certification-grid">

            <div className="certification-card">

              <div className="logo-placeholder">

                ISO

              </div>

              <h4>

                Quality Management

              </h4>

            </div>

            <div className="certification-card">

              <div className="logo-placeholder">

                CE

              </div>

              <h4>

                Certified Products

              </h4>

            </div>

            <div className="certification-card">

              <div className="logo-placeholder">

                OEM

              </div>

              <h4>

                Technology Partners

              </h4>

            </div>

            <div className="certification-card">

              <div className="logo-placeholder">

                RF

              </div>

              <h4>

                Engineering Standards

              </h4>

            </div>

          </div>

        </div>

      </section>
            {/* ==========================================================
          COMPANY MILESTONES
      ========================================================== */}

      <section className="milestones-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">

              OUR JOURNEY

            </span>

            <h2>

              Milestones That Define Our Growth

            </h2>

            <p>

              Every milestone represents our commitment to
              engineering excellence, customer satisfaction
              and continuous innovation.

            </p>

          </div>

          <div className="milestone-grid">

            <div className="milestone-card">

              <h2>2015</h2>

              <h4>Company Founded</h4>

              <p>

                Started our journey with a vision of
                delivering dependable wireless
                connectivity solutions.

              </p>

            </div>

            <div className="milestone-card">

              <h2>100+</h2>

              <h4>Projects Delivered</h4>

              <p>

                Successfully completed enterprise
                wireless deployments across
                multiple industries.

              </p>

            </div>

            <div className="milestone-card">

              <h2>250+</h2>

              <h4>Installations</h4>

              <p>

                Delivered reliable RF engineering,
                DAS and enterprise connectivity
                solutions.

              </p>

            </div>

            <div className="milestone-card">

              <h2>Today</h2>

              <h4>Growing Strong</h4>

              <p>

                Continuing to build future-ready
                communication infrastructure
                for businesses.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================================
          LEADERSHIP TEAM
      ========================================================== */}

      <section className="leadership-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-tag">

              LEADERSHIP TEAM

            </span>

            <h2>

              Experienced Professionals
              Driving Innovation

            </h2>

            <p>

              Our leadership team combines technical
              expertise, engineering excellence and
              customer-focused decision making to
              deliver world-class wireless solutions.

            </p>

          </div>

          <div className="leadership-grid">

            <div className="leader-card">

              <div className="leader-image">

                Leader Image

              </div>

              <h3>

                Managing Director

              </h3>

              <span>

                Founder & Business Head

              </span>

            </div>

            <div className="leader-card">

              <div className="leader-image">

                Leader Image

              </div>

              <h3>

                Technical Director

              </h3>

              <span>

                RF Engineering Specialist

              </span>

            </div>

            <div className="leader-card">

              <div className="leader-image">

                Leader Image

              </div>

              <h3>

                Operations Head

              </h3>

              <span>

                Project Delivery & Support

              </span>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================================
          CONTACT CTA
      ========================================================== */}

      <section className="about-cta">

        <div className="container">

          <span className="section-tag">

            READY TO CONNECT?

          </span>

          <h2>

            Let's Build Reliable
            Wireless Infrastructure Together

          </h2>

          <p>

            Whether you're planning a new deployment,
            upgrading an existing network or looking
            for long-term technical support, Futuremax
            Technology is ready to help.

          </p>

          <div className="hero-buttons">

            <button className="primary-btn">

              Explore Solutions

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

export default About;