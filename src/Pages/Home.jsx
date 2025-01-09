import React from "react";
import Header from "../Components/Header";
import PopularRecepies from "../Components/PopularRecepies";
import AboutUs from "../Components/AboutUs";
import CommunitySection from "../Components/CommunitySection";
import CTA from "../Components/CTA";

function Home() {
  return (
    <div className="py-11">
      <Header />
      <PopularRecepies />
      <AboutUs />
      <CommunitySection />
      <CTA />
    </div>
  );
}

export default Home;
