import React from "react";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
import Card from "./Card";
const ZoneCard = () => {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    height: 57vh;
    width: 100%;
  `;

  return (
    <>
      <Div>
        <Card name="laptop" price="45.70$" />
        <Card name="iphone 14" price="1500$" />
        <Card name="desktop" price="900$" />
        <Card name="smart TV" price="970.51$" />
      </Div>
    </>
  );
};

export default ZoneCard;
