import React from "react";
import Hero from "./Components/Hero";
import Ads from "./Components/Ads";
import Service from "./Components/Service";
import Roadmap from "./Components/Roadmap";
import WhyChooseUs from "./Components/whychooseus";
import Workdone from "./Components/Workdone";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Line from "./Components/Line";
import Cursor from "./Components/Cursor";
import QA from "./Components/QA";
import Whatsapp from "./Components/WhatsApp";
import Instagram from "./Components/Instgram";
import Feedback from "./Components/Feedback";
import Technology from "./Components/Technology";
import MetaAds from "./Components/MetaAds";

const page = () => {
  return (
    <>
      <Hero />
      <Ads />
      <Line />
      <Service />
      <Line />
      <Roadmap />
      <Line />
      <WhyChooseUs />
      <Workdone />
      <Line />
      <About />
      <Technology />
      <MetaAds />
      <Portfolio />

      <Line />
      <QA />
      <Feedback />
      <Whatsapp />
      <Instagram />
    </>
  );
};

export default page;
