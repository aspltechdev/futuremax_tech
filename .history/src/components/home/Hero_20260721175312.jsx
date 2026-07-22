// // // // // import React, { useEffect, useRef, useState, useCallback } from "react";
// // // // // import "./Hero.css";

// // // // // const Hero = () => {
// // // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // // //   const [isTransitioning, setIsTransitioning] = useState(false);
// // // // //   const [isVisible, setIsVisible] = useState(false);
// // // // //   const [progress, setProgress] = useState(0);
// // // // //   const autoPlayRef = useRef(null);
// // // // //   const progressInterval = useRef(null);
// // // // //   const slideDuration = 6000;

// // // // //   const slides = [
// // // // //     {
// // // // //       id: 1,
// // // // //       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
// // // // //       tag: "Enterprise RF Solutions",
// // // // //       title: "Enterprise Mobile",
// // // // //       titleAccent: "Signal Booster",
// // // // //       subtitle: "& RF Engineering Solutions for Modern Infrastructure",
// // // // //       description: "Advanced Distributed Antenna Systems and intelligent signal enhancement for hotels, hospitals, educational campuses, and commercial buildings.",
// // // // //       powerLabel: "Power Range",
// // // // //       powerValue: "23 – 27 dBm",
// // // // //       metrics: [
// // // // //         { value: "4G/5G", label: "Multi-Band" },
// // // // //         { value: "Multi-Operator", label: "Compatible" },
// // // // //         { value: "Pan India", label: "Coverage" },
// // // // //       ],
// // // // //       cta: "Get Free RF Site Survey",
// // // // //       ctaSecondary: "Explore i Booster Series",
// // // // //       overlay: "linear-gradient(135deg, rgba(7,85,163,0.92) 0%, rgba(7,85,163,0.78) 40%, rgba(15,23,42,0.65) 100%)",
// // // // //     },
// // // // //     {
// // // // //       id: 2,
// // // // //       image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
// // // // //       tag: "i Booster 23 dBm",
// // // // //       title: "Residential &",
// // // // //       titleAccent: "Small Office",
// // // // //       subtitle: "Seamless Connectivity for Homes and Boutique Workspaces",
// // // // //       description: "Professional 23 dBm boosters engineered specifically for residential buildings and home offices. Compact design with all-operator compatibility.",
// // // // //       powerLabel: "Coverage Area",
// // // // //       powerValue: "Up to 300 m²",
// // // // //       metrics: [
// // // // //         { value: "23 dBm", label: "Output Power" },
// // // // //         { value: "Plug & Play", label: "Installation" },
// // // // //         { value: "99.9%", label: "Uptime" },
// // // // //       ],
// // // // //       cta: "Explore 23 dBm Solution",
// // // // //       ctaSecondary: "View Specifications",
// // // // //       overlay: "linear-gradient(135deg, rgba(25,171,63,0.90) 0%, rgba(25,171,63,0.75) 40%, rgba(15,23,42,0.60) 100%)",
// // // // //     },
// // // // //     {
// // // // //       id: 3,
// // // // //       image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
// // // // //       tag: "i Booster 25 dBm",
// // // // //       title: "Commercial &",
// // // // //       titleAccent: "Hospitality",
// // // // //       subtitle: "Purpose-Built for Hotels, Hospitals & Educational Campuses",
// // // // //       description: "Our 25 dBm commercial boosters deliver robust coverage across multi-floor buildings with high user density and remote monitoring capabilities.",
// // // // //       powerLabel: "Coverage Area",
// // // // //       powerValue: "Up to 500 m²",
// // // // //       metrics: [
// // // // //         { value: "25 dBm", label: "Output Power" },
// // // // //         { value: "Multi-Floor", label: "Deployment" },
// // // // //         { value: "24/7", label: "Monitoring" },
// // // // //       ],
// // // // //       cta: "Explore 25 dBm Solution",
// // // // //       ctaSecondary: "Get Commercial Quote",
// // // // //       overlay: "linear-gradient(135deg, rgba(7,85,163,0.92) 0%, rgba(5,74,142,0.80) 40%, rgba(15,23,42,0.65) 100%)",
// // // // //     },
// // // // //     {
// // // // //       id: 4,
// // // // //       image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80",
// // // // //       tag: "i Booster 27 dBm",
// // // // //       title: "Enterprise &",
// // // // //       titleAccent: "Industrial",
// // // // //       subtitle: "Maximum Power for Large-Scale Infrastructure & Smart Cities",
// // // // //       description: "Maximum power 27 dBm enterprise boosters for factories, large commercial complexes, and smart city deployments with DAS integration.",
// // // // //       powerLabel: "Coverage Area",
// // // // //       powerValue: "Up to 1000+ m²",
// // // // //       metrics: [
// // // // //         { value: "27 dBm", label: "Output Power" },
// // // // //         { value: "DAS Ready", label: "Infrastructure" },
// // // // //         { value: "Custom", label: "Installation" },
// // // // //       ],
// // // // //       cta: "Explore 27 dBm Solution",
// // // // //       ctaSecondary: "Request Enterprise Demo",
// // // // //       overlay: "linear-gradient(135deg, rgba(25,171,63,0.90) 0%, rgba(21,153,54,0.78) 40%, rgba(15,23,42,0.60) 100%)",
// // // // //     },
// // // // //   ];

// // // // //   useEffect(() => {
// // // // //     setIsVisible(true);
// // // // //     return () => {
// // // // //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// // // // //       if (progressInterval.current) clearInterval(progressInterval.current);
// // // // //     };
// // // // //   }, []);

// // // // //   const startProgress = useCallback(() => {
// // // // //     setProgress(0);
// // // // //     const step = (50 / slideDuration) * 100;
// // // // //     if (progressInterval.current) clearInterval(progressInterval.current);
// // // // //     progressInterval.current = setInterval(() => {
// // // // //       setProgress((prev) => {
// // // // //         if (prev >= 100) {
// // // // //           clearInterval(progressInterval.current);
// // // // //           return 100;
// // // // //         }
// // // // //         return prev + step;
// // // // //       });
// // // // //     }, 50);
// // // // //   }, []);

// // // // //   const goToSlide = useCallback(
// // // // //     (index) => {
// // // // //       if (isTransitioning || index === currentSlide) return;
// // // // //       setIsTransitioning(true);
// // // // //       setCurrentSlide(index);
// // // // //       startProgress();
// // // // //       setTimeout(() => setIsTransitioning(false), 1000);
// // // // //     },
// // // // //     [currentSlide, isTransitioning, startProgress]
// // // // //   );

// // // // //   const nextSlide = useCallback(() => {
// // // // //     goToSlide((currentSlide + 1) % slides.length);
// // // // //   }, [currentSlide, slides.length, goToSlide]);

// // // // //   useEffect(() => {
// // // // //     startProgress();
// // // // //     autoPlayRef.current = setInterval(nextSlide, slideDuration);
// // // // //     return () => {
// // // // //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// // // // //       if (progressInterval.current) clearInterval(progressInterval.current);
// // // // //     };
// // // // //   }, [currentSlide, nextSlide, startProgress]);

// // // // //   return (
// // // // //     <section className="hero-visual">
// // // // //       {/* Background Images */}
// // // // //       <div className="hero-bg-images">
// // // // //         {slides.map((slide, index) => (
// // // // //           <div
// // // // //             key={slide.id}
// // // // //             className={`hero-bg-image ${index === currentSlide ? "active" : ""}`}
// // // // //             style={{ backgroundImage: `url(${slide.image})` }}
// // // // //           />
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Dynamic Overlays */}
// // // // //       <div className="hero-overlays">
// // // // //         {slides.map((slide, index) => (
// // // // //           <div
// // // // //             key={slide.id}
// // // // //             className={`hero-overlay ${index === currentSlide ? "active" : ""}`}
// // // // //             style={{ background: slide.overlay }}
// // // // //           />
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Top Navigation */}
// // // // //       <header className={`hero-nav ${isVisible ? "visible" : ""}`}>
// // // // //         <div className="nav-inner">
// // // // //           <div className="nav-brand">
// // // // //             <span className="nav-logo">FUTUREMAX</span>
// // // // //             <span className="nav-divider" />
// // // // //             <span className="nav-tagline">RF Engineering Solutions</span>
// // // // //           </div>
// // // // //           <div className="nav-meta">
// // // // //             <span className="nav-cert">ISO 9001:2015</span>
// // // // //             <span className="nav-cert">Made in India</span>
// // // // //           </div>
// // // // //         </div>
// // // // //       </header>

// // // // //       {/* Main Content */}
// // // // //       <div className="hero-content-area">
// // // // //         <div className="content-inner">
// // // // //           {/* Left Content */}
// // // // //           <div className={`hero-text-block ${isVisible ? "visible" : ""}`}>
// // // // //             {/* Tag */}
// // // // //             <div className="text-tag">
// // // // //               <span className="tag-dot" />
// // // // //               <span className="tag-label">{slides[currentSlide].tag}</span>
// // // // //             </div>

// // // // //             {/* Headline */}
// // // // //             <h1 className="text-headline">
// // // // //               <span className="headline-title">{slides[currentSlide].title}</span>
// // // // //               <span className="headline-accent">{slides[currentSlide].titleAccent}</span>
// // // // //             </h1>

// // // // //             {/* Subtitle */}
// // // // //             <p className="text-subtitle">{slides[currentSlide].subtitle}</p>

// // // // //             {/* Description */}
// // // // //             <p className="text-description">{slides[currentSlide].description}</p>

// // // // //             {/* Power Badge */}
// // // // //             <div className="text-power-badge">
// // // // //               <span className="power-label">{slides[currentSlide].powerLabel}</span>
// // // // //               <span className="power-value">{slides[currentSlide].powerValue}</span>
// // // // //             </div>

// // // // //             {/* Metrics */}
// // // // //             <div className="text-metrics">
// // // // //               {slides[currentSlide].metrics.map((metric, i) => (
// // // // //                 <div key={i} className="text-metric">
// // // // //                   <span className="metric-val">{metric.value}</span>
// // // // //                   <span className="metric-lbl">{metric.label}</span>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             {/* CTAs */}
// // // // //             <div className="text-actions">
// // // // //               <button className="action-btn action-fill">
// // // // //                 <span>{slides[currentSlide].cta}</span>
// // // // //                 <svg viewBox="0 0 24 24" fill="none" className="action-icon">
// // // // //                   <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // // //                 </svg>
// // // // //               </button>
// // // // //               <button className="action-btn action-outline">
// // // // //                 <span>{slides[currentSlide].ctaSecondary}</span>
// // // // //                 <svg viewBox="0 0 24 24" fill="none" className="action-icon">
// // // // //                   <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// // // // //                 </svg>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Right Visual Card */}
// // // // //           <div className={`hero-card-block ${isVisible ? "visible" : ""}`}>
// // // // //             <div className="visual-card">
// // // // //               <div className="card-image-area">
// // // // //                 <img
// // // // //                   src={slides[currentSlide].image}
// // // // //                   alt={slides[currentSlide].titleAccent}
// // // // //                   className="card-image"
// // // // //                 />
// // // // //                 <div className="card-image-shade" />
// // // // //               </div>
// // // // //               <div className="card-body">
// // // // //                 <div className="card-header">
// // // // //                   <span className="card-series">i Booster Series</span>
// // // // //                   <span className="card-badge">{slides[currentSlide].tag}</span>
// // // // //                 </div>
// // // // //                 <h3 className="card-title">
// // // // //                   {slides[currentSlide].title} {slides[currentSlide].titleAccent}
// // // // //                 </h3>
// // // // //                 <div className="card-specs">
// // // // //                   {slides[currentSlide].metrics.map((metric, i) => (
// // // // //                     <span key={i} className="card-spec">{metric.value}</span>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Bottom Controls */}
// // // // //       <div className={`hero-controls-bar ${isVisible ? "visible" : ""}`}>
// // // // //         <div className="controls-inner">
// // // // //           {/* Progress Dots */}
// // // // //           <div className="controls-progress-dots">
// // // // //             {slides.map((slide, index) => (
// // // // //               <button
// // // // //                 key={slide.id}
// // // // //                 className={`progress-dot ${index === currentSlide ? "active" : ""}`}
// // // // //                 onClick={() => goToSlide(index)}
// // // // //               >
// // // // //                 <svg viewBox="0 0 40 40" className="progress-circle">
// // // // //                   <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
// // // // //                   {index === currentSlide && (
// // // // //                     <circle
// // // // //                       cx="20" cy="20" r="16"
// // // // //                       fill="none"
// // // // //                       stroke="white"
// // // // //                       strokeWidth="2"
// // // // //                       strokeLinecap="round"
// // // // //                       strokeDasharray={`${progress} 100`}
// // // // //                       transform="rotate(-90 20 20)"
// // // // //                     />
// // // // //                   )}
// // // // //                 </svg>
// // // // //                 <span className="dot-label">{slide.tag}</span>
// // // // //               </button>
// // // // //             ))}
// // // // //           </div>

