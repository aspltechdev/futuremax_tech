import React from "react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    category: "Hospitality",
    title: "Luxury Resort Connectivity Upgrade",
    description:
      "Delivered seamless indoor mobile coverage across guest rooms, conference halls, and outdoor recreational areas.",
    image: "/images/projects/project-1.jpg",
  },
  {
    category: "Healthcare",
    title: "Hospital Signal Enhancement",
    description:
      "Improved critical communication by eliminating dead zones across emergency, ICU and patient care blocks.",
    image: "/images/projects/project-2.jpg",
  },
  {
    category: "Corporate",
    title: "Enterprise Office Network",
    description:
      "Designed and deployed enterprise-grade wireless coverage across a multi-floor corporate office.",
    image: "/images/projects/project-3.jpg",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            FEATURED PROJECTS
          </span>

          <h2>
            Engineering Success
            <br />
            Across Every Environment
          </h2>

          <p>
            Every deployment reflects our commitment to engineering excellence,
            reliable connectivity, and customer satisfaction.
          </p>

        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <div className="project-image">

                <img
                  src={project.image}
                  alt={project.title}
                />

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="/projects">

                  View Case Study

                  <ArrowRight size={18} />

                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;
