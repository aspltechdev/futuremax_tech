// Projects.jsx — Part 1

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  MapPin,
  X,
  CheckCircle2,
  RadioTower,
  Wifi,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import "./Projects.css";

import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.jpeg";
import project4 from "../../assets/project4.jpeg";
import project5 from "../../assets/project5.jpeg";
import project6 from "../../assets/project6.jpeg";

const filters = [
  "All",
  "Hospitality",
  "Healthcare",
  "Commercial",
  "Industrial",
  "Residential",
  "Education",
];

const processTimeline = [
  "RF Site Survey",
  "Coverage Analysis",
  "Network Planning",
  "Solution Design",
  "Installation",
  "Testing",
  "Optimization",
];

const projects = [
  {
    id: 1,
    image: project1,
    category: "Hospitality",
    location: "Luxury Hospitality Environment",
    title: "Hospitality Wireless Coverage Project",

    requirement:
      "Provide uninterrupted indoor mobile connectivity across guest rooms, banquet halls, conference spaces and service areas.",

    challenge:
      "Complex building materials, multiple floors and inconsistent RF signal distribution reduced user experience.",

    solution:
      "Engineered an optimized Distributed Antenna System with strategic antenna placement and RF balancing to achieve uniform signal performance.",

    technologies: [
      "RF Engineering",
      "Distributed Antenna System",
      "Coverage Analysis",
      "Signal Enhancement",
      "Enterprise Wireless",
      "4G & 5G Infrastructure",
    ],

    results: [
      "Improved indoor signal consistency",
      "Reliable voice & data coverage",
      "Reduced dead zones",
      "Enhanced customer experience",
    ],

    implementation: [
      "Complete RF audit",
      "Passive DAS design",
      "Cable routing",
      "Antenna optimization",
      "Performance validation",
    ],
  },

  {
    id: 2,
    image: project2,
    category: "Healthcare",
    location: "Healthcare Facility",
    title: "Healthcare Signal Enhancement Project",

    requirement:
      "Deliver dependable indoor connectivity for medical staff, emergency response teams and patient communication.",

    challenge:
      "Critical departments required uninterrupted wireless coverage despite reinforced construction and equipment interference.",

    solution:
      "Designed RF coverage with optimized antenna positioning and network balancing for reliable communication.",

    technologies: [
      "RF Engineering",
      "Coverage Analysis",
      "Signal Enhancement",
      "Enterprise Wireless",
      "Wireless Network Design",
    ],

    results: [
      "Reliable clinical connectivity",
      "Improved communication quality",
      "Expanded coverage",
      "Operational continuity",
    ],

    implementation: [
      "RF survey",
      "Coverage mapping",
      "Engineering design",
      "Deployment",
      "Optimization",
    ],
  },

  {
    id: 3,
    image: project3,
    category: "Commercial",
    location: "Commercial Office Environment",
    title: "Commercial DAS Deployment",

    requirement:
      "Deliver enterprise-grade indoor mobile connectivity throughout office towers and shared workspaces.",

    challenge:
      "Dense work environments and structural attenuation caused inconsistent mobile performance.",

    solution:
      "Implemented scalable DAS architecture supporting improved RF performance and future expansion.",

    technologies: [
      "Distributed Antenna System",
      "RF Engineering",
      "Coverage Analysis",
      "Enterprise Wireless",
    ],

    results: [
      "High-quality indoor coverage",
      "Improved productivity",
      "Future-ready network",
    ],

    implementation: [
      "Planning",
      "RF simulation",
      "Installation",
      "Commissioning",
      "Testing",
    ],
  },

  {
    id: 4,
    image: project4,
    category: "Industrial",
    location: "Industrial Manufacturing Facility",
    title: "Industrial RF Connectivity",

    requirement:
      "Provide stable wireless communication throughout production floors and operational zones.",

    challenge:
      "Heavy machinery and metallic infrastructure introduced RF reflections and signal degradation.",

    solution:
      "Designed industrial-grade RF infrastructure with optimized antenna distribution.",

    technologies: [
      "RF Engineering",
      "Signal Enhancement",
      "Coverage Analysis",
      "Enterprise Wireless",
    ],

    results: [
      "Reliable operational communication",
      "Improved workforce mobility",
      "Reduced communication interruptions",
    ],

    implementation: [
      "RF inspection",
      "Design",
      "Installation",
      "Validation",
    ],
  },

  {
    id: 5,
    image: project5,
    category: "Residential",
    location: "Residential Community",
    title: "Residential Indoor Coverage",

    requirement:
      "Improve indoor mobile coverage for apartments and common areas.",

    challenge:
      "Building density and reinforced structures limited signal penetration.",

    solution:
      "Optimized indoor antenna placement and RF tuning for improved residential connectivity.",

    technologies: [
      "Coverage Analysis",
      "RF Engineering",
      "Signal Enhancement",
      "Wireless Network Design",
    ],

    results: [
      "Enhanced indoor coverage",
      "Better user experience",
      "Reduced call drops",
    ],

    implementation: [
      "Survey",
      "Planning",
      "Deployment",
      "Testing",
    ],
  },

  {
    id: 6,
    image: project6,
    category: "Education",
    location: "Educational Campus",
    title: "Educational Campus Connectivity",

    requirement:
      "Deliver dependable indoor connectivity across classrooms, auditoriums and administrative facilities.",

    challenge:
      "Large campus layouts required balanced RF distribution and scalable wireless planning.",

    solution:
      "Designed an RF infrastructure focused on coverage consistency and long-term scalability.",

    technologies: [
      "Wireless Network Design",
      "RF Engineering",
      "Coverage Analysis",
      "4G & 5G Infrastructure",
    ],

    results: [
      "Reliable campus-wide connectivity",
      "Improved learning environment",
      "Consistent indoor performance",
    ],

    implementation: [
      "Site survey",
      "Network planning",
      "Installation",
      "Optimization",
    ],
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  const featuredProject = projects[0];

  return (
    <section className="projects-section" id="case-studies">
      <div className="projects-container">

        {/* Header */}

        <motion.div
          className="projects-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <span className="projects-tag">
            CASE STUDIES
          </span>

          <h2>
            Engineering Success Stories
            <br />
            Across Diverse Industries
          </h2>

          <p>
            Discover how Futuremax Technology delivers
            advanced RF Engineering, Distributed Antenna
            Systems, Wireless Network Design, Signal
            Enhancement, Coverage Analysis and 4G & 5G
            infrastructure solutions to achieve reliable
            indoor mobile coverage across enterprise
            environments.
          </p>
        </motion.div>

        {/* Featured Case Study */}

        <motion.div
          className="featured-project"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="featured-image">
            <img
              src={featuredProject.image}
              alt={featuredProject.title}
            />
          </div>

          <div className="featured-content">

            <span className="industry-chip">
              <Building2 size={16} />
              {featuredProject.category}
            </span>

            <h3>{featuredProject.title}</h3>

            <div className="featured-meta">

              <div>
                <strong>Requirement</strong>
                <p>{featuredProject.requirement}</p>
              </div>

              <div>
                <strong>Challenge</strong>
                <p>{featuredProject.challenge}</p>
              </div>

              <div>
                <strong>Solution</strong>
                <p>{featuredProject.solution}</p>
              </div>
                          <div>
              <strong>Technologies</strong>

              <div className="tech-stack">
                {featuredProject.technologies.map((tech) => (
                  <span key={tech} className="tech-chip">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <strong>Project Results</strong>

              <ul className="featured-results">
                {featuredProject.results.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="primary-project-btn"
              onClick={() => setSelectedProject(featuredProject)}
            >
              View Complete Case Study
              <ArrowRight size={18} />
            </button>
          </div>
          </div>
        </motion.div>

        {/* ===========================
            FILTERS
        =========================== */}

        <motion.div
          className="project-filters"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-pill ${
                activeFilter === filter ? "active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* ===========================
            PROJECT GRID
        =========================== */}

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              className="project-card"
              variants={fadeUp}
              whileHover={{ y: -10 }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <span className="industry-badge">
                  {project.category}
                </span>
              </div>

              <div className="project-content">

                <div className="project-location">
                  <MapPin size={15} />
                  <span>{project.location}</span>
                </div>

                <h3>{project.title}</h3>

                <div className="project-info">

                  <div className="info-block">
                    <h4>Requirement</h4>
                    <p>{project.requirement}</p>
                  </div>

                  <div className="info-block">
                    <h4>Challenge</h4>
                    <p>{project.challenge}</p>
                  </div>

                </div>

                <div className="technology-list">
                  {project.technologies
                    .slice(0, 4)
                    .map((technology) => (
                      <span
                        key={technology}
                        className="technology-chip"
                      >
                        {technology}
                      </span>
                    ))}
                </div>

                <div className="results-preview">

                  {project.results
                    .slice(0, 2)
                    .map((result) => (
                      <div
                        key={result}
                        className="result-item"
                      >
                        <CheckCircle2 size={15} />
                        <span>{result}</span>
                      </div>
                    ))}

                </div>

                <button
                  className="details-button"
                  onClick={() =>
                    setSelectedProject(project)
                  }
                >
                  View Details
                  <ArrowUpRight size={18} />
                </button>

              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ===========================
            MODAL
        =========================== */}

        <AnimatePresence>

          {selectedProject && (

            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setSelectedProject(null)
              }
            >

              <motion.div
                className="project-modal"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 40,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 40,
                }}
                transition={{
                  duration: 0.35,
                }}
                onClick={(e) =>
                  e.stopPropagation()
                }
              >

                <button
                  className="modal-close"
                  onClick={() =>
                    setSelectedProject(null)
                  }
                >
                  <X size={22} />
                </button>

                <div className="modal-image">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>

                <div className="modal-content">

                  <div className="modal-header">

                    <span className="industry-chip">
                      {selectedProject.category}
                    </span>

                    <h2>
                      {selectedProject.title}
                    </h2>

                    <div className="modal-location">
                      <MapPin size={16} />
                      {selectedProject.location}
                    </div>

                  </div>
                  </div>   {/* Close modal-grid */}
                  <div className="modal-grid">

                    <div className="modal-card">
                      <RadioTower size={22} />
                      <h4>Project Requirement</h4>
                      <p>
                        {selectedProject.requirement}
                      </p>
                    </div>

                    <div className="modal-card">
                      <ShieldCheck size={22} />
                      <h4>
                        Engineering Challenge
                      </h4>
                      <p>
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div className="modal-card">
                      <Wifi size={22} />
                      <h4>Solution Provided</h4>
                      <p>
                        {selectedProject.solution}
                      </p>
                    </div>
                                      {/* ===========================
                      IMPLEMENTATION PROCESS
                  =========================== */}

                  <div className="modal-section">
                    <h3>Implementation Process</h3>

                    <div className="process-timeline">
                      {processTimeline.map((step, index) => (
                        <div
                          className="timeline-item"
                          key={step}
                        >
                          <div className="timeline-number">
                            {index + 1}
                          </div>

                          <div className="timeline-content">
                            <h4>{step}</h4>

                            <p>
                              {selectedProject.implementation[
                                Math.min(
                                  index,
                                  selectedProject.implementation.length - 1
                                )
                              ]}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* ===========================
                      TECHNOLOGIES
                  =========================== */}

                  <div className="modal-section">
                    <h3>Technology Used</h3>

                    <div className="modal-technologies">
                      {selectedProject.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="technology-chip"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>

                  {/* ===========================
                      RESULTS
                  =========================== */}

                  <div className="modal-section">
                    <h3>Project Results</h3>

                    <div className="modal-results">
                      {selectedProject.results.map((result) => (
                        <div
                          className="modal-result"
                          key={result}
                        >
                          <CheckCircle2 size={18} />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="modal-footer">
                    <button
                      className="primary-project-btn"
                      onClick={() =>
                        setSelectedProject(null)
                      }
                    >
                      Close Case Study
                    </button>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}