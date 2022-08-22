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
      <h3 data-aos="fade-up" className="card__header">
        {title}
      </h3>
      <h3 data-aos="fade-up" className="card__header card__header--animate">
        {title}
      </h3>
      <p data-aos="fade-up" className="card__description">
        {description}
      </p>
      {isExternal ? (
        <a data-aos="fade-up" href={link} className="card__cta">
          {ctaLabel}
        </a>
      ) : (
        <Link data-aos="fade-up" to={link} className="card__cta">
          {ctaLabel}
        </Link>
      )}
    </ChangeFeaturesCardWrapper>
  );
};

export default ChangeFeaturesCard;
