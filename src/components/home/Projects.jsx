// import React, { useMemo, useState, useEffect, useRef } from "react";
// import {
//   ArrowRight,
//   Building2,
//   MapPin,
//   X,
//   CheckCircle2,
//   RadioTower,
//   Wifi,
//   ShieldCheck,
//   ArrowUpRight,
// } from "lucide-react";
// import "./Projects.css";

// import project1 from "../../assets/project1.jpeg";
// import project2 from "../../assets/project2.jpeg";
// import project3 from "../../assets/project3.jpeg";
// import project4 from "../../assets/project4.jpeg";
// import project5 from "../../assets/project5.jpeg";
// import project6 from "../../assets/project6.jpeg";

// const hpFilters = [
//   "All",
//   "Hospitality",
//   "Healthcare",
//   "Commercial",
//   "Industrial",
//   "Residential",
//   "Education",
// ];

// const hpTimeline = [
//   "RF Site Survey",
//   "Coverage Analysis",
//   "Network Planning",
//   "Solution Design",
//   "Installation",
//   "Testing",
//   "Optimization",
// ];

// const hpProjects = [
//   {
//     id: 1,
//     image: project1,
//     category: "Hospitality",
//     location: "5-Star Hotel",
//     title: "Hotel Mobile Signal Enhancement",
//     requirement:
//       "Provide uninterrupted mobile coverage across guest rooms, banquet halls, restaurants, conference rooms, and service areas.",
//     challenge:
//       "Concrete structures and multiple floors caused weak indoor mobile signals and frequent call drops.",
//     solution:
//       "Installed a 25 dBm i Booster system with Distributed Antenna System (DAS) to ensure seamless indoor 4G & 5G connectivity.",
//     technologies: [
//       "25 dBm i Booster",
//       "Distributed Antenna System",
//       "RF Engineering",
//       "Indoor Antennas",
//       "Coverage Analysis",
//       "4G & 5G",
//     ],
//     results: [
//       "100% indoor coverage",
//       "Improved guest experience",
//       "Reduced call drops",
//       "Reliable high-speed data",
//     ],
//     implementation: [
//       "RF Site Survey",
//       "Coverage Planning",
//       "System Design",
//       "Installation",
//       "Performance Testing",
//     ],
//     accentColor: "#19AB3F",
//   },
//   {
//     id: 2,
//     image: project2,
//     category: "Healthcare",
//     location: "Multi-Speciality Hospital",
//     title: "Hospital Wireless Connectivity",
//     requirement:
//       "Reliable mobile communication for doctors, emergency teams, patients, and hospital staff.",
//     challenge:
//       "Medical equipment and reinforced walls reduced signal penetration in critical departments.",
//     solution:
//       "Designed a complete DAS infrastructure with RF optimization and enterprise-grade indoor antennas.",
//     technologies: [
//       "RF Engineering",
//       "DAS",
//       "Indoor Antennas",
//       "Coverage Analysis",
//       "Signal Optimization",
//     ],
//     results: [
//       "Reliable emergency communication",
//       "Complete floor coverage",
//       "Improved operational efficiency",
//       "Better patient experience",
//     ],
//     implementation: [
//       "Signal Survey",
//       "RF Design",
//       "Antenna Installation",
//       "Testing",
//       "Optimization",
//     ],
//     accentColor: "#0755A3",
//   },
//   {
//     id: 3,
//     image: project3,
//     category: "Commercial",
//     location: "Corporate Office",
//     title: "Enterprise Office Connectivity",
//     requirement:
//       "Deliver seamless mobile connectivity across office floors, meeting rooms, and workspaces.",
//     challenge:
//       "Glass partitions and dense office layouts caused inconsistent indoor signal strength.",
//     solution:
//       "Installed a 27 dBm enterprise i Booster solution with optimized antenna placement.",
//     technologies: [
//       "27 dBm i Booster",
//       "RF Engineering",
//       "Enterprise Wireless",
//       "Coverage Planning",
//     ],
//     results: [
//       "Reliable office-wide coverage",
//       "Improved employee productivity",
//       "High-speed mobile internet",
//     ],
//     implementation: [
//       "Site Survey",
//       "Planning",
//       "Deployment",
//       "Testing",
//       "Optimization",
//     ],
//     accentColor: "#7C3AED",
//   },
// ];