// // // // //           {/* Navigation */}
// // // // //           <div className="controls-navigation">
// // // // //             <button
// // // // //               className="nav-arrow"
// // // // //               onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
// // // // //               disabled={isTransitioning}
// // // // //             >
// // // // //               <svg viewBox="0 0 24 24" fill="none">
// // // // //                 <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // // //               </svg>
// // // // //             </button>
// // // // //             <div className="nav-counter">
// // // // //               <span className="counter-curr">{String(currentSlide + 1).padStart(2, "0")}</span>
// // // // //               <span className="counter-div">/</span>
// // // // //               <span className="counter-total">{String(slides.length).padStart(2, "0")}</span>
// // // // //             </div>
// // // // //             <button
// // // // //               className="nav-arrow"
// // // // //               onClick={nextSlide}
// // // // //               disabled={isTransitioning}
// // // // //             >
// // // // //               <svg viewBox="0 0 24 24" fill="none">
// // // // //                 <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // // // //               </svg>
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Hero; 



// // // // import React, { useEffect, useRef, useState, useCallback } from "react";
// // // // import "./Hero.css";

// // // // const Hero = () => {
// // // //   const [currentSlide, setCurrentSlide] = useState(0);
// // // //   const [isTransitioning, setIsTransitioning] = useState(false);
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const [progress, setProgress] = useState(0);
// // // //   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
// // // //   const autoPlayRef = useRef(null);
// // // //   const progressInterval = useRef(null);
// // // //   const heroRef = useRef(null);
// // // //   const slideDuration = 6000;

// // // //   const slides = [
// // // //     {
// // // //       id: 1,
// // // //       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
// // // //       tag: "Enterprise RF Solutions",
// // // //       powerNumber: "27",
// // // //       powerUnit: "dBm",
// // // //       titleLine1: "Enterprise Mobile",
// // // //       titleLine2: "Signal Booster",
// // // //       description: "Advanced RF Engineering & DAS for hotels, hospitals, and commercial buildings across India.",
// // // //       specs: [
// // // //         { label: "Power Output", value: "23 – 27 dBm" },
// // // //         { label: "Technology", value: "4G / 5G Multi-Band" },
// // // //         { label: "Coverage", value: "Up to 1000+ m²" },
// // // //         { label: "Operators", value: "All Major Networks" },
// // // //       ],
// // // //       cta: "Get Free RF Site Survey",
// // // //       secondaryCta: "Explore i Booster Series →",
// // // //       overlay: "linear-gradient(165deg, rgba(7,85,163,0.88) 0%, rgba(5,64,122,0.82) 50%, rgba(15,23,42,0.70) 100%)",
// // // //       accentColor: "#19AB3F",
// // // //     },
// // // //     {
// // // //       id: 2,
// // // //       image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
// // // //       tag: "i Booster Residential",
// // // //       powerNumber: "23",
// // // //       powerUnit: "dBm",
// // // //       titleLine1: "Home & Small",
// // // //       titleLine2: "Office Coverage",
// // // //       description: "Compact, powerful signal boosters designed for seamless connectivity in residential spaces.",
// // // //       specs: [
// // // //         { label: "Power Output", value: "23 dBm" },
// // // //         { label: "Coverage", value: "Up to 300 m²" },
// // // //         { label: "Installation", value: "Plug & Play" },
// // // //         { label: "Support", value: "All Operators" },
// // // //       ],
// // // //       cta: "View 23 dBm Specs",
// // // //       secondaryCta: "Download Datasheet →",
// // // //       overlay: "linear-gradient(165deg, rgba(25,171,63,0.86) 0%, rgba(18,130,45,0.80) 50%, rgba(15,23,42,0.68) 100%)",
// // // //       accentColor: "#55C45C",
// // // //     },
// // // //     {
// // // //       id: 3,
// // // //       image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
// // // //       tag: "i Booster Commercial",
// // // //       powerNumber: "25",
// // // //       powerUnit: "dBm",
// // // //       titleLine1: "Hotels &",
// // // //       titleLine2: "Hospitals",
// // // //       description: "Robust multi-floor coverage for high-density commercial and hospitality environments.",
// // // //       specs: [
// // // //         { label: "Power Output", value: "25 dBm" },
// // // //         { label: "Coverage", value: "Up to 500 m²" },
// // // //         { label: "Deployment", value: "Multi-Floor" },
// // // //         { label: "Monitoring", value: "24/7 Remote" },
// // // //       ],
// // // //       cta: "View 25 dBm Specs",
// // // //       secondaryCta: "Get Commercial Quote →",
// // // //       overlay: "linear-gradient(165deg, rgba(7,85,163,0.88) 0%, rgba(6,72,138,0.82) 50%, rgba(15,23,42,0.70) 100%)",
// // // //       accentColor: "#5B91C4",
// // // //     },
// // // //     {
// // // //       id: 4,
// // // //       image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80",
// // // //       tag: "i Booster Enterprise",
// // // //       powerNumber: "27",
// // // //       powerUnit: "dBm",
// // // //       titleLine1: "Industrial &",
// // // //       titleLine2: "Smart City",
// // // //       description: "Maximum power for factories, large complexes, and smart city infrastructure with DAS integration.",
// // // //       specs: [
// // // //         { label: "Power Output", value: "27 dBm" },
// // // //         { label: "Coverage", value: "1000+ m²" },
// // // //         { label: "Infrastructure", value: "DAS Ready" },
// // // //         { label: "Installation", value: "Custom Design" },
// // // //       ],
// // // //       cta: "View 27 dBm Specs",
// // // //       secondaryCta: "Request Enterprise Demo →",
// // // //       overlay: "linear-gradient(165deg, rgba(25,171,63,0.86) 0%, rgba(20,145,48,0.80) 50%, rgba(15,23,42,0.68) 100%)",
// // // //       accentColor: "#19AB3F",
// // // //     },
// // // //   ];

// // // //   useEffect(() => {
// // // //     setIsVisible(true);
// // // //     return () => {
// // // //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// // // //       if (progressInterval.current) clearInterval(progressInterval.current);
// // // //     };
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const handleMouseMove = (e) => {
// // // //       if (!heroRef.current) return;
// // // //       const rect = heroRef.current.getBoundingClientRect();
// // // //       setMousePos({
// // // //         x: ((e.clientX - rect.left) / rect.width) * 100,
// // // //         y: ((e.clientY - rect.top) / rect.height) * 100,
// // // //       });
// // // //     };
// // // //     window.addEventListener("mousemove", handleMouseMove);
// // // //     return () => window.removeEventListener("mousemove", handleMouseMove);
// // // //   }, []);

// // // //   const startProgress = useCallback(() => {
// // // //     setProgress(0);
// // // //     const step = (50 / slideDuration) * 100;
// // // //     if (progressInterval.current) clearInterval(progressInterval.current);
// // // //     progressInterval.current = setInterval(() => {
// // // //       setProgress((prev) => {
// // // //         if (prev >= 100) {
// // // //           clearInterval(progressInterval.current);
// // // //           return 100;
// // // //         }
// // // //         return prev + step;
// // // //       });
// // // //     }, 50);
// // // //   }, []);

// // // //   const goToSlide = useCallback(
// // // //     (index) => {
// // // //       if (isTransitioning || index === currentSlide) return;
// // // //       setIsTransitioning(true);
// // // //       setCurrentSlide(index);
// // // //       startProgress();
// // // //       setTimeout(() => setIsTransitioning(false), 900);
// // // //     },
// // // //     [currentSlide, isTransitioning, startProgress]
// // // //   );

// // // //   const nextSlide = useCallback(() => {
// // // //     goToSlide((currentSlide + 1) % slides.length);
// // // //   }, [currentSlide, slides.length, goToSlide]);

// // // //   useEffect(() => {
// // // //     startProgress();
// // // //     autoPlayRef.current = setInterval(nextSlide, slideDuration);
// // // //     return () => {
// // // //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// // // //       if (progressInterval.current) clearInterval(progressInterval.current);
// // // //     };
// // // //   }, [currentSlide, nextSlide, startProgress]);

// // // //   return (
// // // //     <section className="hero-immersive" ref={heroRef}>
// // // //       {/* Background Images */}
// // // //       {slides.map((slide, index) => (
// // // //         <div
// // // //           key={slide.id}
// // // //           className={`immersive-bg ${index === currentSlide ? "active" : ""}`}
// // // //           style={{ backgroundImage: `url(${slide.image})` }}
// // // //         />
// // // //       ))}

// // // //       {/* Overlays */}
// // // //       {slides.map((slide, index) => (
// // // //         <div
// // // //           key={`overlay-${slide.id}`}
// // // //           className={`immersive-overlay ${index === currentSlide ? "active" : ""}`}
// // // //           style={{ background: slide.overlay }}
// // // //         />
// // // //       ))}

// // // //       {/* Mouse Follow Glow */}
// // // //       <div
// // // //         className="immersive-glow"
// // // //         style={{
// // // //           background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
// // // //         }}
// // // //       />

// // // //       {/* Top Bar */}
// // // //       <div className={`immersive-top ${isVisible ? "visible" : ""}`}>
// // // //         <span className="top-brand">FUTUREMAX</span>
// // // //         <div className="top-right">
// // // //           <span className="top-badge">ISO 9001:2015</span>
// // // //           <span className="top-badge">Made in India</span>
// // // //         </div>
// // // //       </div>

// // // //       {/* Main Content - Asymmetric Layout */}
// // // //       <div className="immersive-body">
// // // //         {/* Left: Large Power Number */}
// // // //         <div className={`immersive-power ${isVisible ? "visible" : ""}`}>
// // // //           <div className="power-stack">
// // // //             {slides.map((slide, index) => (
// // // //               <span
// // // //                 key={slide.id}
// // // //                 className={`power-number ${index === currentSlide ? "active" : ""}`}
// // // //               >
// // // //                 {slide.powerNumber}
// // // //               </span>
// // // //             ))}
// // // //             <span className="power-unit">{slides[currentSlide].powerUnit}</span>
// // // //           </div>
// // // //           <span className="power-series">i Booster Series</span>
// // // //         </div>

// // // //         {/* Center: Main Content */}
// // // //         <div className={`immersive-content ${isVisible ? "visible" : ""}`}>
// // // //           <div className="content-tag">
// // // //             <span className="content-tag-dot" />
// // // //             {slides[currentSlide].tag}
// // // //           </div>

// // // //           <h1 className="content-title">
// // // //             <span className="title-light">{slides[currentSlide].titleLine1}</span>
// // // //             <span className="title-bold">{slides[currentSlide].titleLine2}</span>
// // // //           </h1>

// // // //           <p className="content-desc">{slides[currentSlide].description}</p>

// // // //           {/* Specs Strip */}
// // // //           <div className="content-specs-strip">
// // // //             {slides[currentSlide].specs.map((spec, i) => (
// // // //               <div key={i} className="specs-item">
// // // //                 <span className="specs-value">{spec.value}</span>
// // // //                 <span className="specs-label">{spec.label}</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>

// // // //           {/* CTAs */}
// // // //           <div className="content-actions">
// // // //             <button className="immersive-btn immersive-btn-primary">
// // // //               {slides[currentSlide].cta}
// // // //             </button>
// // // //             <button className="immersive-btn immersive-btn-text">
// // // //               {slides[currentSlide].secondaryCta}
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Right: Abstract Visual */}
// // // //         <div className={`immersive-visual ${isVisible ? "visible" : ""}`}>
// // // //           <div className="visual-abstract">
// // // //             {/* Concentric Circles */}
// // // //             <div className="abstract-rings">
// // // //               <div className="abstract-ring ring-1" style={{ borderColor: `${slides[currentSlide].accentColor}30` }} />
// // // //               <div className="abstract-ring ring-2" style={{ borderColor: `${slides[currentSlide].accentColor}20` }} />
// // // //               <div className="abstract-ring ring-3" style={{ borderColor: `${slides[currentSlide].accentColor}15` }} />
// // // //             </div>
            
