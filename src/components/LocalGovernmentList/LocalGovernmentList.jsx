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
        <h3 className="local-government__header">
          {localGovernments[displayedIndex].name}
        </h3>
        <ul className="local-government__wards">
          {localGovernments[displayedIndex].wards.map((ward, index) => (
            <li className="local-government__wards--item" key={index}>
              {ward}
            </li>
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
