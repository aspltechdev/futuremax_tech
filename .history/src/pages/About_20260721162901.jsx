// // import React, { useEffect, useRef, useState } from "react";
// // import { 
// //   Award, 
// //   Users, 
// //   Target, 
// //   Eye, 
// //   Shield, 
// //   Zap, 
// //   CheckCircle2, 
// //   ArrowRight,
// //   Building2,
// //   Radio,
// //   Wrench,
// //   Headphones,
// //   MapPin,
// //   Phone,
// //   Mail,
// //   Globe,
// //   Star
// // } from "lucide-react";
// // import "./About.css";

// // // Import images
// // import aboutHeroImg from "../assets/hero1.png";
// // import teamImg from "../assets/hero1.png";
// // import missionImg from "../assets/hero1.png";

// // const abtStats = [
// //   { value: "15+", label: "Years of RF Engineering", icon: <Award size={22} strokeWidth={1.5} /> },
// //   { value: "250+", label: "Successful Installations", icon: <Building2 size={22} strokeWidth={1.5} /> },
// //   { value: "50+", label: "Enterprise Clients", icon: <Users size={22} strokeWidth={1.5} /> },
// //   { value: "Pan India", label: "Service Network", icon: <Globe size={22} strokeWidth={1.5} /> },
// // ];

// // const abtValues = [
// //   {
// //     icon: <Target size={28} strokeWidth={1.5} />,
// //     title: "Engineering Excellence",
// //     description: "We approach every project with precision RF engineering, ensuring optimal signal coverage and network performance for every environment.",
// //     color: "#0755A3",
// //   },
// //   {
// //     icon: <Shield size={28} strokeWidth={1.5} />,
// //     title: "Quality & Reliability",
// //     description: "Our i Booster Series and DAS solutions are built with industrial-grade components, tested rigorously, and backed by comprehensive warranties.",
// //     color: "#19AB3F",
// //   },
// //   {
// //     icon: <Users size={28} strokeWidth={1.5} />,
// //     title: "Customer-First Approach",
// //     description: "From initial consultation to post-installation support, we prioritize understanding your needs and delivering solutions that exceed expectations.",
// //     color: "#7C3AED",
// //   },
// //   {
// //     icon: <Zap size={28} strokeWidth={1.5} />,
// //     title: "Innovation Driven",
// //     description: "We continuously invest in the latest RF technologies, 4G/5G infrastructure, and wireless connectivity solutions to future-proof your investments.",
// //     color: "#EA580C",
// //   },
// // ];

// // const abtServices = [
// //   { icon: <Radio size={20} strokeWidth={1.5} />, title: "RF Site Survey & Analysis" },
// //   { icon: <Building2 size={20} strokeWidth={1.5} />, title: "Mobile Signal Boosters" },
// //   { icon: <Radio size={20} strokeWidth={1.5} />, title: "Distributed Antenna Systems (DAS)" },
// //   { icon: <Wrench size={20} strokeWidth={1.5} />, title: "Professional Installation" },
// //   { icon: <Headphones size={20} strokeWidth={1.5} />, title: "AMC & Technical Support" },
// //   { icon: <Globe size={20} strokeWidth={1.5} />, title: "Pan India Coverage" },
// // ];

// // const About = () => {
// //   const [abtScrollY, setAbtScrollY] = useState(0);
// //   const [abtMousePos, setAbtMousePos] = useState({ x: 50, y: 50 });
// //   const [abtVisible, setAbtVisible] = useState({});
// //   const abtSectionRef = useRef(null);

// //   useEffect(() => {
// //     const handleAbtScroll = () => setAbtScrollY(window.scrollY);
// //     const handleAbtMouse = (e) => {
// //       if (!abtSectionRef.current) return;
// //       const rect = abtSectionRef.current.getBoundingClientRect();
// //       setAbtMousePos({
// //         x: ((e.clientX - rect.left) / rect.width) * 100,
// //         y: ((e.clientY - rect.top) / rect.height) * 100,
// //       });
// //     };
// //     window.addEventListener("scroll", handleAbtScroll, { passive: true });
// //     window.addEventListener("mousemove", handleAbtMouse);
// //     return () => {
// //       window.removeEventListener("scroll", handleAbtScroll);
// //       window.removeEventListener("mousemove", handleAbtMouse);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const observerOptions = { threshold: 0.12, rootMargin: "0px 0px -50px 0px" };
// //     const observer = new IntersectionObserver((entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           setAbtVisible((prev) => ({ ...prev, [entry.target.dataset.abtSection]: true }));
// //         }
// //       });
// //     }, observerOptions);

