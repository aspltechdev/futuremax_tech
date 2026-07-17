// // import React, { useEffect, useRef, useState } from "react";
// // import { 
// //   ArrowRight, 
// //   CheckCircle2, 
// //   Home, 
// //   Building2, 
// //   Factory, 
// //   Radio,
// //   Wrench,
// //   ShieldCheck,
// //   Phone,
// //   Mail,
// //   Search,
// //   Gauge,
// //   Headphones,
// //   Award,
// //   Zap,
// //   Globe,
// //   Package,
// //   Antenna,
// //   Cable,
// //   Router
// // } from "lucide-react";
// // import "./Products.css";

// // import productsHeroImg from "../assets/hero1.png";
// // import booster23Img from "../assets/hero1.png";
// // import booster25Img from "../assets/hero1.png";
// // import booster27Img from "../assets/hero1.png";
// // import dasImg from "../assets/hero1.png";
// // import antennaImg from "../assets/hero1.png";
// // import accessoriesImg from "../assets/hero1.png";

// // const prdProducts = [
// //   {
// //     id: "01",
// //     icon: <Home size={28} strokeWidth={1.5} />,
// //     title: "i Booster 23 dBm",
// //     subtitle: "Residential Signal Booster",
// //     description:
// //       "The ideal mobile signal booster for homes, apartments, villas, retail stores, and small offices. Designed to eliminate weak mobile signals, reduce call drops, and improve 4G & 5G data performance across all major telecom operators.",
// //     features: ["Residential Coverage", "70 dB High Gain", "2G / 3G / 4G / 5G", "All Operators"],
// //     specs: [
// //       { label: "Power Output", value: "23 dBm" },
// //       { label: "Coverage", value: "Up to 300 m²" },
// //       { label: "Installation", value: "Plug & Play" },
// //       { label: "Warranty", value: "2 Years" },
// //     ],
// //     image: booster23Img,
// //     accentColor: "#0755A3",
// //     bgLight: "#E8F1FA",
// //     badge: "Best Seller",
// //   },
// //   {
// //     id: "02",
// //     icon: <Building2 size={28} strokeWidth={1.5} />,
// //     title: "i Booster 25 dBm",
// //     subtitle: "Commercial Signal Booster",
// //     description:
// //       "Professional-grade mobile signal booster for hotels, hospitals, resorts, schools, colleges, shopping complexes, and commercial buildings requiring reliable indoor mobile coverage across multiple floors.",
// //     features: ["Commercial Buildings", "Multi Floor Coverage", "Multi Operator Support", "Remote Monitoring"],
// //     specs: [
// //       { label: "Power Output", value: "25 dBm" },
// //       { label: "Coverage", value: "Up to 500 m²" },
// //       { label: "Deployment", value: "Multi-Floor" },
// //       { label: "Warranty", value: "3 Years" },
// //     ],
// //     image: booster25Img,
// //     accentColor: "#0A6FD4",
// //     bgLight: "#F0F7FF",
// //     badge: "Most Popular",
// //   },
// //   {
// //     id: "03",
// //     icon: <Factory size={28} strokeWidth={1.5} />,
// //     title: "i Booster 27 dBm",
// //     subtitle: "Enterprise Signal Booster",
// //     description:
// //       "Enterprise mobile signal booster engineered for factories, warehouses, IT parks, airports, corporate campuses, industrial facilities, and large commercial infrastructures with high-capacity coverage requirements.",
// //     features: ["Enterprise Coverage", "Large Area Solution", "Industrial Grade", "DAS Compatible"],
// //     specs: [
// //       { label: "Power Output", value: "27 dBm" },
// //       { label: "Coverage", value: "Up to 1000+ m²" },
// //       { label: "Infrastructure", value: "DAS Ready" },
// //       { label: "Warranty", value: "5 Years" },
// //     ],
// //     image: booster27Img,
// //     accentColor: "#19AB3F",
// //     bgLight: "#E8F7EA",
// //     badge: "Enterprise Grade",
// //   },
// //   {
// //     id: "04",
// //     icon: <Radio size={28} strokeWidth={1.5} />,
// //     title: "Distributed Antenna Systems (DAS)",
// //     subtitle: "Custom RF Infrastructure",
// //     description:
// //       "Advanced Distributed Antenna Systems designed for hospitals, airports, malls, universities, hotels, and high-rise buildings to provide uniform indoor mobile signal distribution.",
// //     features: ["Indoor Coverage", "Enterprise RF Design", "Scalable Infrastructure", "Custom Engineering"],
// //     specs: [
// //       { label: "Type", value: "Passive DAS" },
// //       { label: "Coverage", value: "Custom Design" },
// //       { label: "Scalability", value: "Unlimited" },
// //       { label: "Support", value: "24/7" },
// //     ],
// //     image: dasImg,
// //     accentColor: "#7C3AED",
// //     bgLight: "#F5F3FF",
// //     badge: "Custom Solution",
// //   },
// //   {
// //     id: "05",
// //     icon: <Antenna size={28} strokeWidth={1.5} />,
// //     title: "RF Antennas & Accessories",
// //     subtitle: "Professional Components",
// //     description:
// //       "Complete range of indoor antennas, outdoor antennas, omni antennas, directional antennas, RF cables, splitters, couplers, lightning arrestors, connectors, and installation accessories for professional deployments.",
// //     features: ["Indoor & Outdoor", "Low Signal Loss", "Professional Quality", "Wide Range"],
// //     specs: [
// //       { label: "Type", value: "Multiple Options" },
// //       { label: "Frequency", value: "700-2700 MHz" },
// //       { label: "Gain", value: "2-12 dBi" },
// //       { label: "Quality", value: "Industrial Grade" },
// //     ],
// //     image: antennaImg,
// //     accentColor: "#EA580C",
// //     bgLight: "#FFF7ED",
// //     badge: "Essential",
// //   },
// //   {
// //     id: "06",
// //     icon: <Package size={28} strokeWidth={1.5} />,
// //     title: "Installation Kits & Tools",
// //     subtitle: "Complete Deployment Package",
// //     description:
// //       "Professional installation kits including mounting brackets, connectors, adapters, tools, and testing equipment for seamless deployment of mobile signal booster and DAS solutions.",
// //     features: ["Complete Kits", "Professional Tools", "Testing Equipment", "Quality Assured"],
// //     specs: [
// //       { label: "Contents", value: "Full Kit" },
// //       { label: "Compatibility", value: "All Models" },
// //       { label: "Quality", value: "Professional" },
// //       { label: "Support", value: "Included" },
// //     ],
// //     image: accessoriesImg,
// //     accentColor: "#0891B2",
// //     bgLight: "#ECFEFF",
// //     badge: "New",
// //   },
// // ];

// // const prdFeatures = [
// //   { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Certified Quality", desc: "All products tested and certified" },
// //   { icon: <Zap size={24} strokeWidth={1.5} />, title: "4G & 5G Ready", desc: "Future-proof technology" },
// //   { icon: <Globe size={24} strokeWidth={1.5} />, title: "Pan India Support", desc: "Installation & service network" },
// //   { icon: <Award size={24} strokeWidth={1.5} />, title: "Warranty", desc: "2-5 year coverage" },
// // ];

// // const Products = () => {
// //   const [prdScrollY, setPrdScrollY] = useState(0);
// //   const [prdMousePos, setPrdMousePos] = useState({ x: 50, y: 50 });
// //   const [prdVisible, setPrdVisible] = useState({
// //     hero: false,
// //     features: false,
// //     products: false,
// //     cta: false,
// //   });
// //   const prdSectionRef = useRef(null);

// //   useEffect(() => {
// //     const handlePrdScroll = () => setPrdScrollY(window.scrollY);
// //     const handlePrdMouse = (e) => {
// //       if (!prdSectionRef.current) return;
// //       const rect = prdSectionRef.current.getBoundingClientRect();
// //       setPrdMousePos({
// //         x: ((e.clientX - rect.left) / rect.width) * 100,
// //         y: ((e.clientY - rect.top) / rect.height) * 100,
// //       });
// //     };
// //     window.addEventListener("scroll", handlePrdScroll, { passive: true });
// //     window.addEventListener("mousemove", handlePrdMouse);
// //     return () => {
// //       window.removeEventListener("scroll", handlePrdScroll);
// //       window.removeEventListener("mousemove", handlePrdMouse);
// //     };
// //   }, []);

