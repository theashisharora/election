import React from "react";
import { Footer, Navbar } from "../../components";
import { BannerList } from "../../modules/Banner";

const Banner = () => {
  return (
    <div>
      <Navbar />
      <BannerList />
      <Footer />
    </div>
  );
};

export default Banner;
