// import React, { useEffect, useRef, useState } from "react";
// import { 
//   ArrowRight, 
//   CheckCircle2, 
//   Home, 
//   Building2, 
//   Factory, 
//   Hotel,
//   GraduationCap,
//   Plane,
//   Building,
//   ShieldCheck,
//   Phone,
//   Mail,
//   Award,
//   Zap,
//   Globe,
//   Stethoscope,
//   Store,
//   ChevronLeft,
//   ChevronRight,
//   Radio,
//   Wrench,
// } from "lucide-react";
// import "./IndustriesPage.css";

// import industriesHeroImg from "../assets/hero1.png";
// import residentialImg from "../assets/hero1.png";
// import hotelImg from "../assets/hero1.png";
// import hospitalImg from "../assets/hero1.png";
// import commercialImg from "../assets/hero1.png";
// import educationImg from "../assets/hero1.png";
// import factoryImg from "../assets/hero1.png";
// import airportImg from "../assets/hero1.png";
// import corporateImg from "../assets/hero1.png";
// import retailImg from "../assets/hero1.png";

// const indIndustries = [
//   {
//     id: "01",
//     icon: <Home size={32} strokeWidth={1.5} />,
//     title: "Residential Communities",
//     subtitle: "Homes, Apartments & Villas",
//     description:
//       "Reliable mobile signal booster solutions for homes, villas, apartments, gated communities, and residential towers. Our 23 dBm i Booster ensures crystal-clear calls and faster 4G & 5G connectivity across all major operators like Jio, Airtel, Vi, and BSNL.",
//     features: [
//       "Homes & Villas",
//       "Apartments & Flats",
//       "Gated Communities",
//       "23 dBm Coverage",
//       "All Operator Support",
//       "Plug & Play Installation",
//     ],
//     productRecommendation: "i Booster 23 dBm",
//     coverage: "Up to 300 m²",
//     image: residentialImg,
//     accentColor: "#0755A3",
//     bgLight: "#E8F1FA",
//     stats: [
//       { value: "100+", label: "Residential Projects" },
//       { value: "23 dBm", label: "Recommended Booster" },
//       { value: "300 m²", label: "Avg Coverage" },
//     ],
//   },
//   {
//     id: "02",
//     icon: <Hotel size={32} strokeWidth={1.5} />,
//     title: "Hotels & Hospitality",
//     subtitle: "Hotels, Resorts & Convention Centres",
//     description:
//       "Deliver uninterrupted mobile connectivity for hotels, resorts, convention centres, and luxury hospitality spaces. Our 25 dBm commercial booster with DAS ensures seamless coverage across guest rooms, banquet halls, and common areas for enhanced guest experience.",
//     features: [
//       "5-Star Hotels",
//       "Resorts & Spas",
//       "Convention Centres",
//       "Banquet Halls",
//       "Guest Room Coverage",
//       "Multi-Floor Support",
//     ],
//     productRecommendation: "i Booster 25 dBm + DAS",
//     coverage: "Up to 500 m²",
//     image: hotelImg,
//     accentColor: "#0A6FD4",
//     bgLight: "#F0F7FF",
//     stats: [
//       { value: "50+", label: "Hotel Projects" },
//       { value: "25 dBm", label: "Recommended Booster" },
//       { value: "500 m²", label: "Avg Coverage" },
//     ],
//   },
//   {
//     id: "03",
//     icon: <Stethoscope size={32} strokeWidth={1.5} />,
//     title: "Hospitals & Healthcare",
//     subtitle: "Hospitals, Clinics & Medical Centres",
//     description:
//       "Professional RF engineering solutions designed for hospitals, clinics, and healthcare campuses where continuous mobile communication is critical for patient care, emergency response teams, and medical staff coordination across all departments.",
//     features: [
//       "Multi-Speciality Hospitals",
//       "Clinics & Diagnostics",
//       "Emergency Departments",
//       "Patient Rooms",
//       "Critical Care Units",
//       "24/7 Reliability",
//     ],
//     productRecommendation: "i Booster 25 dBm + DAS",
//     coverage: "Custom Design",
//     image: hospitalImg,
//     accentColor: "#19AB3F",
//     bgLight: "#E8F7EA",
//     stats: [
//       { value: "30+", label: "Hospital Projects" },
//       { value: "DAS", label: "Recommended Solution" },
//       { value: "Custom", label: "Coverage Design" },
//     ],
//   },
//   {
//     id: "04",
//     icon: <Building2 size={32} strokeWidth={1.5} />,
//     title: "Commercial Buildings",
//     subtitle: "Offices, IT Parks & Business Centres",
//     description:
//       "Enterprise mobile signal boosters for office buildings, IT parks, shopping malls, and business centres. We ensure strong indoor coverage across multiple floors with high user density support for uninterrupted business communication.",
//     features: [
//       "Office Buildings",
//       "IT Parks & Tech Campuses",
//       "Business Centres",
//       "Meeting Rooms",
//       "Co-working Spaces",
//       "Multi-Tenant Support",
//     ],
//     productRecommendation: "i Booster 25/27 dBm",
//     coverage: "Up to 1000+ m²",
//     image: commercialImg,
//     accentColor: "#7C3AED",
//     bgLight: "#F5F3FF",
//     stats: [
//       { value: "80+", label: "Commercial Projects" },
//       { value: "27 dBm", label: "Recommended Booster" },
//       { value: "1000+ m²", label: "Max Coverage" },
//     ],
//   },
//   {
//     id: "05",
//     icon: <GraduationCap size={32} strokeWidth={1.5} />,
//     title: "Education & Campuses",
//     subtitle: "Schools, Colleges & Universities",
//     description:
//       "Campus-wide wireless connectivity for schools, colleges, universities, and educational institutions. Our scalable RF engineering and Distributed Antenna Systems (DAS) ensure consistent indoor coverage across classrooms, labs, libraries, and dorms.",
//     features: [
//       "Schools & Colleges",
//       "Universities",
//       "Libraries & Labs",
//       "Auditoriums",
//       "Administration Buildings",
//       "Hostel Coverage",
//     ],
//     productRecommendation: "DAS + i Booster 25 dBm",
//     coverage: "Campus-Wide",
//     image: educationImg,
//     accentColor: "#EA580C",
//     bgLight: "#FFF7ED",
//     stats: [
//       { value: "20+", label: "Campus Projects" },
//       { value: "DAS", label: "Recommended Solution" },
//       { value: "Campus", label: "Coverage Type" },
//     ],
//   },
//   {
//     id: "06",
//     icon: <Factory size={32} strokeWidth={1.5} />,
//     title: "Industrial & Manufacturing",
//     subtitle: "Factories, Warehouses & Plants",
//     description:
//       "High-capacity 27 dBm enterprise boosters engineered for factories, warehouses, manufacturing plants, and logistics hubs. Industrial-grade reliability with DAS integration for uninterrupted communication across heavy machinery areas.",
//     features: [
//       "Factories & Plants",
//       "Warehouses",
//       "Manufacturing Units",
//       "Logistics Hubs",
//       "Heavy Machinery Areas",
//       "Industrial Grade",
//     ],
//     productRecommendation: "i Booster 27 dBm",
//     coverage: "Up to 1000+ m²",
//     image: factoryImg,
//     accentColor: "#DC2626",
//     bgLight: "#FEF2F2",
//     stats: [
//       { value: "40+", label: "Industrial Projects" },
//       { value: "27 dBm", label: "Recommended Booster" },
//       { value: "1000+ m²", label: "Max Coverage" },
//     ],
//   },
// ];

