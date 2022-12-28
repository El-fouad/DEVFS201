import React from "react";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
import Card from "./Card";
const Footer = () => {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8.7vh;
    width: 100%;
    background-color: black;
  `;
  const Text = styled.h3`
    color: white;
  `;
  return (
    <>
      <Div>
        <Text>Copyright @ your website 2022</Text>
      </Div>
    </>
  );
};

export default Footer;