// //     const elements = abtSectionRef.current?.querySelectorAll("[data-abt-section]");
// //     elements?.forEach((el) => observer.observe(el));
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <main className="abt-page" ref={abtSectionRef}>
// //       {/* ==================== */}
// //       {/* Hero Section         */}
// //       {/* ==================== */}
// //       <section className="abt-hero">
// //         <div className="abt-hero__bg">
// //           <div className="abt-hero__image" style={{ backgroundImage: `url(${aboutHeroImg})` }} />
// //           <div className="abt-hero__overlay" />
// //           <div className="abt-hero__grid" />
// //           <div className="abt-hero__glow" style={{ background: `radial-gradient(600px circle at ${abtMousePos.x}% ${abtMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
// //         </div>
// //         <div className="abt-container">
// //           <div className="abt-hero__content" data-abt-section="hero">
// //             <span className="abt-hero__tag">About Futuremax Technology</span>
// //             <h1 className="abt-hero__title">
// //               India's Trusted RF Engineering
// //               <span className="abt-hero__accent"> & Wireless Solutions Company</span>
// //             </h1>
// //             <p className="abt-hero__desc">
// //               Futuremax Technology is a specialized RF engineering company delivering Mobile Signal Boosters, 
// //               Distributed Antenna Systems (DAS), and enterprise wireless connectivity solutions across India. 
// //               From 23 dBm residential boosters to 27 dBm enterprise systems, we engineer reliable indoor 
// //               mobile coverage for homes, hotels, hospitals, commercial buildings, factories, and large 
// //               enterprise campuses.
// //             </p>
// //             <div className="abt-hero__actions">
// //               <a href="/contact" className="abt-hero__btn abt-hero__btn--primary">
// //                 <span>Get Free RF Site Survey</span>
// //                 <ArrowRight size={16} />
// //               </a>
// //               <a href="/solutions" className="abt-hero__btn abt-hero__btn--secondary">
// //                 Explore Our Solutions
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* Stats Section        */}
// //       {/* ==================== */}
// //       <section className="abt-stats-section">
// //         <div className="abt-container">
// //           <div className={`abt-stats ${abtVisible["stats"] ? 'abt-stats--visible' : ''}`} data-abt-section="stats">
// //             {abtStats.map((stat, index) => (
// //               <div key={index} className="abt-stats__item">
// //                 <div className="abt-stats__icon">{stat.icon}</div>
// //                 <span className="abt-stats__value">{stat.value}</span>
// //                 <span className="abt-stats__label">{stat.label}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* Who We Are           */}
// //       {/* ==================== */}
// //       <section className="abt-who">
// //         <div className="abt-container">
// //           <div className="abt-who__grid">
// //             <div className={`abt-who__image-wrap ${abtVisible["who-image"] ? 'abt-who--visible' : ''}`} data-abt-section="who-image">
// //               <img src={teamImg} alt="Futuremax Engineering Team" className="abt-who__image" />
// //               <div className="abt-who__badge">
// //                 <Star size={16} fill="#FFC107" stroke="#FFC107" />
// //                 <span>ISO 9001:2015 Certified</span>
// //               </div>
// //             </div>
// //             <div className={`abt-who__content ${abtVisible["who-content"] ? 'abt-who--visible' : ''}`} data-abt-section="who-content">
// //               <span className="abt-who__tag">Who We Are</span>
// //               <h2 className="abt-who__title">
// //                 Engineering Reliable Mobile
// //                 <span className="abt-who__accent"> Connectivity Since 2010</span>
// //               </h2>
// //               <p className="abt-who__desc">
// //                 Futuremax Technology was founded with a clear mission: to solve India's indoor mobile 
// //                 coverage challenges through professional RF engineering. Over the past 15 years, we've 
// //                 grown from a specialized RF consultancy into a full-service wireless solutions provider, 
// //                 serving enterprise clients across hospitality, healthcare, commercial, industrial, 
// //                 residential, and education sectors.
// //               </p>
// //               <p className="abt-who__desc">
// //                 Our team of certified RF engineers brings deep expertise in signal propagation analysis, 
// //                 coverage planning, DAS design, and system optimization. We take pride in our systematic 
// //                 approach—every project begins with a comprehensive RF site survey and is executed with 
// //                 precision installation, thorough testing, and ongoing technical support.
// //               </p>
// //               <div className="abt-who__features">
// //                 <div className="abt-who__feature">
// //                   <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
// //                   <span>15+ Years of RF Engineering Experience</span>
// //                 </div>
// //                 <div className="abt-who__feature">
// //                   <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
// //                   <span>250+ Successful Deployments Across India</span>
// //                 </div>
// //                 <div className="abt-who__feature">
// //                   <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
// //                   <span>Certified Engineers & Professional Installation Team</span>
// //                 </div>
// //                 <div className="abt-who__feature">
// //                   <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
// //                   <span>Pan India Service Network with 24/7 Support</span>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* Mission & Vision     */}
// //       {/* ==================== */}
// //       <section className="abt-mission">
// //         <div className="abt-container">
// //           <div className="abt-mission__grid">
// //             <div className={`abt-mission__card ${abtVisible["mission"] ? 'abt-mission--visible' : ''}`} data-abt-section="mission" style={{ '--abt-card-color': '#0755A3' }}>
// //               <div className="abt-mission__icon-wrap">
// //                 <Target size={32} strokeWidth={1.5} />
// //               </div>
// //               <h3 className="abt-mission__title">Our Mission</h3>
// //               <p className="abt-mission__desc">
// //                 To provide reliable, professionally engineered wireless connectivity solutions that 
// //                 eliminate mobile dead zones and ensure seamless communication for every building, 
// //                 every industry, and every user across India.
// //               </p>
// //             </div>
// //             <div className={`abt-mission__card ${abtVisible["vision"] ? 'abt-mission--visible' : ''}`} data-abt-section="vision" style={{ '--abt-card-color': '#19AB3F' }}>
// //               <div className="abt-mission__icon-wrap">
// //                 <Eye size={32} strokeWidth={1.5} />
// //               </div>
// //               <h3 className="abt-mission__title">Our Vision</h3>
// //               <p className="abt-mission__desc">
// //                 To become India's most trusted RF engineering and wireless solutions company, setting 
// //                 the standard for indoor mobile coverage excellence through innovation, quality, and 
// //                 customer-centric service.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* Core Values          */}
// //       {/* ==================== */}
// //       <section className="abt-values">
// //         <div className="abt-bg__grid" />
// //         <div className="abt-container">
// //           <div className={`abt-values__header ${abtVisible["values-header"] ? 'abt-values--visible' : ''}`} data-abt-section="values-header">
// //             <span className="abt-values__tag">Our Core Values</span>
// //             <h2 className="abt-values__title">
// //               What Drives
// //               <span className="abt-values__accent"> Our Engineering</span>
// //             </h2>
// //           </div>
// //           <div className="abt-values__grid">
// //             {abtValues.map((value, index) => (
// //               <div
// //                 key={index}
// //                 className={`abt-values__card ${abtVisible["values"] ? 'abt-values--visible' : ''}`}
// //                 data-abt-section="values"
// //                 style={{ '--abt-value-color': value.color, transitionDelay: `${index * 0.1}s` }}
// //               >
// //                 <div className="abt-values__icon" style={{ background: `${value.color}12`, color: value.color }}>
// //                   {value.icon}
// //                 </div>
// //                 <h3 className="abt-values__card-title">{value.title}</h3>
// //                 <p className="abt-values__card-desc">{value.description}</p>
// //                 <div className="abt-values__line" style={{ background: value.color }} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* Services Overview    */}
// //       {/* ==================== */}
// //       <section className="abt-services">
// //         <div className="abt-container">
// //           <div className={`abt-services__header ${abtVisible["services-header"] ? 'abt-services--visible' : ''}`} data-abt-section="services-header">
// //             <span className="abt-services__tag">What We Do</span>
// //             <h2 className="abt-services__title">
// //               Complete RF Engineering &
// //               <span className="abt-services__accent"> Wireless Connectivity Solutions</span>
// //             </h2>
// //             <p className="abt-services__desc">
// //               From initial RF site survey to professional installation and long-term AMC support, 
// //               Futuremax provides end-to-end wireless solutions tailored to your building's unique requirements.
// //             </p>
// //           </div>
// //           <div className={`abt-services__grid ${abtVisible["services"] ? 'abt-services--visible' : ''}`} data-abt-section="services">
// //             {abtServices.map((service, index) => (
// //               <div key={index} className="abt-services__item" style={{ transitionDelay: `${index * 0.08}s` }}>
// //                 <div className="abt-services__item-icon">{service.icon}</div>
// //                 <span className="abt-services__item-title">{service.title}</span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* CTA Section          */}
// //       {/* ==================== */}
// //       <section className="abt-cta">
// //         <div className="abt-container">
// //           <div className={`abt-cta__card ${abtVisible["cta"] ? 'abt-cta--visible' : ''}`} data-abt-section="cta" style={{ transform: `translateY(${abtScrollY * -0.01}px)` }}>
// //             <div className="abt-cta__content">
// //               <h2 className="abt-cta__title">Ready to Solve Your Indoor Coverage Challenges?</h2>
// //               <p className="abt-cta__desc">
// //                 Let our RF engineering team analyze your site and recommend the optimal i Booster or DAS 
// //                 solution for reliable 4G & 5G mobile connectivity.
// //               </p>
// //             </div>
// //             <div className="abt-cta__actions">
// //               <a href="/contact" className="abt-cta__btn">
// //                 <span>Request Free RF Site Survey</span>
// //                 <ArrowRight size={16} />
// //               </a>
// //               <div className="abt-cta__contact">
// //                 <a href="tel:+919876543210" className="abt-cta__contact-link">
// //                   <Phone size={14} />
// //                   94478671740
// //                 </a>
// //                 <a href="mailto:info@futuremax.com" className="abt-cta__contact-link">
// //                   <Mail size={14} />
// //                   info@futuremax.com
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </main>
// //   );
// // };

