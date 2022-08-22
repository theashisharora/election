// Imports
import React from "react";
import { Link } from "react-router-dom";
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
      <h3 className="card__header card__header--animate">{title}</h3>
      <p className="card__description">{description}</p>
      {isExternal ? (
        <a href={link} className="card__cta">
          {ctaLabel}
        </a>
      ) : (
        <Link to={link} className="card__cta">
          {ctaLabel}
        </Link>
      )}
    </ChangeFeaturesCardWrapper>
  );
};

export default ChangeFeaturesCard;