// // // //             {/* Center Node */}
// // // //             <div className="abstract-center" style={{ background: slides[currentSlide].accentColor }}>
// // // //               <div className="center-inner" />
// // // //             </div>

// // // //             {/* Orbiting Dots */}
// // // //             <div className="abstract-orbits">
// // // //               {[...Array(4)].map((_, i) => (
// // // //                 <div
// // // //                   key={i}
// // // //                   className="orbit-dot"
// // // //                   style={{
// // // //                     animationDelay: `${i * 0.5}s`,
// // // //                     background: slides[currentSlide].accentColor,
// // // //                   }}
// // // //                 />
// // // //               ))}
// // // //             </div>

// // // //             {/* Data Display */}
// // // //             <div className="abstract-data">
// // // //               <span className="abstract-value">{slides[currentSlide].specs[2].value}</span>
// // // //               <span className="abstract-label">{slides[currentSlide].specs[2].label}</span>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Bottom Navigation */}
// // // //       <div className={`immersive-nav ${isVisible ? "visible" : ""}`}>
// // // //         {/* Timeline Progress */}
// // // //         <div className="nav-timeline">
// // // //           {slides.map((slide, index) => (
// // // //             <button
// // // //               key={slide.id}
// // // //               className={`timeline-item ${index === currentSlide ? "active" : ""}`}
// // // //               onClick={() => goToSlide(index)}
// // // //             >
// // // //               <div className="timeline-track">
// // // //                 <div
// // // //                   className="timeline-fill"
// // // //                   style={{
// // // //                     width: index === currentSlide ? `${progress}%` : "0%",
// // // //                     background: slide.accentColor,
// // // //                   }}
// // // //                 />
// // // //               </div>
// // // //               <span className="timeline-label">{slide.tag}</span>
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* Arrow Controls */}
// // // //         <div className="nav-arrows">
// // // //           <button
// // // //             className="nav-arrow-btn"
// // // //             onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
// // // //             disabled={isTransitioning}
// // // //           >
// // // //             ←
// // // //           </button>
// // // //           <span className="nav-count">
// // // //             {currentSlide + 1} / {slides.length}
// // // //           </span>
// // // //           <button
// // // //             className="nav-arrow-btn"
// // // //             onClick={nextSlide}
// // // //             disabled={isTransitioning}
// // // //           >
// // // //             →
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;

// // // import React, { useEffect, useRef, useState, useCallback } from "react";
// // // import "./Hero.css";

// // // const Hero = () => {
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const [isTransitioning, setIsTransitioning] = useState(false);
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [progress, setProgress] = useState(0);
// // //   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
// // //   const autoPlayRef = useRef(null);
// // //   const progressInterval = useRef(null);
// // //   const heroRef = useRef(null);
// // //   const slideDuration = 6000;

// // //   const slides = [
// // //     {
// // //       id: 1,
// // //       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
// // //       tag: "Enterprise RF Solutions",
// // //       powerNumber: "27",
// // //       powerUnit: "dBm",
// // //       titleLine1: "Enterprise Mobile",
// // //       titleLine2: "Signal Booster",
// // //       description: "Advanced RF Engineering & DAS for hotels, hospitals, and commercial buildings across India.",
// // //       specs: [
// // //         { label: "Power Output", value: "23 – 27 dBm" },
// // //         { label: "Technology", value: "4G / 5G Multi-Band" },
// // //         { label: "Coverage", value: "Up to 1000+ m²" },
// // //         { label: "Operators", value: "All Major Networks" },
// // //       ],
// // //       cta: "Get Free RF Site Survey",
// // //       secondaryCta: "Explore i Booster Series →",
// // //       overlay: "linear-gradient(165deg, rgba(7,85,163,0.88) 0%, rgba(5,64,122,0.82) 50%, rgba(15,23,42,0.70) 100%)",
// // //       accentColor: "#19AB3F",
// // //       networkColor: "#19AB3F",
// // //       networkSize: "large",
// // //     },
// // //     {
// // //       id: 2,
// // //       image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
// // //       tag: "i Booster Residential",
// // //       powerNumber: "23",
// // //       powerUnit: "dBm",
// // //       titleLine1: "Home & Small",
// // //       titleLine2: "Office Coverage",
// // //       description: "Compact, powerful signal boosters designed for seamless connectivity in residential spaces.",
// // //       specs: [
// // //         { label: "Power Output", value: "23 dBm" },
// // //         { label: "Coverage", value: "Up to 300 m²" },
// // //         { label: "Installation", value: "Plug & Play" },
// // //         { label: "Support", value: "All Operators" },
// // //       ],
// // //       cta: "View 23 dBm Specs",
// // //       secondaryCta: "Download Datasheet →",
// // //       overlay: "linear-gradient(165deg, rgba(25,171,63,0.86) 0%, rgba(18,130,45,0.80) 50%, rgba(15,23,42,0.68) 100%)",
// // //       accentColor: "#55C45C",
// // //       networkColor: "#55C45C",
// // //       networkSize: "small",
// // //     },
// // //     {
// // //       id: 3,
// // //       image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
// // //       tag: "i Booster Commercial",
// // //       powerNumber: "25",
// // //       powerUnit: "dBm",
// // //       titleLine1: "Hotels &",
// // //       titleLine2: "Hospitals",
// // //       description: "Robust multi-floor coverage for high-density commercial and hospitality environments.",
// // //       specs: [
// // //         { label: "Power Output", value: "25 dBm" },
// // //         { label: "Coverage", value: "Up to 500 m²" },
// // //         { label: "Deployment", value: "Multi-Floor" },
// // //         { label: "Monitoring", value: "24/7 Remote" },
// // //       ],
// // //       cta: "View 25 dBm Specs",
// // //       secondaryCta: "Get Commercial Quote →",
// // //       overlay: "linear-gradient(165deg, rgba(7,85,163,0.88) 0%, rgba(6,72,138,0.82) 50%, rgba(15,23,42,0.70) 100%)",
// // //       accentColor: "#5B91C4",
// // //       networkColor: "#5B91C4",
// // //       networkSize: "medium",
// // //     },
// // //     {
// // //       id: 4,
// // //       image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80",
// // //       tag: "i Booster Enterprise",
// // //       powerNumber: "27",
// // //       powerUnit: "dBm",
// // //       titleLine1: "Industrial &",
// // //       titleLine2: "Smart City",
// // //       description: "Maximum power for factories, large complexes, and smart city infrastructure with DAS integration.",
// // //       specs: [
// // //         { label: "Power Output", value: "27 dBm" },
// // //         { label: "Coverage", value: "1000+ m²" },
// // //         { label: "Infrastructure", value: "DAS Ready" },
// // //         { label: "Installation", value: "Custom Design" },
// // //       ],
// // //       cta: "View 27 dBm Specs",
// // //       secondaryCta: "Request Enterprise Demo →",
// // //       overlay: "linear-gradient(165deg, rgba(25,171,63,0.86) 0%, rgba(20,145,48,0.80) 50%, rgba(15,23,42,0.68) 100%)",
// // //       accentColor: "#19AB3F",
// // //       networkColor: "#19AB3F",
// // //       networkSize: "xlarge",
// // //     },
// // //   ];

// // //   useEffect(() => {
// // //     setIsVisible(true);
// // //     return () => {
// // //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// // //       if (progressInterval.current) clearInterval(progressInterval.current);
// // //     };
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       if (!heroRef.current) return;
// // //       const rect = heroRef.current.getBoundingClientRect();
// // //       setMousePos({
// // //         x: ((e.clientX - rect.left) / rect.width) * 100,
// // //         y: ((e.clientY - rect.top) / rect.height) * 100,
// // //       });
// // //     };
// // //     window.addEventListener("mousemove", handleMouseMove);
// // //     return () => window.removeEventListener("mousemove", handleMouseMove);
// // //   }, []);

// // //   const startProgress = useCallback(() => {
// // //     setProgress(0);
// // //     const step = (50 / slideDuration) * 100;
// // //     if (progressInterval.current) clearInterval(progressInterval.current);
// // //     progressInterval.current = setInterval(() => {
// // //       setProgress((prev) => {
// // //         if (prev >= 100) {
// // //           clearInterval(progressInterval.current);
// // //           return 100;
// // //         }
// // //         return prev + step;
// // //       });
// // //     }, 50);
// // //   }, []);

// // //   const goToSlide = useCallback(
// // //     (index) => {
// // //       if (isTransitioning || index === currentSlide) return;
// // //       setIsTransitioning(true);
// // //       setCurrentSlide(index);
// // //       startProgress();
// // //       setTimeout(() => setIsTransitioning(false), 900);
// // //     },
// // //     [currentSlide, isTransitioning, startProgress]
// // //   );

// // //   const nextSlide = useCallback(() => {
// // //     goToSlide((currentSlide + 1) % slides.length);
// // //   }, [currentSlide, slides.length, goToSlide]);

// // //   useEffect(() => {
// // //     startProgress();
// // //     autoPlayRef.current = setInterval(nextSlide, slideDuration);
// // //     return () => {
// // //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// // //       if (progressInterval.current) clearInterval(progressInterval.current);
// // //     };
// // //   }, [currentSlide, nextSlide, startProgress]);

// // //   return (
// // //     <section className="hero-immersive" ref={heroRef}>
// // //       {/* Background Images */}
// // //       {slides.map((slide, index) => (
// // //         <div
// // //           key={slide.id}
// // //           className={`immersive-bg ${index === currentSlide ? "active" : ""}`}
// // //           style={{ backgroundImage: `url(${slide.image})` }}
// // //         />
// // //       ))}

// // //       {/* Overlays */}
// // //       {slides.map((slide, index) => (
// // //         <div
// // //           key={`overlay-${slide.id}`}
// // //           className={`immersive-overlay ${index === currentSlide ? "active" : ""}`}
// // //           style={{ background: slide.overlay }}
// // //         />
// // //       ))}

// // //       {/* Mouse Follow Glow */}
// // //       <div
// // //         className="immersive-glow"
// // //         style={{
// // //           background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
// // //         }}
// // //       />

