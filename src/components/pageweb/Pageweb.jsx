import React from "react";
import styled from "styled-components";
import { BsFillCartFill } from "react-icons/bs";
import NavBar from "./NavBar";
import Hero from "./Hero";
import ZoneCard from "./ZoneCards";
import Footer from "./Footer";
const Pageweb = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ZoneCard />
      <Footer />
    </>
  );
};

export default Pageweb;
