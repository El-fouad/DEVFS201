import React from "react";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
const Hero = () => {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 28vh;
    width: 100%;
    background-color: black;
    margin: auto;
  `;
  const Title = styled.p`
    color: white;
    font-size: 48px;
    font-weight: 900;
  `;
  const Parag = styled.p`
    color: white;
  `;

  return (
    <>
      <Div>
        <Title>Shop in style</Title>
        <Parag>whith this shop homepage template</Parag>
      </Div>
    </>
  );
};

export default Hero;