// // //       {/* Top Bar */}
// // //       <div className={`immersive-top ${isVisible ? "visible" : ""}`}>
// // //         <span className="top-brand">FUTUREMAX</span>
// // //         <div className="top-right">
// // //           <span className="top-badge">ISO 9001:2015</span>
// // //           <span className="top-badge">Made in India</span>
// // //         </div>
// // //       </div>

// // //       {/* Main Content - Asymmetric Layout */}
// // //       <div className="immersive-body">
// // //         {/* Left: Large Power Number */}
// // //         <div className={`immersive-power ${isVisible ? "visible" : ""}`}>
// // //           <div className="power-stack">
// // //             {slides.map((slide, index) => (
// // //               <span
// // //                 key={slide.id}
// // //                 className={`power-number ${index === currentSlide ? "active" : ""}`}
// // //               >
// // //                 {slide.powerNumber}
// // //               </span>
// // //             ))}
// // //             <span className="power-unit">{slides[currentSlide].powerUnit}</span>
// // //           </div>
// // //           <span className="power-series">i Booster Series</span>
// // //         </div>

// // //         {/* Center: Main Content */}
// // //         <div className={`immersive-content ${isVisible ? "visible" : ""}`}>
// // //           <div className="content-tag">
// // //             <span className="content-tag-dot" />
// // //             {slides[currentSlide].tag}
// // //           </div>

// // //           <h1 className="content-title">
// // //             <span className="title-light">{slides[currentSlide].titleLine1}</span>
// // //             <span className="title-bold">{slides[currentSlide].titleLine2}</span>
// // //           </h1>

// // //           <p className="content-desc">{slides[currentSlide].description}</p>

// // //           {/* Specs Strip */}
// // //           <div className="content-specs-strip">
// // //             {slides[currentSlide].specs.map((spec, i) => (
// // //               <div key={i} className="specs-item">
// // //                 <span className="specs-value">{spec.value}</span>
// // //                 <span className="specs-label">{spec.label}</span>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* CTAs */}
// // //           <div className="content-actions">
// // //             <button className="immersive-btn immersive-btn-primary">
// // //               {slides[currentSlide].cta}
// // //             </button>
// // //             <button className="immersive-btn immersive-btn-text">
// // //               {slides[currentSlide].secondaryCta}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         {/* Right: Network Mesh Visualization */}
// // //         <div className={`immersive-visual ${isVisible ? "visible" : ""}`}>
// // //           <div className="network-mesh">
// // //             {/* Signal Tower (Center) */}
// // //             <div className="mesh-tower">
// // //               <div className="tower-body">
// // //                 <div className="tower-pole" />
// // //                 <div className="tower-antenna">
// // //                   <div className="antenna-line antenna-line-1" />
// // //                   <div className="antenna-line antenna-line-2" />
// // //                   <div className="antenna-line antenna-line-3" />
// // //                 </div>
// // //               </div>
// // //               {/* Signal Waves from Tower */}
// // //               <div className="tower-waves">
// // //                 <div className="tower-wave wave-1" style={{ borderColor: slides[currentSlide].networkColor }} />
// // //                 <div className="tower-wave wave-2" style={{ borderColor: slides[currentSlide].networkColor }} />
// // //                 <div className="tower-wave wave-3" style={{ borderColor: slides[currentSlide].networkColor }} />
// // //               </div>
// // //             </div>

// // //             {/* Connected Devices */}
// // //             <div className="mesh-devices">
// // //               {/* Device 1 - Home */}
// // //               <div className="mesh-device device-home">
// // //                 <div className="device-icon">
// // //                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// // //                     <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
// // //                     <path d="M9 22V12h6v10" />
// // //                   </svg>
// // //                 </div>
// // //                 <div className="device-connector" style={{ background: slides[currentSlide].networkColor }} />
// // //               </div>

// // //               {/* Device 2 - Office Building */}
// // //               <div className="mesh-device device-office">
// // //                 <div className="device-icon">
// // //                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// // //                     <rect x="4" y="2" width="16" height="20" rx="2" />
// // //                     <path d="M9 6h6M9 10h6M9 14h6M9 18h6" />
// // //                   </svg>
// // //                 </div>
// // //                 <div className="device-connector" style={{ background: slides[currentSlide].networkColor }} />
// // //               </div>

// // //               {/* Device 3 - Hospital */}
// // //               <div className="mesh-device device-hospital">
// // //                 <div className="device-icon">
// // //                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// // //                     <rect x="3" y="3" width="18" height="18" rx="3" />
// // //                     <path d="M12 8v8M8 12h8" />
// // //                   </svg>
// // //                 </div>
// // //                 <div className="device-connector" style={{ background: slides[currentSlide].networkColor }} />
// // //               </div>

// // //               {/* Device 4 - Factory */}
// // //               <div className="mesh-device device-factory">
// // //                 <div className="device-icon">
// // //                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// // //                     <path d="M2 20h20M4 20V10l4-4 4 4 4-4 4 4v10" />
// // //                     <rect x="6" y="14" width="4" height="6" />
// // //                     <rect x="14" y="14" width="4" height="6" />
// // //                   </svg>
// // //                 </div>
// // //                 <div className="device-connector" style={{ background: slides[currentSlide].networkColor }} />
// // //               </div>
// // //             </div>

// // //             {/* Network Connection Lines (Mesh) */}
// // //             <svg className="mesh-lines" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet">
// // //               {/* Tower to Devices */}
// // //               <line x1="150" y1="150" x2="40" y2="60" stroke={slides[currentSlide].networkColor} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
// // //               <line x1="150" y1="150" x2="260" y2="50" stroke={slides[currentSlide].networkColor} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
// // //               <line x1="150" y1="150" x2="50" y2="240" stroke={slides[currentSlide].networkColor} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
// // //               <line x1="150" y1="150" x2="250" y2="230" stroke={slides[currentSlide].networkColor} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />
              
// // //               {/* Device to Device Mesh */}
// // //               <line x1="40" y1="60" x2="260" y2="50" stroke={slides[currentSlide].networkColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2" />
// // //               <line x1="260" y1="50" x2="250" y2="230" stroke={slides[currentSlide].networkColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2" />
// // //               <line x1="250" y1="230" x2="50" y2="240" stroke={slides[currentSlide].networkColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2" />
// // //               <line x1="50" y1="240" x2="40" y2="60" stroke={slides[currentSlide].networkColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.2" />
// // //               <line x1="40" y1="60" x2="250" y2="230" stroke={slides[currentSlide].networkColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.15" />
// // //               <line x1="260" y1="50" x2="50" y2="240" stroke={slides[currentSlide].networkColor} strokeWidth="0.5" strokeDasharray="3 4" opacity="0.15" />
// // //             </svg>

// // //             {/* Data Particles moving along lines */}
// // //             <div className="mesh-particles">
// // //               <div className="mesh-particle particle-1" style={{ background: slides[currentSlide].networkColor }} />
// // //               <div className="mesh-particle particle-2" style={{ background: slides[currentSlide].networkColor }} />
// // //               <div className="mesh-particle particle-3" style={{ background: slides[currentSlide].networkColor }} />
// // //               <div className="mesh-particle particle-4" style={{ background: slides[currentSlide].networkColor }} />
// // //             </div>

// // //             {/* Coverage Info Overlay */}
// // //             <div className="mesh-info">
// // //               <span className="mesh-info-value">{slides[currentSlide].specs[2].value}</span>
// // //               <span className="mesh-info-label">Coverage</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Bottom Navigation */}
// // //       <div className={`immersive-nav ${isVisible ? "visible" : ""}`}>
// // //         {/* Timeline Progress */}
// // //         <div className="nav-timeline">
// // //           {slides.map((slide, index) => (
// // //             <button
// // //               key={slide.id}
// // //               className={`timeline-item ${index === currentSlide ? "active" : ""}`}
// // //               onClick={() => goToSlide(index)}
// // //             >
// // //               <div className="timeline-track">
// // //                 <div
// // //                   className="timeline-fill"
// // //                   style={{
// // //                     width: index === currentSlide ? `${progress}%` : "0%",
// // //                     background: slide.accentColor,
// // //                   }}
// // //                 />
// // //               </div>
// // //               <span className="timeline-label">{slide.tag}</span>
// // //             </button>
// // //           ))}
// // //         </div>

// // //         {/* Arrow Controls */}
// // //         <div className="nav-arrows">
// // //           <button
// // //             className="nav-arrow-btn"
// // //             onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
// // //             disabled={isTransitioning}
// // //           >
// // //             ←
// // //           </button>
// // //           <span className="nav-count">
// // //             {currentSlide + 1} / {slides.length}
// // //           </span>
// // //           <button
// // //             className="nav-arrow-btn"
// // //             onClick={nextSlide}
// // //             disabled={isTransitioning}
// // //           >
// // //             →
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;

// // import React, { useEffect, useRef, useState, useCallback } from "react";
// // import "./Hero.css";

// // const Hero = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [progress, setProgress] = useState(0);
// //   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
// //   const autoPlayRef = useRef(null);
// //   const progressInterval = useRef(null);
// //   const heroRef = useRef(null);
// //   const canvasRef = useRef(null);
// //   const animationRef = useRef(null);
// //   const particlesRef = useRef([]);
// //   const slideDuration = 6000;

// //   const slides = [
// //     {
// //       id: 1,
// //       image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80",
// //       tag: "Enterprise RF Solutions",
// //       powerNumber: "27",
// //       powerUnit: "dBm",
// //       titleLine1: "Enterprise Mobile",
// //       titleLine2: "Signal Booster",
// //       description: "Advanced RF Engineering & DAS for hotels, hospitals, and commercial buildings across India.",
// //       specs: [
// //         { label: "Power Output", value: "23 – 27 dBm" },
// //         { label: "Technology", value: "4G / 5G Multi-Band" },
// //         { label: "Coverage", value: "Up to 1000+ m²" },
// //         { label: "Operators", value: "All Major Networks" },
// //       ],
// //       cta: "Get Free RF Site Survey",
// //       secondaryCta: "Explore i Booster Series →",
// //       overlay: "linear-gradient(165deg, rgba(7,85,163,0.88) 0%, rgba(5,64,122,0.82) 50%, rgba(15,23,42,0.70) 100%)",
// //       accentColor: "#19AB3F",
// //       networkColor: "#19AB3F",
// //       networkColorRGB: "25, 171, 63",
// //     },
// //     {
// //       id: 2,
// //       image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1920&q=80",
// //       tag: "i Booster Residential",
// //       powerNumber: "23",
// //       powerUnit: "dBm",
// //       titleLine1: "Home & Small",
// //       titleLine2: "Office Coverage",
// //       description: "Compact, powerful signal boosters designed for seamless connectivity in residential spaces.",
// //       specs: [
// //         { label: "Power Output", value: "23 dBm" },
// //         { label: "Coverage", value: "Up to 300 m²" },
// //         { label: "Installation", value: "Plug & Play" },
// //         { label: "Support", value: "All Operators" },
// //       ],
// //       cta: "View 23 dBm Specs",
// //       secondaryCta: "Download Datasheet →",
// //       overlay: "linear-gradient(165deg, rgba(25,171,63,0.86) 0%, rgba(18,130,45,0.80) 50%, rgba(15,23,42,0.68) 100%)",
// //       accentColor: "#55C45C",
// //       networkColor: "#55C45C",
// //       networkColorRGB: "85, 196, 92",
// //     },
// //     {
// //       id: 3,
// //       image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
// //       tag: "i Booster Commercial",
// //       powerNumber: "25",
// //       powerUnit: "dBm",
// //       titleLine1: "Hotels &",
// //       titleLine2: "Hospitals",
// //       description: "Robust multi-floor coverage for high-density commercial and hospitality environments.",
// //       specs: [
// //         { label: "Power Output", value: "25 dBm" },
// //         { label: "Coverage", value: "Up to 500 m²" },
// //         { label: "Deployment", value: "Multi-Floor" },
// //         { label: "Monitoring", value: "24/7 Remote" },
// //       ],
// //       cta: "View 25 dBm Specs",
// //       secondaryCta: "Get Commercial Quote →",
// //       overlay: "linear-gradient(165deg, rgba(7,85,163,0.88) 0%, rgba(6,72,138,0.82) 50%, rgba(15,23,42,0.70) 100%)",
// //       accentColor: "#5B91C4",
// //       networkColor: "#5B91C4",
// //       networkColorRGB: "91, 145, 196",
// //     },
// //     {
// //       id: 4,
// //       image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80",
// //       tag: "i Booster Enterprise",
// //       powerNumber: "27",
// //       powerUnit: "dBm",
// //       titleLine1: "Industrial &",
// //       titleLine2: "Smart City",
// //       description: "Maximum power for factories, large complexes, and smart city infrastructure with DAS integration.",
// //       specs: [
// //         { label: "Power Output", value: "27 dBm" },
// //         { label: "Coverage", value: "1000+ m²" },
// //         { label: "Infrastructure", value: "DAS Ready" },
// //         { label: "Installation", value: "Custom Design" },
// //       ],
// //       cta: "View 27 dBm Specs",
// //       secondaryCta: "Request Enterprise Demo →",
// //       overlay: "linear-gradient(165deg, rgba(25,171,63,0.86) 0%, rgba(20,145,48,0.80) 50%, rgba(15,23,42,0.68) 100%)",
// //       accentColor: "#19AB3F",
// //       networkColor: "#19AB3F",
// //       networkColorRGB: "25, 171, 63",
// //     },
// //   ];