// const Projects = () => {
//   const [hpActiveFilter, setHpActiveFilter] = useState("All");
//   const [hpSelectedProject, setHpSelectedProject] = useState(null);
//   const [hpScrollY, setHpScrollY] = useState(0);
//   const [hpHoveredCard, setHpHoveredCard] = useState(null);
//   const hpSectionRef = useRef(null);

//   useEffect(() => {
//     const handleHpScroll = () => setHpScrollY(window.scrollY);
//     window.addEventListener("scroll", handleHpScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleHpScroll);
//   }, []);

//   useEffect(() => {
//     if (hpSelectedProject) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [hpSelectedProject]);

//   const hpFilteredProjects = useMemo(() => {
//     if (hpActiveFilter === "All") return hpProjects;
//     return hpProjects.filter((project) => project.category === hpActiveFilter);
//   }, [hpActiveFilter]);

//   return (
//     <section className="hp-section" ref={hpSectionRef} id="case-studies">
//       {/* Background */}
//       <div className="hp-bg">
//         <div className="hp-bg__grid" />
//         <div className="hp-bg__orb hp-bg__orb--1" style={{ transform: `translate(${hpScrollY * 0.02}px, ${-hpScrollY * 0.03}px)` }} />
//         <div className="hp-bg__orb hp-bg__orb--2" style={{ transform: `translate(${-hpScrollY * 0.02}px, ${hpScrollY * 0.04}px)` }} />
//       </div>

//       <div className="hp-container">
//         {/* Section Header */}
//         <div className="hp-header" style={{ transform: `translateY(${hpScrollY * -0.03}px)` }}>
//           <span className="hp-header__tag">CASE STUDIES</span>
//           <h2 className="hp-header__title">
//             Engineering Successful
//             <span className="hp-header__accent"> Wireless Connectivity Projects</span>
//           </h2>
//           <p className="hp-header__desc">
//             Discover how Futuremax Technology has transformed mobile connectivity across residential 
//             communities, hotels, hospitals, educational institutions, commercial buildings, factories, 
//             and enterprise campuses using i Booster Mobile Signal Boosters, Distributed Antenna Systems 
//             (DAS), and advanced RF Engineering solutions.
//           </p>
//         </div>

//         {/* Filter Pills */}
//         <div className="hp-filters">
//           {hpFilters.map((filter) => (
//             <button
//               key={filter}
//               onClick={() => setHpActiveFilter(filter)}
//               className={`hp-filters__pill ${hpActiveFilter === filter ? 'hp-filters__pill--active' : ''}`}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid - 3 Cards */}
//         <div className="hp-grid">
//           {hpFilteredProjects.slice(0, 3).map((project) => (
//             <div
//               key={project.id}
//               className={`hp-card ${hpHoveredCard === project.id ? 'hp-card--hovered' : ''}`}
//               style={{ '--hp-accent': project.accentColor }}
//               onMouseEnter={() => setHpHoveredCard(project.id)}
//               onMouseLeave={() => setHpHoveredCard(null)}
//             >
//               {/* Image */}
//               <div className="hp-card__image-wrap">
//                 <img src={project.image} alt={project.title} className="hp-card__image" />
//                 <div className="hp-card__image-shade" />
//                 <span className="hp-card__badge" style={{ background: project.accentColor }}>
//                   <Building2 size={12} />
//                   {project.category}
//                 </span>
//               </div>

//               {/* Content */}
//               <div className="hp-card__body">
//                 <div className="hp-card__location">
//                   <MapPin size={13} />
//                   <span>{project.location}</span>
//                 </div>
//                 <h3 className="hp-card__title">{project.title}</h3>
//                 <p className="hp-card__desc">{project.requirement}</p>

