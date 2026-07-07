import React from "react";
import {
  Home,
  Building2,
  Factory,
  Hospital,
  Hotel,
  Cpu,
} from "lucide-react";

import "./SolutionsPreview.css";

const solutions = [
  {
    icon: <Home size={42} />,
    title: "Residential",
    description:
      "Reliable indoor mobile coverage for apartments, villas and homes.",
  },
  {
    icon: <Building2 size={42} />,
    title: "Commercial",
    description:
      "Wireless connectivity solutions for offices and business spaces.",
  },
  {
    icon: <Factory size={42} />,
    title: "Industrial",
    description:
      "Robust signal enhancement for factories and warehouses.",
  },
  {
    icon: <Hospital size={42} />,
    title: "Healthcare",
    description:
      "Critical communication coverage for hospitals and clinics.",
  },
  {
    icon: <Hotel size={42} />,
    title: "Hospitality",
    description:
      "Reliable guest connectivity for hotels and resorts.",
  },
  {
    icon: <Cpu size={42} />,
    title: "Smart IoT",
    description:
      "Intelligent wireless systems with remote monitoring.",
  },
];

const SolutionsPreview = () => {
  return (
    <section className="solutions-preview">

      <div className="container">

        <span className="section-tag">
          WHAT WE DELIVER
        </span>

        <h2>
          Engineering Reliable Connectivity
          <br />
          Across Every Environment
        </h2>

        <p className="section-description">
          Futuremax Technology delivers intelligent wireless
          infrastructure that enhances mobile coverage,
          strengthens communication, and supports modern
          connected environments.
        </p>

        <div className="solutions-grid">

          {solutions.map((item, index) => (
            <div className="solution-card" key={index}>

              <div className="solution-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

        <div className="section-btn">

          <a href="/solutions" className="btn-primary">
            Explore All Solutions
          </a>

        </div>

      </div>

    </section>
  );
};

export default SolutionsPreview;