// const IndustriesPage = () => {
//   const [indScrollY, setIndScrollY] = useState(0);
//   const [indMousePos, setIndMousePos] = useState({ x: 50, y: 50 });
//   const [indVisible, setIndVisible] = useState({
//     hero: false,
//     showcase: false,
//     list: false,
//     cta: false,
//   });
//   const [indActiveIndustry, setIndActiveIndustry] = useState(0);
//   const indSectionRef = useRef(null);

//   useEffect(() => {
//     const handleIndScroll = () => setIndScrollY(window.scrollY);
//     const handleIndMouse = (e) => {
//       if (!indSectionRef.current) return;
//       const rect = indSectionRef.current.getBoundingClientRect();
//       setIndMousePos({
//         x: ((e.clientX - rect.left) / rect.width) * 100,
//         y: ((e.clientY - rect.top) / rect.height) * 100,
//       });
//     };
//     window.addEventListener("scroll", handleIndScroll, { passive: true });
//     window.addEventListener("mousemove", handleIndMouse);
//     return () => {
//       window.removeEventListener("scroll", handleIndScroll);
//       window.removeEventListener("mousemove", handleIndMouse);
//     };
//   }, []);

//   useEffect(() => {
//     const indObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
//     const handleIntersect = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionName = entry.target.dataset.indSection;
//           if (sectionName) {
//             setIndVisible((prev) => ({ ...prev, [sectionName]: true }));
//           }
//         }
//       });
//     };
//     const indObserver = new IntersectionObserver(handleIntersect, indObserverOptions);
//     const indElements = indSectionRef.current?.querySelectorAll("[data-ind-section]");
//     indElements?.forEach((el) => indObserver.observe(el));
//     setTimeout(() => { setIndVisible((prev) => ({ ...prev, hero: true })); }, 100);
//     return () => indObserver.disconnect();
//   }, []);

