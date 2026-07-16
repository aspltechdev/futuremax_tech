import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiMapPin,
  FiActivity,
  FiWifi,
  FiShield,
  FiGlobe,
} from "react-icons/fi";

import "./Projects.css";

/* Hero */
import heroImage from "../assets/project3.jpeg";

/* Projects */
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";

/* ==============================
   Statistics
================================= */

const stats = [
  {
    icon: <FiActivity />,
    value: "1500+",
    title: "Projects Completed",
  },
  {
    icon: <FiGlobe />,
    value: "18+",
    title: "Cities Covered",
  },
  {
    icon: <FiWifi />,
    value: "99%",
    title: "Network Reliability",
  },
  {
    icon: <FiShield />,
    value: "24/7",
    title: "Engineering Support",
  },
];

/* ==============================
   Featured Projects
================================= */

const projects = [
  {
    id: 1,
    image: project1,
    title: "Commercial Mall",
    location: "Kochi",
    category: "Indoor DAS",
  },
  {
    id: 2,
    image: project2,
    title: "Luxury Resort",
    location: "Wayanad",
    category: "Signal Booster",
  },
  {
    id: 3,
    image: project3,
    title: "Corporate Office",
    location: "Bangalore",
    category: "Enterprise Wireless",
  },
  {
    id: 4,
    image: project4,
    title: "Medical Facility",
    location: "Calicut",
    category: "Healthcare Network",
  },
  {
    id: 5,
    image: project5,
    title: "Premium Villa",
    location: "Kochi",
    category: "Residential Coverage",
  },
  {
    id: 6,
    image: project6,
    title: "Educational Campus",
    location: "Mysore",
    category: "Campus Connectivity",
  },
];

/* ==============================
   Gallery Images
================================= */

const galleryImages = [
  {
    image: project1,
    title: "Commercial Building",
  },
  {
    image: project2,
    title: "Hospital Installation",
  },
  {
    image: project3,
    title: "Enterprise Network",
  },
  {
    image: project4,
    title: "Industrial Facility",
  },
  {
    image: project5,
    title: "Residential Project",
  },
  {
    image: project6,
    title: "Educational Campus",
  },
];

/* ==============================
   Industries
================================= */

const industries = [
  "Commercial Buildings",
  "Hospitals",
  "Hotels & Resorts",
  "Corporate Offices",
  "Educational Institutions",
  "Residential Communities",
];

/* ==============================
   Process
================================= */

const process = [
  {
    number: "01",
    title: "Site Survey",
  },
  {
    number: "02",
    title: "RF Planning",
  },
  {
    number: "03",
    title: "Installation",
  },
  {
    number: "04",
    title: "Testing",
  },
  {
    number: "05",
    title: "Support",
  },
];

const Projects = () => {
  return (
    <main className="fm-projects-page">

      {/* ======================================================
                        HERO
      ====================================================== */}

      <section className="fm-projects-hero">

        <img
          src={heroImage}
          alt="Projects"
          className="fm-projects-hero-image"
        />

        <div className="fm-projects-hero-overlay"></div>

        <div className="fm-projects-container">

          <motion.div
            className="fm-projects-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .7 }}
          >

            <span>OUR PORTFOLIO</span>

            <h1>
              Delivering Reliable Wireless Connectivity Across Industries
            </h1>

            <p>
              Explore Futuremax's successful installations across commercial,
              healthcare, hospitality, enterprise and residential environments,
              delivering seamless mobile coverage with professional RF engineering.
            </p>

          </motion.div>

        </div>

      </section>

      {/* ======================================================
                        STATS
      ====================================================== */}

      <section className="fm-projects-stats">

        <div className="fm-projects-container">

          <div className="fm-projects-stats-grid">

            {stats.map((item, index) => (

              <motion.div
                key={index}
                className="fm-projects-stat-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .1 }}
              >

                <div className="fm-projects-stat-icon">
                  {item.icon}
                </div>

                <h2>{item.value}</h2>

                <p>{item.title}</p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
                  FEATURED PROJECTS
      ====================================================== */}

      <section className="fm-projects-featured">

        <div className="fm-projects-container">

          <div className="fm-projects-heading">

            <span>FEATURED PROJECTS</span>

            <h2>
              Recent Installations
            </h2>

            <p>
              Every project is engineered to enhance indoor mobile coverage
              while ensuring reliability, performance and seamless integration
              with the client's infrastructure.
            </p>

          </div>

          <div className="fm-projects-grid">

            {projects.map((project, index) => (

              <motion.div
                key={project.id}
                className="fm-project-card"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .08 }}
              >

                <div className="fm-project-card-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                </div>

                <div className="fm-project-card-content">

                  <div className="fm-project-category">
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>

                  <div className="fm-project-location">

                    <FiMapPin />

                    <span>{project.location}</span>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>      {/* ======================================================
                    PROJECT GALLERY
      ====================================================== */}

      <section className="fm-project-gallery">

        <div className="fm-projects-container">

          <div className="fm-projects-heading">

            <span>PROJECT GALLERY</span>

            <h2>Project Showcase</h2>

            <p>
              A glimpse into some of our completed wireless communication
              infrastructure projects delivered across commercial,
              healthcare, hospitality and enterprise environments.
            </p>

          </div>

          <div className="fm-gallery-grid">

            {galleryImages.map((item, index) => (

              <motion.div
                key={index}
                className={`fm-gallery-item ${
                  index === 0
                    ? "large"
                    : index === 3
                    ? "wide"
                    : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .08,
                }}
              >

                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="fm-gallery-overlay">

                  <h4>{item.title}</h4>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
                    INDUSTRIES
      ====================================================== */}

      <section className="fm-industries">

        <div className="fm-projects-container">

          <div className="fm-projects-heading">

            <span>INDUSTRIES</span>

            <h2>Industries We Serve</h2>

            <p>
              Our wireless infrastructure solutions are designed for
              diverse industries requiring uninterrupted indoor
              communication and reliable network performance.
            </p>

          </div>

          <div className="fm-industries-grid">

            {industries.map((industry, index) => (

              <motion.div
                key={index}
                className="fm-industry-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .08,
                }}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h4>{industry}</h4>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
                    IMPLEMENTATION PROCESS
      ====================================================== */}

      <section className="fm-process">

        <div className="fm-projects-container">

          <div className="fm-projects-heading">

            <span>IMPLEMENTATION</span>

            <h2>Our Working Process</h2>

            <p>
              From initial assessment to final commissioning,
              every project follows a structured engineering
              approach ensuring quality and long-term reliability.
            </p>

          </div>

          <div className="fm-process-grid">

            {process.map((step, index) => (

              <motion.div
                key={index}
                className="fm-process-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * .08,
                }}
              >

                <div className="fm-process-number">

                  {step.number}

                </div>

                <h4>{step.title}</h4>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================================
                          CTA
      ====================================================== */}

      <section className="fm-project-cta">

        <div className="fm-projects-container">

          <motion.div
            className="fm-cta-box"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <div className="fm-cta-content">

              <span>FUTUREMAX TECHNOLOGY</span>

              <h2>
                Let's Build Reliable Indoor Connectivity Together
              </h2>

              <p>
                Whether it's a commercial building,
                hospital, hotel, educational campus
                or residential project, our engineering
                team delivers dependable wireless
                coverage solutions tailored to your
                infrastructure.
              </p>

            </div>

            <a
              href="/contact"
              className="fm-cta-btn"
            >

              Contact Us

              <FiArrowRight />

            </a>

          </motion.div>

        </div>

      </section>

    </main>

  );
};

export default Projects;