// //   useEffect(() => {
// //     const prdObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };

// //     const handleIntersect = (entries) => {
// //       entries.forEach((entry) => {
// //         if (entry.isIntersecting) {
// //           const sectionName = entry.target.dataset.prdSection;
// //           if (sectionName) {
// //             setPrdVisible((prev) => ({ ...prev, [sectionName]: true }));
// //           }
// //         }
// //       });
// //     };

// //     const prdObserver = new IntersectionObserver(handleIntersect, prdObserverOptions);
// //     const prdElements = prdSectionRef.current?.querySelectorAll("[data-prd-section]");
// //     prdElements?.forEach((el) => prdObserver.observe(el));

// //     setTimeout(() => {
// //       setPrdVisible((prev) => ({ ...prev, hero: true }));
// //     }, 100);

// //     return () => prdObserver.disconnect();
// //   }, []);

// //   return (
// //     <main className="prd-page" ref={prdSectionRef}>
// //       {/* ==================== */}
// //       {/* Hero Section         */}
// //       {/* ==================== */}
// //       <section className="prd-hero">
// //         <div className="prd-hero__bg">
// //           <div className="prd-hero__image" style={{ backgroundImage: `url(${productsHeroImg})` }} />
// //           <div className="prd-hero__overlay" />
// //           <div className="prd-hero__grid" />
// //           <div className="prd-hero__glow" style={{ background: `radial-gradient(600px circle at ${prdMousePos.x}% ${prdMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
// //         </div>
// //         <div className="prd-container">
// //           <div className={`prd-hero__content ${prdVisible.hero ? 'prd-hero__content--visible' : ''}`} data-prd-section="hero">
// //             <span className="prd-hero__tag">Enterprise RF Products</span>
// //             <h1 className="prd-hero__title">
// //               Professional Mobile Signal Boosters &
// //               <span className="prd-hero__accent"> Enterprise RF Solutions</span>
// //             </h1>
// //             <p className="prd-hero__desc">
// //               Explore Futuremax Technology's complete portfolio of i Booster Mobile Signal Boosters, 
// //               Distributed Antenna Systems (DAS), RF antennas, accessories, and enterprise wireless 
// //               connectivity solutions. Designed for homes, commercial buildings, hospitals, hotels, 
// //               educational campuses, factories, and large enterprise environments.
// //             </p>
// //             <div className="prd-hero__actions">
// //               <a href="/contact" className="prd-hero__btn prd-hero__btn--primary">
// //                 <span>Request Free RF Site Survey</span>
// //                 <ArrowRight size={16} />
// //               </a>
// //               <a href="#products" className="prd-hero__btn prd-hero__btn--secondary">
// //                 View All Products
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* Features Bar         */}
// //       {/* ==================== */}
// //       <section className="prd-features-bar">
// //         <div className="prd-container">
// //           <div className={`prd-features ${prdVisible.features ? 'prd-features--visible' : ''}`} data-prd-section="features">
// //             {prdFeatures.map((feature, index) => (
// //               <div key={index} className="prd-features__item">
// //                 <div className="prd-features__icon">{feature.icon}</div>
// //                 <div className="prd-features__info">
// //                   <span className="prd-features__title">{feature.title}</span>
// //                   <span className="prd-features__desc">{feature.desc}</span>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* Products Grid        */}
// //       {/* ==================== */}
// //       <section className="prd-grid-section" id="products">
// //         <div className="prd-container">
// //           <div className={`prd-grid__header ${prdVisible.products ? 'prd-grid__header--visible' : ''}`} data-prd-section="products">
// //             <span className="prd-grid__tag">i Booster Series & RF Products</span>
// //             <h2 className="prd-grid__title">
// //               Complete Range of
// //               <span className="prd-grid__accent"> Enterprise RF Solutions</span>
// //             </h2>
// //             <p className="prd-grid__desc">
// //               From 23 dBm residential boosters to 27 dBm enterprise systems, DAS infrastructure, 
// //               RF antennas, and professional installation kits — everything you need for reliable 
// //               indoor mobile coverage.
// //             </p>
// //           </div>

// //           <div className="prd-grid__wrapper">
// //             {prdProducts.map((product, index) => (
// //               <div
// //                 key={product.id}
// //                 className={`prd-card ${prdVisible.products ? 'prd-card--visible' : ''}`}
// //                 data-prd-section="products"
// //                 style={{
// //                   '--prd-accent': product.accentColor,
// //                   '--prd-bg-light': product.bgLight,
// //                   transitionDelay: prdVisible.products ? `${index * 0.08}s` : '0s',
// //                 }}
// //               >
// //                 {/* Card Image */}
// //                 <div className="prd-card__image-wrap">
// //                   <img src={product.image} alt={product.title} className="prd-card__image" />
// //                   <div className="prd-card__image-shade" />
// //                   <span className="prd-card__badge" style={{ background: product.accentColor }}>
// //                     {product.badge}
// //                   </span>
// //                 </div>

// //                 {/* Card Body */}
// //                 <div className="prd-card__body">
// //                   <div className="prd-card__header">
// //                     <div className="prd-card__icon-wrap" style={{ background: product.bgLight, color: product.accentColor }}>
// //                       {product.icon}
// //                     </div>
// //                     <span className="prd-card__subtitle" style={{ color: product.accentColor }}>
// //                       {product.subtitle}
// //                     </span>
// //                   </div>
                  
// //                   <h3 className="prd-card__title">{product.title}</h3>
// //                   <p className="prd-card__desc">{product.description}</p>

// //                   {/* Features */}
// //                   <div className="prd-card__features">
// //                     {product.features.map((feature, i) => (
// //                       <span key={i} className="prd-card__feature">
// //                         <CheckCircle2 size={12} style={{ color: product.accentColor }} />
// //                         {feature}
// //                       </span>
// //                     ))}
// //                   </div>

// //                   {/* Specifications */}
// //                   <div className="prd-card__specs">
// //                     {product.specs.map((spec, i) => (
// //                       <div key={i} className="prd-card__spec">
// //                         <span className="prd-card__spec-value">{spec.value}</span>
// //                         <span className="prd-card__spec-label">{spec.label}</span>
// //                       </div>
// //                     ))}
// //                   </div>

// //                   {/* CTA */}
// //                   <a href="/contact" className="prd-card__btn" style={{ background: product.accentColor }}>
// //                     <span>View Specifications</span>
// //                     <ArrowRight size={14} />
// //                   </a>
// //                 </div>

// //                 {/* Bottom Line */}
// //                 <div className="prd-card__line" style={{ background: product.accentColor }} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* ==================== */}
// //       {/* CTA Section          */}
// //       {/* ==================== */}
// //       <section className="prd-cta">
// //         <div className="prd-container">
// //           <div
// //             className={`prd-cta__card ${prdVisible.cta ? 'prd-cta__card--visible' : ''}`}
// //             data-prd-section="cta"
// //             style={{ transform: `translateY(${prdScrollY * -0.01}px)` }}
// //           >
// //             <div className="prd-cta__content">
// //               <h2 className="prd-cta__title">Looking for the Right Mobile Signal Booster?</h2>
// //               <p className="prd-cta__desc">
// //                 Whether you need reliable mobile coverage for a home, hotel, hospital, commercial 
// //                 building, educational campus, or industrial facility, our RF engineering experts will 
// //                 recommend the ideal i Booster solution based on your coverage requirements, building 
// //                 structure, and network environment.
// //               </p>
// //             </div>
// //             <div className="prd-cta__actions">
// //               <a href="/contact" className="prd-cta__btn">
// //                 <span>Request Free RF Site Survey</span>
// //                 <ArrowRight size={16} />
// //               </a>
// //               <div className="prd-cta__contact">
// //                 <a href="tel:+919876543210" className="prd-cta__contact-link">
// //                   <Phone size={14} />
// //                   +91 98765 43210
// //                 </a>
// //                 <a href="mailto:info@futuremax.com" className="prd-cta__contact-link">
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

