import React from "react";
import {
  Radio,
  Wifi,
  Cpu,
  Antenna,
  Cable,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: <Radio size={42} />,
    title: "Single Band Boosters",
    description:
      "Reliable signal enhancement for specific network frequencies.",
  },
  {
    icon: <Wifi size={42} />,
    title: "Dual & Tri Band Boosters",
    description:
      "Simultaneous coverage for multiple network operators and frequency bands.",
  },
  {
    icon: <Cpu size={42} />,
    title: "IoT Smart Boosters",
    description:
      "Cloud-enabled wireless systems with remote monitoring and intelligent control.",
  },
  {
    icon: <Antenna size={42} />,
    title: "Professional Antennas",
    description:
      "Indoor, outdoor, omni-directional and directional antenna solutions.",
  },
  {
    icon: <Cable size={42} />,
    title: "RF Accessories",
    description:
      "Premium cables, splitters, connectors and installation accessories.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="featured-products">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            PRODUCT PORTFOLIO
          </span>

          <h2>
            Enterprise Connectivity
            <br />
            Solutions
          </h2>

          <p>
            Explore our portfolio of wireless connectivity products
            engineered for homes, businesses, industries and
            mission-critical environments.
          </p>

        </div>

        <div className="products-grid">

          {products.map((item, index) => (

            <div className="product-card" key={index}>

              <div className="product-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <a href="/products">

                Explore Products

                <ArrowRight size={18}/>

              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedProducts;