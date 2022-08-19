// Imports
import React from "react";
import { PageNotFoundWrapper } from "./styles";
import { useParams } from "react-router";
import { Navbar } from "../../components";

const PageNotFound = () => {
  return;
  <PageNotFoundWrapper>
    <Navbar darkMode={true} />
    <h3>Page not found</h3>
  </PageNotFoundWrapper>;
};

export default PageNotFound;