//                 {/* Technologies */}
//                 <div className="hp-card__tech">
//                   {project.technologies.slice(0, 3).map((tech) => (
//                     <span key={tech} className="hp-card__tech-tag">{tech}</span>
//                   ))}
//                   {project.technologies.length > 3 && (
//                     <span className="hp-card__tech-more" style={{ color: project.accentColor }}>
//                       +{project.technologies.length - 3}
//                     </span>
//                   )}
//                 </div>

//                 {/* Results Preview */}
//                 <div className="hp-card__results">
//                   {project.results.slice(0, 2).map((result) => (
//                     <div key={result} className="hp-card__result">
//                       <CheckCircle2 size={14} style={{ color: project.accentColor }} />
//                       <span>{result}</span>
//                     </div>
//                   ))}
//                 </div>

//                 {/* View Project Button */}
//                 <button
//                   className="hp-card__btn"
//                   onClick={() => setHpSelectedProject(project)}
//                   style={{ color: project.accentColor }}
//                 >
//                   <span>View Project</span>
//                   <ArrowUpRight size={15} />
//                 </button>
//               </div>

//               {/* Bottom Accent Line */}
//               <div className="hp-card__line" style={{ background: project.accentColor }} />
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="hp-cta" style={{ transform: `translateY(${hpScrollY * -0.01}px)` }}>
//           <div className="hp-cta__card">
//             <div className="hp-cta__content">
//               <h3 className="hp-cta__title">Need a Similar Solution for Your Facility?</h3>
//               <p className="hp-cta__desc">
//                 Our RF engineers will assess your building and recommend the right i Booster or DAS 
//                 configuration for reliable indoor mobile coverage.
//               </p>
//             </div>
//             <div className="hp-cta__actions">
//               <a href="/contact" className="hp-cta__btn">
//                 <span>Request Free RF Site Survey</span>
//                 <ArrowRight size={16} />
//               </a>
//               <a href="/case-studies" className="hp-cta__link">
//                 View All Case Studies
//                 <ArrowRight size={14} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal */}
//       {hpSelectedProject && (
//         <div className="hp-modal-overlay" onClick={() => setHpSelectedProject(null)}>
//           <div className="hp-modal" onClick={(e) => e.stopPropagation()}>
//             <button className="hp-modal__close" onClick={() => setHpSelectedProject(null)}>
//               <X size={20} />
//             </button>

//             <div className="hp-modal__image">
//               <img src={hpSelectedProject.image} alt={hpSelectedProject.title} />
//             </div>

//             <div className="hp-modal__body">
//               <div className="hp-modal__header">
//                 <span className="hp-modal__badge" style={{ background: hpSelectedProject.accentColor }}>
//                   {hpSelectedProject.category}
//                 </span>
//                 <h2 className="hp-modal__title">{hpSelectedProject.title}</h2>
//                 <div className="hp-modal__location">
//                   <MapPin size={15} />
//                   {hpSelectedProject.location}
//                 </div>
//               </div>

//               <div className="hp-modal__cards">
//                 <div className="hp-modal__card">
//                   <RadioTower size={18} style={{ color: hpSelectedProject.accentColor }} />
//                   <h4>Project Requirement</h4>
//                   <p>{hpSelectedProject.requirement}</p>
//                 </div>
//                 <div className="hp-modal__card">
//                   <ShieldCheck size={18} style={{ color: hpSelectedProject.accentColor }} />
//                   <h4>Deployment Challenges</h4>
//                   <p>{hpSelectedProject.challenge}</p>
//                 </div>
//                 <div className="hp-modal__card">
//                   <Wifi size={18} style={{ color: hpSelectedProject.accentColor }} />
//                   <h4>Solution Implemented</h4>
//                   <p>{hpSelectedProject.solution}</p>
//                 </div>
//               </div>

//               <div className="hp-modal__section">
//                 <h3>Technologies Used</h3>
//                 <div className="hp-modal__tech-list">
//                   {hpSelectedProject.technologies.map((tech) => (
//                     <span key={tech} className="hp-modal__tech-tag">{tech}</span>
//                   ))}
//                 </div>
//               </div>