//   const handlePrev = () => setIndActiveIndustry((prev) => (prev > 0 ? prev - 1 : indIndustries.length - 1));
//   const handleNext = () => setIndActiveIndustry((prev) => (prev < indIndustries.length - 1 ? prev + 1 : 0));

//   return (
//     <main className="ind-page" ref={indSectionRef}>
//       {/* Hero Section */}
//       <section className="ind-hero">
//         <div className="ind-hero__bg">
//           <div className="ind-hero__image" style={{ backgroundImage: `url(${industriesHeroImg})` }} />
//           <div className="ind-hero__overlay" />
//           <div className="ind-hero__grid" />
//           <div className="ind-hero__glow" style={{ background: `radial-gradient(600px circle at ${indMousePos.x}% ${indMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
//         </div>
//         <div className="ind-container">
//           <div className={`ind-hero__content ${indVisible.hero ? 'ind-hero__content--visible' : ''}`} data-ind-section="hero">
//             <span className="ind-hero__tag">Industries We Serve</span>
//             <h1 className="ind-hero__title">
//               Enterprise Wireless Connectivity
//               <span className="ind-hero__accent"> Solutions for Every Industry</span>
//             </h1>
//             <p className="ind-hero__desc">
//               Futuremax Technology delivers RF Engineering, Mobile Signal Boosters, Distributed 
//               Antenna Systems (DAS), and enterprise wireless connectivity solutions for residential 
//               communities, hotels, hospitals, educational campuses, commercial buildings, factories, 
//               corporate offices, and public infrastructure across India.
//             </p>
//             <div className="ind-hero__actions">
//               <a href="/contact" className="ind-hero__btn ind-hero__btn--primary">
//                 <span>Request Free RF Site Survey</span>
//                 <ArrowRight size={16} />
//               </a>
//               <a href="#showcase" className="ind-hero__btn ind-hero__btn--secondary">
//                 Explore Industries
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Industry Showcase */}
//       <section className="ind-showcase" id="showcase">
//         <div className="ind-container">
//           <div className={`ind-showcase__header ${indVisible.showcase ? 'ind-showcase__header--visible' : ''}`} data-ind-section="showcase">
//             <span className="ind-showcase__tag">Industry Solutions</span>
//             <h2 className="ind-showcase__title">
//               Engineered for Every Building
//               <span className="ind-showcase__accent"> Every Coverage Requirement</span>
//             </h2>
//           </div>

//           <div className={`ind-showcase__wrapper ${indVisible.showcase ? 'ind-showcase__wrapper--visible' : ''}`} data-ind-section="showcase">
//             {/* Large Featured Card */}
//             <div className="ind-showcase__featured" style={{ '--ind-accent': indIndustries[indActiveIndustry]?.accentColor, '--ind-bg-light': indIndustries[indActiveIndustry]?.bgLight }}>
//               <div className="ind-showcase__featured-image">
//                 <img src={indIndustries[indActiveIndustry]?.image} alt={indIndustries[indActiveIndustry]?.title} />
//                 <div className="ind-showcase__featured-shade" />
//                 <div className="ind-showcase__featured-icon" style={{ background: indIndustries[indActiveIndustry]?.bgLight, color: indIndustries[indActiveIndustry]?.accentColor }}>
//                   {indIndustries[indActiveIndustry]?.icon}
//                 </div>
//               </div>
//               <div className="ind-showcase__featured-body">
//                 <span className="ind-showcase__featured-subtitle" style={{ color: indIndustries[indActiveIndustry]?.accentColor }}>
//                   {indIndustries[indActiveIndustry]?.subtitle}
//                 </span>
//                 <h3 className="ind-showcase__featured-title">{indIndustries[indActiveIndustry]?.title}</h3>
//                 <p className="ind-showcase__featured-desc">{indIndustries[indActiveIndustry]?.description}</p>
                