// // export default About;


// import React, { useEffect, useRef, useState } from "react";
// import { 
//   Award, 
//   Users, 
//   Target, 
//   Eye, 
//   Shield, 
//   Zap, 
//   CheckCircle2, 
//   ArrowRight,
//   Building2,
//   Radio,
//   Wrench,
//   Headphones,
//   MapPin,
//   Phone,
//   Mail,
//   Globe,
//   Star
// } from "lucide-react";
// import "./About.css";

// import aboutHeroImg from "../assets/hero1.png";
// import teamImg from "../assets/hero1.png";
// import missionImg from "../assets/hero1.png";

// const futStats = [
//   { value: "15+", label: "Years of RF Engineering", icon: <Award size={22} strokeWidth={1.5} /> },
//   { value: "250+", label: "Successful Installations", icon: <Building2 size={22} strokeWidth={1.5} /> },
//   { value: "50+", label: "Enterprise Clients", icon: <Users size={22} strokeWidth={1.5} /> },
//   { value: "Pan India", label: "Service Network", icon: <Globe size={22} strokeWidth={1.5} /> },
// ];

// const futValues = [
//   {
//     icon: <Target size={28} strokeWidth={1.5} />,
//     title: "Engineering Excellence",
//     description: "We approach every project with precision RF engineering, ensuring optimal signal coverage and network performance for every environment.",
//     color: "#0755A3",
//   },
//   {
//     icon: <Shield size={28} strokeWidth={1.5} />,
//     title: "Quality & Reliability",
//     description: "Our i Booster Series and DAS solutions are built with industrial-grade components, tested rigorously, and backed by comprehensive warranties.",
//     color: "#19AB3F",
//   },
//   {
//     icon: <Users size={28} strokeWidth={1.5} />,
//     title: "Customer-First Approach",
//     description: "From initial consultation to post-installation support, we prioritize understanding your needs and delivering solutions that exceed expectations.",
//     color: "#7C3AED",
//   },
//   {
//     icon: <Zap size={28} strokeWidth={1.5} />,
//     title: "Innovation Driven",
//     description: "We continuously invest in the latest RF technologies, 4G/5G infrastructure, and wireless connectivity solutions to future-proof your investments.",
//     color: "#EA580C",
//   },
// ];

