import React from "react";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
const Card = (props) => {
  const Div = styled.div`
    text-align: center;
    height: 80%;
    width: 18%;
    background-color: #e7dedd;
    margin: auto 15px;
    border-radius: 10px;
    border: 1px solid black;
  `;
  const Zoneimg = styled.div`
    height: 50%;
    width: 100%;
    background-color: grey;
    border-radius: 10px;
  `;
  const Title = styled.p`
    color: black;
    font-size: 36px;
    font-weight: 700;
    margin-top: 20px;
  `;
  const Price = styled.h3`
    color: black;
    margin-top: 3%;
  `;
  const Btncard = styled.button`
    height: 45px;
    width: 55%;
    margin-top: 6%;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 24px;
  `;

  return (
    <>
      <Div>
        <Zoneimg></Zoneimg>
        <Title>{props.name}</Title>
        <Price>{props.price}</Price>
        <Btncard>Add to cart</Btncard>
      </Div>
    </>
  );
};

export default Card;
