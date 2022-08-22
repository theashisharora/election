import React from "react";
import { Navbar } from "../../components";
import {
  Banner,
  Features,
  SecondBanner,
  Support,
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
      <Support />
    </div>
  );
};

export default Home;
