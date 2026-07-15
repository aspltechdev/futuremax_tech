import React from "react";
import { motion } from "framer-motion";
import {
  FiMapPin,
  FiArrowRight,
  FiActivity,
  FiWifi,
  FiShield,
  FiGlobe,
} from "react-icons/fi";

import "./Projects.css";

// Hero
import heroImage from "../assets/project3.jpeg";

// Project Images
import project1 from "../assets/project1.jpeg";
import project2 from "../assets/project2.jpeg";
import project3 from "../assets/project3.jpeg";
import project4 from "../assets/project4.jpeg";
import project5 from "../assets/project5.jpeg";
import project6 from "../assets/project6.jpeg";

const stats = [
  {
    icon: <FiActivity />,
    value: "1500+",
    title: "Projects",
  },
  {
    icon: <FiGlobe />,
    value: "18+",
    title: "Cities",
  },
  {
    icon: <FiWifi />,
    value: "99%",
    title: "Coverage",
  },
  {
    icon: <FiShield />,
    value: "24/7",
    title: "Support",
  },
];

const projects = [
  {
    id: 1,
    image: project1,
    title: "Commercial Mall",
    location: "Kochi",
  },
  {
    id: 2,
    image: project2,
    title: "Luxury Resort",
    location: "Wayanad",
  },
  {
    id: 3,
    image: project3,
    title: "Corporate Office",
    location: "Bangalore",
  },
  {
    id: 4,
    image: project4,
    title: "Medical Facility",
    location: "Calicut",
  },
  {
    id: 5,
    image: project5,
    title: "Premium Villa",
    location: "Kochi",
  },
  {
    id: 6,
    image: project6,
    title: "Educational Campus",
    location: "Mysore",
  },
];

const galleryImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
];

const Projects = () => {
  return (
    <main className="projects-page">
      {/* ================= HERO ================= */}
      <section className="projects-hero">
        <img
          src={heroImage}
          alt="Futuremax Projects"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span>FUTUREMAX TECHNOLOGY</span>
            <h1>Our Projects</h1>
            <p>
              Explore some of our completed mobile signal
              enhancement projects across commercial,
              healthcare, hospitality, enterprise and
              residential sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                className="stat-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
              >
                <div className="stat-icon">{item.icon}</div>
                <h2>{item.value}</h2>
                <p>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects-section">
        <div className="container">
          <div className="section-header">
            <span>RECENT INSTALLATIONS</span>
            <h2>Featured Projects</h2>
            <p>
              Every installation is carefully designed to
              improve indoor mobile coverage while maintaining
              a clean and professional infrastructure.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <div className="location">
                    <FiMapPin />
                    <span>{project.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY WITH HEADING ================= */}
      <section className="gallery-section">
        <div className="container">
          {/* GALLERY HEADING ADDED HERE */}
          <div className="section-header">
            <span>PROJECT SHOWCASE</span>
            <h2>Installation Gallery</h2>
            <p>
              Browse through our collection of completed
              signal enhancement installations across various
              industries and locations.
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <img src={image} alt={`Gallery ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT BANNER ================= */}
      <section className="project-banner">
        <div className="container">
          <motion.div
            className="banner-content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div>
              <span>FUTUREMAX TECHNOLOGY</span>
              <h2>Looking for Reliable Signal Enhancement Solutions?</h2>
              <p>
                We deliver professional indoor mobile
                signal coverage solutions for commercial,
                residential, healthcare and enterprise
                environments.
              </p>
            </div>
            <a href="/contact" className="contact-btn">
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