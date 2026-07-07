import React from "react";
import {
  Cpu,
  ShieldCheck,
  Rocket,
  Wrench,
  Radio,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: <Radio size={42} />,
    title: "Engineering Expertise",
    desc: "Certified RF planning and professional deployment.",
  },
  {
    icon: <Cpu size={42} />,
    title: "Advanced Technology",
    desc: "4G, 5G and IoT-ready wireless connectivity solutions.",
  },
  {
    icon: <Rocket size={42} />,
    title: "Fast Deployment",
    desc: "Efficient installation with minimal operational disruption.",
  },
  {
    icon: <Wrench size={42} />,
    title: "End-to-End Support",
    desc: "Consultation, installation, maintenance and AMC services.",
  },
  {
    icon: <BarChart3 size={42} />,
    title: "Scalable Solutions",
    desc: "Solutions designed for homes, enterprises and industries.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Reliable Performance",
    desc: "Consistent signal coverage using high-quality components.",
  },
];

const WhyFuturemax = () => {
  return (
    <section className="why-futuremax">

      <div className="container">

        <span className="section-tag">
          WHY FUTUREMAX
        </span>

        <h2>
          Building Reliable Connectivity Experiences
          Through Engineering Excellence
        </h2>

        <p className="section-description">
          At Futuremax Technology, we combine engineering
          expertise, advanced wireless technologies and
          professional deployment to deliver dependable
          connectivity solutions.
        </p>

        <div className="why-grid">

          {features.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyFuturemax;