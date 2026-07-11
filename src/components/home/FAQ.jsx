import React, { useState, useRef, useEffect } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import "./FAQ.css";

const faqData = [
  {
    question: "How does a mobile signal booster work?",
    answer: "A mobile signal booster captures weak outdoor signals using an external antenna, amplifies them through a signal amplifier, and redistributes stronger signals throughout your building via internal antennas for improved voice and data connectivity.",
  },
  {
    question: "Will it support 4G and 5G networks?",
    answer: "Yes. Our solutions are designed to support multiple frequency bands and are fully compatible with modern 4G LTE and 5G network deployments across all major Indian operators.",
  },
  {
    question: "Do you provide installation services?",
    answer: "Yes. Our certified RF engineers handle everything from initial site surveys and RF analysis to professional installation, testing, optimization, and post-installation support.",
  },
  {
    question: "Can one booster cover multiple floors?",
    answer: "Coverage depends on the building layout, construction materials, and selected solution. During the site survey, we design a customized coverage plan tailored to your property's specific requirements.",
  },
  {
    question: "What is a Distributed Antenna System (DAS)?",
    answer: "A DAS is a network of antennas strategically placed throughout a building to provide seamless wireless coverage. It's ideal for large commercial spaces, hospitals, hotels, and enterprise environments.",
  },
  {
    question: "Do you offer warranty and ongoing support?",
    answer: "Absolutely. We provide comprehensive product warranty, dedicated technical assistance, and Annual Maintenance Contracts (AMC) to ensure long-term performance and reliability of your wireless infrastructure.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const contentRefs = useRef([]);
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

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" ref={sectionRef}>
      {/* Background */}
      <div className="faq-bg">
        <div className="faq-bg-orb faq-bg-orb-1" />
        <div className="faq-bg-orb faq-bg-orb-2" />
      </div>

      <div className="container">
        <div className="faq-layout">
          {/* Left Column - Header */}
          <div className={`faq-left ${isVisible ? 'animate' : ''}`}>
            <div className="faq-left-content">
              <div className="faq-icon-wrapper">
                <HelpCircle size={28} strokeWidth={1.5} />
              </div>
              <span className="section-tag">Frequently Asked Questions</span>
              <h2 className="section-title">
                Everything you need
                <span className="section-title-accent"> to know</span>
              </h2>
              <p className="section-description">
                Find answers to the most common questions about our wireless 
                connectivity solutions, RF engineering process, installation, 
                and support services.
              </p>
              
              {/* Contact CTA */}
              <div className="faq-contact">
                <div className="faq-contact-icon">
                  <MessageCircle size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <span className="faq-contact-title">Still have questions?</span>
                  <span className="faq-contact-desc">Our engineers are ready to help</span>
                </div>
              </div>
              <a href="/contact" className="faq-contact-btn">
                <span>Contact Support</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.333 8h9.334M8 3.333 12.667 8 8 12.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className={`faq-right ${isVisible ? 'animate' : ''}`}>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? 'active' : ''} ${isVisible ? 'animate' : ''}`}
                  style={{ '--delay': `${index * 0.1}s` }}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggle(index)}
                    aria-expanded={activeIndex === index}
                  >
                    <span className="faq-question-number">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="faq-question-text">{faq.question}</span>
                    <span className={`faq-question-icon ${activeIndex === index ? 'rotated' : ''}`}>
                      {activeIndex === index ? (
                        <Minus size={18} strokeWidth={2} />
                      ) : (
                        <Plus size={18} strokeWidth={2} />
                      )}
                    </span>
                  </button>
                  
                  <div
                    className={`faq-answer-wrapper ${activeIndex === index ? 'open' : ''}`}
                    style={{
                      maxHeight: activeIndex === index 
                        ? `${contentRefs.current[index]?.scrollHeight || 200}px`
                        : '0px',
                    }}
                  >
                    <div
                      className="faq-answer-content"
                      ref={(el) => (contentRefs.current[index] = el)}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;