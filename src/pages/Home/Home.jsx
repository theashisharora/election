import React from "react";
import { Navbar } from "../../components";
import {
  Banner,
  Features,
  SecondBanner,
  TreeDoesntMake,
} from "../../modules/Homepage";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features />
      <TreeDoesntMake />
      <SecondBanner />
    </div>
  );
};

export default Home;
