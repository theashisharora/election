// Imports
import React from "react";
import { Components } from "../../components";
import { PageNotFoundWrapper } from "./styles";
import { useParams } from "react-router";

// Destructure imports
const { Navbar } = Components;

const PageNotFound = () => {
  return;
  <PageNotFoundWrapper>
    <Navbar darkMode={true} />
    <h3>Page not found</h3>
  </PageNotFoundWrapper>;
};

export default PageNotFound;