//                 <div className="ind-showcase__featured-features">
//                   {indIndustries[indActiveIndustry]?.features.map((feature, i) => (
//                     <span key={i} className="ind-showcase__featured-feature">
//                       <CheckCircle2 size={16} style={{ color: indIndustries[indActiveIndustry]?.accentColor }} />
//                       {feature}
//                     </span>
//                   ))}
//                 </div>

//                 <div className="ind-showcase__featured-stats">
//                   {indIndustries[indActiveIndustry]?.stats.map((stat, i) => (
//                     <div key={i} className="ind-showcase__featured-stat">
//                       <span className="ind-showcase__featured-stat-value">{stat.value}</span>
//                       <span className="ind-showcase__featured-stat-label">{stat.label}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="ind-showcase__featured-actions">
//                   <span className="ind-showcase__featured-product" style={{ background: indIndustries[indActiveIndustry]?.accentColor }}>
//                     <Radio size={14} />
//                     {indIndustries[indActiveIndustry]?.productRecommendation}
//                   </span>
//                   <a href="/contact" className="ind-showcase__featured-btn" style={{ background: indIndustries[indActiveIndustry]?.accentColor }}>
//                     <span>Get Solution for This Industry</span>
//                     <ArrowRight size={16} />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Side Navigation List */}
//             <div className="ind-showcase__sidebar">
//               <div className="ind-showcase__sidebar-title">All Industries</div>
//               <div className="ind-showcase__sidebar-list">
//                 {indIndustries.map((industry, index) => (
//                   <button
//                     key={industry.id}
//                     className={`ind-showcase__sidebar-item ${index === indActiveIndustry ? 'ind-showcase__sidebar-item--active' : ''}`}
//                     onClick={() => setIndActiveIndustry(index)}
//                     style={{ '--ind-accent': industry.accentColor }}
//                   >
//                     <div className="ind-showcase__sidebar-icon" style={{ background: index === indActiveIndustry ? industry.bgLight : 'transparent', color: industry.accentColor }}>
//                       {industry.icon}
//                     </div>
//                     <div className="ind-showcase__sidebar-content">
//                       <span className="ind-showcase__sidebar-label">{industry.title}</span>
//                       <span className="ind-showcase__sidebar-product">{industry.productRecommendation}</span>
//                     </div>
//                     <ChevronRight size={16} className="ind-showcase__sidebar-arrow" style={{ color: industry.accentColor }} />
//                   </button>
//                 ))}
//               </div>

//               {/* Navigation Arrows */}
//               <div className="ind-showcase__sidebar-nav">
//                 <button className="ind-showcase__sidebar-nav-btn" onClick={handlePrev}>
//                   <ChevronLeft size={18} />
//                 </button>
//                 <span className="ind-showcase__sidebar-nav-count">
//                   {indActiveIndustry + 1} / {indIndustries.length}
//                 </span>
//                 <button className="ind-showcase__sidebar-nav-btn" onClick={handleNext}>
//                   <ChevronRight size={18} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="ind-cta">
//         <div className="ind-container">
//           <div
//             className={`ind-cta__card ${indVisible.cta ? 'ind-cta__card--visible' : ''}`}
//             data-ind-section="cta"
//             style={{ transform: `translateY(${indScrollY * -0.01}px)` }}
//           >
//             <div className="ind-cta__content">
//               <h2 className="ind-cta__title">Need a Mobile Signal Solution for Your Facility?</h2>
//               <p className="ind-cta__desc">
//                 Whether you're planning connectivity for a home, hotel, hospital, commercial building, 
//                 educational campus, factory, or corporate office, our RF engineers will design the ideal 
//                 i Booster or DAS solution.
//               </p>
//             </div>
//             <div className="ind-cta__actions">
//               <a href="/contact" className="ind-cta__btn">
//                 <span>Request Free RF Site Survey</span>
//                 <ArrowRight size={16} />
//               </a>
//               <div className="ind-cta__contact">
//                 <a href="tel:+919876543210" className="ind-cta__contact-link">
//                   <Phone size={14} />
//                   +91 98765 43210
//                 </a>
//                 <a href="mailto:info@futuremax.com" className="ind-cta__contact-link">
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

