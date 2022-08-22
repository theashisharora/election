import React from "react";
import { Navbar } from "../../components";
import { Banner, Features, TreeDoesntMake } from "../../modules/Homepage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <TreeDoesntMake />
    </div>
  );
};

export default Home;
