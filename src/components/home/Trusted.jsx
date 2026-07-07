import React from "react";
import {
  Building2,
  Hotel,
  Hospital,
  Factory,
  GraduationCap,
  House,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const industries = [
  {
    icon: <Hotel size={32} />,
    title: "Hospitality",
  },
  {
    icon: <Hospital size={32} />,
    title: "Healthcare",
  },
  {
    icon: <Building2 size={32} />,
    title: "Corporate",
  },
  {
    icon: <Factory size={32} />,
    title: "Industrial",
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Education",
  },
  {
    icon: <House size={32} />,
    title: "Residential",
  },
];

const Trusted = () => {
  return (
    <section className="trusted-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            TRUSTED BY BUSINESSES
          </span>

          <h2>
            Delivering Reliable Connectivity
            Across Critical Environments
          </h2>

          <p>
            Futuremax Technology designs and deploys wireless connectivity
            solutions for organizations where reliable communication is
            essential to everyday operations.
          </p>

        </div>

        {/* Industries */}

        <div className="trusted-grid">

          {industries.map((item, index) => (

            <div className="trusted-card" key={index}>

              <div className="trusted-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

            </div>

          ))}

        </div>

        {/* Compatibility */}

        <div className="compatibility">

          <h4>Compatible with Major Mobile Networks</h4>

          <div className="network-list">

            <span>Jio</span>

            <span>Airtel</span>

            <span>Vi</span>

            <span>BSNL</span>

          </div>

          <p className="network-note">
            Our solutions are designed to support multiple network operators
            depending on the selected product and deployment environment.
          </p>

        </div>

        {/* Trust Strip */}

        <div className="trust-strip">

          <div className="trust-item">

            <ShieldCheck size={24} />

            <span>Professional Installation</span>

          </div>

          <div className="trust-item">

            <Wifi size={24} />

            <span>4G & 5G Ready Solutions</span>

          </div>

          <div className="trust-item">

            <ShieldCheck size={24} />

            <span>Engineering Support</span>

          </div>

          <div className="trust-item">

            <Wifi size={24} />

            <span>Enterprise Grade Deployment</span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Trusted;