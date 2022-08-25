import React from "react";
import { Footer, Navbar } from "../../components";
import { Banner, Donations } from "../../modules/Donate";

const Donate = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Donations />
      <Footer />
    </div>
  );
};

export default Donate;