// // export default Products;


// import React, { useEffect, useRef, useState } from "react";
// import { 
//   ArrowRight, 
//   CheckCircle2, 
//   Home, 
//   Building2, 
//   Factory, 
//   Radio,
//   Wrench,
//   ShieldCheck,
//   Phone,
//   Mail,
//   Search,
//   Gauge,
//   Headphones,
//   Award,
//   Zap,
//   Globe,
//   Package,
//   Antenna,
//   X,
//   Cpu,
//   Signal,
//   Ruler,
//   Clock,
//   Thermometer,
//   Weight,
// } from "lucide-react";
// import "./Products.css";

// import productsHeroImg from "../assets/hero1.png";
// import booster23Img from "../assets/hero1.png";
// import booster25Img from "../assets/hero1.png";
// import booster27Img from "../assets/hero1.png";
// import dasImg from "../assets/hero1.png";
// import antennaImg from "../assets/hero1.png";
// import accessoriesImg from "../assets/hero1.png";

// const prdProducts = [
//   {
//     id: "01",
//     icon: <Home size={28} strokeWidth={1.5} />,
//     title: "i Booster 23 dBm",
//     subtitle: "Residential Signal Booster",
//     description:
//       "The ideal mobile signal booster for homes, apartments, villas, retail stores, and small offices. Designed to eliminate weak mobile signals, reduce call drops, and improve 4G & 5G data performance across all major telecom operators.",
//     features: ["Residential Coverage", "70 dB High Gain", "2G / 3G / 4G / 5G", "All Operators"],
//     specs: [
//       { label: "Power Output", value: "23 dBm" },
//       { label: "Coverage", value: "Up to 300 m²" },
//       { label: "Installation", value: "Plug & Play" },
//       { label: "Warranty", value: "2 Years" },
//     ],
//     detailedSpecs: [
//       { icon: <Zap size={16} />, label: "Power Output", value: "23 dBm" },
//       { icon: <Ruler size={16} />, label: "Coverage Area", value: "Up to 300 m²" },
//       { icon: <Signal size={16} />, label: "Gain", value: "70 dB" },
//       { icon: <Radio size={16} />, label: "Frequency Bands", value: "700-2700 MHz" },
//       { icon: <Cpu size={16} />, label: "Technology", value: "2G / 3G / 4G / 5G" },
//       { icon: <Globe size={16} />, label: "Operators", value: "All Major Networks" },
//       { icon: <Wrench size={16} />, label: "Installation", value: "Plug & Play" },
//       { icon: <ShieldCheck size={16} />, label: "Warranty", value: "2 Years" },
//       { icon: <Thermometer size={16} />, label: "Operating Temp", value: "-25°C to 55°C" },
//       { icon: <Weight size={16} />, label: "Weight", value: "2.5 kg" },
//     ],
//     image: booster23Img,
//     accentColor: "#0755A3",
//     bgLight: "#E8F1FA",
//     badge: "Best Seller",
//   },
//   {
//     id: "02",
//     icon: <Building2 size={28} strokeWidth={1.5} />,
//     title: "i Booster 25 dBm",
//     subtitle: "Commercial Signal Booster",
//     description:
//       "Professional-grade mobile signal booster for hotels, hospitals, resorts, schools, colleges, shopping complexes, and commercial buildings requiring reliable indoor mobile coverage across multiple floors.",
//     features: ["Commercial Buildings", "Multi Floor Coverage", "Multi Operator Support", "Remote Monitoring"],
//     specs: [
//       { label: "Power Output", value: "25 dBm" },
//       { label: "Coverage", value: "Up to 500 m²" },
//       { label: "Deployment", value: "Multi-Floor" },
//       { label: "Warranty", value: "3 Years" },
//     ],
//     detailedSpecs: [
//       { icon: <Zap size={16} />, label: "Power Output", value: "25 dBm" },
//       { icon: <Ruler size={16} />, label: "Coverage Area", value: "Up to 500 m²" },
//       { icon: <Signal size={16} />, label: "Gain", value: "75 dB" },
//       { icon: <Radio size={16} />, label: "Frequency Bands", value: "700-2700 MHz" },
//       { icon: <Cpu size={16} />, label: "Technology", value: "2G / 3G / 4G / 5G" },
//       { icon: <Globe size={16} />, label: "Operators", value: "All Major Networks" },
//       { icon: <Building2 size={16} />, label: "Deployment", value: "Multi-Floor" },
//       { icon: <ShieldCheck size={16} />, label: "Warranty", value: "3 Years" },
//       { icon: <Thermometer size={16} />, label: "Operating Temp", value: "-25°C to 55°C" },
//       { icon: <Weight size={16} />, label: "Weight", value: "4.5 kg" },
//     ],
//     image: booster25Img,
//     accentColor: "#0A6FD4",
//     bgLight: "#F0F7FF",
//     badge: "Most Popular",
//   },
//   {
//     id: "03",
//     icon: <Factory size={28} strokeWidth={1.5} />,
//     title: "i Booster 27 dBm",
//     subtitle: "Enterprise Signal Booster",
//     description:
//       "Enterprise mobile signal booster engineered for factories, warehouses, IT parks, airports, corporate campuses, industrial facilities, and large commercial infrastructures with high-capacity coverage requirements.",
//     features: ["Enterprise Coverage", "Large Area Solution", "Industrial Grade", "DAS Compatible"],
//     specs: [
//       { label: "Power Output", value: "27 dBm" },
//       { label: "Coverage", value: "Up to 1000+ m²" },
//       { label: "Infrastructure", value: "DAS Ready" },
//       { label: "Warranty", value: "5 Years" },
//     ],
//     detailedSpecs: [
//       { icon: <Zap size={16} />, label: "Power Output", value: "27 dBm" },
//       { icon: <Ruler size={16} />, label: "Coverage Area", value: "Up to 1000+ m²" },
//       { icon: <Signal size={16} />, label: "Gain", value: "80 dB" },
//       { icon: <Radio size={16} />, label: "Frequency Bands", value: "700-2700 MHz" },
//       { icon: <Cpu size={16} />, label: "Technology", value: "2G / 3G / 4G / 5G" },
//       { icon: <Globe size={16} />, label: "Operators", value: "All Major Networks" },
//       { icon: <Factory size={16} />, label: "Infrastructure", value: "DAS Ready" },
//       { icon: <ShieldCheck size={16} />, label: "Warranty", value: "5 Years" },
//       { icon: <Thermometer size={16} />, label: "Operating Temp", value: "-25°C to 55°C" },
//       { icon: <Weight size={16} />, label: "Weight", value: "8 kg" },
//     ],
//     image: booster27Img,
//     accentColor: "#19AB3F",
//     bgLight: "#E8F7EA",
//     badge: "Enterprise Grade",
//   },
//   {
//     id: "04",
//     icon: <Radio size={28} strokeWidth={1.5} />,
//     title: "Distributed Antenna Systems (DAS)",
//     subtitle: "Custom RF Infrastructure",
//     description:
//       "Advanced Distributed Antenna Systems designed for hospitals, airports, malls, universities, hotels, and high-rise buildings to provide uniform indoor mobile signal distribution.",
//     features: ["Indoor Coverage", "Enterprise RF Design", "Scalable Infrastructure", "Custom Engineering"],
//     specs: [
//       { label: "Type", value: "Passive DAS" },
//       { label: "Coverage", value: "Custom Design" },
//       { label: "Scalability", value: "Unlimited" },
//       { label: "Support", value: "24/7" },
//     ],
//     detailedSpecs: [
//       { icon: <Radio size={16} />, label: "System Type", value: "Passive DAS" },
//       { icon: <Ruler size={16} />, label: "Coverage", value: "Custom Design" },
//       { icon: <Signal size={16} />, label: "Frequency", value: "700-2700 MHz" },
//       { icon: <Building2 size={16} />, label: "Application", value: "High-Rise Buildings" },
//       { icon: <Globe size={16} />, label: "Scalability", value: "Unlimited Floors" },
//       { icon: <Cpu size={16} />, label: "Technology", value: "2G / 3G / 4G / 5G" },
//       { icon: <Wrench size={16} />, label: "Design", value: "Custom Engineered" },
//       { icon: <ShieldCheck size={16} />, label: "Support", value: "24/7 NOC" },
//     ],
//     image: dasImg,
//     accentColor: "#7C3AED",
//     bgLight: "#F5F3FF",
//     badge: "Custom Solution",
//   },
// ];