// const futServices = [
//   { icon: <Radio size={20} strokeWidth={1.5} />, title: "RF Site Survey & Analysis" },
//   { icon: <Building2 size={20} strokeWidth={1.5} />, title: "Mobile Signal Boosters" },
//   { icon: <Radio size={20} strokeWidth={1.5} />, title: "Distributed Antenna Systems (DAS)" },
//   { icon: <Wrench size={20} strokeWidth={1.5} />, title: "Professional Installation" },
//   { icon: <Headphones size={20} strokeWidth={1.5} />, title: "AMC & Technical Support" },
//   { icon: <Globe size={20} strokeWidth={1.5} />, title: "Pan India Coverage" },
// ];

// const About = () => {
//   const [futScrollY, setFutScrollY] = useState(0);
//   const [futMousePos, setFutMousePos] = useState({ x: 50, y: 50 });
//   const [futVisible, setFutVisible] = useState({});
//   const futSectionRef = useRef(null);

//   useEffect(() => {
//     const handleFutScroll = () => setFutScrollY(window.scrollY);
//     const handleFutMouse = (e) => {
//       if (!futSectionRef.current) return;
//       const rect = futSectionRef.current.getBoundingClientRect();
//       setFutMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100,
//       });
//     };
//     window.addEventListener("scroll", handleFutScroll, { passive: true });
//     window.addEventListener("mousemove", handleFutMouse);
//     return () => {
//       window.removeEventListener("scroll", handleFutScroll);
//       window.removeEventListener("mousemove", handleFutMouse);
//     };
//   }, []);

//   useEffect(() => {
//     const futObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -50px 0px" };
//     const futObserver = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setFutVisible((prev) => ({ ...prev, [entry.target.dataset.futSection]: true }));
//         }
//       });
//     }, futObserverOptions);

//     const futElements = futSectionRef.current?.querySelectorAll("[data-fut-section]");
//     futElements?.forEach((el) => futObserver.observe(el));
//     return () => futObserver.disconnect();
//   }, []);

