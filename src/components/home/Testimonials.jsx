import React, { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Operations Manager",
    company: "Leading Hospitality Group",
    review: "Futuremax Technology delivered a professionally engineered mobile signal enhancement solution that significantly improved indoor coverage across our hospitality property. Their team managed everything from RF site survey to installation with exceptional professionalism.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    industry: "Hospitality",
  },
  {
    name: "Dr. Priya Menon",
    role: "Facility Administrator",
    company: "Multi-Specialty Hospital",
    review: "Reliable communication is critical in healthcare. Futuremax designed and deployed an RF solution that eliminated signal dead zones and improved connectivity across our facility, ensuring uninterrupted communication for our medical staff.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    industry: "Healthcare",
  },
  {
    name: "Vikram Patel",
    role: "IT Infrastructure Head",
    company: "Fortune 500 Corporation",
    review: "The Futuremax engineering team provided an end-to-end wireless connectivity solution for our corporate office. Their technical expertise, systematic approach, and post-installation support exceeded our expectations. Highly recommended for enterprise deployments.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    industry: "Corporate",
  },
];

const stats = [
  { value: "98%", label: "Client Satisfaction" },
  { value: "5,000+", label: "Projects Delivered" },
  { value: "200+", label: "Enterprise Clients" },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

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

  useEffect(() => {
    if (isVisible) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isVisible]);

  return (
    <section className="testimonials-section" ref={sectionRef}>
      {/* Background */}
      <div className="testimonials-bg">
        <div className="testimonials-bg-orb testimonials-bg-orb-1" />
        <div className="testimonials-bg-orb testimonials-bg-orb-2" />
        <div className="testimonials-bg-pattern" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Client Experiences</span>
          <h2 className="section-title">
            Trusted by industry leaders
            <span className="section-title-accent"> across India</span>
          </h2>
          <p className="section-description">
            Futuremax Technology has helped organizations improve wireless connectivity 
            through expert RF engineering, professional installations, and reliable 
            technical support.
          </p>
        </div>

        {/* Stats Bar */}
        <div className={`stats-bar ${isVisible ? 'animate' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="stats-item">
              <span className="stats-value">{stat.value}</span>
              <span className="stats-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {/* Featured Testimonial */}
          <div className={`testimonial-featured ${isVisible ? 'animate' : ''}`}>
            <div className="testimonial-featured-card">
              <div className="featured-quote-icon">
                <Quote size={48} strokeWidth={1} />
              </div>
              <div className="featured-stars">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFC107" stroke="#FFC107" strokeWidth={0} />
                ))}
              </div>
              <p className="featured-review">"{testimonials[activeIndex].review}"</p>
              <div className="featured-client">
                <div className="featured-client-image">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonials[activeIndex].name)}&background=0857A1&color=fff&size=150`;
                    }}
                  />
                </div>
                <div className="featured-client-info">
                  <h4 className="featured-client-name">{testimonials[activeIndex].name}</h4>
                  <span className="featured-client-role">{testimonials[activeIndex].role}</span>
                  <span className="featured-client-company">{testimonials[activeIndex].company}</span>
                </div>
                <div className="featured-industry-badge">
                  {testimonials[activeIndex].industry}
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="featured-nav">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`featured-dot ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Side Cards */}
          <div className="testimonials-side">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`testimonial-card ${isVisible ? 'animate' : ''} ${activeIndex === index ? 'active' : ''}`}
                style={{ '--delay': `${index * 0.15}s` }}
                onClick={() => setActiveIndex(index)}
              >
                <div className="testimonial-card-header">
                  <div className="testimonial-card-client">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=1AA64C&color=fff&size=80`;
                      }}
                    />
                    <div>
                      <h4>{item.name}</h4>
                      <span>{item.company}</span>
                    </div>
                  </div>
                  <div className="testimonial-card-stars">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={12} fill="#FFC107" stroke="#FFC107" strokeWidth={0} />
                    ))}
                  </div>
                </div>
                <p className="testimonial-card-review">"{item.review.substring(0, 120)}..."</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;