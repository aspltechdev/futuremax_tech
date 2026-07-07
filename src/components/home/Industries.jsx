import React from "react";
import {
  Building2,
  Hotel,
  Hospital,
  Factory,
  GraduationCap,
  Store,
  House,
  Landmark,
  ArrowRight,
} from "lucide-react";

const industries = [
  {
    icon: <Hotel size={42} />,
    title: "Hospitality",
    description:
      "Reliable mobile connectivity for hotels, resorts, convention centers and guest facilities.",
  },
  {
    icon: <Hospital size={42} />,
    title: "Healthcare",
    description:
      "Mission-critical wireless coverage for hospitals, clinics and healthcare campuses.",
  },
  {
    icon: <Building2 size={42} />,
    title: "Corporate",
    description:
      "Enterprise-grade connectivity for offices, IT parks and commercial buildings.",
  },
  {
    icon: <Factory size={42} />,
    title: "Industrial",
    description:
      "Wireless coverage solutions for factories, warehouses and manufacturing units.",
  },
  {
    icon: <Store size={42} />,
    title: "Retail",
    description:
      "Enhanced mobile coverage for shopping malls, supermarkets and retail outlets.",
  },
  {
    icon: <GraduationCap size={42} />,
    title: "Education",
    description:
      "Reliable communication infrastructure for schools, colleges and universities.",
  },
  {
    icon: <House size={42} />,
    title: "Residential",
    description:
      "Strong indoor mobile signal for villas, apartments and premium residences.",
  },
  {
    icon: <Landmark size={42} />,
    title: "Government",
    description:
      "Secure and scalable wireless infrastructure for public sector facilities.",
  },
];

const Industries = () => {
  return (
    <section className="industries-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            INDUSTRIES WE EMPOWER
          </span>

          <h2>
            Connectivity Solutions
            <br />
            Designed for Every Industry
          </h2>

          <p>
            Futuremax Technology delivers intelligent wireless
            connectivity solutions engineered for diverse industries,
            ensuring uninterrupted communication where it matters most.
          </p>

        </div>

        <div className="industries-grid">

          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>

              <div className="industry-icon">
                {industry.icon}
              </div>

              <h3>{industry.title}</h3>

              <p>{industry.description}</p>

              <a href="/" className="industry-link">
                Learn More
                <ArrowRight size={18} />
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Industries;