import React from "react";
import { Footer, Navbar } from "../../components";
import { Banner, Donations } from "../../modules/Donate";

const Donate = () => {
  return (
    <div>
      <Navbar page="donate" />
      <Banner />
      <Donations />
      <Footer page="donate" />
    </div>
  );
};

export default Donate;
