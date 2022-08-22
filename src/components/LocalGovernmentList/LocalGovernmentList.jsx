// Imports
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { localGovernments } from "../../data";
import { LocalGovernmentListWrapper } from "./styles";

const LocalGovernmentList = () => {
  const [displayedIndex, setDisplayedIndex] = useState(0);

  return (
    <LocalGovernmentListWrapper>
      <section className="local-government">
        <h3 className="local-government__header">Local Government</h3>
        <ul className="local-government__list">
          {localGovernments.map((localGovernment, index) => (
            <li className="local-government__list--item" key={index}></li>
          ))}
        </ul>
      </section>
      <ul className="pointer">
        {localGovernments.map((localGovernment, index) => (
          <li
            className={`pointer__item ${
              displayedIndex === index ? "pointer__item--active" : ""
            }`}
            key={index}
          >
            <button
              onClick={() => {
                setDisplayedIndex(index);
              }}
            ></button>
          </li>
        ))}
      </ul>
    </LocalGovernmentListWrapper>
  );
};

export default LocalGovernmentList;
