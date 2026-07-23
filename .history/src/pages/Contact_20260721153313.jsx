import React, { useEffect, useRef, useState } from "react";
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle2,
  Building2,
  Globe,
  Headphones,
  ShieldCheck,
  User,
  Briefcase,
  MessageSquare,
  ChevronDown,
  Zap,
} from "lucide-react";
import "./Contact.css";

import contactHeroImg from "../assets/contacthero.png";

const cntInfo = [
  {
    icon: <Phone size={22} strokeWidth={1.5} />,
    title: "Call Us",
    details: [
      { label: "Sales & Support", value: "94478671740" },
      { label: "Technical Support", value: "+91 87654 32109" },
    ],
    accentColor: "#0755A3",
  },
  {
    icon: <Mail size={22} strokeWidth={1.5} />,
    title: "Email Us",
    details: [
      { label: "General Inquiries", value: "futuremaxtech@hotmail.com" },
      { label: "Technical Support", value: "support@futuremaxtech.in" },
      { label: "Sales", value: "sales@futuremaxtech.in" },
    ],
    accentColor: "#19AB3F",
  },
  {
    icon: <MapPin size={22} strokeWidth={1.5} />,
    title: "Visit Us",
    details: [
      { label: "Head Office", value: "Futuremax Technology, Kochi, Kerala - 682001" },
      { label: "Service Network", value: "Pan India Installation & Support" },
    ],
    accentColor: "#7C3AED",
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} />,
    title: "Working Hours",
    details: [
      { label: "Monday - Saturday", value: "9:00 AM - 6:00 PM" },
      { label: "Sunday", value: "Closed (Emergency Support Available)" },
      { label: "24/7 NOC", value: "For AMC Clients" },
    ],
    accentColor: "#EA580C",
  },
];

const cntServiceAreas = [
  "Kochi (Ernakulam)", "Kozhikode (Calicut)", "Thiruvananthapuram", "Kollam",
  "Thrissur", "Alappuzha", "Kottayam", "Palakkad", "Malappuram", "Kannur",
  "Kasaragod", "Idukki", "Wayanad", "Pathanamthitta", "Pan India Service",
];

const cntServices = [
  { icon: <Zap size={18} />, title: "RF Site Survey", desc: "Professional signal assessment" },
  { icon: <Zap size={18} />, title: "i Booster 23 dBm", desc: "Residential signal booster" },
  { icon: <Zap size={18} />, title: "i Booster 25 dBm", desc: "Commercial signal booster" },
  { icon: <Zap size={18} />, title: "i Booster 27 dBm", desc: "Enterprise signal booster" },
  { icon: <Zap size={18} />, title: "DAS Solutions", desc: "Distributed Antenna Systems" },
  { icon: <Zap size={18} />, title: "RF Engineering", desc: "Consultation & planning" },
  { icon: <Zap size={18} />, title: "Installation & AMC", desc: "Deployment & maintenance" },
  { icon: <Zap size={18} />, title: "Other Inquiry", desc: "General questions" },
];

