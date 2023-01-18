import React from "react";

import Header from "../components/Header";
import Hero from "../parts/Homepage/Hero";
import Services from "../parts/Homepage/Services";
import Feature from "../parts/Homepage/Feature";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Feature />
    </>
  );
}
