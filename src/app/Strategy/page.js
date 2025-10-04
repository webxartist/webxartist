import React from "react";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";
import Pricing from "../Components/Pricing";
import GraphicsPrice from "../Components/GraohicsPrice";
import VideoEditingPricing from "../Components/VideoEditingPricing";
import PricingHeader from "../Components/PricingHeader";
import ReferAndEarn from "../Components/ReferandEarn";
import Line from "../Components/Line";

const page = () => {
  return (
    <>
      <div className="pt-16">
        <PricingHeader />
        <Line />
        <Pricing />
        <GraphicsPrice />
        <VideoEditingPricing />
        <Line />
        <ReferAndEarn />
      </div>
      <Whatsapp />
      <Instagram />
    </>
  );
};

export default page;