// //   // Canvas Particle System
// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");
// //     const dpr = window.devicePixelRatio || 1;
    
// //     const resizeCanvas = () => {
// //       const rect = canvas.parentElement.getBoundingClientRect();
// //       canvas.width = rect.width * dpr;
// //       canvas.height = rect.height * dpr;
// //       canvas.style.width = `${rect.width}px`;
// //       canvas.style.height = `${rect.height}px`;
// //       ctx.scale(dpr, dpr);
// //     };

// //     resizeCanvas();
// //     window.addEventListener("resize", resizeCanvas);

// //     // Create advanced particle system
// //     const createParticles = () => {
// //       const particles = [];
// //       const nodeCount = 8;
// //       const width = canvas.width / dpr;
// //       const height = canvas.height / dpr;
// //       const centerX = width / 2;
// //       const centerY = height / 2;

// //       // Create nodes (connection points)
// //       const nodes = [
// //         { x: centerX, y: centerY - 20, type: "tower" },
// //         { x: centerX - 80, y: centerY - 60, type: "device" },
// //         { x: centerX + 70, y: centerY - 50, type: "device" },
// //         { x: centerX - 60, y: centerY + 60, type: "device" },
// //         { x: centerX + 80, y: centerY + 55, type: "device" },
// //         { x: centerX - 100, y: centerY, type: "device" },
// //         { x: centerX + 90, y: centerY, type: "device" },
// //         { x: centerX, y: centerY + 70, type: "device" },
// //       ];

// //       // Create connection paths
// //       const connections = [];
// //       for (let i = 0; i < nodes.length; i++) {
// //         for (let j = i + 1; j < nodes.length; j++) {
// //           if (i === 0 || Math.random() < 0.5) {
// //             connections.push({ from: i, to: j });
// //           }
// //         }
// //       }

// //       // Create particles traveling along connections
// //       for (let i = 0; i < 30; i++) {
// //         const connection = connections[Math.floor(Math.random() * connections.length)];
// //         particles.push({
// //           from: nodes[connection.from],
// //           to: nodes[connection.to],
// //           progress: Math.random(),
// //           speed: 0.002 + Math.random() * 0.006,
// //           size: 1 + Math.random() * 2.5,
// //           opacity: 0.3 + Math.random() * 0.7,
// //           color: slides[currentSlide].networkColor,
// //         });
// //       }

// //       return { nodes, connections, particles };
// //     };

// //     particlesRef.current = createParticles();

// //     const animate = () => {
// //       ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
// //       const { nodes, connections, particles } = particlesRef.current;
// //       const networkColor = slides[currentSlide].networkColor;
// //       const networkColorRGB = slides[currentSlide].networkColorRGB;

// //       // Draw connection lines with glow
// //       connections.forEach((conn) => {
// //         const from = nodes[conn.from];
// //         const to = nodes[conn.to];
        
// //         // Glow line
// //         ctx.beginPath();
// //         ctx.moveTo(from.x, from.y);
// //         ctx.lineTo(to.x, to.y);
// //         ctx.strokeStyle = `rgba(${networkColorRGB}, 0.08)`;
// //         ctx.lineWidth = 2;
// //         ctx.stroke();

// //         // Core line
// //         ctx.beginPath();
// //         ctx.moveTo(from.x, from.y);
// //         ctx.lineTo(to.x, to.y);
// //         ctx.strokeStyle = `rgba(${networkColorRGB}, 0.2)`;
// //         ctx.lineWidth = 0.8;
// //         ctx.stroke();
// //       });

// //       // Draw nodes
// //       nodes.forEach((node) => {
// //         if (node.type === "tower") {
// //           // Tower node - larger with rings
// //           ctx.beginPath();
// //           ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
// //           ctx.fillStyle = networkColor;
// //           ctx.fill();
// //           ctx.strokeStyle = `rgba(${networkColorRGB}, 0.6)`;
// //           ctx.lineWidth = 2;
// //           ctx.stroke();

// //           // Outer ring
// //           ctx.beginPath();
// //           ctx.arc(node.x, node.y, 10, 0, Math.PI * 2);
// //           ctx.strokeStyle = `rgba(${networkColorRGB}, 0.3)`;
// //           ctx.lineWidth = 1;
// //           ctx.stroke();

// //           // Glow
// //           const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 20);
// //           gradient.addColorStop(0, `rgba(${networkColorRGB}, 0.4)`);
// //           gradient.addColorStop(1, `rgba(${networkColorRGB}, 0)`);
// //           ctx.beginPath();
// //           ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
// //           ctx.fillStyle = gradient;
// //           ctx.fill();
// //         } else {
// //           // Device nodes
// //           ctx.beginPath();
// //           ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
// //           ctx.fillStyle = `rgba(${networkColorRGB}, 0.8)`;
// //           ctx.fill();
// //           ctx.strokeStyle = `rgba(${networkColorRGB}, 0.4)`;
// //           ctx.lineWidth = 1;
// //           ctx.stroke();
// //         }
// //       });

// //       // Update and draw particles
// //       particles.forEach((p) => {
// //         p.progress += p.speed;
// //         if (p.progress > 1) p.progress = 0;

// //         const x = p.from.x + (p.to.x - p.from.x) * p.progress;
// //         const y = p.from.y + (p.to.y - p.from.y) * p.progress;

// //         ctx.beginPath();
// //         ctx.arc(x, y, p.size, 0, Math.PI * 2);
// //         ctx.fillStyle = `rgba(${networkColorRGB}, ${p.opacity})`;
// //         ctx.fill();

// //         // Particle glow
// //         const glow = ctx.createRadialGradient(x, y, 0, x, y, p.size * 3);
// //         glow.addColorStop(0, `rgba(${networkColorRGB}, ${p.opacity * 0.6})`);
// //         glow.addColorStop(1, `rgba(${networkColorRGB}, 0)`);
// //         ctx.beginPath();
// //         ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
// //         ctx.fillStyle = glow;
// //         ctx.fill();
// //       });

// //       animationRef.current = requestAnimationFrame(animate);
// //     };

// //     animate();

// //     return () => {
// //       window.removeEventListener("resize", resizeCanvas);
// //       if (animationRef.current) cancelAnimationFrame(animationRef.current);
// //     };
// //   }, [currentSlide]);