// export default IndustriesPage;


import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Factory, 
  Hotel,
  GraduationCap,
  Plane,
  Building,
  Phone,
  Mail,
  Globe,
  Stethoscope,
  Store,
  ChevronLeft,
  ChevronRight,
  Radio,
  Award,
  Zap,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import "./IndustriesPage.css";

import industriesHeroImg from "../assets/hero1.png";
import residentialImg from "../assets/hero1.png";
import hotelImg from "../assets/hero1.png";
import hospitalImg from "../assets/hero1.png";
import commercialImg from "../assets/hero1.png";
import educationImg from "../assets/hero1.png";
import factoryImg from "../assets/hero1.png";

const indIndustries = [
  {
    id: "01",
    icon: <Home size={24} strokeWidth={1.5} />,
    title: "Residential Communities",
    subtitle: "Homes, Apartments & Villas",
    description:
      "Reliable mobile signal booster solutions for homes, villas, apartments, gated communities, and residential towers. Our 23 dBm i Booster ensures crystal-clear calls and faster 4G & 5G connectivity across all major operators.",
    features: ["Homes & Villas", "Apartments", "Gated Communities", "23 dBm Coverage", "All Operators", "Plug & Play"],
    productRecommendation: "i Booster 23 dBm",
    coverage: "Up to 300 m²",
    image: residentialImg,
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
    projects: "100+ Projects",
  },
  {
    id: "02",
    icon: <Hotel size={24} strokeWidth={1.5} />,
    title: "Hotels & Hospitality",
    subtitle: "Hotels, Resorts & Convention Centres",
    description:
      "Deliver uninterrupted mobile connectivity for hotels, resorts, and luxury hospitality spaces. Our 25 dBm commercial booster with DAS ensures seamless coverage across guest rooms, banquet halls, and common areas.",
    features: ["5-Star Hotels", "Resorts & Spas", "Convention Centres", "Guest Rooms", "Banquet Halls", "Multi-Floor"],
    productRecommendation: "i Booster 25 dBm + DAS",
    coverage: "Up to 500 m²",
    image: hotelImg,
    accentColor: "#0A6FD4",
    bgLight: "#F0F7FF",
    projects: "50+ Projects",
  },
  {
    id: "03",
    icon: <Stethoscope size={24} strokeWidth={1.5} />,
    title: "Hospitals & Healthcare",
    subtitle: "Hospitals, Clinics & Medical Centres",
    description:
      "Professional RF engineering solutions designed for hospitals and healthcare campuses where continuous mobile communication is critical for patient care and emergency response teams.",
    features: ["Multi-Speciality Hospitals", "Clinics", "Emergency Rooms", "Patient Wards", "ICUs", "24/7 Reliability"],
    productRecommendation: "i Booster 25 dBm + DAS",
    coverage: "Custom Design",
    image: hospitalImg,
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
    projects: "30+ Projects",
  },
  {
    id: "04",
    icon: <Building2 size={24} strokeWidth={1.5} />,
    title: "Commercial Buildings",
    subtitle: "Offices, IT Parks & Business Centres",
    description:
      "Enterprise mobile signal boosters for office buildings, IT parks, and business centres. Strong indoor coverage across multiple floors with high user density support for uninterrupted communication.",
    features: ["Office Buildings", "IT Parks", "Business Centres", "Meeting Rooms", "Co-working", "Multi-Tenant"],
    productRecommendation: "i Booster 25/27 dBm",
    coverage: "Up to 1000+ m²",
    image: commercialImg,
    accentColor: "#7C3AED",
    bgLight: "#F5F3FF",
    projects: "80+ Projects",
  },
  {
    id: "05",
    icon: <GraduationCap size={24} strokeWidth={1.5} />,
    title: "Education & Campuses",
    subtitle: "Schools, Colleges & Universities",
    description:
      "Campus-wide wireless connectivity for schools, colleges, and universities. Scalable RF engineering and DAS solutions ensure consistent indoor coverage across classrooms, labs, libraries, and dormitories.",
    features: ["Schools", "Colleges", "Universities", "Libraries", "Auditoriums", "Hostels"],
    productRecommendation: "DAS + i Booster 25 dBm",
    coverage: "Campus-Wide",
    image: educationImg,
    accentColor: "#EA580C",
    bgLight: "#FFF7ED",
    projects: "20+ Projects",
  },
  {
    id: "06",
    icon: <Factory size={24} strokeWidth={1.5} />,
    title: "Industrial & Manufacturing",
    subtitle: "Factories, Warehouses & Plants",
    description:
      "High-capacity 27 dBm enterprise boosters for factories, warehouses, and manufacturing plants. Industrial-grade reliability with DAS integration for communication across heavy machinery areas.",
    features: ["Factories", "Warehouses", "Manufacturing", "Logistics Hubs", "Heavy Machinery", "Industrial Grade"],
    productRecommendation: "i Booster 27 dBm",
    coverage: "Up to 1000+ m²",
    image: factoryImg,
    accentColor: "#DC2626",
    bgLight: "#FEF2F2",
    projects: "40+ Projects",
  },
];

