import React, { useState, useRef, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send, Check, Shield, Zap, Award } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={22} strokeWidth={1.5} />,
      title: "Call Us",
      details: ["+91 88487 49897", "+91 12345 67890"],
      action: "tel:+918848749897",
      actionText: "Call Now",
    },
    {
      icon: <Mail size={22} strokeWidth={1.5} />,
      title: "Email Us",
      details: ["futuremaxtechnologies@hotmail.com", "info@futuremax.tech"],
      action: "mailto:futuremaxtechnologies@hotmail.com",
      actionText: "Send Email",
    },
    {
      icon: <MapPin size={22} strokeWidth={1.5} />,
      title: "Visit Us",
      details: ["Kochi, Kerala, India", "Serving Pan India"],
      action: "#",
      actionText: "Get Directions",
    },
    {
      icon: <Clock size={22} strokeWidth={1.5} />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
      action: "#",
      actionText: "Schedule Visit",
    },
  ];

  const industries = [
    "Hospitality",
    "Healthcare",
    "Corporate",
    "Industrial",
    "Education",
    "Residential",
    "Government",
    "Other",
  ];

  const trustIndicators = [
    { icon: <Shield size={16} strokeWidth={1.5} />, label: "Enterprise Grade" },
    { icon: <Zap size={16} strokeWidth={1.5} />, label: "5G Ready" },
    { icon: <Award size={16} strokeWidth={1.5} />, label: "Certified Engineers" },
  ];

  return (
    <main className="contact-page" ref={sectionRef}>
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div className="hero-orb hero-orb-1" />
          <div className="hero-orb hero-orb-2" />
        </div>
        <div className="container">
          <div className={`section-header ${isVisible ? 'animate' : ''}`}>
            <span className="section-tag">Get in Touch</span>
            <h1 className="section-title">
              Let's start your
              <span className="section-title-accent"> connectivity project</span>
            </h1>
            <p className="section-description">
              Connect with our RF engineering team to discuss your wireless coverage 
              requirements and schedule a professional site survey.
            </p>
            <div className="hero-trust">
              {trustIndicators.map((item, index) => (
                <div key={index} className="hero-trust-item">
                  <span className="hero-trust-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info Cards */}
            <div className={`contact-info ${isVisible ? 'animate' : ''}`}>
              <div className="contact-info-grid">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="contact-info-card"
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    <div className="contact-info-icon">
                      {item.icon}
                    </div>
                    <h3 className="contact-info-title">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="contact-info-detail">{detail}</p>
                    ))}
                    <a href={item.action} className="contact-info-link">
                      <span>{item.actionText}</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`contact-form-wrapper ${isVisible ? 'animate' : ''}`}>
              <div className="contact-form-card">
                <h2 className="form-title">Request a Site Survey</h2>
                <p className="form-subtitle">
                  Fill in the details below and our engineering team will get back to you within 24 hours.
                </p>

                {submitted ? (
                  <div className="form-success">
                    <div className="form-success-icon">
                      <Check size={32} strokeWidth={2} />
                    </div>
                    <h3>Thank You!</h3>
                    <p>We've received your request. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Enter your full name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Enter your phone number"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="company">Company / Organization</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Enter company name"
                          value={formState.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="industry">Industry *</label>
                      <select
                        id="industry"
                        name="industry"
                        value={formState.industry}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select your industry</option>
                        {industries.map((ind) => (
                          <option key={ind} value={ind}>{ind}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Project Details</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Describe your connectivity requirements, building size, and any specific challenges..."
                        value={formState.message}
                        onChange={handleChange}
                      />
                    </div>
                    <button type="submit" className="btn-submit">
                      <span>Submit Request</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;