//               <div className="hp-modal__section">
//                 <h3>Project Outcomes</h3>
//                 <div className="hp-modal__outcomes">
//                   {hpSelectedProject.results.map((result) => (
//                     <div className="hp-modal__outcome" key={result}>
//                       <CheckCircle2 size={16} style={{ color: hpSelectedProject.accentColor }} />
//                       <span>{result}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="hp-modal__footer">
//                 <button className="hp-modal__footer-btn" onClick={() => setHpSelectedProject(null)}>
//                   Back to Projects
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;


import React, { useMemo, useState, useEffect, useRef } from "react";
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
  ChevronRight,
} from "lucide-react";
import "./Projects.css";

import project1 from "../../assets/project1.jpeg";
import project2 from "../../assets/project2.jpeg";
import project3 from "../../assets/project3.jpeg";

const hpFilters = [
  "All",
  "Hospitality",
  "Healthcare",
  "Commercial",
  "Industrial",
  "Residential",
  "Education",
];

const hpProjects = [
  {
    id: 1,
    image: project1,
    category: "Hospitality",
    location: "5-Star Hotel, Mumbai",
    title: "Hotel Mobile Signal Enhancement",
    requirement:
      "Provide uninterrupted mobile coverage across guest rooms, banquet halls, restaurants, conference rooms, and service areas.",
    challenge:
      "Concrete structures and multiple floors caused weak indoor mobile signals and frequent call drops.",
    solution:
      "Installed a 25 dBm i Booster system with Distributed Antenna System (DAS) to ensure seamless indoor 4G & 5G connectivity.",
    technologies: [
      "25 dBm i Booster",
      "Distributed Antenna System",
      "RF Engineering",
      "Indoor Antennas",
      "Coverage Analysis",
      "4G & 5G",
    ],
    results: [
      "100% indoor coverage",
      "Improved guest experience",
      "Reduced call drops",
      "Reliable high-speed data",
    ],
    accentColor: "#19AB3F",
    stat: "100%",
    statLabel: "Coverage Achieved",
  },
  {
    id: 2,
    image: project2,
    category: "Healthcare",
    location: "Multi-Speciality Hospital, Delhi",
    title: "Hospital Wireless Connectivity",
    requirement:
      "Reliable mobile communication for doctors, emergency teams, patients, and hospital staff.",
    challenge:
      "Medical equipment and reinforced walls reduced signal penetration in critical departments.",
    solution:
      "Designed a complete DAS infrastructure with RF optimization and enterprise-grade indoor antennas.",
    technologies: [
      "RF Engineering",
      "DAS",
      "Indoor Antennas",
      "Coverage Analysis",
      "Signal Optimization",
    ],
    results: [
      "Reliable emergency communication",
      "Complete floor coverage",
      "Improved operational efficiency",
      "Better patient experience",
    ],
    accentColor: "#0755A3",
    stat: "8 Floors",
    statLabel: "Full Coverage",
  },
  {
    id: 3,
    image: project3,
    category: "Commercial",
    location: "Corporate Office, Bangalore",
    title: "Enterprise Office Connectivity",
    requirement:
      "Deliver seamless mobile connectivity across office floors, meeting rooms, and workspaces.",
    challenge:
      "Glass partitions and dense office layouts caused inconsistent indoor signal strength.",
    solution:
      "Installed a 27 dBm enterprise i Booster solution with optimized antenna placement.",
    technologies: [
      "27 dBm i Booster",
      "RF Engineering",
      "Enterprise Wireless",
      "Coverage Planning",
    ],
    results: [
      "Reliable office-wide coverage",
      "Improved employee productivity",
      "High-speed mobile internet",
    ],
    accentColor: "#7C3AED",
    stat: "500+",
    statLabel: "Employees Connected",
  },
];