const Contact = () => {
  const [cntScrollY, setCntScrollY] = useState(0);
  const [cntMousePos, setCntMousePos] = useState({ x: 50, y: 50 });
  const [cntVisible, setCntVisible] = useState({ hero: false, info: false, form: false });
  const [cntFormData, setCntFormData] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [cntSubmitted, setCntSubmitted] = useState(false);
  const [cntActiveService, setCntActiveService] = useState(null);
  const [cntFocusedField, setCntFocusedField] = useState(null);
  const cntSectionRef = useRef(null);

  useEffect(() => {
    const handleCntScroll = () => setCntScrollY(window.scrollY);
    const handleCntMouse = (e) => {
      if (!cntSectionRef.current) return;
      const rect = cntSectionRef.current.getBoundingClientRect();
      setCntMousePos({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
    };
    window.addEventListener("scroll", handleCntScroll, { passive: true });
    window.addEventListener("mousemove", handleCntMouse);
    return () => { window.removeEventListener("scroll", handleCntScroll); window.removeEventListener("mousemove", handleCntMouse); };
  }, []);

  useEffect(() => {
    const cntObserverOptions = { threshold: 0.12, rootMargin: "0px 0px -60px 0px" };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionName = entry.target.dataset.cntSection;
          if (sectionName) setCntVisible((prev) => ({ ...prev, [sectionName]: true }));
        }
      });
    };
    const cntObserver = new IntersectionObserver(handleIntersect, cntObserverOptions);
    const cntElements = cntSectionRef.current?.querySelectorAll("[data-cnt-section]");
    cntElements?.forEach((el) => cntObserver.observe(el));
    setTimeout(() => { setCntVisible((prev) => ({ ...prev, hero: true })); }, 100);
    return () => cntObserver.disconnect();
  }, []);

  const handleCntInputChange = (e) => {
    const { name, value } = e.target;
    setCntFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (serviceTitle) => {
    setCntFormData((prev) => ({ ...prev, service: serviceTitle }));
    setCntActiveService(serviceTitle);
  };

  const handleCntSubmit = (e) => {
    e.preventDefault();
    setCntSubmitted(true);
    setTimeout(() => {
      setCntSubmitted(false);
      setCntFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      setCntActiveService(null);
    }, 5000);
  };

  return (
    <main className="cnt-page" ref={cntSectionRef}>
      {/* Hero Section */}
      <section className="cnt-hero">
        <div className="cnt-hero__bg">
          <div className="cnt-hero__image" style={{ backgroundImage: `url(${contactHeroImg})` }} />
          <div className="cnt-hero__overlay" />
          <div className="cnt-hero__grid" />
          <div className="cnt-hero__glow" style={{ background: `radial-gradient(600px circle at ${cntMousePos.x}% ${cntMousePos.y}%, rgba(255,255,255,0.04) 0%, transparent 50%)` }} />
        </div>
        <div className="cnt-container">
          <div className={`cnt-hero__content ${cntVisible.hero ? 'cnt-hero__content--visible' : ''}`} data-cnt-section="hero">
            <span className="cnt-hero__tag">Get In Touch</span>
            <h1 className="cnt-hero__title">
              Let's Discuss Your
              <span className="cnt-hero__accent"> Wireless Connectivity Needs</span>
            </h1>
            <p className="cnt-hero__desc">
              Whether you need an RF site survey, want to explore our i Booster Series, or have a 
              specific coverage challenge, our team is ready to help with a free consultation.
            </p>
            <div className="cnt-hero__actions">
              <a href="tel:+919876543210" className="cnt-hero__btn cnt-hero__btn--primary"><Phone size={16} /><span>94478671740</span></a>
              <a href="mailto:futuremaxtech@hotmail.com" className="cnt-hero__btn cnt-hero__btn--secondary"><Mail size={16} /><span>futuremaxtech@hotmail.com</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="cnt-info">
        <div className="cnt-container">
          <div className={`cnt-info__grid ${cntVisible.info ? 'cnt-info__grid--visible' : ''}`} data-cnt-section="info">
            {cntInfo.map((item, index) => (
              <div key={index} className="cnt-info__card" style={{ '--cnt-accent': item.accentColor, transitionDelay: `${index * 0.08}s` }}>
                <div className="cnt-info__icon" style={{ background: `${item.accentColor}12`, color: item.accentColor }}>{item.icon}</div>
                <h3 className="cnt-info__title">{item.title}</h3>
                <div className="cnt-info__details">
                  {item.details.map((detail, i) => (
                    <div key={i} className="cnt-info__detail">
                      <span className="cnt-info__detail-label">{detail.label}</span>
                      <span className="cnt-info__detail-value">{detail.value}</span>
                    </div>
                  ))}
                </div>
                <div className="cnt-info__line" style={{ background: item.accentColor }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section - Modern Split Design */}
      <section className="cnt-form-section">
        <div className="cnt-container">
          <div className="cnt-form-section__grid">
            {/* Left: Service Selection + Info */}
            <div className={`cnt-form-left ${cntVisible.form ? 'cnt-form-left--visible' : ''}`} data-cnt-section="form">
              <div className="cnt-form-left__header">
                <span className="cnt-form-left__tag">Request Free RF Site Survey</span>
                <h2 className="cnt-form-left__title">
                  Tell Us About
                  <span className="cnt-form-left__accent"> Your Project</span>
                </h2>
                <p className="cnt-form-left__desc">
                  Select the services you're interested in and fill out your details. Our RF engineering 
                  team will respond within 24 hours.
                </p>
              </div>

              {/* Service Selection Grid */}
              <div className="cnt-service-grid">
                <span className="cnt-service-grid__label">Select Service</span>
                <div className="cnt-service-grid__list">
                  {cntServices.map((service, index) => (
                    <button
                      key={index}
                      className={`cnt-service-card ${cntActiveService === service.title ? 'cnt-service-card--active' : ''}`}
                      onClick={() => handleServiceSelect(service.title)}
                      style={{ transitionDelay: `${index * 0.04}s` }}
                    >
                      <div className="cnt-service-card__icon">{service.icon}</div>
                      <div className="cnt-service-card__info">
                        <span className="cnt-service-card__title">{service.title}</span>
                        <span className="cnt-service-card__desc">{service.desc}</span>
                      </div>
                      <div className={`cnt-service-card__check ${cntActiveService === service.title ? 'cnt-service-card__check--visible' : ''}`}>
                        <CheckCircle2 size={18} strokeWidth={2.5} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="cnt-quick-contact">
                <div className="cnt-quick-contact__item">
                  <Phone size={16} />
                  <div>
                    <span className="cnt-quick-contact__label">Call Us</span>
                    <span className="cnt-quick-contact__value">94478671740</span>
                  </div>
                </div>
                <div className="cnt-quick-contact__item">
                  <Mail size={16} />
                  <div>
                    <span className="cnt-quick-contact__label">Email Us</span>
                    <span className="cnt-quick-contact__value">futuremaxtech@hotmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className={`cnt-form-right ${cntVisible.form ? 'cnt-form-right--visible' : ''}`}>
              <div className="cnt-form-right__card">
                {cntSubmitted ? (
                  <div className="cnt-form-success">
                    <div className="cnt-form-success__icon"><CheckCircle2 size={56} strokeWidth={2} /></div>
                    <h3 className="cnt-form-success__title">Thank You for Reaching Out!</h3>
                    <p className="cnt-form-success__desc">Our RF engineering team will review your requirements and get back to you within 24 hours with a personalized consultation.</p>
                    <button className="cnt-form-success__btn" onClick={() => setCntSubmitted(false)}>Send Another Message</button>
                  </div>
                ) : (
                  <form className="cnt-form-modern" onSubmit={handleCntSubmit}>
                    <div className="cnt-form-modern__group">
                      <label className="cnt-form-modern__label">
                        <User size={16} />
                        Full Name *
                      </label>
                      <input type="text" name="name" className={`cnt-form-modern__input ${cntFocusedField === 'name' ? 'cnt-form-modern__input--focused' : ''}`} placeholder="John Doe" value={cntFormData.name} onChange={handleCntInputChange} onFocus={() => setCntFocusedField('name')} onBlur={() => setCntFocusedField(null)} required />
                    </div>

                    <div className="cnt-form-modern__row">
                      <div className="cnt-form-modern__group">
                        <label className="cnt-form-modern__label">
                          <Mail size={16} />
                          Email *
                        </label>
                        <input type="email" name="email" className={`cnt-form-modern__input ${cntFocusedField === 'email' ? 'cnt-form-modern__input--focused' : ''}`} placeholder="john@company.com" value={cntFormData.email} onChange={handleCntInputChange} onFocus={() => setCntFocusedField('email')} onBlur={() => setCntFocusedField(null)} required />
                      </div>
                      <div className="cnt-form-modern__group">
                        <label className="cnt-form-modern__label">
                          <Phone size={16} />
                          Phone *
                        </label>
                        <input type="tel" name="phone" className={`cnt-form-modern__input ${cntFocusedField === 'phone' ? 'cnt-form-modern__input--focused' : ''}`} placeholder="94478671740" value={cntFormData.phone} onChange={handleCntInputChange} onFocus={() => setCntFocusedField('phone')} onBlur={() => setCntFocusedField(null)} required />
                      </div>
                    </div>

                    <div className="cnt-form-modern__group">
                      <label className="cnt-form-modern__label">
                        <Briefcase size={16} />
                        Company / Organization
                      </label>
                      <input type="text" name="company" className={`cnt-form-modern__input ${cntFocusedField === 'company' ? 'cnt-form-modern__input--focused' : ''}`} placeholder="Company name (optional)" value={cntFormData.company} onChange={handleCntInputChange} onFocus={() => setCntFocusedField('company')} onBlur={() => setCntFocusedField(null)} />
                    </div>

                    <div className="cnt-form-modern__group">
                      <label className="cnt-form-modern__label">
                        <MessageSquare size={16} />
                        Message / Requirements
                      </label>
                      <textarea name="message" className={`cnt-form-modern__textarea ${cntFocusedField === 'message' ? 'cnt-form-modern__input--focused' : ''}`} rows="4" placeholder="Describe your coverage requirements, building size, location, or specific challenges you're facing..." value={cntFormData.message} onChange={handleCntInputChange} onFocus={() => setCntFocusedField('message')} onBlur={() => setCntFocusedField(null)}></textarea>
                    </div>

                    <button type="submit" className="cnt-form-modern__btn">
                      <Send size={16} />
                      <span>Submit & Get Free Consultation</span>
                      <ArrowRight size={16} />
                    </button>

                    <p className="cnt-form-modern__note">
                      <ShieldCheck size={14} />
                      Your information is secure. We'll respond within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas + Side Info */}
      <section className="cnt-bottom">
        <div className="cnt-container">
          <div className="cnt-bottom__grid">
            <div className="cnt-bottom__card">
              <div className="cnt-bottom__card-header">
                <Globe size={20} strokeWidth={1.5} />
                <h3>Service Areas Across Kerala & India</h3>
              </div>
              <div className="cnt-bottom__areas">
                {cntServiceAreas.map((area, index) => (
                  <span key={index} className="cnt-bottom__area"><MapPin size={12} />{area}</span>
                ))}
              </div>
            </div>
            <div className="cnt-bottom__card cnt-bottom__card--dark">
              <div className="cnt-bottom__card-header">
                <Headphones size={20} strokeWidth={1.5} />
                <h3>Need Immediate Assistance?</h3>
              </div>
              <p className="cnt-bottom__dark-desc">Our technical support team is available for urgent inquiries and emergency support.</p>
              <a href="tel:+919876543210" className="cnt-bottom__dark-btn">
                <Phone size={16} />
                <span>94478671740</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;