import React from "react";
import { AgendaFlexWrapper } from "./style";

const AgendaFlex = ({ headerText, body, image }) => {
  return (
    <AgendaFlexWrapper>
      <div class="flex__left">
        <img src={image} alt={`${headerText}`} class="flex__left--image" />
      </div>
      <div className="flex__right">
        <h3 class="flex__header">{headerText}</h3>
        <> {body}</>
      </div>
    </AgendaFlexWrapper>
  );
};

export default AgendaFlex;