const Projects = () => {
  const [hpActiveFilter, setHpActiveFilter] = useState("All");
  const [hpSelectedProject, setHpSelectedProject] = useState(null);
  const [hpScrollY, setHpScrollY] = useState(0);
  const [hpActiveCard, setHpActiveCard] = useState(0);
  const hpSectionRef = useRef(null);

  useEffect(() => {
    const handleHpScroll = () => setHpScrollY(window.scrollY);
    window.addEventListener("scroll", handleHpScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleHpScroll);
  }, []);

  useEffect(() => {
    if (hpSelectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [hpSelectedProject]);

  const hpFilteredProjects = useMemo(() => {
    if (hpActiveFilter === "All") return hpProjects;
    return hpProjects.filter((project) => project.category === hpActiveFilter);
  }, [hpActiveFilter]);

  return (
    <section className="hp-section" ref={hpSectionRef} id="case-studies">
      {/* Background */}
      <div className="hp-bg">
        <div className="hp-bg__grid" />
        <div className="hp-bg__orb hp-bg__orb--1" style={{ transform: `translate(${hpScrollY * 0.02}px, ${-hpScrollY * 0.03}px)` }} />
        <div className="hp-bg__orb hp-bg__orb--2" style={{ transform: `translate(${-hpScrollY * 0.02}px, ${hpScrollY * 0.04}px)` }} />
      </div>

      <div className="hp-container">
        {/* Section Header */}
        <div className="hp-header" style={{ transform: `translateY(${hpScrollY * -0.03}px)` }}>
          <span className="hp-header__tag">CASE STUDIES</span>
          <h2 className="hp-header__title">
            Engineering Successful
            <span className="hp-header__accent"> Wireless Connectivity Projects</span>
          </h2>
          <p className="hp-header__desc">
            Discover how Futuremax Technology has transformed mobile connectivity across residential 
            communities, hotels, hospitals, educational institutions, commercial buildings, factories, 
            and enterprise campuses using i Booster Mobile Signal Boosters, Distributed Antenna Systems 
            (DAS), and advanced RF Engineering solutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="hp-filters">
          {hpFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => { setHpActiveFilter(filter); setHpActiveCard(0); }}
              className={`hp-filters__pill ${hpActiveFilter === filter ? 'hp-filters__pill--active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Project - Large Card */}
        {hpFilteredProjects.length > 0 && (
          <div className="hp-featured">
            <div
              className="hp-featured__card"
              style={{ '--hp-accent': hpFilteredProjects[hpActiveCard]?.accentColor || '#0755A3' }}
            >
              {/* Image */}
              <div className="hp-featured__image-wrap">
                <img
                  src={hpFilteredProjects[hpActiveCard]?.image}
                  alt={hpFilteredProjects[hpActiveCard]?.title}
                  className="hp-featured__image"
                />
                <div className="hp-featured__image-shade" />
                
                {/* Category Badge */}
                <span className="hp-featured__badge" style={{ background: hpFilteredProjects[hpActiveCard]?.accentColor }}>
                  <Building2 size={14} />
                  {hpFilteredProjects[hpActiveCard]?.category}
                </span>

                {/* Stat Overlay */}
                <div className="hp-featured__stat">
                  <span className="hp-featured__stat-value">{hpFilteredProjects[hpActiveCard]?.stat}</span>
                  <span className="hp-featured__stat-label">{hpFilteredProjects[hpActiveCard]?.statLabel}</span>
                </div>
              </div>

              {/* Content */}
              <div className="hp-featured__body">
                <div className="hp-featured__location">
                  <MapPin size={14} />
                  <span>{hpFilteredProjects[hpActiveCard]?.location}</span>
                </div>
                <h3 className="hp-featured__title">{hpFilteredProjects[hpActiveCard]?.title}</h3>
                <p className="hp-featured__desc">{hpFilteredProjects[hpActiveCard]?.requirement}</p>

                {/* Technologies */}
                <div className="hp-featured__tech">
                  {hpFilteredProjects[hpActiveCard]?.technologies.map((tech) => (
                    <span key={tech} className="hp-featured__tech-tag">{tech}</span>
                  ))}
                </div>

                {/* Results */}
                <div className="hp-featured__results">
                  {hpFilteredProjects[hpActiveCard]?.results.slice(0, 3).map((result) => (
                    <div key={result} className="hp-featured__result">
                      <CheckCircle2 size={16} style={{ color: hpFilteredProjects[hpActiveCard]?.accentColor }} />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="hp-featured__actions">
                  <button
                    className="hp-featured__btn"
                    onClick={() => setHpSelectedProject(hpFilteredProjects[hpActiveCard])}
                    style={{ background: hpFilteredProjects[hpActiveCard]?.accentColor }}
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight size={16} />
                  </button>

                  {/* Card Navigation */}
                  <div className="hp-featured__nav">
                    <button
                      className="hp-featured__nav-btn"
                      onClick={() => setHpActiveCard((prev) => (prev > 0 ? prev - 1 : hpFilteredProjects.length - 1))}
                    >
                      <ChevronRight size={16} style={{ transform: 'rotate(180deg)' }} />
                    </button>
                    <span className="hp-featured__nav-count">
                      {hpActiveCard + 1} / {hpFilteredProjects.length}
                    </span>
                    <button
                      className="hp-featured__nav-btn"
                      onClick={() => setHpActiveCard((prev) => (prev < hpFilteredProjects.length - 1 ? prev + 1 : 0))}
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="hp-featured__dots">
              {hpFilteredProjects.map((_, index) => (
                <button
                  key={index}
                  className={`hp-featured__dot ${index === hpActiveCard ? 'hp-featured__dot--active' : ''}`}
                  onClick={() => setHpActiveCard(index)}
                  style={{ '--hp-dot-color': hpFilteredProjects[index]?.accentColor }}
                />
              ))}
            </div>
          </div>
        )}

    
      </div>

      {/* Modal */}
      {hpSelectedProject && (
        <div className="hp-modal-overlay" onClick={() => setHpSelectedProject(null)}>
          <div className="hp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="hp-modal__close" onClick={() => setHpSelectedProject(null)}>
              <X size={20} />
            </button>

            <div className="hp-modal__image">
              <img src={hpSelectedProject.image} alt={hpSelectedProject.title} />
            </div>

            <div className="hp-modal__body">
              <div className="hp-modal__header">
                <span className="hp-modal__badge" style={{ background: hpSelectedProject.accentColor }}>
                  {hpSelectedProject.category}
                </span>
                <h2 className="hp-modal__title">{hpSelectedProject.title}</h2>
                <div className="hp-modal__location">
                  <MapPin size={15} />
                  {hpSelectedProject.location}
                </div>
              </div>

              <div className="hp-modal__cards">
                <div className="hp-modal__card">
                  <RadioTower size={18} style={{ color: hpSelectedProject.accentColor }} />
                  <h4>Project Requirement</h4>
                  <p>{hpSelectedProject.requirement}</p>
                </div>
                <div className="hp-modal__card">
                  <ShieldCheck size={18} style={{ color: hpSelectedProject.accentColor }} />
                  <h4>Deployment Challenges</h4>
                  <p>{hpSelectedProject.challenge}</p>
                </div>
                <div className="hp-modal__card">
                  <Wifi size={18} style={{ color: hpSelectedProject.accentColor }} />
                  <h4>Solution Implemented</h4>
                  <p>{hpSelectedProject.solution}</p>
                </div>
              </div>

              <div className="hp-modal__section">
                <h3>Technologies Used</h3>
                <div className="hp-modal__tech-list">
                  {hpSelectedProject.technologies.map((tech) => (
                    <span key={tech} className="hp-modal__tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="hp-modal__section">
                <h3>Project Outcomes</h3>
                <div className="hp-modal__outcomes">
                  {hpSelectedProject.results.map((result) => (
                    <div className="hp-modal__outcome" key={result}>
                      <CheckCircle2 size={16} style={{ color: hpSelectedProject.accentColor }} />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hp-modal__footer">
                <button className="hp-modal__footer-btn" onClick={() => setHpSelectedProject(null)}>
                  Back to Projects
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;