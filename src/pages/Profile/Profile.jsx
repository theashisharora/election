import React from "react";
import { Footer, Navbar } from "../../components";
import { Banner, ProfileInfo } from "../../modules/Profile";

const Profile = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <Banner />
      <ProfileInfo />
      <Footer />
    </div>
  );
};

export default Profile;