//   return (
//     <main className="fut-page" ref={futSectionRef}>
//       {/* ==================== */}
//       {/* Hero Section         */}
//       {/* ==================== */}
//       <section className="fut-hero">
//         <div className="fut-hero__bg">
//           <div className="fut-hero__image" style={{ backgroundImage: `url(${aboutHeroImg})` }} />
//           <div className="fut-hero__overlay" />
//           <div className="fut-hero__grid" />
//           <div className="fut-hero__glow" style={{ background: `radial-gradient(600px circle at ${futMousePos.x}% ${futMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
//         </div>
//         <div className="fut-container">
//           <div className="fut-hero__content" data-fut-section="hero">
//             <span className="fut-hero__tag">About Futuremax Technology</span>
//             <h1 className="fut-hero__title">
//               India's Trusted RF Engineering
//               <span className="fut-hero__accent"> & Wireless Solutions Company</span>
//             </h1>
//             <p className="fut-hero__desc">
//               Futuremax Technology is a specialized RF engineering company delivering Mobile Signal Boosters, 
//               Distributed Antenna Systems (DAS), and enterprise wireless connectivity solutions across India. 
//               From 23 dBm residential boosters to 27 dBm enterprise systems, we engineer reliable indoor 
//               mobile coverage for homes, hotels, hospitals, commercial buildings, factories, and large 
//               enterprise campuses.
//             </p>
//             <div className="fut-hero__actions">
//               <a href="/contact" className="fut-hero__btn fut-hero__btn--primary">
//                 <span>Get Free RF Site Survey</span>
//                 <ArrowRight size={16} />
//               </a>
//               <a href="/solutions" className="fut-hero__btn fut-hero__btn--secondary">
//                 Explore Our Solutions
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* Stats Section        */}
//       {/* ==================== */}
//       <section className="fut-stats-section">
//         <div className="fut-container">
//           <div className={`fut-stats ${futVisible["stats"] ? 'fut-stats--visible' : ''}`} data-fut-section="stats">
//             {futStats.map((stat, index) => (
//               <div key={index} className="fut-stats__item">
//                 <div className="fut-stats__icon">{stat.icon}</div>
//                 <span className="fut-stats__value">{stat.value}</span>
//                 <span className="fut-stats__label">{stat.label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* Who We Are           */}
//       {/* ==================== */}
//       <section className="fut-who">
//         <div className="fut-container">
//           <div className="fut-who__grid">
//             <div className={`fut-who__image-wrap ${futVisible["who-image"] ? 'fut-who--visible' : ''}`} data-fut-section="who-image">
//               <img src={teamImg} alt="Futuremax Engineering Team" className="fut-who__image" />
//               <div className="fut-who__badge">
//                 <Star size={16} fill="#FFC107" stroke="#FFC107" />
//                 <span>ISO 9001:2015 Certified</span>
//               </div>
//             </div>
//             <div className={`fut-who__content ${futVisible["who-content"] ? 'fut-who--visible' : ''}`} data-fut-section="who-content">
//               <span className="fut-who__tag">Who We Are</span>
//               <h2 className="fut-who__title">
//                 Engineering Reliable Mobile
//                 <span className="fut-who__accent"> Connectivity Since 2010</span>
//               </h2>
//               <p className="fut-who__desc">
//                 Futuremax Technology was founded with a clear mission: to solve India's indoor mobile 
//                 coverage challenges through professional RF engineering. Over the past 15 years, we've 
//                 grown from a specialized RF consultancy into a full-service wireless solutions provider, 
//                 serving enterprise clients across hospitality, healthcare, commercial, industrial, 
//                 residential, and education sectors.
//               </p>
//               <p className="fut-who__desc">
//                 Our team of certified RF engineers brings deep expertise in signal propagation analysis, 
//                 coverage planning, DAS design, and system optimization. We take pride in our systematic 
//                 approach—every project begins with a comprehensive RF site survey and is executed with 
//                 precision installation, thorough testing, and ongoing technical support.
//               </p>
//               <div className="fut-who__features">
//                 <div className="fut-who__feature">
//                   <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
//                   <span>15+ Years of RF Engineering Experience</span>
//                 </div>
//                 <div className="fut-who__feature">
//                   <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
//                   <span>250+ Successful Deployments Across India</span>
//                 </div>
//                 <div className="fut-who__feature">
//                   <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
//                   <span>Certified Engineers & Professional Installation Team</span>
//                 </div>
//                 <div className="fut-who__feature">
//                   <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
//                   <span>Pan India Service Network with 24/7 Support</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* Mission & Vision     */}
//       {/* ==================== */}
//       <section className="fut-mission">
//         <div className="fut-container">
//           <div className="fut-mission__grid">
//             <div className={`fut-mission__card ${futVisible["mission"] ? 'fut-mission--visible' : ''}`} data-fut-section="mission" style={{ '--fut-card-color': '#0755A3' }}>
//               <div className="fut-mission__icon-wrap">
//                 <Target size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="fut-mission__title">Our Mission</h3>
//               <p className="fut-mission__desc">
//                 To provide reliable, professionally engineered wireless connectivity solutions that 
//                 eliminate mobile dead zones and ensure seamless communication for every building, 
//                 every industry, and every user across India.
//               </p>
//             </div>
//             <div className={`fut-mission__card ${futVisible["vision"] ? 'fut-mission--visible' : ''}`} data-fut-section="vision" style={{ '--fut-card-color': '#19AB3F' }}>
//               <div className="fut-mission__icon-wrap">
//                 <Eye size={32} strokeWidth={1.5} />
//               </div>
//               <h3 className="fut-mission__title">Our Vision</h3>
//               <p className="fut-mission__desc">
//                 To become India's most trusted RF engineering and wireless solutions company, setting 
//                 the standard for indoor mobile coverage excellence through innovation, quality, and 
//                 customer-centric service.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* Core Values          */}
//       {/* ==================== */}
//       <section className="fut-values">
//         <div className="fut-bg__grid" />
//         <div className="fut-container">
//           <div className={`fut-values__header ${futVisible["values-header"] ? 'fut-values--visible' : ''}`} data-fut-section="values-header">
//             <span className="fut-values__tag">Our Core Values</span>
//             <h2 className="fut-values__title">
//               What Drives
//               <span className="fut-values__accent"> Our Engineering</span>
//             </h2>
//           </div>
//           <div className="fut-values__grid">
//             {futValues.map((value, index) => (
//               <div
//                 key={index}
//                 className={`fut-values__card ${futVisible["values"] ? 'fut-values--visible' : ''}`}
//                 data-fut-section="values"
//                 style={{ '--fut-value-color': value.color, transitionDelay: `${index * 0.1}s` }}
//               >
//                 <div className="fut-values__icon" style={{ background: `${value.color}12`, color: value.color }}>
//                   {value.icon}
//                 </div>
//                 <h3 className="fut-values__card-title">{value.title}</h3>
//                 <p className="fut-values__card-desc">{value.description}</p>
//                 <div className="fut-values__line" style={{ background: value.color }} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* Services Overview    */}
//       {/* ==================== */}
//       <section className="fut-services">
//         <div className="fut-container">
//           <div className={`fut-services__header ${futVisible["services-header"] ? 'fut-services--visible' : ''}`} data-fut-section="services-header">
//             <span className="fut-services__tag">What We Do</span>
//             <h2 className="fut-services__title">
//               Complete RF Engineering &
//               <span className="fut-services__accent"> Wireless Connectivity Solutions</span>
//             </h2>
//             <p className="fut-services__desc">
//               From initial RF site survey to professional installation and long-term AMC support, 
//               Futuremax provides end-to-end wireless solutions tailored to your building's unique requirements.
//             </p>
//           </div>
//           <div className={`fut-services__grid ${futVisible["services"] ? 'fut-services--visible' : ''}`} data-fut-section="services">
//             {futServices.map((service, index) => (
//               <div key={index} className="fut-services__item" style={{ transitionDelay: `${index * 0.08}s` }}>
//                 <div className="fut-services__item-icon">{service.icon}</div>
//                 <span className="fut-services__item-title">{service.title}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* CTA Section          */}
//       {/* ==================== */}
//       <section className="fut-cta">
//         <div className="fut-container">
//           <div className={`fut-cta__card ${futVisible["cta"] ? 'fut-cta--visible' : ''}`} data-fut-section="cta" style={{ transform: `translateY(${futScrollY * -0.01}px)` }}>
//             <div className="fut-cta__content">
//               <h2 className="fut-cta__title">Ready to Solve Your Indoor Coverage Challenges?</h2>
//               <p className="fut-cta__desc">
//                 Let our RF engineering team analyze your site and recommend the optimal i Booster or DAS 
//                 solution for reliable 4G & 5G mobile connectivity.
//               </p>
//             </div>
//             <div className="fut-cta__actions">
//               <a href="/contact" className="fut-cta__btn">
//                 <span>Request Free RF Site Survey</span>
//                 <ArrowRight size={16} />
//               </a>
//               <div className="fut-cta__contact">
//                 <a href="tel:+919876543210" className="fut-cta__contact-link">
//                   <Phone size={14} />
//                   94478671740
//                 </a>
//                 <a href="mailto:info@futuremax.com" className="fut-cta__contact-link">
//                   <Mail size={14} />
//                   info@futuremax.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default About;

































