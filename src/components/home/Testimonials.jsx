import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arun Kumar",
    company: "Luxury Resort",
    review:
      "Futuremax delivered excellent indoor mobile coverage across our resort. The engineering team handled everything professionally from survey to deployment.",
    image: "/images/testimonials/client1.jpg",
  },
  {
    name: "Dr. Joseph",
    company: "City Hospital",
    review:
      "Reliable communication is essential in healthcare. Futuremax significantly improved signal quality throughout our hospital.",
    image: "/images/testimonials/client2.jpg",
  },
  {
    name: "Rahul Nair",
    company: "Corporate Office",
    review:
      "Professional installation, excellent support, and impressive results. We highly recommend Futuremax Technology.",
    image: "/images/testimonials/client3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            CLIENT TESTIMONIALS
          </span>

          <h2>
            Trusted by Businesses
            Across Industries
          </h2>

          <p>
            Our success is measured by the confidence our clients place
            in us and the connectivity solutions we deliver.
          </p>

        </div>

        <div className="testimonial-grid">

          {testimonials.map((item, index) => (

            <div className="testimonial-card" key={index}>

              <div className="stars">

                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#FFC107"
                    color="#FFC107"
                  />
                ))}

              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="client">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>{item.name}</h4>

                  <span>{item.company}</span>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;