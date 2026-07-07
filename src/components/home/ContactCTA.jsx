import React from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="contact-cta">

      <div className="cta-overlay"></div>

      <div className="container">

        <div className="cta-content">

          <span className="section-tag">
            LET'S CONNECT
          </span>

          <h2>
            Ready to Transform
            Your Connectivity?
          </h2>

          <p>
            Whether you're planning a new deployment or upgrading an
            existing network, our engineering team is ready to design
            the right connectivity solution for your business.
          </p>

          <div className="cta-buttons">

            <a href="/contact" className="btn-primary">
              Request Site Survey
              <ArrowRight size={18}/>
            </a>

            <a href="tel:+918848749897" className="btn-outline">
              Call Our Experts
            </a>

          </div>

          <div className="contact-info">

            <div className="info-item">
              <PhoneCall size={20}/>
              <span>+91 88487 49897</span>
            </div>

            <div className="info-item">
              <Mail size={20}/>
              <span>futuremaxtechnologies@hotmail.com</span>
            </div>

            <div className="info-item">
              <MapPin size={20}/>
              <span>Kerala, India</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactCTA;