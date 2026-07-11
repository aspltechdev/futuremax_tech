import React from "react";
import { ArrowRight, Check, Shield, Zap, Award } from "lucide-react";
import "./Products.css";

const categories = [
  {
    image: "https://images.unsplash.com/photo-1614032686061-f7123a1751e3?w=600&q=80",
    title: "Mobile Signal Boosters",
    description: "Professional signal booster systems engineered for reliable 4G & 5G mobile coverage across residential, commercial and enterprise environments.",
    features: ["4G & 5G Ready", "Multi-Operator Support", "Up to 100,000 sq ft"],
  },
  {
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    title: "Distributed Antenna Systems",
    description: "Enterprise-grade DAS solutions designed for seamless indoor wireless coverage in large buildings and campuses.",
    features: ["Enterprise DAS", "Scalable Architecture", "Multi-Building Support"],
  },
  {
    image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80",
    title: "Indoor & Outdoor Antennas",
    description: "High-performance directional, omni-directional and panel antennas for maximum signal efficiency.",
    features: ["Directional & Omni", "Weather Resistant", "High Gain Performance"],
  },
  {
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    title: "RF Accessories",
    description: "Premium RF cables, splitters, connectors, couplers and installation accessories for complete deployments.",
    features: ["Premium Quality", "Low Signal Loss", "Complete Kits Available"],
  },
  {
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    title: "RF Engineering Solutions",
    description: "Custom wireless infrastructure solutions including RF planning, site surveys, optimization and enterprise deployments.",
    features: ["Custom RF Design", "Site Survey Included", "Enterprise Grade"],
  },
];

const Products = () => {
  return (
    <main className="products-page">
      {/* Hero Section */}
      {/* <section className="products-hero">
        <div className="products-hero-bg">
          <div className="hero-glow hero-glow-1" />
          <div className="hero-glow hero-glow-2" />
        </div>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Product Portfolio</span>
            <h1 className="section-title">
              Enterprise wireless connectivity
              <span className="section-title-accent"> products</span>
            </h1>
            <p className="section-description">
              Explore Futuremax Technology's comprehensive portfolio of enterprise-grade mobile 
              signal boosters, Distributed Antenna Systems (DAS), RF accessories and intelligent 
              wireless connectivity solutions.
            </p>
          </div>
        </div>
      </section> */}

      {/* Products Grid with Images */}
      <section className="products-grid-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Products</span>
            <h2 className="section-title">
              Complete connectivity
              <span className="section-title-accent"> solutions portfolio</span>
            </h2>
            <p className="section-description">
              Every product is carefully selected and engineered to deliver reliable indoor coverage, 
              high-performance wireless communication and enterprise-grade scalability.
            </p>
          </div>

          <div className="products-grid">
            {categories.map((item, index) => (
              <div className="product-card" key={index}>
                <div className="product-card-image">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = `https://via.placeholder.com/400x250/F8FAFC/0857A1?text=${encodeURIComponent(item.title)}`;
                    }}
                  />
                  <div className="product-card-image-overlay" />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{item.title}</h3>
                  <p className="product-card-desc">{item.description}</p>
                  <div className="product-card-features">
                    {item.features.map((feature, i) => (
                      <span key={i} className="product-feature">
                        <Check size={14} strokeWidth={2.5} />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a href="/contact" className="product-card-link">
                    <span>Learn More</span>
                    <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="products-cta-bg">
          <div className="cta-glow cta-glow-1" />
          <div className="cta-glow cta-glow-2" />
        </div>
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-content">
              <h2 className="cta-title">
                Looking for the right connectivity solution?
              </h2>
              <p className="cta-desc">
                Our RF engineers will recommend the ideal solution based on your building size, 
                coverage requirements and network environment.
              </p>
              <div className="cta-actions">
                <a href="/contact" className="btn-primary">
                  <span>Request Free Site Survey</span>
                  <ArrowRight size={16} />
                </a>
                <a href="tel:+911234567890" className="btn-secondary">
                  <span>Speak to an Engineer</span>
                </a>
              </div>
            </div>
            <div className="cta-trust">
              <div className="cta-trust-item">
                <Shield size={18} strokeWidth={1.5} />
                <span>Enterprise Grade</span>
              </div>
              <div className="cta-trust-item">
                <Zap size={18} strokeWidth={1.5} />
                <span>5G Ready</span>
              </div>
              <div className="cta-trust-item">
                <Award size={18} strokeWidth={1.5} />
                <span>Certified Engineers</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;