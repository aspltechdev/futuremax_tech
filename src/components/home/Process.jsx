import React from "react";
import {
  Search,
  Radio,
  PenTool,
  Wrench,
  Gauge,
  Headphones,
} from "lucide-react";

const process = [
  {
    id: "01",
    icon: <Search size={34} />,
    title: "Site Survey",
    description:
      "We inspect the site to identify signal strength, dead zones and environmental challenges.",
  },
  {
    id: "02",
    icon: <Radio size={34} />,
    title: "RF Analysis",
    description:
      "Our engineers analyze frequency bands and network conditions to determine the ideal solution.",
  },
  {
    id: "03",
    icon: <PenTool size={34} />,
    title: "Solution Design",
    description:
      "A customized wireless coverage plan is designed based on the building layout and requirements.",
  },
  {
    id: "04",
    icon: <Wrench size={34} />,
    title: "Installation",
    description:
      "Professional installation using certified equipment and best engineering practices.",
  },
  {
    id: "05",
    icon: <Gauge size={34} />,
    title: "Testing & Optimization",
    description:
      "Coverage, signal quality and system performance are tested and optimized.",
  },
  {
    id: "06",
    icon: <Headphones size={34} />,
    title: "Support",
    description:
      "Continuous maintenance, monitoring and technical support ensure long-term reliability.",
  },
];

const Process = () => {
  return (
    <section className="process-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            OUR PROCESS
          </span>

          <h2>
            A Proven Engineering Process
            <br />
            for Reliable Connectivity
          </h2>

          <p>
            Every project follows a structured engineering methodology,
            ensuring consistent performance, reliable deployment and
            long-term operational success.
          </p>

        </div>

        <div className="process-grid">

          {process.map((item) => (
            <div className="process-card" key={item.id}>

              <span className="process-number">
                {item.id}
              </span>

              <div className="process-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Process;