const IndustriesPage = () => {
  const [indScrollY, setIndScrollY] = useState(0);
  const [indMousePos, setIndMousePos] = useState({ x: 50, y: 50 });
  const [indVisible, setIndVisible] = useState({ hero: false, industries: false, cta: false });
  const [indHoveredCard, setIndHoveredCard] = useState(null);
  const indSectionRef = useRef(null);

  useEffect(() => {
    const handleIndScroll = () => setIndScrollY(window.scrollY);
    const handleIndMouse = (e) => {
      if (!indSectionRef.current) return;
      const rect = indSectionRef.current.getBoundingClientRect();
      setIndMousePos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
    };
    window.addEventListener("scroll", handleIndScroll, { passive: true });
    window.addEventListener("mousemove", handleIndMouse);
    return () => { window.removeEventListener("scroll", handleIndScroll); window.removeEventListener("mousemove", handleIndMouse); };
  }, []);

  useEffect(() => {
    const indObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.indSection;
          if (sectionName) setIndVisible((prev) => ({ ...prev, [sectionName]: true }));
        }
      });
    };
    const indObserver = new IntersectionObserver(handleIntersect, indObserverOptions);
    const indElements = indSectionRef.current?.querySelectorAll("[data-ind-section]");
    indElements?.forEach((el) => indObserver.observe(el));
    setTimeout(() => { setIndVisible((prev) => ({ ...prev, hero: true })); }, 100);
    return () => indObserver.disconnect();
  }, []);

  return (
    <main className="ind-page" ref={indSectionRef}>
      {/* Hero Section */}
      <section className="ind-hero">
        <div className="ind-hero__bg">
          <div className="ind-hero__image" style={{ backgroundImage: `url(${industriesHeroImg})` }} />
          <div className="ind-hero__overlay" />
          <div className="ind-hero__grid" />
          <div className="ind-hero__glow" style={{ background: `radial-gradient(600px circle at ${indMousePos.x}% ${indMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        </div>
        <div className="ind-container">
          <div className={`ind-hero__content ${indVisible.hero ? 'ind-hero__content--visible' : ''}`} data-ind-section="hero">
            <span className="ind-hero__tag">Industries We Serve</span>
            <h1 className="ind-hero__title">
              Enterprise Wireless Connectivity
              <span className="ind-hero__accent"> Solutions for Every Industry</span>
            </h1>
            <p className="ind-hero__desc">
              Futuremax Technology delivers RF Engineering, Mobile Signal Boosters, Distributed 
              Antenna Systems (DAS), and enterprise wireless connectivity solutions for residential 
              communities, hotels, hospitals, educational campuses, commercial buildings, factories, 
              and public infrastructure across India.
            </p>
            <div className="ind-hero__actions">
              <a href="/contact" className="ind-hero__btn ind-hero__btn--primary">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <a href="#industries" className="ind-hero__btn ind-hero__btn--secondary">Explore Industries</a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid - Alternating Layout */}
      <section className="ind-industries" id="industries">
        <div className="ind-container">
          <div className={`ind-industries__header ${indVisible.industries ? 'ind-industries__header--visible' : ''}`} data-ind-section="industries">
            <span className="ind-industries__tag">Industry Solutions</span>
            <h2 className="ind-industries__title">
              Engineered for Every Building
              <span className="ind-industries__accent"> Every Coverage Requirement</span>
            </h2>
            <p className="ind-industries__desc">
              Every industry has unique communication challenges. Our RF engineering team designs 
              customized mobile signal booster and DAS solutions that eliminate indoor dead zones 
              and provide seamless connectivity for every environment.
            </p>
          </div>

          <div className="ind-industries__list">
            {indIndustries.map((industry, index) => (
              <div
                key={industry.id}
                className={`ind-industry-row ${index % 2 === 1 ? 'ind-industry-row--reverse' : ''} ${indVisible.industries ? 'ind-industry-row--visible' : ''}`}
                data-ind-section="industries"
                style={{ transitionDelay: indVisible.industries ? `${index * 0.1}s` : '0s' }}
                onMouseEnter={() => setIndHoveredCard(index)}
                onMouseLeave={() => setIndHoveredCard(null)}
              >
                {/* Image Side */}
                <div className="ind-industry-row__image-wrap" style={{ '--ind-accent': industry.accentColor }}>
                  <img src={industry.image} alt={industry.title} className="ind-industry-row__image" />
                  <div className="ind-industry-row__image-overlay" />
                  
                  {/* Floating Badge */}
                  <div className="ind-industry-row__badge" style={{ background: industry.accentColor }}>
                    <MapPin size={14} />
                    <span>{industry.projects}</span>
                  </div>

                  {/* Product Recommendation */}
                  <div className="ind-industry-row__product" style={{ background: industry.accentColor }}>
                    <Radio size={14} />
                    <span>{industry.productRecommendation}</span>
                  </div>
                </div>

                {/* Content Side */}
                <div className="ind-industry-row__content" style={{ '--ind-accent': industry.accentColor, '--ind-bg-light': industry.bgLight }}>
                  <div className="ind-industry-row__icon-wrap" style={{ background: industry.bgLight, color: industry.accentColor }}>
                    {industry.icon}
                  </div>
                  
                  <span className="ind-industry-row__subtitle" style={{ color: industry.accentColor }}>
                    {industry.subtitle}
                  </span>
                  <h3 className="ind-industry-row__title">{industry.title}</h3>
                  <p className="ind-industry-row__desc">{industry.description}</p>

                  {/* Features Grid */}
                  <div className="ind-industry-row__features">
                    {industry.features.map((feature, i) => (
                      <span key={i} className="ind-industry-row__feature">
                        <CheckCircle2 size={14} style={{ color: industry.accentColor }} />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Coverage + CTA */}
                  <div className="ind-industry-row__footer">
                    <div className="ind-industry-row__coverage">
                      <Zap size={14} style={{ color: industry.accentColor }} />
                      <span>{industry.coverage}</span>
                    </div>
                    <a href="/contact" className="ind-industry-row__btn" style={{ background: industry.accentColor }}>
                      <span>Get Industry Solution</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ind-cta">
        <div className="ind-container">
          <div className={`ind-cta__card ${indVisible.cta ? 'ind-cta__card--visible' : ''}`} data-ind-section="cta" style={{ transform: `translateY(${indScrollY * -0.01}px)` }}>
            <div className="ind-cta__content">
              <h2 className="ind-cta__title">Need a Mobile Signal Solution for Your Facility?</h2>
              <p className="ind-cta__desc">
                Whether you're planning connectivity for a home, hotel, hospital, commercial building, 
                educational campus, factory, or corporate office, our RF engineers will design the ideal 
                i Booster or DAS solution.
              </p>
            </div>
            <div className="ind-cta__actions">
              <a href="/contact" className="ind-cta__btn">
                <span>Request Free RF Site Survey</span>
                <ArrowRight size={16} />
              </a>
              <div className="ind-cta__contact">
                <a href="tel:+919876543210" className="ind-cta__contact-link"><Phone size={14} />+91 98765 43210</a>
                <a href="mailto:info@futuremax.com" className="ind-cta__contact-link"><Mail size={14} />info@futuremax.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustriesPage;