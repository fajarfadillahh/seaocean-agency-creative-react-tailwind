import React from "react";

import Header from "../components/Header";
import Hero from "../parts/Homepage/Hero";
import Services from "../parts/Homepage/Services";
import Feature from "../parts/Homepage/Feature";
import User from "../parts/Homepage/User";
import Work from "../parts/Homepage/Work";
import Callback from "../components/Callback";

export default function Homepage() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Feature />
      <User />
      <Work />
      <Callback />
    </>
  );
}
