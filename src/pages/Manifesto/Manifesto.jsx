import React from "react";
import { Footer, Navbar } from "../../components";
import { AgendaSection, Banner } from "../../modules/Manifesto";

const Manifesto = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AgendaSection />
      <Footer />
    </div>
  );
};

export default Manifesto;
