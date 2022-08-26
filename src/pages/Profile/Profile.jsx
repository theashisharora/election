import React from "react";
import { Footer, Navbar } from "../../components";
import { Banner } from "../../modules/Profile";

const Profile = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Banner />
      <Footer />
    </div>
  );
};

export default Profile;
