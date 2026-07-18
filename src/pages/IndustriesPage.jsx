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

import industriesHeroImg from "../assets/industrieshero.jpeg";
import residentialImg from "../assets/residential.png";
import hotelImg from "../assets/hotels.png";
import hospitalImg from "../assets/healthcare.png";
import commercialImg from "../assets/offices.png";
import educationImg from "../assets/education.png";
import factoryImg from "../assets/factries.png";

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