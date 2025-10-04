import React from "react";
import Service from "../Components/Service";

import Whatsapp from "../Components/WhatsApp";
import Instagram from "../Components/Instgram";

const page = () => {
  return (
    <>
      <div className="pt-16">
        <Service />
      </div>

      <Whatsapp />
      <Instagram />
    </>
  );
};

export default page;
