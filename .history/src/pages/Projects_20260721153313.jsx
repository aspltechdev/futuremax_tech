import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Building2,
  MapPin,
  Phone,
  Mail,
  RadioTower,
  Wifi,
  ShieldCheck,
  X,
  ArrowUpRight,
  TrendingUp,
  Clock,
  Target,
  Layers,
  Zap,
} from "lucide-react";
import "./Projects.css";

import projectsHeroImg from "../assets/projecthero.jpeg";
import project1Img from "../assets/p1.png";
import project2Img from "../assets/p2.png";
import project3Img from "../assets/p3.png";
import project4Img from "../assets/p4.png";
import project5Img from "../assets/p5.png";
import project6Img from "../assets/p6.png";

const prjProjects = [
  {
    id: "01",
    image: project1Img,
    category: "Hospitality",
    location: "5-Star Hotel, Mumbai",
    title: "Hotel Mobile Signal Enhancement",
    requirement: "Provide uninterrupted mobile coverage across guest rooms, banquet halls, restaurants, conference rooms, and service areas.",
    challenge: "Concrete structures and multiple floors caused weak indoor mobile signals and frequent call drops.",
    solution: "Installed a 25 dBm i Booster system with Distributed Antenna System (DAS) for seamless 4G & 5G connectivity.",
    technologies: ["25 dBm i Booster", "DAS", "RF Engineering", "Indoor Antennas", "Coverage Analysis", "4G & 5G"],
    results: ["100% indoor coverage", "Zero guest complaints", "Improved satisfaction", "Reliable data speeds"],
    accentColor: "#19AB3F",
    metric: "100% Coverage",
    size: "large",
  },
  {
    id: "02",
    image: project2Img,
    category: "Healthcare",
    location: "Multi-Speciality Hospital, Delhi",
    title: "Hospital Wireless Connectivity",
    requirement: "Reliable mobile communication for doctors, emergency teams, patients, and hospital staff.",
    challenge: "Medical equipment and reinforced walls reduced signal penetration in critical departments.",
    solution: "Designed a complete DAS infrastructure with RF optimization and enterprise-grade indoor antennas.",
    technologies: ["RF Engineering", "DAS", "Indoor Antennas", "Coverage Analysis", "Signal Optimization"],
    results: ["Reliable emergency comms", "8 floors covered", "Improved efficiency", "Better patient experience"],
    accentColor: "#0755A3",
    metric: "8 Floors",
    size: "medium",
  },
  {
    id: "03",
    image: project3Img,
    category: "Commercial",
    location: "Corporate Office, Bangalore",
    title: "Enterprise Office Connectivity",
    requirement: "Deliver seamless mobile connectivity across office floors, meeting rooms, and workspaces.",
    challenge: "Glass partitions and dense office layouts caused inconsistent indoor signal strength.",
    solution: "Installed a 27 dBm enterprise i Booster solution with optimized antenna placement.",
    technologies: ["27 dBm i Booster", "RF Engineering", "Enterprise Wireless", "Coverage Planning"],
    results: ["Office-wide coverage", "Improved productivity", "High-speed internet", "Seamless conferencing"],
    accentColor: "#7C3AED",
    metric: "500+ Employees",
    size: "medium",
  },
  {
    id: "04",
    image: project4Img,
    category: "Industrial",
    location: "Manufacturing Plant, Pune",
    title: "Industrial RF Infrastructure",
    requirement: "Reliable wireless communication across production units, warehouses, and logistics operations.",
    challenge: "Heavy machinery and steel structures created significant RF interference.",
    solution: "Designed a 27 dBm enterprise booster solution with industrial-grade RF planning.",
    technologies: ["27 dBm i Booster", "Industrial RF", "Coverage Analysis", "Signal Enhancement"],
    results: ["Reliable communication", "Reduced downtime", "Improved mobility", "Seamless logistics"],
    accentColor: "#DC2626",
    metric: "50K Sq Ft",
    size: "small",
  },
  {
    id: "05",
    image: project5Img,
    category: "Residential",
    location: "Premium Apartment Complex, Chennai",
    title: "Residential Indoor Coverage",
    requirement: "Improve indoor mobile signals throughout apartments and common areas.",
    challenge: "Weak signal penetration due to reinforced concrete construction in high-rise towers.",
    solution: "Installed the i Booster 23 dBm Residential Signal Booster with indoor antennas.",
    technologies: ["23 dBm i Booster", "Indoor Antennas", "RF Survey", "Signal Optimization"],
    results: ["Crystal clear calls", "Improved internet", "Zero dead zones", "Resident satisfaction"],
    accentColor: "#0A6FD4",
    metric: "200+ Units",
    size: "small",
  },
  {
    id: "06",
    image: project6Img,
    category: "Education",
    location: "University Campus, Hyderabad",
    title: "Campus Wireless Coverage",
    requirement: "Campus-wide indoor mobile connectivity for classrooms, labs, libraries, and admin buildings.",
    challenge: "Large campus area required scalable coverage with consistent signal quality.",
    solution: "Implemented complete RF engineering with DAS and enterprise wireless infrastructure.",
    technologies: ["RF Engineering", "DAS", "Indoor Coverage", "Wireless Planning", "Scalable Design"],
    results: ["Campus-wide coverage", "Improved communication", "Future-ready infra", "Consistent signals"],
    accentColor: "#EA580C",
    metric: "10 Acres",
    size: "large",
  },
];

