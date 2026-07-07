import React from "react";
import CountUp from "react-countup";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    number: 5000,
    suffix: "+",
    title: "Projects Delivered",
    description: "Successful installations across residential, commercial and industrial sectors.",
  },
  {
    number: 98,
    suffix: "%",
    title: "Coverage Success",
    description: "Reliable signal enhancement achieved through engineering excellence.",
  },
  {
    number: 24,
    suffix: "/7",
    title: "Technical Support",
    description: "Dedicated technical assistance whenever you need us.",
  },
  {
    number: 100,
    suffix: "+",
    title: "Enterprise Clients",
    description: "Trusted by businesses across multiple industries.",
  },
];

const Impact = () => {
  return (
    <section className="impact-section">

      <div className="container">

        <div className="impact-left">

          <span className="section-tag">
            FUTUREMAX IMPACT
          </span>

          <h2>
            Engineering Reliable
            Connectivity at Scale
          </h2>

          <p>
            Every project we undertake reflects our commitment to
            innovation, engineering precision and customer success.
            Our proven track record demonstrates the trust placed in
            Futuremax Technology.
          </p>

          <a href="/about" className="btn-primary">
            Learn More
            <ArrowUpRight size={18}/>
          </a>

        </div>

        <div className="impact-right">

          {stats.map((item,index)=>(

            <div className="impact-card" key={index}>

              <h3>

                <CountUp
                  end={item.number}
                  duration={3}
                />

                {item.suffix}

              </h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Impact;