// const prdFeatures = [
//   { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Certified Quality", desc: "All products tested and certified" },
//   { icon: <Zap size={24} strokeWidth={1.5} />, title: "4G & 5G Ready", desc: "Future-proof technology" },
//   { icon: <Globe size={24} strokeWidth={1.5} />, title: "Pan India Support", desc: "Installation & service network" },
//   { icon: <Award size={24} strokeWidth={1.5} />, title: "Warranty", desc: "2-5 year coverage" },
// ];

// const Products = () => {
//   const [prdScrollY, setPrdScrollY] = useState(0);
//   const [prdMousePos, setPrdMousePos] = useState({ x: 50, y: 50 });
//   const [prdVisible, setPrdVisible] = useState({
//     hero: false,
//     features: false,
//     products: false,
//     cta: false,
//   });
//   const [prdSelectedProduct, setPrdSelectedProduct] = useState(null);
//   const prdSectionRef = useRef(null);

//   useEffect(() => {
//     const handlePrdScroll = () => setPrdScrollY(window.scrollY);
//     const handlePrdMouse = (e) => {
//       if (!prdSectionRef.current) return;
//       const rect = prdSectionRef.current.getBoundingClientRect();
//       setPrdMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100,
//       });
//     };
//     window.addEventListener("scroll", handlePrdScroll, { passive: true });
//     window.addEventListener("mousemove", handlePrdMouse);
//     return () => {
//       window.removeEventListener("scroll", handlePrdScroll);
//       window.removeEventListener("mousemove", handlePrdMouse);
//     };
//   }, []);

//   useEffect(() => {
//     if (prdSelectedProduct) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => { document.body.style.overflow = ""; };
//   }, [prdSelectedProduct]);

//   useEffect(() => {
//     const prdObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };

//     const handleIntersect = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionName = entry.target.dataset.prdSection;
//           if (sectionName) {
//             setPrdVisible((prev) => ({ ...prev, [sectionName]: true }));
//           }
//         }
//       });
//     };

//     const prdObserver = new IntersectionObserver(handleIntersect, prdObserverOptions);
//     const prdElements = prdSectionRef.current?.querySelectorAll("[data-prd-section]");
//     prdElements?.forEach((el) => prdObserver.observe(el));

//     setTimeout(() => {
//       setPrdVisible((prev) => ({ ...prev, hero: true }));
//     }, 100);

//     return () => prdObserver.disconnect();
//   }, []);

//   return (
//     <main className="prd-page" ref={prdSectionRef}>
//       {/* ==================== */}
//       {/* Hero Section         */}
//       {/* ==================== */}
//       <section className="prd-hero">
//         <div className="prd-hero__bg">
//           <div className="prd-hero__image" style={{ backgroundImage: `url(${productsHeroImg})` }} />
//           <div className="prd-hero__overlay" />
//           <div className="prd-hero__grid" />
//           <div className="prd-hero__glow" style={{ background: `radial-gradient(600px circle at ${prdMousePos.x}% ${prdMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
//         </div>
//         <div className="prd-container">
//           <div className={`prd-hero__content ${prdVisible.hero ? 'prd-hero__content--visible' : ''}`} data-prd-section="hero">
//             <span className="prd-hero__tag">Enterprise RF Products</span>
//             <h1 className="prd-hero__title">
//               Professional Mobile Signal Boosters &
//               <span className="prd-hero__accent"> Enterprise RF Solutions</span>
//             </h1>
//             <p className="prd-hero__desc">
//               Explore Futuremax Technology's complete portfolio of i Booster Mobile Signal Boosters, 
//               Distributed Antenna Systems (DAS), RF antennas, accessories, and enterprise wireless 
//               connectivity solutions. Designed for homes, commercial buildings, hospitals, hotels, 
//               educational campuses, factories, and large enterprise environments.
//             </p>
//             <div className="prd-hero__actions">
//               <a href="/contact" className="prd-hero__btn prd-hero__btn--primary">
//                 <span>Request Free RF Site Survey</span>
//                 <ArrowRight size={16} />
//               </a>
//               <a href="#products" className="prd-hero__btn prd-hero__btn--secondary">
//                 View All Products
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* Features Bar         */}
//       {/* ==================== */}
//       <section className="prd-features-bar">
//         <div className="prd-container">
//           <div className={`prd-features ${prdVisible.features ? 'prd-features--visible' : ''}`} data-prd-section="features">
//             {prdFeatures.map((feature, index) => (
//               <div key={index} className="prd-features__item">
//                 <div className="prd-features__icon">{feature.icon}</div>
//                 <div className="prd-features__info">
//                   <span className="prd-features__title">{feature.title}</span>
//                   <span className="prd-features__desc">{feature.desc}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* Products Grid        */}
//       {/* ==================== */}
//       <section className="prd-grid-section" id="products">
//         <div className="prd-container">
//           <div className={`prd-grid__header ${prdVisible.products ? 'prd-grid__header--visible' : ''}`} data-prd-section="products">
//             <span className="prd-grid__tag">i Booster Series & RF Products</span>
//             <h2 className="prd-grid__title">
//               Complete Range of
//               <span className="prd-grid__accent"> Enterprise RF Solutions</span>
//             </h2>
//             <p className="prd-grid__desc">
//               From 23 dBm residential boosters to 27 dBm enterprise systems, DAS infrastructure, 
//               RF antennas, and professional installation kits — everything you need for reliable 
//               indoor mobile coverage.
//             </p>
//           </div>

//           <div className="prd-grid__wrapper">
//             {prdProducts.map((product, index) => (
//               <div
//                 key={product.id}
//                 className={`prd-card ${prdVisible.products ? 'prd-card--visible' : ''}`}
//                 data-prd-section="products"
//                 style={{
//                   '--prd-accent': product.accentColor,
//                   '--prd-bg-light': product.bgLight,
//                   transitionDelay: prdVisible.products ? `${index * 0.08}s` : '0s',
//                 }}
//               >
//                 {/* Card Image */}
//                 <div className="prd-card__image-wrap">
//                   <img src={product.image} alt={product.title} className="prd-card__image" />
//                   <div className="prd-card__image-shade" />
//                   <span className="prd-card__badge" style={{ background: product.accentColor }}>
//                     {product.badge}
//                   </span>
//                 </div>

//                 {/* Card Body */}
//                 <div className="prd-card__body">
//                   <div className="prd-card__header">
//                     <div className="prd-card__icon-wrap" style={{ background: product.bgLight, color: product.accentColor }}>
//                       {product.icon}
//                     </div>
//                     <span className="prd-card__subtitle" style={{ color: product.accentColor }}>
//                       {product.subtitle}
//                     </span>
//                   </div>
                  
//                   <h3 className="prd-card__title">{product.title}</h3>
//                   <p className="prd-card__desc">{product.description}</p>

//                   {/* Features */}
//                   <div className="prd-card__features">
//                     {product.features.slice(0, 3).map((feature, i) => (
//                       <span key={i} className="prd-card__feature">
//                         <CheckCircle2 size={12} style={{ color: product.accentColor }} />
//                         {feature}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Specifications Preview */}
//                   <div className="prd-card__specs">
//                     {product.specs.map((spec, i) => (
//                       <div key={i} className="prd-card__spec">
//                         <span className="prd-card__spec-value">{spec.value}</span>
//                         <span className="prd-card__spec-label">{spec.label}</span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA */}
//                   <button 
//                     className="prd-card__btn" 
//                     style={{ background: product.accentColor }}
//                     onClick={() => setPrdSelectedProduct(product)}
//                   >
//                     <span>View Specifications</span>
//                     <ArrowRight size={14} />
//                   </button>
//                 </div>