const Projects = () => {
  const [prjScrollY, setPrjScrollY] = useState(0);
  const [prjMousePos, setPrjMousePos] = useState({ x: 50, y: 50 });
  const [prjVisible, setPrjVisible] = useState({ hero: false, stats: false, projects: false, cta: false });
  const [prjSelectedProject, setPrjSelectedProject] = useState(null);
  const [prjActiveFilter, setPrjActiveFilter] = useState("All");
  const prjSectionRef = useRef(null);

  const prjFilters = ["All", "Hospitality", "Healthcare", "Commercial", "Industrial", "Residential", "Education"];

  const prjStats = [
    { icon: <TrendingUp size={24} strokeWidth={1.5} />, value: "250+", label: "Projects Completed" },
    { icon: <Building2 size={24} strokeWidth={1.5} />, value: "6+", label: "Industries Served" },
    { icon: <Target size={24} strokeWidth={1.5} />, value: "98%", label: "Client Satisfaction" },
    { icon: <Clock size={24} strokeWidth={1.5} />, value: "15+", label: "Years Experience" },
  ];

  useEffect(() => {
    const handlePrjScroll = () => setPrjScrollY(window.scrollY);
    const handlePrjMouse = (e) => {
      if (!prjSectionRef.current) return;
      const rect = prjSectionRef.current.getBoundingClientRect();
      setPrjMousePos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
    };
    window.addEventListener("scroll", handlePrjScroll, { passive: true });
    window.addEventListener("mousemove", handlePrjMouse);
    return () => { window.removeEventListener("scroll", handlePrjScroll); window.removeEventListener("mousemove", handlePrjMouse); };
  }, []);

  useEffect(() => {
    if (prjSelectedProject) { document.body.style.overflow = "hidden"; } else { document.body.style.overflow = ""; }
    return () => { document.body.style.overflow = ""; };
  }, [prjSelectedProject]);

  useEffect(() => {
    const prjObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.prjSection;
          if (sectionName) setPrjVisible((prev) => ({ ...prev, [sectionName]: true }));
        }
      });
    };
    const prjObserver = new IntersectionObserver(handleIntersect, prjObserverOptions);
    const prjElements = prjSectionRef.current?.querySelectorAll("[data-prj-section]");
    prjElements?.forEach((el) => prjObserver.observe(el));
    setTimeout(() => { setPrjVisible((prev) => ({ ...prev, hero: true })); }, 100);
    return () => prjObserver.disconnect();
  }, []);

  const prjFilteredProjects = prjActiveFilter === "All" ? prjProjects : prjProjects.filter(p => p.category === prjActiveFilter);

  return (
    <main className="prj-page" ref={prjSectionRef}>
      {/* Hero Section */}
      <section className="prj-hero">
        <div className="prj-hero__bg">
          <div className="prj-hero__image" style={{ backgroundImage: `url(${projectsHeroImg})` }} />
          <div className="prj-hero__overlay" />
          <div className="prj-hero__grid" />
          <div className="prj-hero__glow" style={{ background: `radial-gradient(600px circle at ${prjMousePos.x}% ${prjMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        </div>
        <div className="prj-container">
          <div className={`prj-hero__content ${prjVisible.hero ? 'prj-hero__content--visible' : ''}`} data-prj-section="hero">
            <span className="prj-hero__tag">CASE STUDIES</span>
            <h1 className="prj-hero__title">
              Engineering Successful
              <span className="prj-hero__accent"> Wireless Connectivity Projects</span>
            </h1>
            <p className="prj-hero__desc">
              Discover how Futuremax Technology has transformed mobile connectivity across residential 
              communities, hotels, hospitals, educational institutions, commercial buildings, factories, 
              and enterprise campuses.
            </p>
            <div className="prj-hero__actions">
              <a href="/contact" className="prj-hero__btn prj-hero__btn--primary">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <a href="#projects" className="prj-hero__btn prj-hero__btn--secondary">View Projects</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="prj-stats-section">
        <div className="prj-container">
          <div className={`prj-stats ${prjVisible.stats ? 'prj-stats--visible' : ''}`} data-prj-section="stats">
            {prjStats.map((stat, index) => (
              <div key={index} className="prj-stats__item">
                <div className="prj-stats__icon">{stat.icon}</div>
                <span className="prj-stats__value">{stat.value}</span>
                <span className="prj-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="prj-projects" id="projects">
        <div className="prj-container">
          <div className={`prj-projects__header ${prjVisible.projects ? 'prj-projects__header--visible' : ''}`} data-prj-section="projects">
            <span className="prj-projects__tag">Our Portfolio</span>
            <h2 className="prj-projects__title">
              Real-World Deployments
              <span className="prj-projects__accent"> Across Industries</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className={`prj-filters ${prjVisible.projects ? 'prj-filters--visible' : ''}`}>
            {prjFilters.map((filter) => (
              <button key={filter} className={`prj-filters__pill ${prjActiveFilter === filter ? 'prj-filters__pill--active' : ''}`} onClick={() => setPrjActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="prj-grid">
            {prjFilteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`prj-card prj-card--${project.size} ${prjVisible.projects ? 'prj-card--visible' : ''}`}
                data-prj-section="projects"
                style={{ transitionDelay: prjVisible.projects ? `${index * 0.08}s` : '0s' }}
                onClick={() => setPrjSelectedProject(project)}
              >
                <div className="prj-card__image-wrap">
                  <img src={project.image} alt={project.title} className="prj-card__image" />
                  <div className="prj-card__image-overlay" />
                  <span className="prj-card__category" style={{ background: project.accentColor }}>
                    {project.category}
                  </span>
                  <div className="prj-card__metric" style={{ borderColor: project.accentColor }}>
                    <Zap size={12} style={{ color: project.accentColor }} />
                    <span style={{ color: project.accentColor }}>{project.metric}</span>
                  </div>
                </div>
                <div className="prj-card__body">
                  <div className="prj-card__location"><MapPin size={12} />{project.location}</div>
                  <h3 className="prj-card__title">{project.title}</h3>
                  <div className="prj-card__tech">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="prj-card__tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="prj-card__tech-more" style={{ color: project.accentColor }}>+{project.technologies.length - 3}</span>
                    )}
                  </div>
                  <div className="prj-card__results">
                    {project.results.slice(0, 2).map((result) => (
                      <div key={result} className="prj-card__result">
                        <CheckCircle2 size={12} style={{ color: project.accentColor }} />{result}
                      </div>
                    ))}
                  </div>
                  <button className="prj-card__btn" style={{ color: project.accentColor, borderColor: project.accentColor }}>
                    <span>View Details</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="prj-cta">
        <div className="prj-container">
          <div className={`prj-cta__card ${prjVisible.cta ? 'prj-cta__card--visible' : ''}`} data-prj-section="cta" style={{ transform: `translateY(${prjScrollY * -0.01}px)` }}>
            <div className="prj-cta__content">
              <h2 className="prj-cta__title">Need a Similar Solution for Your Facility?</h2>
              <p className="prj-cta__desc">Our RF engineers will assess your building and recommend the right i Booster or DAS configuration for reliable indoor mobile coverage.</p>
            </div>
            <div className="prj-cta__actions">
              <a href="/contact" className="prj-cta__btn"><span>Request Free RF Site Survey</span><ArrowRight size={16} /></a>
              <div className="prj-cta__contact">
                <a href="tel:+919876543210" className="prj-cta__contact-link"><Phone size={14} />94478671740</a>
                <a href="mailto:info@futuremax.com" className="prj-cta__contact-link"><Mail size={14} />info@futuremax.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {prjSelectedProject && (
        <div className="prj-modal-overlay" onClick={() => setPrjSelectedProject(null)}>
          <div className="prj-modal" onClick={(e) => e.stopPropagation()}>
            <button className="prj-modal__close" onClick={() => setPrjSelectedProject(null)}><X size={20} /></button>
            <div className="prj-modal__image"><img src={prjSelectedProject.image} alt={prjSelectedProject.title} /></div>
            <div className="prj-modal__body">
              <div className="prj-modal__header">
                <span className="prj-modal__badge" style={{ background: prjSelectedProject.accentColor }}>{prjSelectedProject.category}</span>
                <h2 className="prj-modal__title">{prjSelectedProject.title}</h2>
                <div className="prj-modal__location"><MapPin size={15} />{prjSelectedProject.location}</div>
              </div>
              <div className="prj-modal__cards">
                <div className="prj-modal__card"><RadioTower size={18} style={{ color: prjSelectedProject.accentColor }} /><h4>Project Requirement</h4><p>{prjSelectedProject.requirement}</p></div>
                <div className="prj-modal__card"><ShieldCheck size={18} style={{ color: prjSelectedProject.accentColor }} /><h4>Deployment Challenges</h4><p>{prjSelectedProject.challenge}</p></div>
                <div className="prj-modal__card"><Wifi size={18} style={{ color: prjSelectedProject.accentColor }} /><h4>Solution Implemented</h4><p>{prjSelectedProject.solution}</p></div>
              </div>
              <div className="prj-modal__section"><h3>Technologies Used</h3><div className="prj-modal__tech-list">{prjSelectedProject.technologies.map((tech) => (<span key={tech} className="prj-modal__tech-tag">{tech}</span>))}</div></div>
              <div className="prj-modal__section"><h3>Project Outcomes</h3><div className="prj-modal__outcomes">{prjSelectedProject.results.map((result) => (<div key={result} className="prj-modal__outcome"><CheckCircle2 size={16} style={{ color: prjSelectedProject.accentColor }} />{result}</div>))}</div></div>
              <div className="prj-modal__footer"><button className="prj-modal__footer-btn" onClick={() => setPrjSelectedProject(null)}>Back to Projects</button></div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Projects;