import React, { useEffect, useRef, useState } from "react";
import { 
  Award, 
  Users, 
  Target, 
  Eye, 
  Shield, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Building2,
  Radio,
  Wrench,
  Headphones,
  Phone,
  Mail,
  Globe,
  Star
} from "lucide-react";
import "./About.css";

import aboutHeroImg from "../assets/abouthero.jpeg";
import teamImg from "../assets/about.jpeg";

const futStats = [
  { value: "15+", label: "Years of RF Engineering", icon: <Award size={22} strokeWidth={1.5} /> },
  { value: "250+", label: "Successful Installations", icon: <Building2 size={22} strokeWidth={1.5} /> },
  { value: "50+", label: "Enterprise Clients", icon: <Users size={22} strokeWidth={1.5} /> },
  { value: "Pan India", label: "Service Network", icon: <Globe size={22} strokeWidth={1.5} /> },
];

const futValues = [
  {
    icon: <Target size={28} strokeWidth={1.5} />,
    title: "Engineering Excellence",
    description: "We approach every project with precision RF engineering, ensuring optimal signal coverage and network performance for every environment.",
    color: "#0755A3",
  },
  {
    icon: <Shield size={28} strokeWidth={1.5} />,
    title: "Quality & Reliability",
    description: "Our i Booster Series and DAS solutions are built with industrial-grade components, tested rigorously, and backed by comprehensive warranties.",
    color: "#19AB3F",
  },
  {
    icon: <Users size={28} strokeWidth={1.5} />,
    title: "Customer-First Approach",
    description: "From initial consultation to post-installation support, we prioritize understanding your needs and delivering solutions that exceed expectations.",
    color: "#7C3AED",
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} />,
    title: "Innovation Driven",
    description: "We continuously invest in the latest RF technologies, 4G/5G infrastructure, and wireless connectivity solutions to future-proof your investments.",
    color: "#EA580C",
  },
];

const futServices = [
  { icon: <Radio size={20} strokeWidth={1.5} />, title: "RF Site Survey & Analysis" },
  { icon: <Building2 size={20} strokeWidth={1.5} />, title: "Mobile Signal Boosters" },
  { icon: <Radio size={20} strokeWidth={1.5} />, title: "Distributed Antenna Systems (DAS)" },
  { icon: <Wrench size={20} strokeWidth={1.5} />, title: "Professional Installation" },
  { icon: <Headphones size={20} strokeWidth={1.5} />, title: "AMC & Technical Support" },
  { icon: <Globe size={20} strokeWidth={1.5} />, title: "Pan India Coverage" },
];

