import React from "react";
import { Navbar } from "../../components";
import { Banner, Features } from "../../modules/Homepage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
    </div>
  );
};

export default Home;
