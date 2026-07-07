import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqData = [
  {
    question: "How does a mobile signal booster work?",
    answer:
      "A mobile signal booster captures weak outdoor signals, amplifies them, and redistributes stronger signals throughout your building for improved voice and data connectivity.",
  },
  {
    question: "Will it support 4G and 5G networks?",
    answer:
      "Yes. Our solutions are designed to support multiple frequency bands and are compatible with modern 4G LTE and 5G network deployments.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes. Our certified engineers handle site surveys, RF analysis, installation, testing, and post-installation optimization.",
  },
  {
    question: "Can one booster cover multiple floors?",
    answer:
      "Coverage depends on the building layout and selected solution. During the site survey, we design a customized coverage plan for your property.",
  },
  {
    question: "Do you offer warranty and support?",
    answer:
      "Absolutely. We provide product warranty, technical assistance, and annual maintenance support to ensure long-term performance.",
  },
];

const FAQ = () => {

  const [active, setActive] = useState(0);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (

    <section className="faq-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            FREQUENTLY ASKED QUESTIONS
          </span>

          <h2>
            Everything You Need
            <br />
            to Know
          </h2>

          <p>
            Find answers to the most common questions about our
            wireless connectivity solutions, installation process,
            and support services.
          </p>

        </div>

        <div className="faq-wrapper">

          {faqData.map((faq, index) => (

            <div className="faq-item" key={index}>

              <button
                className="faq-question"
                onClick={() => toggle(index)}
              >

                <span>{faq.question}</span>

                {active === index ? (
                  <Minus size={20}/>
                ) : (
                  <Plus size={20}/>
                )}

              </button>

              <div
                className={
                  active === index
                    ? "faq-answer active"
                    : "faq-answer"
                }
              >

                <p>{faq.answer}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

};

export default FAQ;