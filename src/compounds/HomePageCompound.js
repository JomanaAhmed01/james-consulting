import React from "react";
import styled from "styled-components";
import Navbar from "../components/HomePage/Navbar";
import Banner from "../components/HomePage/Banner";
import Services from "../components/HomePage/Services";
import AboutUs from "../components/HomePage/AboutUs";

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <Services />
      <AboutUs />
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export default HomePageCompound;