// //   useEffect(() => {
// //     setIsVisible(true);
// //     return () => {
// //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// //       if (progressInterval.current) clearInterval(progressInterval.current);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (!heroRef.current) return;
// //       const rect = heroRef.current.getBoundingClientRect();
// //       setMousePos({
// //         x: ((e.clientX - rect.left) / rect.width) * 100,
// //         y: ((e.clientY - rect.top) / rect.height) * 100,
// //       });
// //     };
// //     window.addEventListener("mousemove", handleMouseMove);
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   const startProgress = useCallback(() => {
// //     setProgress(0);
// //     const step = (50 / slideDuration) * 100;
// //     if (progressInterval.current) clearInterval(progressInterval.current);
// //     progressInterval.current = setInterval(() => {
// //       setProgress((prev) => {
// //         if (prev >= 100) {
// //           clearInterval(progressInterval.current);
// //           return 100;
// //         }
// //         return prev + step;
// //       });
// //     }, 50);
// //   }, []);

// //   const goToSlide = useCallback(
// //     (index) => {
// //       if (isTransitioning || index === currentSlide) return;
// //       setIsTransitioning(true);
// //       setCurrentSlide(index);
// //       startProgress();
// //       setTimeout(() => setIsTransitioning(false), 900);
// //     },
// //     [currentSlide, isTransitioning, startProgress]
// //   );

// //   const nextSlide = useCallback(() => {
// //     goToSlide((currentSlide + 1) % slides.length);
// //   }, [currentSlide, slides.length, goToSlide]);

// //   useEffect(() => {
// //     startProgress();
// //     autoPlayRef.current = setInterval(nextSlide, slideDuration);
// //     return () => {
// //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// //       if (progressInterval.current) clearInterval(progressInterval.current);
// //     };
// //   }, [currentSlide, nextSlide, startProgress]);

// //   return (
// //     <section className="hero-immersive" ref={heroRef}>
// //       {/* Background Images */}
// //       {slides.map((slide, index) => (
// //         <div
// //           key={slide.id}
// //           className={`immersive-bg ${index === currentSlide ? "active" : ""}`}
// //           style={{ backgroundImage: `url(${slide.image})` }}
// //         />
// //       ))}

// //       {/* Overlays */}
// //       {slides.map((slide, index) => (
// //         <div
// //           key={`overlay-${slide.id}`}
// //           className={`immersive-overlay ${index === currentSlide ? "active" : ""}`}
// //           style={{ background: slide.overlay }}
// //         />
// //       ))}

// //       {/* Mouse Follow Glow */}
// //       <div
// //         className="immersive-glow"
// //         style={{
// //           background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.06) 0%, transparent 50%)`,
// //         }}
// //       />

// //       {/* Top Bar */}
// //       <div className={`immersive-top ${isVisible ? "visible" : ""}`}>
// //         <span className="top-brand">FUTUREMAX</span>
// //         <div className="top-right">
// //           <span className="top-badge">ISO 9001:2015</span>
// //           <span className="top-badge">Made in India</span>
// //         </div>
// //       </div>

// //       {/* Main Content - Asymmetric Layout */}
// //       <div className="immersive-body">
// //         {/* Left: Large Power Number */}
// //         <div className={`immersive-power ${isVisible ? "visible" : ""}`}>
// //           <div className="power-stack">
// //             {slides.map((slide, index) => (
// //               <span
// //                 key={slide.id}
// //                 className={`power-number ${index === currentSlide ? "active" : ""}`}
// //               >
// //                 {slide.powerNumber}
// //               </span>
// //             ))}
// //             <span className="power-unit">{slides[currentSlide].powerUnit}</span>
// //           </div>
// //           <span className="power-series">i Booster Series</span>
// //         </div>

// //         {/* Center: Main Content */}
// //         <div className={`immersive-content ${isVisible ? "visible" : ""}`}>
// //           <div className="content-tag">
// //             <span className="content-tag-dot" />
// //             {slides[currentSlide].tag}
// //           </div>

// //           <h1 className="content-title">
// //             <span className="title-light">{slides[currentSlide].titleLine1}</span>
// //             <span className="title-bold">{slides[currentSlide].titleLine2}</span>
// //           </h1>

// //           <p className="content-desc">{slides[currentSlide].description}</p>

// //           {/* Specs Strip */}
// //           <div className="content-specs-strip">
// //             {slides[currentSlide].specs.map((spec, i) => (
// //               <div key={i} className="specs-item">
// //                 <span className="specs-value">{spec.value}</span>
// //                 <span className="specs-label">{spec.label}</span>
// //               </div>
// //             ))}
// //           </div>

// //           {/* CTAs */}
// //           <div className="content-actions">
// //             <button className="immersive-btn immersive-btn-primary">
// //               {slides[currentSlide].cta}
// //             </button>
// //             <button className="immersive-btn immersive-btn-text">
// //               {slides[currentSlide].secondaryCta}
// //             </button>
// //           </div>
// //         </div>

// //         {/* Right: Advanced Network Mesh Visualization */}
// //         <div className={`immersive-visual ${isVisible ? "visible" : ""}`}>
// //           <div className="network-mesh-advanced">
// //             {/* Canvas for Particle System */}
// //             <canvas ref={canvasRef} className="mesh-canvas" />

// //             {/* Overlay UI Elements */}
// //             <div className="mesh-overlay-ui">
// //               {/* Central Hub */}
// //               <div className="mesh-hub">
// //                 <div className="hub-core" style={{ background: slides[currentSlide].networkColor }}>
// //                   <div className="hub-inner" />
// //                 </div>
// //                 <div className="hub-ring hub-ring-1" style={{ borderColor: `${slides[currentSlide].networkColor}40` }} />
// //                 <div className="hub-ring hub-ring-2" style={{ borderColor: `${slides[currentSlide].networkColor}25` }} />
// //                 <div className="hub-ring hub-ring-3" style={{ borderColor: `${slides[currentSlide].networkColor}15` }} />
// //               </div>

// //               {/* Floating Device Icons */}
// //               <div className="mesh-icon mesh-icon-1">
// //                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //                   <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
// //                   <path d="M9 22V12h6v10" />
// //                 </svg>
// //               </div>
// //               <div className="mesh-icon mesh-icon-2">
// //                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //                   <rect x="4" y="2" width="16" height="20" rx="2" />
// //                   <path d="M9 6h6M9 10h6M9 14h6M9 18h6" />
// //                 </svg>
// //               </div>
// //               <div className="mesh-icon mesh-icon-3">
// //                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //                   <rect x="3" y="3" width="18" height="18" rx="3" />
// //                   <path d="M12 8v8M8 12h8" />
// //                 </svg>
// //               </div>
// //               <div className="mesh-icon mesh-icon-4">
// //                 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //                   <path d="M2 20h20M4 20V10l4-4 4 4 4-4 4 4v10" />
// //                   <rect x="6" y="14" width="4" height="6" />
// //                   <rect x="14" y="14" width="4" height="6" />
// //                 </svg>
// //               </div>

// //               {/* Data Flow Indicators */}
// //               <div className="mesh-data-flow flow-1" style={{ background: slides[currentSlide].networkColor }} />
// //               <div className="mesh-data-flow flow-2" style={{ background: slides[currentSlide].networkColor }} />
// //               <div className="mesh-data-flow flow-3" style={{ background: slides[currentSlide].networkColor }} />
// //               <div className="mesh-data-flow flow-4" style={{ background: slides[currentSlide].networkColor }} />
// //             </div>

// //             {/* Coverage Badge */}
// //             <div className="mesh-coverage-badge">
// //               <div className="coverage-value">{slides[currentSlide].specs[2].value}</div>
// //               <div className="coverage-label">Coverage Area</div>
// //               <div className="coverage-bar">
// //                 <div 
// //                   className="coverage-bar-fill" 
// //                   style={{ 
// //                     width: currentSlide === 0 ? '100%' : currentSlide === 1 ? '30%' : currentSlide === 2 ? '50%' : '85%',
// //                     background: slides[currentSlide].networkColor 
// //                   }} 
// //                 />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Bottom Navigation */}
// //       <div className={`immersive-nav ${isVisible ? "visible" : ""}`}>
// //         <div className="nav-timeline">
// //           {slides.map((slide, index) => (
// //             <button
// //               key={slide.id}
// //               className={`timeline-item ${index === currentSlide ? "active" : ""}`}
// //               onClick={() => goToSlide(index)}
// //             >
// //               <div className="timeline-track">
// //                 <div
// //                   className="timeline-fill"
// //                   style={{
// //                     width: index === currentSlide ? `${progress}%` : "0%",
// //                     background: slide.accentColor,
// //                   }}
// //                 />
// //               </div>
// //               <span className="timeline-label">{slide.tag}</span>
// //             </button>
// //           ))}
// //         </div>

// //         <div className="nav-arrows">
// //           <button
// //             className="nav-arrow-btn"
// //             onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
// //             disabled={isTransitioning}
// //           >
// //             ←
// //           </button>
// //           <span className="nav-count">
// //             {currentSlide + 1} / {slides.length}
// //           </span>
// //           <button
// //             className="nav-arrow-btn"
// //             onClick={nextSlide}
// //             disabled={isTransitioning}
// //           >
// //             →
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;




// // import React, { useEffect, useRef, useState, useCallback } from "react";
// // import "./Hero.css";
// // import hero1 from "../../assets/hero1.png";

// // const Hero = () => {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isTransitioning, setIsTransitioning] = useState(false);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [progress, setProgress] = useState(0);
// //   const autoPlayRef = useRef(null);
// //   const progressInterval = useRef(null);
// //   const slideDuration = 5000;

// //   const slides = [
// //     {
// //       id: 1,
// //       bgImage: hero1,
// //       tagline: "India's Trusted RF Engineering Company",
// //       title: "Enterprise Mobile Signal Booster",
// //       titleHighlight: "& RF Solutions",
// //       description:
// //         "Futuremax Technology delivers advanced Mobile Signal Boosters, Distributed Antenna Systems (DAS), and Enterprise Wireless Connectivity across India.",
// //       features: [
// //         { value: "23 – 27 dBm", label: "Power Range" },
// //         { value: "4G / 5G", label: "Multi-Band Support" },
// //         { value: "Multi-Operator", label: "All Networks" },
// //       ],
// //       primaryCta: "Get Free RF Site Survey",
// //       secondaryCta: "Explore i Booster Series",
// //       productCards: [
// //         { power: "23 dBm", type: "Residential", coverage: "Up to 300 m²" },
// //         { power: "25 dBm", type: "Commercial", coverage: "Up to 500 m²" },
// //         { power: "27 dBm", type: "Enterprise", coverage: "Up to 1000+ m²" },
// //       ],
// //       stats: [
// //         { value: "5,000+", label: "Enterprise Deployments" },
// //         { value: "99.9%", label: "Network Uptime" },
// //         { value: "Pan India", label: "Service Network" },
// //         { value: "24/7", label: "NOC Support" },
// //       ],
// //     },
// //     {
// //       id: 2,
// //       bgImage: hero1,
// //       tagline: "i Booster Series — 23 dBm",
// //       title: "Residential & Small Office",
// //       titleHighlight: "Signal Booster",
// //       description:
// //         "Professional 23 dBm boosters engineered for homes, apartments, and boutique workspaces. Plug-and-play installation with all-operator support.",
// //       features: [
// //         { value: "23 dBm", label: "Output Power" },
// //         { value: "300 m²", label: "Coverage Area" },
// //         { value: "Plug & Play", label: "Installation" },
// //       ],
// //       primaryCta: "View 23 dBm Details",
// //       secondaryCta: "Download Datasheet",
// //       productCards: [
// //         { power: "23 dBm", type: "Residential", coverage: "Up to 300 m²" },
// //         { power: "25 dBm", type: "Commercial", coverage: "Up to 500 m²" },
// //         { power: "27 dBm", type: "Enterprise", coverage: "Up to 1000+ m²" },
// //       ],
// //       stats: [
// //         { value: "5,000+", label: "Enterprise Deployments" },
// //         { value: "99.9%", label: "Network Uptime" },
// //         { value: "Pan India", label: "Service Network" },
// //         { value: "24/7", label: "NOC Support" },
// //       ],
// //     },
// //     {
// //       id: 3,
// //       bgImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
// //       tagline: "i Booster Series — 25 dBm",
// //       title: "Commercial & Hospitality",
// //       titleHighlight: "Signal Booster",
// //       description:
// //         "Robust 25 dBm coverage for hotels, hospitals, and educational campuses. Multi-floor deployment with 24/7 remote monitoring.",
// //       features: [
// //         { value: "25 dBm", label: "Output Power" },
// //         { value: "500 m²", label: "Coverage Area" },
// //         { value: "Multi-Floor", label: "Deployment" },
// //       ],
// //       primaryCta: "View 25 dBm Details",
// //       secondaryCta: "Get Commercial Quote",
// //       productCards: [
// //         { power: "23 dBm", type: "Residential", coverage: "Up to 300 m²" },
// //         { power: "25 dBm", type: "Commercial", coverage: "Up to 500 m²" },
// //         { power: "27 dBm", type: "Enterprise", coverage: "Up to 1000+ m²" },
// //       ],
// //       stats: [
// //         { value: "5,000+", label: "Enterprise Deployments" },
// //         { value: "99.9%", label: "Network Uptime" },
// //         { value: "Pan India", label: "Service Network" },
// //         { value: "24/7", label: "NOC Support" },
// //       ],
// //     },
// //     {
// //       id: 4,
// //       bgImage: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=1920&q=80",
// //       tagline: "i Booster Series — 27 dBm",
// //       title: "Enterprise & Industrial",
// //       titleHighlight: "Signal Booster",
// //       description:
// //         "Maximum power 27 dBm for factories, large commercial complexes, and smart city infrastructure. DAS-ready with industrial-grade reliability.",
// //       features: [
// //         { value: "27 dBm", label: "Output Power" },
// //         { value: "1000+ m²", label: "Coverage Area" },
// //         { value: "DAS Ready", label: "Infrastructure" },
// //       ],
// //       primaryCta: "View 27 dBm Details",
// //       secondaryCta: "Request Enterprise Demo",
// //       productCards: [
// //         { power: "23 dBm", type: "Residential", coverage: "Up to 300 m²" },
// //         { power: "25 dBm", type: "Commercial", coverage: "Up to 500 m²" },
// //         { power: "27 dBm", type: "Enterprise", coverage: "Up to 1000+ m²" },
// //       ],
// //       stats: [
// //         { value: "5,000+", label: "Enterprise Deployments" },
// //         { value: "99.9%", label: "Network Uptime" },
// //         { value: "Pan India", label: "Service Network" },
// //         { value: "24/7", label: "NOC Support" },
// //       ],
// //     },
// //   ];

// //   useEffect(() => {
// //     setIsVisible(true);
// //     return () => {
// //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// //       if (progressInterval.current) clearInterval(progressInterval.current);
// //     };
// //   }, []);

// //   const startProgress = useCallback(() => {
// //     setProgress(0);
// //     const step = (50 / slideDuration) * 100;
// //     if (progressInterval.current) clearInterval(progressInterval.current);
// //     progressInterval.current = setInterval(() => {
// //       setProgress((prev) => {
// //         if (prev >= 100) {
// //           clearInterval(progressInterval.current);
// //           return 100;
// //         }
// //         return prev + step;
// //       });
// //     }, 50);
// //   }, []);

// //   const goToSlide = useCallback(
// //     (index) => {
// //       if (isTransitioning || index === currentSlide) return;
// //       setIsTransitioning(true);
// //       setCurrentSlide(index);
// //       startProgress();
// //       setTimeout(() => setIsTransitioning(false), 800);
// //     },
// //     [currentSlide, isTransitioning, startProgress]
// //   );

// //   const nextSlide = useCallback(() => {
// //     goToSlide((currentSlide + 1) % slides.length);
// //   }, [currentSlide, slides.length, goToSlide]);

// //   useEffect(() => {
// //     startProgress();
// //     autoPlayRef.current = setInterval(nextSlide, slideDuration);
// //     return () => {
// //       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// //       if (progressInterval.current) clearInterval(progressInterval.current);
// //     };
// //   }, [currentSlide, nextSlide, startProgress]);

// //   return (
// //     <section className="hero-pro">
// //       {/* Background Layer */}
// //       <div className="hero-pro-bg">
// //         {slides.map((slide, index) => (
// //           <div
// //             key={slide.id}
// //             className={`hero-pro-bg-image ${index === currentSlide ? "active" : ""}`}
// //             style={{ backgroundImage: `url(${slide.bgImage})` }}
// //           />
// //         ))}
// //         <div className="hero-pro-bg-overlay" />
// //         <div className="hero-pro-bg-gradient" />
// //       </div>

    

// //       {/* Main Content */}
// //       <div className="hero-pro-main">
// //         <div className="hero-pro-main-inner">
// //           {/* Left Content Section */}
// //           <div className={`hero-pro-content ${isVisible ? "visible" : ""}`}>
// //             {/* Tagline */}
// //             <p className="hero-pro-tagline">{slides[currentSlide].tagline}</p>

// //             {/* Headline */}
// //             <h1 className="hero-pro-headline">
// //               <span className="headline-text">{slides[currentSlide].title}</span>
// //               <span className="headline-highlight">{slides[currentSlide].titleHighlight}</span>
// //             </h1>

// //             {/* Description */}
// //             <p className="hero-pro-desc">{slides[currentSlide].description}</p>

// //             {/* Feature Pills */}
// //             <div className="hero-pro-features">
// //               {slides[currentSlide].features.map((feature, i) => (
// //                 <div key={i} className="hero-pro-feature">
// //                   <span className="feature-value">{feature.value}</span>
// //                   <span className="feature-label">{feature.label}</span>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* CTAs */}
// //             <div className="hero-pro-ctas">
// //               <button className="cta-btn cta-btn-primary">
// //                 {slides[currentSlide].primaryCta}
// //                 <svg viewBox="0 0 24 24" fill="none">
// //                   <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //                 </svg>
// //               </button>
// //               <button className="cta-btn cta-btn-secondary">
// //                 {slides[currentSlide].secondaryCta}
// //               </button>
// //             </div>

// //             {/* Stats Bar */}
// //             <div className="hero-pro-stats">
// //               {slides[currentSlide].stats.map((stat, i) => (
// //                 <React.Fragment key={i}>
// //                   <div className="hero-pro-stat">
// //                     <span className="stat-value">{stat.value}</span>
// //                     <span className="stat-label">{stat.label}</span>
// //                   </div>
// //                   {i < slides[currentSlide].stats.length - 1 && (
// //                     <div className="stat-divider" />
// //                   )}
// //                 </React.Fragment>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Right Product Cards */}
// //           <div className={`hero-pro-products ${isVisible ? "visible" : ""}`}>
// //             <div className="products-header">
// //               <span className="products-title">i Booster Series</span>
// //               <span className="products-subtitle">Enterprise Signal Boosters</span>
// //             </div>
// //             <div className="products-grid">
// //               {slides[currentSlide].productCards.map((card, i) => (
// //                 <div
// //                   key={i}
// //                   className={`product-card ${i === currentSlide ? "active" : ""}`}
// //                   onClick={() => goToSlide(i)}
// //                 >
// //                   <div className="product-card-top">
// //                     <span className="product-power">{card.power}</span>
// //                     <span className="product-type">{card.type}</span>
// //                   </div>
// //                   <div className="product-card-bottom">
// //                     <span className="product-coverage">{card.coverage}</span>
// //                   </div>
// //                   <div className="product-card-bar" />
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Slide Navigation Dots */}
// //             <div className="products-nav">
// //               {slides.map((_, i) => (
// //                 <button
// //                   key={i}
// //                   className={`products-nav-dot ${i === currentSlide ? "active" : ""}`}
// //                   onClick={() => goToSlide(i)}
// //                 >
// //                   <div
// //                     className="products-nav-progress"
// //                     style={{
// //                       width: i === currentSlide ? `${progress}%` : "0%",
// //                     }}
// //                   />
// //                 </button>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// import React, { useEffect, useRef, useState, useCallback } from "react";
// import "./Hero.css";
// import hero1 from "../../assets/hero1.png";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
//   const autoPlayRef = useRef(null);
//   const progressInterval = useRef(null);
//   const heroRef = useRef(null);
//   const slideDuration = 5000;

//   const slides = [
//     {
//       id: 1,
//       bgImage: hero1,
//       tagline: "Enterprise RF Engineering",
//       title: "Mobile Signal Booster",
//       titleAccent: "& RF Solutions",
//       subtitle: "For Homes, Hotels, Hospitals & Commercial Buildings",
//       description:
//         "Futuremax Technology delivers advanced Mobile Signal Boosters, Distributed Antenna Systems (DAS), and Enterprise Wireless Connectivity across India.",
//       specs: [
//         { label: "Power Range", value: "23 – 27 dBm" },
//         { label: "Technology", value: "4G / 5G Multi-Band" },
//         { label: "Coverage", value: "Up to 1000+ m²" },
//         { label: "Operators", value: "All Major Networks" },
//       ],
//       primaryCta: "Get Free RF Site Survey",
//       secondaryCta: "Explore i Booster Series →",
//       products: [
//         { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²" },
//         { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²" },
//         { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²" },
//       ],
//     },
//     {
//       id: 2,
//       bgImage: hero1,
//       tagline: "i Booster 23 dBm",
//       title: "Residential &",
//       titleAccent: "Small Office",
//       subtitle: "Crystal clear coverage for homes and boutique workspaces",
//       description:
//         "Professional 23 dBm boosters engineered for residential buildings and home offices. Compact design, easy installation, all-operator compatibility.",
//       specs: [
//         { label: "Power Output", value: "23 dBm" },
//         { label: "Coverage", value: "Up to 300 m²" },
//         { label: "Installation", value: "Plug & Play" },
//         { label: "Support", value: "All Operators" },
//       ],
//       primaryCta: "View 23 dBm Specs",
//       secondaryCta: "Download Datasheet →",
//       products: [
//         { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²" },
//         { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²" },
//         { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²" },
//       ],
//     },
//     {
//       id: 3,
//       bgImage: hero1,
//       tagline: "i Booster 25 dBm",
//       title: "Commercial &",
//       titleAccent: "Hospitality",
//       subtitle: "Purpose-built for hotels, hospitals & educational campuses",
//       description:
//         "Robust 25 dBm coverage for medium to large facilities. Multi-floor deployment with 24/7 remote monitoring and multi-operator support.",
//       specs: [
//         { label: "Power Output", value: "25 dBm" },
//         { label: "Coverage", value: "Up to 500 m²" },
//         { label: "Deployment", value: "Multi-Floor" },
//         { label: "Monitoring", value: "24/7 Remote" },
//       ],
//       primaryCta: "View 25 dBm Specs",
//       secondaryCta: "Get Commercial Quote →",
//       products: [
//         { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²" },
//         { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²" },
//         { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²" },
//       ],
//     },
//     {
//       id: 4,
//       bgImage: hero1,
//       tagline: "i Booster 27 dBm",
//       title: "Enterprise &",
//       titleAccent: "Industrial",
//       subtitle: "Maximum power for large infrastructure & smart cities",
//       description:
//         "Maximum power 27 dBm for factories, large commercial complexes, and smart city deployments. DAS-ready with industrial-grade reliability.",
//       specs: [
//         { label: "Power Output", value: "27 dBm" },
//         { label: "Coverage", value: "1000+ m²" },
//         { label: "Infrastructure", value: "DAS Ready" },
//         { label: "Installation", value: "Custom Design" },
//       ],
//       primaryCta: "View 27 dBm Specs",
//       secondaryCta: "Request Enterprise Demo →",
//       products: [
//         { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²" },
//         { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²" },
//         { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²" },
//       ],
//     },
//   ];

//   useEffect(() => {
//     setIsVisible(true);
//     return () => {
//       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//       if (progressInterval.current) clearInterval(progressInterval.current);
//     };
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (!heroRef.current) return;
//       const rect = heroRef.current.getBoundingClientRect();
//       setMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100,
//       });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const startProgress = useCallback(() => {
//     setProgress(0);
//     const step = (50 / slideDuration) * 100;
//     if (progressInterval.current) clearInterval(progressInterval.current);
//     progressInterval.current = setInterval(() => {
//       setProgress((prev) => {
//         if (prev >= 100) {
//           clearInterval(progressInterval.current);
//           return 100;
//         }
//         return prev + step;
//       });
//     }, 50);
//   }, []);

//   const goToSlide = useCallback(
//     (index) => {
//       if (isTransitioning || index === currentSlide) return;
//       setIsTransitioning(true);
//       setCurrentSlide(index);
//       startProgress();
//       setTimeout(() => setIsTransitioning(false), 800);
//     },
//     [currentSlide, isTransitioning, startProgress]
//   );

//   const nextSlide = useCallback(() => {
//     goToSlide((currentSlide + 1) % slides.length);
//   }, [currentSlide, slides.length, goToSlide]);

//   useEffect(() => {
//     startProgress();
//     autoPlayRef.current = setInterval(nextSlide, slideDuration);
//     return () => {
//       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//       if (progressInterval.current) clearInterval(progressInterval.current);
//     };
//   }, [currentSlide, nextSlide, startProgress]);

//   return (
//     <section className="hero-redesigned" ref={heroRef}>
//       {/* Background Layer */}
//       <div className="hero-bg-layer">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.id}
//             className={`hero-bg-slide ${index === currentSlide ? "active" : ""}`}
//             style={{ backgroundImage: `url(${slide.bgImage})` }}
//           />
//         ))}
//         <div className="hero-bg-overlay" />
//         <div className="hero-bg-ambient" />
//         <div
//           className="hero-bg-mouse-glow"
//           style={{
//             background: `radial-gradient(700px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)`,
//           }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="hero-content-wrapper">
//         <div className="hero-content-grid">
//           {/* Left Column - Main Content */}
//           <div className={`hero-left ${isVisible ? "visible" : ""}`}>
//             {/* Tag */}
//             <div className="hero-tag">
//               <span className="hero-tag-dot" />
//               <span className="hero-tag-text">{slides[currentSlide].tagline}</span>
//             </div>

//             {/* Headline */}
//             <h1 className="hero-headline">
//               <span className="hero-headline-main">{slides[currentSlide].title}</span>
//               <span className="hero-headline-accent">{slides[currentSlide].titleAccent}</span>
//             </h1>

//             {/* Subtitle */}
//             <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>

//             {/* Description */}
//             <p className="hero-description">{slides[currentSlide].description}</p>

//             {/* Specs Grid */}
//             <div className="hero-specs">
//               {slides[currentSlide].specs.map((spec, i) => (
//                 <div key={i} className="hero-spec-item">
//                   <span className="hero-spec-value">{spec.value}</span>
//                   <span className="hero-spec-label">{spec.label}</span>
//                 </div>
//               ))}
//             </div>

//             {/* CTAs */}
//             <div className="hero-actions">
//               <button className="hero-btn hero-btn-primary">
//                 <span>{slides[currentSlide].primaryCta}</span>
//                 <svg viewBox="0 0 24 24" fill="none">
//                   <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </button>
//               <button className="hero-btn hero-btn-link">
//                 {slides[currentSlide].secondaryCta}
//               </button>
//             </div>
//           </div>

//           {/* Right Column - Product Showcase */}
//           <div className={`hero-right ${isVisible ? "visible" : ""}`}>
//             {/* Product Image Display */}
//             <div className="hero-product-showcase">
//               <div className="hero-product-image-wrapper">
//                 <img
//                   src={slides[currentSlide].bgImage}
//                   alt={slides[currentSlide].title}
//                   className="hero-product-image"
//                 />
//                 <div className="hero-product-image-shade" />
//               </div>
//               <div className="hero-product-label">
//                 <span className="product-label-series">i Booster Series</span>
//                 <span className="product-label-name">{slides[currentSlide].specs[0].value}</span>
//               </div>
//             </div>

//             {/* Product Cards */}
//             <div className="hero-product-cards">
//               {slides[currentSlide].products.map((product, i) => (
//                 <button
//                   key={i}
//                   className={`hero-product-card ${i === currentSlide ? "active" : ""}`}
//                   onClick={() => goToSlide(i)}
//                 >
//                   <div className="product-card-content">
//                     <span className="product-card-power">{product.power}</span>
//                     <span className="product-card-type">{product.type}</span>
//                   </div>
//                   <div className="product-card-coverage">{product.coverage}</div>
//                   <div className="product-card-indicator" />
//                 </button>
//               ))}
//             </div>

//             {/* Progress Navigation */}
//             <div className="hero-progress-nav">
//               {slides.map((_, i) => (
//                 <button
//                   key={i}
//                   className={`hero-progress-dot ${i === currentSlide ? "active" : ""}`}
//                   onClick={() => goToSlide(i)}
//                 >
//                   <div
//                     className="hero-progress-fill"
//                     style={{
//                       width: i === currentSlide ? `${progress}%` : "0%",
//                     }}
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className={`hero-scroll-hint ${isVisible ? "visible" : ""}`}>
//         <span className="scroll-text">Discover i Booster Series</span>
//         <div className="scroll-line" />
//       </div>
//     </section>
//   );
// };

// export default Hero;




import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Hero.css";
import hero1 from "../../assets/hero1.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef(null);
  const progressInterval = useRef(null);
  const heroRef = useRef(null);
  const parallaxRef = useRef(null);
  const slideDuration = 5000;

  const slides = [
    {
      id: 1,
      bgImage: hero1,
      tagline: "Enterprise RF Engineering",
      title: "Mobile Signal Booster",
      titleAccent: "& RF Solutions",
      subtitle: "For Homes, Hotels, Hospitals & Commercial Buildings",
      description:
        "Futuremax Technology delivers advanced Mobile Signal Boosters, Distributed Antenna Systems (DAS), and Enterprise Wireless Connectivity across India.",
      specs: [
        { label: "Power Range", value: "23 – 27 dBm" },
        { label: "Technology", value: "4G / 5G Multi-Band" },
        { label: "Coverage", value: "Up to 1000+ m²" },
        { label: "Operators", value: "All Major Networks" },
      ],
      primaryCta: "Get Free RF Site Survey",
      secondaryCta: "Explore i Booster Series →",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
    {
      id: 2,
      bgImage: hero1,
      tagline: "i Booster 23 dBm",
      title: "Residential &",
      titleAccent: "Small Office",
      subtitle: "Crystal clear coverage for homes and boutique workspaces",
      description:
        "Professional 23 dBm boosters engineered for residential buildings and home offices. Compact design, easy installation, all-operator compatibility.",
      specs: [
        { label: "Power Output", value: "23 dBm" },
        { label: "Coverage", value: "Up to 300 m²" },
        { label: "Installation", value: "Plug & Play" },
        { label: "Support", value: "All Operators" },
      ],
      primaryCta: "View 23 dBm Specs",
      secondaryCta: "Download Datasheet →",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
    {
      id: 3,
      bgImage: hero1,
      tagline: "i Booster 25 dBm",
      title: "Commercial &",
      titleAccent: "Hospitality",
      subtitle: "Purpose-built for hotels, hospitals & educational campuses",
      description:
        "Robust 25 dBm coverage for medium to large facilities. Multi-floor deployment with 24/7 remote monitoring and multi-operator support.",
      specs: [
        { label: "Power Output", value: "25 dBm" },
        { label: "Coverage", value: "Up to 500 m²" },
        { label: "Deployment", value: "Multi-Floor" },
        { label: "Monitoring", value: "24/7 Remote" },
      ],
      primaryCta: "View 25 dBm Specs",
      secondaryCta: "Get Commercial Quote →",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
    {
      id: 4,
      bgImage: hero1,
      tagline: "i Booster 27 dBm",
      title: "Enterprise &",
      titleAccent: "Industrial",
      subtitle: "Maximum power for large infrastructure & smart cities",
      description:
        "Maximum power 27 dBm for factories, large commercial complexes, and smart city deployments. DAS-ready with industrial-grade reliability.",
      specs: [
        { label: "Power Output", value: "27 dBm" },
        { label: "Coverage", value: "1000+ m²" },
        { label: "Infrastructure", value: "DAS Ready" },
        { label: "Installation", value: "Custom Design" },
      ],
      primaryCta: "View 27 dBm Specs",
      secondaryCta: "Request Enterprise Demo →",
      products: [
        { name: "i Booster 23", power: "23 dBm", type: "Residential", coverage: "300 m²", color: "#55C45C" },
        { name: "i Booster 25", power: "25 dBm", type: "Commercial", coverage: "500 m²", color: "#5B91C4" },
        { name: "i Booster 27", power: "27 dBm", type: "Enterprise", coverage: "1000+ m²", color: "#19AB3F" },
      ],
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const startProgress = useCallback(() => {
    setProgress(0);
    const step = (50 / slideDuration) * 100;
    if (progressInterval.current) clearInterval(progressInterval.current);
    progressInterval.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval.current);
          return 100;
        }
        return prev + step;
      });
    }, 50);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === currentSlide) return;
      setIsTransitioning(true);
      setCurrentSlide(index);
      startProgress();
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [currentSlide, isTransitioning, startProgress]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, slides.length, goToSlide]);

  useEffect(() => {
    startProgress();
    autoPlayRef.current = setInterval(nextSlide, slideDuration);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, [currentSlide, nextSlide, startProgress]);

  return (
    <section
      className="hero-cinematic"
      ref={heroRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Floating Particles */}
      <div className="hero-particles-layer">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              opacity: 0.1 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      {/* Background Layer with Parallax */}
      <div className="hero-bg-layer" ref={parallaxRef}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-bg-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)`,
            }}
          />
        ))}
        <div className="hero-bg-overlay" />
        <div className="hero-bg-ambient" />
        <div
          className="hero-bg-mouse-glow"
          style={{
            background: `radial-gradient(${isHovering ? '800px' : '600px'} circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
            transition: 'background 0.8s ease-out',
          }}
        />
      </div>

      {/* Geometric Lines */}
      <div className="hero-geometric">
        <div className="geo-line geo-line-h" style={{ top: '30%', transform: `translateX(${-scrollY * 0.2}px)` }} />
        <div className="geo-line geo-line-v" style={{ left: '25%', transform: `translateY(${-scrollY * 0.15}px)` }} />
        <div className="geo-line geo-line-h" style={{ bottom: '25%', transform: `translateX(${scrollY * 0.2}px)` }} />
        <div className="geo-circle" style={{ transform: `scale(${1 + scrollY * 0.0005})` }} />
      </div>

      {/* Main Content */}
      <div className="hero-content-wrapper">
        <div className="hero-content-grid">
          {/* Left Column - Main Content */}
          <div
            className={`hero-left ${isVisible ? "visible" : ""}`}
            style={{
              transform: `translateY(${isVisible ? scrollY * -0.1 : 40}px)`,
              opacity: isVisible ? Math.max(0, 1 - scrollY * 0.002) : 0,
            }}
          >
            {/* Tag */}
            <div className="hero-tag">
              <span className="hero-tag-dot" />
              <span className="hero-tag-text">{slides[currentSlide].tagline}</span>
            </div>

            {/* Headline */}
            <h1 className="hero-headline">
              <span className="hero-headline-main">{slides[currentSlide].title}</span>
              <span className="hero-headline-accent">{slides[currentSlide].titleAccent}</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">{slides[currentSlide].subtitle}</p>

            {/* Description */}
            <p className="hero-description">{slides[currentSlide].description}</p>

            {/* Specs Grid */}
            <div className="hero-specs">
              {slides[currentSlide].specs.map((spec, i) => (
                <div
                  key={i}
                  className="hero-spec-item"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="hero-spec-value">{spec.value}</span>
                  <span className="hero-spec-label">{spec.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="hero-actions">
              <button className="hero-btn hero-btn-primary">
                <span>{slides[currentSlide].primaryCta}</span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="hero-btn hero-btn-link">
                {slides[currentSlide].secondaryCta}
              </button>
            </div>
          </div>

          {/* Right Column - Product Showcase */}
          <div
            className={`hero-right ${isVisible ? "visible" : ""}`}
            style={{
              transform: `translateY(${isVisible ? scrollY * -0.05 : 40}px)`,
              opacity: isVisible ? Math.max(0, 1 - scrollY * 0.0015) : 0,
            }}
          >
            {/* Product Image Display */}
            <div
              className="hero-product-showcase"
              style={{
                transform: `perspective(1000px) rotateY(${(mousePos.x - 50) * 0.03}deg) rotateX(${(50 - mousePos.y) * 0.03}deg)`,
              }}
            >
              <div className="hero-product-image-wrapper">
                <img
                  src={slides[currentSlide].bgImage}
                  alt={slides[currentSlide].title}
                  className="hero-product-image"
                  style={{
                    transform: `scale(${1 + scrollY * 0.0002})`,
                  }}
                />
                <div className="hero-product-image-shade" />
                <div className="hero-product-image-glare" />
              </div>
              <div className="hero-product-label">
                <span className="product-label-series">i Booster Series</span>
                <span className="product-label-name">{slides[currentSlide].specs[0].value}</span>
              </div>
            </div>

            {/* Product Cards */}
            <div className="hero-product-cards">
              {slides[currentSlide].products.map((product, i) => (
                <button
                  key={i}
                  className={`hero-product-card ${i === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                  style={{
                    '--card-color': product.color,
                    animationDelay: `${i * 0.12}s`,
                  }}
                >
                  <div className="product-card-content">
                    <span className="product-card-power">{product.power}</span>
                    <span className="product-card-type">{product.type}</span>
                  </div>
                  <div className="product-card-coverage">{product.coverage}</div>
                  <div className="product-card-indicator" />
                </button>
              ))}
            </div>

            {/* Progress Navigation */}
            <div className="hero-progress-nav">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`hero-progress-dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => goToSlide(i)}
                >
                  <div
                    className="hero-progress-fill"
                    style={{
                      width: i === currentSlide ? `${progress}%` : "0%",
                    }}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
f
      {/* Scroll Indicator */}
      <div
        className={`hero-scroll-hint ${isVisible ? "visible" : ""}`}
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.004),
          transform: `translateX(-50%) translateY(${scrollY * 0.1}px)`,
        }}
      >
        <span className="scroll-text">Discover i Booster Series</span>
        <div className="scroll-line" />
      </div>
      
    </section>
  );
};

export default Hero;