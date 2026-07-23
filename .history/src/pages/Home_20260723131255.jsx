// src/pages/Home.jsx

import React from "react";

// Home Sections
import Hero from "../components/home/Hero";

// import Technologies from "../components/home/Technologies";

import Process from "../components/home/Process";
import Projects from "../components/home/Projects";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import ContactCTA from "../components/home/ContactCTA";
import SolutionsPreview from "../components/home/SolutionsPreview";
import ProductsPreview from "../components/home/ProductsPreview";

import Impact from "../components/home/Impact";
import Clients from "../components/home/Clients";
import SocialWall from "../components/SocialWall";

const Home = () => {
  return (
    <main className="home-page">

      <Hero />

      <SolutionsPreview/>

      <ProductsPreview />

      {/* <Technologies /> */}
      <Impact/> 
      <Clients/>

      <Indust />

      <Process />

      <Projects />
<SocialWall/>
      <Testimonials />

      <FAQ />

      <ContactCTA />

    </main>
  );
};

export default Home;