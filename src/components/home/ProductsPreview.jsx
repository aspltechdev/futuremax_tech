import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "./ProductsPreview.css";

import booster23dbm from "../../assets/23-dbm-booster.png";
import booster25dbm from "../../assets/25-dbm-booster.png";
import amplifier27dbm from "../../assets/27-dbm-amplifier-booster.png";
import omniAntenna from "../../assets/omni-directional-antenna.png";
import lmr400 from "../../assets/lmr-400-cable.png";
import blueTri90018002100 from "../../assets/blue-tri-900-1800-2100.png";

// Curated subset for the homepage — the full 33-product catalogue with
// hero, filters, and spec modal lives on the dedicated /products page.
const pvwProducts = [
  {
    id: "01",
    title: "23 dBm Booster",
    subtitle: "Compact Signal Booster",
    description: "A compact booster for improving indoor voice and mobile-data reception in homes and small offices.",
    features: ["23 dBm output", "Compact design", "Indoor install"],
    image: booster23dbm,
    accentColor: "#0755A3",
    bgLight: "#E8F1FA",
    badge: "23 dBm",
  },
  {
    id: "02",
    title: "25 dBm Booster",
    subtitle: "LCD Signal Booster",
    description: "A professional booster with LCD status display and separate BS/MS antenna ports.",
    features: ["25 dBm output", "LCD display", "AGC support"],
    image: booster25dbm,
    accentColor: "#0A6FD4",
    bgLight: "#F0F7FF",
    badge: "25 dBm",
  },
  {
    id: "03",
    title: "27 dBm Amplifier",
    subtitle: "High-Power RF Amplifier",
    description: "A high-power amplifier for commercial and enterprise indoor signal-distribution systems.",
    features: ["27 dBm output", "Independent controls", "Enterprise grade"],
    image: amplifier27dbm,
    accentColor: "#19AB3F",
    bgLight: "#E8F7EA",
    badge: "27 dBm",
  },
  {
    id: "09",
    title: "Omni-Directional Antenna",
    subtitle: "Indoor Ceiling Antenna",
    description: "A ceiling-style antenna for distributing boosted cellular signal evenly across an indoor area.",
    features: ["698–2700 MHz", "Omni pattern", "N Female"],
    image: omniAntenna,
    accentColor: "#EA580C",
    bgLight: "#FFF7ED",
    badge: "Indoor",
  },
  {
    id: "11",
    title: "LMR 400 Coaxial Cable",
    subtitle: "Low-Loss RF Cable",
    description: "A low-loss 50-Ohm coaxial feeder cable for longer booster and antenna cable runs.",
    features: ["50 Ohm", "Low RF loss", "Long runs"],
    image: lmr400,
    accentColor: "#0891B2",
    bgLight: "#ECFEFF",
    badge: "Lowest Loss",
  },
  {
    id: "23",
    title: "Tri-Band 900+1800+2100 MHz",
    subtitle: "Tri-Band Signal Booster",
    description: "A tri-band Future Max booster designed to improve weak indoor cellular reception across three bands.",
    features: ["Tri Band", "Site dependent coverage", "Indoor install"],
    image: blueTri90018002100,
    accentColor: "#7C3AED",
    bgLight: "#F5F3FF",
    badge: "Tri Band",
  },
];

const ProductsPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pvw-section" ref={sectionRef}>
      <div className="pvw-container">
        <div className={`pvw-header ${isVisible ? "visible" : ""}`}>
          <div className="pvw-header-left">
            <span className="pvw-tag">Our Products</span>
            <h2 className="pvw-title">
              Enterprise RF Products &
              <span className="pvw-accent"> Signal Booster Range</span>
            </h2>
          </div>
          <a href="/products" className="pvw-view-all">
            View All 33 Products
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="pvw-grid">
          {pvwProducts.map((product, index) => (
            <div
              key={product.id}
              className={`pvw-card ${isVisible ? "visible" : ""}`}
              style={{
                "--pvw-accent": product.accentColor,
                "--pvw-bg-light": product.bgLight,
                transitionDelay: isVisible ? `${index * 0.07}s` : "0s",
              }}
            >
              <div className="pvw-card-image-wrap">
                <img src={product.image} alt={product.title} className="pvw-card-image" />
                <div className="pvw-card-image-shade" />
                <span className="pvw-card-badge" style={{ background: product.accentColor }}>
                  {product.badge}
                </span>
              </div>
              <div className="pvw-card-body">
                <span className="pvw-card-subtitle" style={{ color: product.accentColor }}>
                  {product.subtitle}
                </span>
                <h3 className="pvw-card-title">{product.title}</h3>
                <p className="pvw-card-desc">{product.description}</p>
                <div className="pvw-card-features">
                  {product.features.map((feature, i) => (
                    <span key={i} className="pvw-card-feature">
                      <CheckCircle2 size={12} style={{ color: product.accentColor }} />
                      {feature}
                    </span>
                  ))}
                </div>
                <a href="/products" className="pvw-card-link" style={{ color: product.accentColor }}>
                  View Specifications
                  <ArrowRight size={14} />
                </a>
              </div>
              <div className="pvw-card-line" style={{ background: product.accentColor }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;