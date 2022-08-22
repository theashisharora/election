// Imports
import React from "react";
import { ChangeFeaturesCardWrapper } from "./styles";

const ChangeFeaturesCard = ({
  title,
  description,
  ctaLabel,
  link,
  isExternal,
}) => {
  return (
    <ChangeFeaturesCardWrapper>
      <h3 className="card__header">{title}</h3>
    </ChangeFeaturesCardWrapper>
  );
};

export default ChangeFeaturesCard;
