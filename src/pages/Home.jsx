// src/pages/Home.jsx

import React from "react";

// Home Sections
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import ServicesPreview from "../components/home/ServicesPreview";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Technologies from "../components/home/Technologies";
import Industries from "../components/home/Industries";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";

const Home = () => {
  return (
    <main className="home-page">

      <Hero />

      <AboutPreview />

      <ServicesPreview />

      <FeaturedProducts />

      <Technologies />

      <Industries />

      <WhyChooseUs />

      <Process />

      <Projects />

      <Testimonials />

      <FAQ />

      <ContactCTA />

    </main>
  );
};

export default Home;