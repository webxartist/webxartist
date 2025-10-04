import React from "react";
import WhyChooseUs from "../Components/whychooseus";
import Workdone from "../Components/Workdone";
import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

const page = () => {
  return (
    <>
      <div className="pt-16">
        <WhyChooseUs />
        <Workdone />
      </div>
      <Whatsapp />
      <Instagram />
    </>
  );
};

export default page;
