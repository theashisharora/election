import React from "react";
import { Footer, Navbar } from "../../components";
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
      <Footer />
    </div>
  );
};

export default Home;
