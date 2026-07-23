import React, { useEffect, useRef, useState } from "react";
import { Radio, Wifi, Cpu, Antenna, Cable, ArrowRight, Check, Zap } from "lucide-react";
import "./FeaturedProducts.css";

const products = [
  {
    icon: <Radio size={28} strokeWidth={1.5} />,
    title: "Mobile Signal Boosters",
    description: "Professional 4G & 5G signal enhancement systems engineered for reliable indoor mobile coverage across residential, commercial and enterprise environments.",
    features: ["4G & 5G Ready", "Multi-Operator", "Up to 100,000 sq ft"],
    image: "https://images.unsplash.com/photo-1614032686061-f7123a1751e3?w=600&q=80",
    color: "#1AA64C",
    badge: "Popular",
  },
  {
    icon: <Wifi size={28} strokeWidth={1.5} />,
    title: "Distributed Antenna Systems",
    description: "Enterprise-grade DAS solutions designed for seamless indoor wireless coverage in large buildings, campuses, hospitals, hotels and commercial complexes.",
    features: ["Enterprise DAS", "Scalable", "Multi-Building"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    color: "#0857A1",
    badge: "Enterprise",
  },
  {
    icon: <Antenna size={28} strokeWidth={1.5} />,
    title: "Indoor & Outdoor Antennas",
    description: "High-performance directional, omni-directional and panel antennas engineered for maximum signal efficiency and wide-area coverage.",
    features: ["Directional & Omni", "Weather Resistant", "High Gain"],
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80",
    color: "#1AA64C",
    badge: "Essential",
  },
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "RF Engineering Solutions",
    description: "Custom wireless infrastructure solutions including comprehensive RF planning, site surveys, network optimization and enterprise deployments.",
    features: ["Custom RF Design", "Site Survey", "Enterprise Grade"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    color: "#0857A1",
    badge: "Custom",
  },
  {
    icon: <Cable size={28} strokeWidth={1.5} />,
    title: "RF Accessories & Components",
    description: "Premium quality RF cables, splitters, connectors, couplers and complete installation kits for professional deployments.",
    features: ["Premium Quality", "Low Signal Loss", "Complete Kits"],
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    color: "#1AA64C",
    badge: "Accessories",
  },
];

const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
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

  return (
    <section className="featured-products" ref={sectionRef}>
      {/* Background */}
      <div className="featured-bg">
        <div className="featured-bg-orb featured-bg-orb-1" />
        <div className="featured-bg-orb featured-bg-orb-2" />
        <div className="featured-bg-grid" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-tag">Product Portfolio</span>
          <h2 className="section-title">
            Enterprise connectivity
            <span className="section-title-accent"> solutions</span>
          </h2>
          <p className="section-description">
            Explore Futuremax Technology's portfolio of wireless connectivity products 
            engineered for homes, businesses, industries and mission-critical environments.
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {products.map((item, index) => (
            <div
              key={index}
              className={`product-card ${isVisible ? 'animate' : ''} ${hoveredIndex === index ? 'hovered' : ''} ${hoveredIndex !== null && hoveredIndex !== index ? 'dimmed' : ''}`}
              style={{ 
                '--delay': `${index * 0.1}s`,
                '--card-color': item.color,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Product Image */}
              <div className="product-image">
                <img 
                  src={item.image} 
                  alt={item.title}
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400/F8FAFC/0857A1?text=${encodeURIComponent(item.title)}`;
                  }}
                />
                <div className="product-image-overlay" />
                <span className="product-badge">{item.badge}</span>
                <div className="product-icon-wrapper">
                  {item.icon}
                </div>
              </div>

              {/* Product Content */}
              <div className="product-content">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-description">{item.description}</p>
                
                {/* Features */}
                <div className="product-features">
                  {item.features.map((feature, i) => (
                    <span key={i} className="product-feature">
                      <Check size={13} strokeWidth={2.5} />
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a href="/products" className="product-link">
                  <span>Explore Products</span>
                  <ArrowRight size={15} />
                </a>
              </div>

              {/* Hover Gradient Border */}
              <div className="product-card-border" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`featured-cta ${isVisible ? 'animate' : ''}`}>
          <div className="featured-cta-content">
            <div className="featured-cta-text">
              <Zap size={20} strokeWidth={1.5} />
              <span>Need help choosing the right product?</span>
            </div>
            <a href="/contact" className="btn">
              <span>Talk to an Engineer</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;