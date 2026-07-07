// src/pages/Home.jsx

import React from "react";

// Home Sections
import Hero from "../components/home/Hero";

import FeaturedProducts from "../components/home/FeaturedProducts";
// import Technologies from "../components/home/Technologies";
import Industries from "../components/home/Industries";

import Process from "../components/home/Process";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";
import SolutionsPreview from "../components/home/SolutionsPreview";
import WhyFuturemax from "../components/home/WhyFuturemax";

const Home = () => {
  return (
    <main className="home-page">

      <Hero />

   
      <SolutionsPreview/>

      <FeaturedProducts />

      {/* <Technologies /> */}

      <Industries />

      <WhyFuturemax />

      <Process />

      <Projects />

      <Testimonials />

      <FAQ />

      <ContactCTA />

    </main>
  );
};

export default Home;