const About = () => {
  const [futScrollY, setFutScrollY] = useState(0);
  const [futMousePos, setFutMousePos] = useState({ x: 50, y: 50 });
  const [futVisible, setFutVisible] = useState({
    hero: false,
    stats: false,
    whoImage: false,
    whoContent: false,
    mission: false,
    vision: false,
    valuesHeader: false,
    values: false,
    servicesHeader: false,
    services: false,
    cta: false,
  });
  const futSectionRef = useRef(null);

  useEffect(() => {
    const handleFutScroll = () => setFutScrollY(window.scrollY);
    const handleFutMouse = (e) => {
      if (!futSectionRef.current) return;
      const rect = futSectionRef.current.getBoundingClientRect();
      setFutMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("scroll", handleFutScroll, { passive: true });
    window.addEventListener("mousemove", handleFutMouse);
    return () => {
      window.removeEventListener("scroll", handleFutScroll);
      window.removeEventListener("mousemove", handleFutMouse);
    };
  }, []);

  // Intersection Observer for all sections
  useEffect(() => {
    const futObserverOptions = { 
      threshold: 0.15, 
      rootMargin: "0px 0px -60px 0px" 
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.futSection;
          if (sectionName) {
            setFutVisible((prev) => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };

    const futObserver = new IntersectionObserver(handleIntersect, futObserverOptions);
    
    // Observe all elements with data-fut-section
    const futElements = futSectionRef.current?.querySelectorAll("[data-fut-section]");
    futElements?.forEach((el) => futObserver.observe(el));

    // Also trigger hero immediately since it's at the top
    setTimeout(() => {
      setFutVisible((prev) => ({ ...prev, hero: true }));
    }, 100);

    return () => futObserver.disconnect();
  }, []);

  return (
    <main className="fut-page" ref={futSectionRef}>
      {/* ==================== */}
      {/* Hero Section         */}
      {/* ==================== */}
      <section className="fut-hero">
        <div className="fut-hero__bg">
          <div className="fut-hero__image" style={{ backgroundImage: `url(${aboutHeroImg})` }} />
          <div className="fut-hero__overlay" />
          <div className="fut-hero__grid" />
          <div className="fut-hero__glow" style={{ background: `radial-gradient(600px circle at ${futMousePos.x}% ${futMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        </div>
        <div className="fut-container">
          <div 
            className={`fut-hero__content ${futVisible.hero ? 'fut-hero__content--visible' : ''}`} 
            data-fut-section="hero"
          >
            <span className="fut-hero__tag">About Futuremax Technology</span>
            <h1 className="fut-hero__title">
              India's Trusted RF Engineering
              <span className="fut-hero__accent"> & Wireless Solutions Company</span>
            </h1>
            <p className="fut-hero__desc">
              Futuremax Technology is a specialized RF engineering company delivering Mobile Signal Boosters, 
              Distributed Antenna Systems (DAS), and enterprise wireless connectivity solutions across India. 
              From 23 dBm residential boosters to 27 dBm enterprise systems, we engineer reliable indoor 
              mobile coverage for homes, hotels, hospitals, commercial buildings, factories, and large 
              enterprise campuses.
            </p>
            <div className="fut-hero__actions">
              <a href="/contact" className="fut-hero__btn fut-hero__btn--primary">
                <span>Get Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <a href="/solutions" className="fut-hero__btn fut-hero__btn--secondary">
                Explore Our Solutions
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* Stats Section        */}
      {/* ==================== */}
      <section className="fut-stats-section">
        <div className="fut-container">
          <div 
            className={`fut-stats ${futVisible.stats ? 'fut-stats--visible' : ''}`} 
            data-fut-section="stats"
          >
            {futStats.map((stat, index) => (
              <div key={index} className="fut-stats__item">
                <div className="fut-stats__icon">{stat.icon}</div>
                <span className="fut-stats__value">{stat.value}</span>
                <span className="fut-stats__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* Who We Are           */}
      {/* ==================== */}
      <section className="fut-who">
        <div className="fut-container">
          <div className="fut-who__grid">
            {/* Image Column */}
            <div 
              className={`fut-who__image-wrap ${futVisible.whoImage ? 'fut-who__image-wrap--visible' : ''}`} 
              data-fut-section="whoImage"
            >
              <img src={teamImg} alt="Futuremax Engineering Team" className="fut-who__image" />
              <div className="fut-who__badge">
                <Star size={16} fill="#FFC107" stroke="#FFC107" />
                <span>ISO 9001:2015 Certified</span>
              </div>
            </div>

            {/* Content Column */}
            <div 
              className={`fut-who__content ${futVisible.whoContent ? 'fut-who__content--visible' : ''}`} 
              data-fut-section="whoContent"
            >
              <span className="fut-who__tag">Who We Are</span>
              <h2 className="fut-who__title">
                Engineering Reliable Mobile
                <span className="fut-who__accent"> Connectivity Since 2010</span>
              </h2>
              <p className="fut-who__desc">
                Futuremax Technology was founded with a clear mission: to solve India's indoor mobile 
                coverage challenges through professional RF engineering. Over the past 15 years, we've 
                grown from a specialized RF consultancy into a full-service wireless solutions provider, 
                serving enterprise clients across hospitality, healthcare, commercial, industrial, 
                residential, and education sectors.We proudly support customers across Kerala Kerala, including Trivandrum, Kochi, Kozhikode, Palakkad with high-performance RF solutions for seamless mobile connectivity.
              </p>
              <p className="fut-who__desc">
                Our team of certified RF engineers brings deep expertise in signal propagation analysis, 
                coverage planning, DAS design, and system optimization. We take pride in our systematic 
                approach—every project begins with a comprehensive RF site survey and is executed with 
                precision installation, thorough testing, and ongoing technical support.
              </p>
              <div className="fut-who__features">
                <div className="fut-who__feature">
                  <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
                  <span>15+ Years of RF Engineering Experience</span>
                </div>
                <div className="fut-who__feature">
                  <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
                  <span>250+ Successful Deployments Across India</span>
                </div>
                <div className="fut-who__feature">
                  <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
                  <span>Certified Engineers & Professional Installation Team</span>
                </div>
                <div className="fut-who__feature">
                  <CheckCircle2 size={18} style={{ color: '#19AB3F' }} />
                  <span>Pan India Service Network with 24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* Mission & Vision     */}
      {/* ==================== */}
      <section className="fut-mission">
        <div className="fut-container">
          <div className="fut-mission__grid">
            <div 
              className={`fut-mission__card ${futVisible.mission ? 'fut-mission__card--visible' : ''}`} 
              data-fut-section="mission" 
              style={{ '--fut-card-color': '#0755A3' }}
            >
              <div className="fut-mission__icon-wrap">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <h3 className="fut-mission__title">Our Mission</h3>
              <p className="fut-mission__desc">
                To provide reliable, professionally engineered wireless connectivity solutions that 
                eliminate mobile dead zones and ensure seamless communication for every building, 
                every industry, and every user across India.
              </p>
            </div>
            <div 
              className={`fut-mission__card ${futVisible.vision ? 'fut-mission__card--visible' : ''}`} 
              data-fut-section="vision" 
              style={{ '--fut-card-color': '#19AB3F' }}
            >
              <div className="fut-mission__icon-wrap">
                <Eye size={32} strokeWidth={1.5} />
              </div>
              <h3 className="fut-mission__title">Our Vision</h3>
              <p className="fut-mission__desc">
                To become India's most trusted RF engineering and wireless solutions company, setting 
                the standard for indoor mobile coverage excellence through innovation, quality, and 
                customer-centric service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* Core Values          */}
      {/* ==================== */}
      <section className="fut-values">
        <div className="fut-container">
          <div 
            className={`fut-values__header ${futVisible.valuesHeader ? 'fut-values__header--visible' : ''}`} 
            data-fut-section="valuesHeader"
          >
            <span className="fut-values__tag">Our Core Values</span>
            <h2 className="fut-values__title">
              What Drives
              <span className="fut-values__accent"> Our Engineering</span>
            </h2>
          </div>
          <div className="fut-values__grid">
            {futValues.map((value, index) => (
              <div
                key={index}
                className={`fut-values__card ${futVisible.values ? 'fut-values__card--visible' : ''}`}
                data-fut-section="values"
                style={{ 
                  '--fut-value-color': value.color, 
                  transitionDelay: futVisible.values ? `${index * 0.1}s` : '0s' 
                }}
              >
                <div className="fut-values__icon" style={{ background: `${value.color}12`, color: value.color }}>
                  {value.icon}
                </div>
                <h3 className="fut-values__card-title">{value.title}</h3>
                <p className="fut-values__card-desc">{value.description}</p>
                <div className="fut-values__line" style={{ background: value.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* Services Overview    */}
      {/* ==================== */}
      <section className="fut-services">
        <div className="fut-container">
          <div 
            className={`fut-services__header ${futVisible.servicesHeader ? 'fut-services__header--visible' : ''}`} 
            data-fut-section="servicesHeader"
          >
            <span className="fut-services__tag">What We Do</span>
            <h2 className="fut-services__title">
              Complete RF Engineering &
              <span className="fut-services__accent"> Wireless Connectivity Solutions</span>
            </h2>
            <p className="fut-services__desc">
              From initial RF site survey to professional installation and long-term AMC support, 
              Futuremax provides end-to-end wireless solutions tailored to your building's unique requirements.
            </p>
          </div>
          <div 
            className={`fut-services__grid ${futVisible.services ? 'fut-services__grid--visible' : ''}`} 
            data-fut-section="services"
          >
            {futServices.map((service, index) => (
              <div 
                key={index} 
                className="fut-services__item" 
                style={{ transitionDelay: futVisible.services ? `${index * 0.08}s` : '0s' }}
              >
                <div className="fut-services__item-icon">{service.icon}</div>
                <span className="fut-services__item-title">{service.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== */}
      {/* CTA Section          */}
      {/* ==================== */}
      <section className="fut-cta">
        <div className="fut-container">
          <div 
            className={`fut-cta__card ${futVisible.cta ? 'fut-cta__card--visible' : ''}`} 
            data-fut-section="cta" 
            style={{ transform: `translateY(${futScrollY * -0.01}px)` }}
          >
            <div className="fut-cta__content">
              <h2 className="fut-cta__title">Ready to Solve Your Indoor Coverage Challenges?</h2>
              <p className="fut-cta__desc">
                Let our RF engineering team analyze your site and recommend the optimal i Booster or DAS 
                solution for reliable 4G & 5G mobile connectivity.
              </p>
            </div>
            <div className="fut-cta__actions">
              <a href="/contact" className="fut-cta__btn">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <div className="fut-cta__contact">
                <a href="tel:+919876543210" className="fut-cta__contact-link">
                  <Phone size={14} />
                  94478671740
                </a>
                <a href="mailto:info@futuremax.com" className="fut-cta__contact-link">
                  <Mail size={14} />
                  info@futuremax.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;