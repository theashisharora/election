// Imports
import React from "react";
import { PageNotFoundWrapper } from "./styles";
import { useParams } from "react-router";
import { Footer, Navbar } from "../../components";

const PageNotFound = () => {
  return;
  <PageNotFoundWrapper>
    <Navbar darkMode={true} />
    <h3>Page not found</h3>
    <Footer />
  </PageNotFoundWrapper>;
};

export default PageNotFound;