//                 {/* Bottom Line */}
//                 <div className="prd-card__line" style={{ background: product.accentColor }} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* CTA Section          */}
//       {/* ==================== */}
//       <section className="prd-cta">
//         <div className="prd-container">
//           <div
//             className={`prd-cta__card ${prdVisible.cta ? 'prd-cta__card--visible' : ''}`}
//             data-prd-section="cta"
//             style={{ transform: `translateY(${prdScrollY * -0.01}px)` }}
//           >
//             <div className="prd-cta__content">
//               <h2 className="prd-cta__title">Looking for the Right Mobile Signal Booster?</h2>
//               <p className="prd-cta__desc">
//                 Whether you need reliable mobile coverage for a home, hotel, hospital, commercial 
//                 building, educational campus, or industrial facility, our RF engineering experts will 
//                 recommend the ideal i Booster solution.
//               </p>
//             </div>
//             <div className="prd-cta__actions">
//               <a href="/contact" className="prd-cta__btn">
//                 <span>Request Free RF Site Survey</span>
//                 <ArrowRight size={16} />
//               </a>
//               <div className="prd-cta__contact">
//                 <a href="tel:+919876543210" className="prd-cta__contact-link">
//                   <Phone size={14} />
//                   +91 98765 43210
//                 </a>
//                 <a href="mailto:info@futuremax.com" className="prd-cta__contact-link">
//                   <Mail size={14} />
//                   info@futuremax.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ==================== */}
//       {/* Product Specs Modal  */}
//       {/* ==================== */}
//       {prdSelectedProduct && (
//         <div className="prd-modal-overlay" onClick={() => setPrdSelectedProduct(null)}>
//           <div className="prd-modal" onClick={(e) => e.stopPropagation()}>
//             {/* Close Button */}
//             <button className="prd-modal__close" onClick={() => setPrdSelectedProduct(null)}>
//               <X size={20} />
//             </button>

//             {/* Modal Header Image */}
//             <div className="prd-modal__image-wrap">
//               <img src={prdSelectedProduct.image} alt={prdSelectedProduct.title} className="prd-modal__image" />
//               <div className="prd-modal__image-shade" />
//               <span className="prd-modal__badge" style={{ background: prdSelectedProduct.accentColor }}>
//                 {prdSelectedProduct.badge}
//               </span>
//             </div>

//             {/* Modal Body */}
//             <div className="prd-modal__body">
//               {/* Product Info */}
//               <div className="prd-modal__header">
//                 <div className="prd-modal__icon" style={{ background: prdSelectedProduct.bgLight, color: prdSelectedProduct.accentColor }}>
//                   {prdSelectedProduct.icon}
//                 </div>
//                 <div>
//                   <span className="prd-modal__subtitle" style={{ color: prdSelectedProduct.accentColor }}>
//                     {prdSelectedProduct.subtitle}
//                   </span>
//                   <h2 className="prd-modal__title">{prdSelectedProduct.title}</h2>
//                 </div>
//               </div>

//               <p className="prd-modal__desc">{prdSelectedProduct.description}</p>

//               {/* Key Features */}
//               <div className="prd-modal__section">
//                 <h3 className="prd-modal__section-title">Key Features</h3>
//                 <div className="prd-modal__features">
//                   {prdSelectedProduct.features.map((feature, i) => (
//                     <span key={i} className="prd-modal__feature">
//                       <CheckCircle2 size={16} style={{ color: prdSelectedProduct.accentColor }} />
//                       {feature}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Detailed Specifications */}
//               <div className="prd-modal__section">
//                 <h3 className="prd-modal__section-title">Technical Specifications</h3>
//                 <div className="prd-modal__specs-grid">
//                   {prdSelectedProduct.detailedSpecs.map((spec, i) => (
//                     <div key={i} className="prd-modal__spec-item">
//                       <div className="prd-modal__spec-icon" style={{ color: prdSelectedProduct.accentColor }}>
//                         {spec.icon}
//                       </div>
//                       <div className="prd-modal__spec-info">
//                         <span className="prd-modal__spec-label">{spec.label}</span>
//                         <span className="prd-modal__spec-value">{spec.value}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* CTA */}
//               <div className="prd-modal__cta">
//                 <p className="prd-modal__cta-text">
//                   Interested in the {prdSelectedProduct.title}? Get in touch with our RF experts for pricing and deployment details.
//                 </p>
//                 <a href="/contact" className="prd-modal__cta-btn" style={{ background: prdSelectedProduct.accentColor }}>
//                   <span>Request Quote & Site Survey</span>
//                   <ArrowRight size={16} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Products;



import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Factory, 
  Radio,
  Wrench,
  ShieldCheck,
  Phone,
  Mail,
  Search,
  Gauge,
  Headphones,
  Award,
  Zap,
  Globe,
  Package,
  Antenna,
  X,
  Cpu,
  Signal,
  Ruler,
  Thermometer,
  Weight,
  Cable,
  Router,
  Plug,
  Satellite,
} from "lucide-react";
import "./Products.css";

import productsHeroImg from "../assets/hero1.png";
import booster23Img from "../assets/hero1.png";
import booster25Img from "../assets/hero1.png";
import booster27Img from "../assets/hero1.png";
import dasImg from "../assets/hero1.png";
import antennaImg from "../assets/hero1.png";
import cablesImg from "../assets/hero1.png";
import kitsImg from "../assets/hero1.png";

