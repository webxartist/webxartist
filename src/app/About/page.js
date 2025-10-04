import React from "react";
import About from "../Components/About";
import Portfolio from "../Components/Portfolio";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";
import Technology from "../Components/Technology";
import MetaAds from "../Components/MetaAds";

const page = () => {
  return (
    <>
      <div className="pt-16">
        <About />
        <Technology />
        <MetaAds />
        <Portfolio />
      </div>
      <Whatsapp />
      <Instagram />
    </>
  );
};

export default page;
