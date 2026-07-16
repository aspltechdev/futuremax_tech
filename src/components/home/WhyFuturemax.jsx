import { motion } from "framer-motion";
import {
  FaBroadcastTower,
  FaTools,
  FaUsers,
  FaAward,
  FaArrowRight,
} from "react-icons/fa";
import "./WhyFuturemax.css";

import engineeringImg from "../../assets/project2.jpeg"; // Replace with your image

const features = [
  {
    icon: <FaBroadcastTower />,
    title: "Engineering Expertise",
    description:
      "Our experienced RF engineers design and implement reliable wireless connectivity solutions with precise planning, signal optimization, and technical excellence.",
  },
  {
    icon: <FaTools />,
    title: "Customized Solutions",
    description:
      "Every project is carefully designed according to building structure, coverage requirements, user density, and future scalability.",
  },
  {
    icon: <FaAward />,
    title: "Industry Experience",
    description:
      "From commercial buildings and hospitals to hotels, industries and educational institutions, we deliver tailored RF infrastructure solutions.",
  },
  {
    icon: <FaUsers />,
    title: "Customer Satisfaction",
    description:
      "We focus on long-term performance, seamless connectivity, quality installation, and dedicated post-installation support.",
  },
];

const stats = [
  {
    value: "250+",
    label: "Successful Installations",
  },
  {
    value: "99%",
    label: "Customer Satisfaction",
  },
  {
    value: "20+",
    label: "Enterprise Projects",
  },
  {
    value: "6+",
    label: "Industries Served",
  },
];

export default function WhyFuturemax() {
  return (
    <section className="whyFuturemax">

      <div className="why-bg-circle one"></div>
      <div className="why-bg-circle two"></div>

      <div className="container">

        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">
            WHY CHOOSE FUTUREMAX
          </span>

          <h2>
            Engineering Excellence That
            <span> Powers Reliable Connectivity</span>
          </h2>

          <p>
            Futuremax delivers advanced RF Engineering, Wireless Network
            Design, Signal Enhancement and Distributed Antenna System (DAS)
            solutions that are customized for every environment. We combine
            technical expertise, innovation and quality execution to ensure
            seamless connectivity across residential, commercial and enterprise
            projects.
          </p>
        </motion.div>

        <div className="why-content">

          <motion.div
            className="why-image-section"
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            <div className="image-wrapper">

              <img
                src={engineeringImg}
                alt="Futuremax Engineers"
              />

              <div className="experience-box">

                <h2>10+</h2>

                <p>
                  Years of Engineering
                  <br />
                  Excellence
                </p>

              </div>

            </div>

          </motion.div>

          <motion.div
            className="why-cards"
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
          >

            {features.map((item, index) => (

              <motion.div
                key={index}
                className="feature-card"
                whileHover={{
                  y: -10,
                }}
              >

                <div className="feature-icon">
                  {item.icon}
                </div>

                <div className="feature-text">

                  <h3>{item.title}</h3>

                  <p>
                    {item.description}
                  </p>

                </div>

              </motion.div>

            ))}

          </motion.div>

        </div>

        <motion.div
          className="stats-section"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          {stats.map((stat, index) => (

            <div
              className="stat-card"
              key={index}
            >

              <h2>{stat.value}</h2>

              <p>{stat.label}</p>

            </div>

          ))}

        </motion.div>

        <motion.div
          className="why-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .2 }}
        >

          <div>

            <h3>
              Delivering End-to-End RF Engineering Solutions
            </h3>

            <p>
              From RF Site Surveys and Network Planning to Installation,
              Optimization and Long-Term Support, Futuremax ensures every
              deployment achieves maximum signal performance and operational
              reliability.
            </p>

          </div>

          <button>

            Explore Our Solutions

            <FaArrowRight />

          </button>

        </motion.div>

      </div>

    </section>
  );
}