const prdProducts = [
  // ==================== */
  // i Booster Series      */
  // ==================== */
  {
    id: "01",
    category: "i Booster Series",
    icon: <Home size={28} strokeWidth={1.5} />,
    title: "i Booster 23 dBm",
    subtitle: "Residential Signal Booster",
    description:
      "The ideal mobile signal booster for homes, apartments, villas, retail stores, and small offices. Designed to eliminate weak mobile signals, reduce call drops, and improve 4G & 5G data performance across all major telecom operators like Jio, Airtel, Vi, and BSNL.",
    features: [
      "Residential & Small Office Coverage",
      "70 dB High Gain Amplifier",
      "Supports 2G / 3G / 4G / 5G",
      "All Operator Compatibility",
      "Plug & Play Installation",
      "Low Power Consumption",
    ],
    specs: [
      { label: "Power Output", value: "23 dBm" },
      { label: "Coverage", value: "Up to 300 m²" },
      { label: "Gain", value: "70 dB" },
      { label: "Warranty", value: "2 Years" },
    ],
    detailedSpecs: [
      { icon: <Zap size={16} />, label: "Power Output", value: "23 dBm (200mW)" },
      { icon: <Ruler size={16} />, label: "Coverage Area", value: "Up to 300 m² (3,200 sq ft)" },
      { icon: <Signal size={16} />, label: "Gain", value: "70 dB ± 2 dB" },
      { icon: <Radio size={16} />, label: "Frequency Bands", value: "700-2700 MHz (Multi-Band)" },
      { icon: <Cpu size={16} />, label: "Technology", value: "2G / 3G / 4G / 5G" },
      { icon: <Globe size={16} />, label: "Operators", value: "Jio, Airtel, Vi, BSNL" },
      { icon: <Wrench size={16} />, label: "Installation", value: "Plug & Play (DIY)" },
      { icon: <ShieldCheck size={16} />, label: "Warranty", value: "2 Years" },
      { icon: <Thermometer size={16} />, label: "Operating Temp", value: "-25°C to 55°C" },
      { icon: <Weight size={16} />, label: "Weight", value: "2.5 kg" },
    ],
    image: booster23Img,
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
    badge: "Best Seller",
  },
  {
    id: "02",
    category: "i Booster Series",
    icon: <Building2 size={28} strokeWidth={1.5} />,
    title: "i Booster 25 dBm",
    subtitle: "Commercial Signal Booster",
    description:
      "Professional-grade mobile signal booster for hotels, hospitals, resorts, schools, colleges, shopping complexes, and commercial buildings requiring reliable indoor mobile coverage across multiple floors with multi-operator support.",
    features: [
      "Commercial Building Coverage",
      "Multi-Floor Deployment",
      "Multi-Operator Support",
      "Remote Monitoring Capable",
      "Rack-Mountable Design",
      "High User Density Support",
    ],
    specs: [
      { label: "Power Output", value: "25 dBm" },
      { label: "Coverage", value: "Up to 500 m²" },
      { label: "Gain", value: "75 dB" },
      { label: "Warranty", value: "3 Years" },
    ],
    detailedSpecs: [
      { icon: <Zap size={16} />, label: "Power Output", value: "25 dBm (316mW)" },
      { icon: <Ruler size={16} />, label: "Coverage Area", value: "Up to 500 m² (5,400 sq ft)" },
      { icon: <Signal size={16} />, label: "Gain", value: "75 dB ± 2 dB" },
      { icon: <Radio size={16} />, label: "Frequency Bands", value: "700-2700 MHz (Multi-Band)" },
      { icon: <Cpu size={16} />, label: "Technology", value: "2G / 3G / 4G / 5G" },
      { icon: <Globe size={16} />, label: "Operators", value: "Jio, Airtel, Vi, BSNL" },
      { icon: <Building2 size={16} />, label: "Deployment", value: "Multi-Floor / Rack Mount" },
      { icon: <ShieldCheck size={16} />, label: "Warranty", value: "3 Years" },
      { icon: <Thermometer size={16} />, label: "Operating Temp", value: "-25°C to 55°C" },
      { icon: <Weight size={16} />, label: "Weight", value: "4.5 kg" },
    ],
    image: booster25Img,
    accentColor: "#0A6FD4",
    bgLight: "#F0F7FF",
    badge: "Most Popular",
  },
  {
    id: "03",
    category: "i Booster Series",
    icon: <Factory size={28} strokeWidth={1.5} />,
    title: "i Booster 27 dBm",
    subtitle: "Enterprise Signal Booster",
    description:
      "Enterprise mobile signal booster engineered for factories, warehouses, IT parks, airports, corporate campuses, industrial facilities, and large commercial infrastructures with high-capacity coverage requirements and DAS integration.",
    features: [
      "Enterprise & Industrial Coverage",
      "Large Area Solution (1000+ m²)",
      "Industrial Grade Components",
      "DAS Compatible Architecture",
      "High Capacity Multi-Operator",
      "Heavy-Duty Design",
    ],
    specs: [
      { label: "Power Output", value: "27 dBm" },
      { label: "Coverage", value: "Up to 1000+ m²" },
      { label: "Gain", value: "80 dB" },
      { label: "Warranty", value: "5 Years" },
    ],
    detailedSpecs: [
      { icon: <Zap size={16} />, label: "Power Output", value: "27 dBm (500mW)" },
      { icon: <Ruler size={16} />, label: "Coverage Area", value: "Up to 1000+ m² (10,700 sq ft)" },
      { icon: <Signal size={16} />, label: "Gain", value: "80 dB ± 2 dB" },
      { icon: <Radio size={16} />, label: "Frequency Bands", value: "700-2700 MHz (Multi-Band)" },
      { icon: <Cpu size={16} />, label: "Technology", value: "2G / 3G / 4G / 5G" },
      { icon: <Globe size={16} />, label: "Operators", value: "Jio, Airtel, Vi, BSNL" },
      { icon: <Factory size={16} />, label: "Infrastructure", value: "DAS Ready / Industrial" },
      { icon: <ShieldCheck size={16} />, label: "Warranty", value: "5 Years" },
      { icon: <Thermometer size={16} />, label: "Operating Temp", value: "-25°C to 55°C" },
      { icon: <Weight size={16} />, label: "Weight", value: "8 kg" },
    ],
    image: booster27Img,
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
    badge: "Enterprise Grade",
  },
  // ==================== */
  // DAS Systems           */
  // ==================== */
  {
    id: "04",
    category: "DAS & Infrastructure",
    icon: <Radio size={28} strokeWidth={1.5} />,
    title: "Distributed Antenna Systems (DAS)",
    subtitle: "Custom RF Infrastructure",
    description:
      "Advanced Distributed Antenna Systems designed for hospitals, airports, malls, universities, hotels, and high-rise buildings to provide uniform indoor mobile signal distribution across every floor and corner.",
    features: [
      "Complete Indoor Coverage",
      "Enterprise RF Design",
      "Scalable Multi-Floor Architecture",
      "Custom Engineering Per Building",
      "Passive & Active DAS Options",
      "2G/3G/4G/5G Support",
    ],
    specs: [
      { label: "Type", value: "Passive DAS" },
      { label: "Coverage", value: "Custom Design" },
      { label: "Scalability", value: "Unlimited Floors" },
      { label: "Support", value: "24/7 NOC" },
    ],
    detailedSpecs: [
      { icon: <Radio size={16} />, label: "System Type", value: "Passive DAS" },
      { icon: <Ruler size={16} />, label: "Coverage", value: "Custom Engineered Design" },
      { icon: <Signal size={16} />, label: "Frequency Range", value: "700-2700 MHz" },
      { icon: <Building2 size={16} />, label: "Application", value: "High-Rise / Large Buildings" },
      { icon: <Globe size={16} />, label: "Scalability", value: "Unlimited Floors" },
      { icon: <Cpu size={16} />, label: "Technology", value: "2G / 3G / 4G / 5G" },
      { icon: <Wrench size={16} />, label: "Design", value: "Custom Engineered" },
      { icon: <ShieldCheck size={16} />, label: "Support", value: "24/7 NOC Support" },
    ],
    image: dasImg,
    accentColor: "#7C3AED",
    bgLight: "#F5F3FF",
    badge: "Custom Solution",
  },
  // ==================== */
  // RF Antennas           */
  // ==================== */
  {
    id: "05",
    category: "RF Components",
    icon: <Antenna size={28} strokeWidth={1.5} />,
    title: "RF Antennas & Accessories",
    subtitle: "Professional Grade Components",
    description:
      "Complete range of indoor antennas, outdoor antennas, omni-directional antennas, directional/panel antennas, dome antennas, and specialized RF accessories for professional mobile signal booster and DAS deployments.",
    features: [
      "Indoor & Outdoor Models",
      "Omni & Directional Types",
      "Wide Frequency Range (700-2700 MHz)",
      "Low Signal Loss Design",
      "Weather-Resistant Construction",
      "Professional Grade Quality",
    ],
    specs: [
      { label: "Types", value: "Omni / Panel / Dome" },
      { label: "Frequency", value: "700-2700 MHz" },
      { label: "Gain Range", value: "2-12 dBi" },
      { label: "Quality", value: "Industrial Grade" },
    ],
    detailedSpecs: [
      { icon: <Antenna size={16} />, label: "Antenna Types", value: "Omni, Panel, Dome, Yagi" },
      { icon: <Radio size={16} />, label: "Frequency", value: "700-2700 MHz" },
      { icon: <Signal size={16} />, label: "Gain Options", value: "2 dBi to 12 dBi" },
      { icon: <Globe size={16} />, label: "Application", value: "Indoor & Outdoor" },
      { icon: <ShieldCheck size={16} />, label: "Build Quality", value: "Industrial / Weatherproof" },
      { icon: <Ruler size={16} />, label: "Coverage Pattern", value: "Omni / Directional" },
      { icon: <Thermometer size={16} />, label: "Operating Temp", value: "-40°C to 80°C" },
      { icon: <Weight size={16} />, label: "Mounting", value: "Wall / Pole / Ceiling" },
    ],
    image: antennaImg,
    accentColor: "#EA580C",
    bgLight: "#FFF7ED",
    badge: "Essential",
  },
  // ==================== */
  // RF Cables             */
  // ==================== */
  {
    id: "06",
    category: "RF Components",
    icon: <Cable size={28} strokeWidth={1.5} />,
    title: "RF Cables & Connectors",
    subtitle: "Low-Loss Transmission",
    description:
      "High-quality RF coaxial cables, low-loss feeder cables, connectors, adapters, splitters, couplers, lightning arrestors, and grounding kits for professional signal booster and DAS installations with minimal signal loss.",
    features: [
      "Low-Loss Coaxial Cables",
      "Multiple Connector Types",
      "Splitters & Couplers Available",
      "Lightning Protection",
      "Grounding Kits Included",
      "Custom Length Options",
    ],
   specs: [
  { label: "Cable Types", value: "RG58 / LMR400 / 1/2\"" },
  { label: "Connectors", value: "N-Type / SMA / BNC" },
  { label: "Impedance", value: "50 Ohm" },
  { label: "Quality", value: "Industrial Grade" },
],
    detailedSpecs: [
      { icon: <Cable size={16} />, label: "Cable Types", value: "RG58, LMR400, 1/2\" Feeder" },
      { icon: <Plug size={16} />, label: "Connectors", value: "N-Type, SMA, BNC, TNC" },
      { icon: <Signal size={16} />, label: "Impedance", value: "50 Ohm Standard" },
      { icon: <Zap size={16} />, label: "Lightning Protection", value: "Arrestors & Grounding" },
      { icon: <Router size={16} />, label: "Splitters/Couplers", value: "2-way, 3-way, 4-way" },
      { icon: <ShieldCheck size={16} />, label: "Shielding", value: "Double Shielded" },
      { icon: <Ruler size={16} />, label: "Length Options", value: "Custom / Standard" },
      { icon: <Thermometer size={16} />, label: "Operating Temp", value: "-40°C to 85°C" },
    ],
    image: cablesImg,
    accentColor: "#0891B2",
    bgLight: "#ECFEFF",
    badge: "New",
  },
  // ==================== */
  // Installation Kits     */
  // ==================== */
  {
    id: "07",
    category: "Tools & Kits",
    icon: <Package size={28} strokeWidth={1.5} />,
    title: "Installation Kits & Tools",
    subtitle: "Complete Deployment Package",
    description:
      "Professional installation kits including mounting brackets, wall mounts, pole mounts, connectors, adapters, crimping tools, cable testers, signal meters, and complete testing equipment for seamless deployment of mobile signal booster and DAS solutions.",
    features: [
      "Complete Installation Kit",
      "Mounting Hardware Included",
      "Professional Crimping Tools",
      "Signal Testing Equipment",
      "Cable Management Accessories",
      "Quality Assured Components",
    ],
    specs: [
      { label: "Contents", value: "Full Installation Kit" },
      { label: "Compatibility", value: "All i Booster Models" },
      { label: "Tools", value: "Professional Grade" },
      { label: "Support", value: "Installation Guide" },
    ],
    detailedSpecs: [
      { icon: <Package size={16} />, label: "Kit Contents", value: "Mounts, Tools, Testers, Accessories" },
      { icon: <Wrench size={16} />, label: "Tools Included", value: "Crimper, Stripper, Tester" },
      { icon: <Router size={16} />, label: "Mounting Options", value: "Wall, Pole, Ceiling Mounts" },
      { icon: <Gauge size={16} />, label: "Testing Equipment", value: "Signal Meter, Cable Tester" },
      { icon: <ShieldCheck size={16} />, label: "Compatibility", value: "All i Booster & DAS Models" },
      { icon: <Globe size={16} />, label: "Accessories", value: "Ties, Clips, Labels, Tape" },
      { icon: <Award size={16} />, label: "Quality", value: "Professional Grade" },
      { icon: <Headphones size={16} />, label: "Support", value: "Installation Guide + Video" },
    ],
    image: kitsImg,
    accentColor: "#16A34A",
    bgLight: "#F0FDF4",
    badge: "Essential",
  },
  // ==================== */
  // Signal Testing        */
  // ==================== */
  {
    id: "08",
    category: "Tools & Kits",
    icon: <Gauge size={28} strokeWidth={1.5} />,
    title: "Signal Testing & Measurement",
    subtitle: "Professional RF Tools",
    description:
      "Professional-grade RF signal meters, spectrum analyzers, cable testers, and measurement tools for accurate signal strength analysis, coverage verification, and system optimization during and after installation.",
    features: [
      "Digital Signal Meters",
      "Spectrum Analysis Tools",
      "Coverage Verification",
      "Cable & Connector Testing",
      "Portable & Handheld Design",
      "Professional Accuracy",
    ],
    specs: [
      { label: "Type", value: "Digital RF Meter" },
      { label: "Frequency", value: "700-2700 MHz" },
      { label: "Display", value: "LCD Color Screen" },
      { label: "Accuracy", value: "±1 dB" },
    ],
    detailedSpecs: [
      { icon: <Gauge size={16} />, label: "Meter Type", value: "Digital RF Signal Meter" },
      { icon: <Radio size={16} />, label: "Frequency Range", value: "700-2700 MHz" },
      { icon: <Cpu size={16} />, label: "Display", value: "LCD Color Display" },
      { icon: <Signal size={16} />, label: "Measurement", value: "Signal Strength, Quality, BER" },
      { icon: <Zap size={16} />, label: "Accuracy", value: "±1 dB" },
      { icon: <Weight size={16} />, label: "Design", value: "Portable / Handheld" },
      { icon: <ShieldCheck size={16} />, label: "Battery", value: "Rechargeable Li-ion" },
      { icon: <Globe size={16} />, label: "Applications", value: "Site Survey & Verification" },
    ],
    image: kitsImg,
    accentColor: "#DC2626",
    bgLight: "#FEF2F2",
    badge: "Professional",
  },
];

const prdCategories = [
  "All Products",
  "i Booster Series",
  "DAS & Infrastructure",
  "RF Components",
  "Tools & Kits",
];

const prdFeatures = [
  { icon: <ShieldCheck size={24} strokeWidth={1.5} />, title: "Certified Quality", desc: "All products tested & certified" },
  { icon: <Zap size={24} strokeWidth={1.5} />, title: "4G & 5G Ready", desc: "Future-proof technology" },
  { icon: <Globe size={24} strokeWidth={1.5} />, title: "Pan India Support", desc: "Installation & service network" },
  { icon: <Award size={24} strokeWidth={1.5} />, title: "Warranty Included", desc: "2-5 year coverage" },
];

const Products = () => {
  const [prdScrollY, setPrdScrollY] = useState(0);
  const [prdMousePos, setPrdMousePos] = useState({ x: 50, y: 50 });
  const [prdVisible, setPrdVisible] = useState({
    hero: false,
    features: false,
    products: false,
    cta: false,
  });
  const [prdSelectedProduct, setPrdSelectedProduct] = useState(null);
  const [prdActiveCategory, setPrdActiveCategory] = useState("All Products");
  const prdSectionRef = useRef(null);

  useEffect(() => {
    const handlePrdScroll = () => setPrdScrollY(window.scrollY);
    const handlePrdMouse = (e) => {
      if (!prdSectionRef.current) return;
      const rect = prdSectionRef.current.getBoundingClientRect();
      setPrdMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener("scroll", handlePrdScroll, { passive: true });
    window.addEventListener("mousemove", handlePrdMouse);
    return () => {
      window.removeEventListener("scroll", handlePrdScroll);
      window.removeEventListener("mousemove", handlePrdMouse);
    };
  }, []);

  useEffect(() => {
    if (prdSelectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [prdSelectedProduct]);

  useEffect(() => {
    const prdObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.prdSection;
          if (sectionName) {
            setPrdVisible((prev) => ({ ...prev, [sectionName]: true }));
          }
        }
      });
    };
    const prdObserver = new IntersectionObserver(handleIntersect, prdObserverOptions);
    const prdElements = prdSectionRef.current?.querySelectorAll("[data-prd-section]");
    prdElements?.forEach((el) => prdObserver.observe(el));
    setTimeout(() => { setPrdVisible((prev) => ({ ...prev, hero: true })); }, 100);
    return () => prdObserver.disconnect();
  }, []);

  const prdFilteredProducts = prdActiveCategory === "All Products" 
    ? prdProducts 
    : prdProducts.filter(p => p.category === prdActiveCategory);

  return (
    <main className="prd-page" ref={prdSectionRef}>
      {/* Hero Section */}
      <section className="prd-hero">
        <div className="prd-hero__bg">
          <div className="prd-hero__image" style={{ backgroundImage: `url(${productsHeroImg})` }} />
          <div className="prd-hero__overlay" />
          <div className="prd-hero__grid" />
          <div className="prd-hero__glow" style={{ background: `radial-gradient(600px circle at ${prdMousePos.x}% ${prdMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        </div>
        <div className="prd-container">
          <div className={`prd-hero__content ${prdVisible.hero ? 'prd-hero__content--visible' : ''}`} data-prd-section="hero">
            <span className="prd-hero__tag">Enterprise RF Products</span>
            <h1 className="prd-hero__title">
              Professional Mobile Signal Boosters &
              <span className="prd-hero__accent"> Enterprise RF Solutions</span>
            </h1>
            <p className="prd-hero__desc">
              Explore Futuremax Technology's complete portfolio of i Booster Mobile Signal Boosters (23 dBm, 25 dBm, 27 dBm), 
              Distributed Antenna Systems (DAS), RF antennas, cables, accessories, and professional installation tools. 
              Designed for homes, commercial buildings, hospitals, hotels, educational campuses, factories, and large enterprise environments.
            </p>
            <div className="prd-hero__actions">
              <a href="/contact" className="prd-hero__btn prd-hero__btn--primary">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <a href="#products" className="prd-hero__btn prd-hero__btn--secondary">
                View All Products
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="prd-features-bar">
        <div className="prd-container">
          <div className={`prd-features ${prdVisible.features ? 'prd-features--visible' : ''}`} data-prd-section="features">
            {prdFeatures.map((feature, index) => (
              <div key={index} className="prd-features__item">
                <div className="prd-features__icon">{feature.icon}</div>
                <div className="prd-features__info">
                  <span className="prd-features__title">{feature.title}</span>
                  <span className="prd-features__desc">{feature.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="prd-grid-section" id="products">
        <div className="prd-container">
          <div className={`prd-grid__header ${prdVisible.products ? 'prd-grid__header--visible' : ''}`} data-prd-section="products">
            <span className="prd-grid__tag">i Booster Series & RF Products</span>
            <h2 className="prd-grid__title">
              Complete Range of
              <span className="prd-grid__accent"> Enterprise RF Solutions</span>
            </h2>
            <p className="prd-grid__desc">
              From 23 dBm residential boosters to 27 dBm enterprise systems, DAS infrastructure, 
              RF antennas, cables, connectors, and professional installation kits — everything you need for reliable 
              indoor mobile coverage.
            </p>
          </div>

          {/* Category Filters */}
          <div className="prd-categories">
            {prdCategories.map((cat) => (
              <button
                key={cat}
                className={`prd-categories__btn ${prdActiveCategory === cat ? 'prd-categories__btn--active' : ''}`}
                onClick={() => setPrdActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="prd-grid__wrapper">
            {prdFilteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`prd-card ${prdVisible.products ? 'prd-card--visible' : ''}`}
                data-prd-section="products"
                style={{
                  '--prd-accent': product.accentColor,
                  '--prd-bg-light': product.bgLight,
                  transitionDelay: prdVisible.products ? `${index * 0.06}s` : '0s',
                }}
              >
                <div className="prd-card__image-wrap">
                  <img src={product.image} alt={product.title} className="prd-card__image" />
                  <div className="prd-card__image-shade" />
                  <span className="prd-card__badge" style={{ background: product.accentColor }}>
                    {product.badge}
                  </span>
                </div>
                <div className="prd-card__body">
                  <div className="prd-card__header">
                    <div className="prd-card__icon-wrap" style={{ background: product.bgLight, color: product.accentColor }}>
                      {product.icon}
                    </div>
                    <span className="prd-card__subtitle" style={{ color: product.accentColor }}>
                      {product.subtitle}
                    </span>
                  </div>
                  <h3 className="prd-card__title">{product.title}</h3>
                  <p className="prd-card__desc">{product.description}</p>
                  <div className="prd-card__features">
                    {product.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="prd-card__feature">
                        <CheckCircle2 size={12} style={{ color: product.accentColor }} />
                        {feature}
                      </span>
                    ))}
                    {product.features.length > 3 && (
                      <span className="prd-card__feature-more" style={{ color: product.accentColor }}>
                        +{product.features.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="prd-card__specs">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="prd-card__spec">
                        <span className="prd-card__spec-value">{spec.value}</span>
                        <span className="prd-card__spec-label">{spec.label}</span>
                      </div>
                    ))}
                  </div>
                  <button 
                    className="prd-card__btn" 
                    style={{ background: product.accentColor }}
                    onClick={() => setPrdSelectedProduct(product)}
                  >
                    <span>View Specifications</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
                <div className="prd-card__line" style={{ background: product.accentColor }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="prd-cta">
        <div className="prd-container">
          <div
            className={`prd-cta__card ${prdVisible.cta ? 'prd-cta__card--visible' : ''}`}
            data-prd-section="cta"
            style={{ transform: `translateY(${prdScrollY * -0.01}px)` }}
          >
            <div className="prd-cta__content">
              <h2 className="prd-cta__title">Looking for the Right Mobile Signal Booster?</h2>
              <p className="prd-cta__desc">
                Whether you need reliable mobile coverage for a home, hotel, hospital, commercial 
                building, educational campus, or industrial facility, our RF engineering experts will 
                recommend the ideal i Booster solution based on your coverage requirements, building 
                structure, and network environment.
              </p>
            </div>
            <div className="prd-cta__actions">
              <a href="/contact" className="prd-cta__btn">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <div className="prd-cta__contact">
                <a href="tel:+919876543210" className="prd-cta__contact-link">
                  <Phone size={14} />
                  +91 98765 43210
                </a>
                <a href="mailto:info@futuremax.com" className="prd-cta__contact-link">
                  <Mail size={14} />
                  info@futuremax.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Specs Modal */}
      {prdSelectedProduct && (
        <div className="prd-modal-overlay" onClick={() => setPrdSelectedProduct(null)}>
          <div className="prd-modal" onClick={(e) => e.stopPropagation()}>
            <button className="prd-modal__close" onClick={() => setPrdSelectedProduct(null)}>
              <X size={20} />
            </button>
            <div className="prd-modal__image-wrap">
              <img src={prdSelectedProduct.image} alt={prdSelectedProduct.title} className="prd-modal__image" />
              <div className="prd-modal__image-shade" />
              <span className="prd-modal__badge" style={{ background: prdSelectedProduct.accentColor }}>
                {prdSelectedProduct.badge}
              </span>
            </div>
            <div className="prd-modal__body">
              <div className="prd-modal__header">
                <div className="prd-modal__icon" style={{ background: prdSelectedProduct.bgLight, color: prdSelectedProduct.accentColor }}>
                  {prdSelectedProduct.icon}
                </div>
                <div>
                  <span className="prd-modal__subtitle" style={{ color: prdSelectedProduct.accentColor }}>
                    {prdSelectedProduct.subtitle}
                  </span>
                  <h2 className="prd-modal__title">{prdSelectedProduct.title}</h2>
                </div>
              </div>
              <p className="prd-modal__desc">{prdSelectedProduct.description}</p>
              <div className="prd-modal__section">
                <h3 className="prd-modal__section-title">Key Features</h3>
                <div className="prd-modal__features">
                  {prdSelectedProduct.features.map((feature, i) => (
                    <span key={i} className="prd-modal__feature">
                      <CheckCircle2 size={16} style={{ color: prdSelectedProduct.accentColor }} />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <div className="prd-modal__section">
                <h3 className="prd-modal__section-title">Technical Specifications</h3>
                <div className="prd-modal__specs-grid">
                  {prdSelectedProduct.detailedSpecs.map((spec, i) => (
                    <div key={i} className="prd-modal__spec-item">
                      <div className="prd-modal__spec-icon" style={{ color: prdSelectedProduct.accentColor }}>
                        {spec.icon}
                      </div>
                      <div className="prd-modal__spec-info">
                        <span className="prd-modal__spec-label">{spec.label}</span>
                        <span className="prd-modal__spec-value">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="prd-modal__cta">
                <p className="prd-modal__cta-text">
                  Interested in the {prdSelectedProduct.title}? Get in touch with our RF experts for pricing and deployment details.
                </p>
                <a href="/contact" className="prd-modal__cta-btn" style={{ background: prdSelectedProduct.accentColor }}>
                  <span>Request Quote & Site Survey</span>
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Products;