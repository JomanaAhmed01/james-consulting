import React from "react";
import styled from "styled-components";
import Navbar from "../components/HomePage/Navbar";
import Banner from "../components/HomePage/Banner";
import Services from "../components/HomePage/Services";
import AboutUs from "../components/HomePage/AboutUs";
import OurClients from "../components/HomePage/OurClients";
import Testimonials from "../components/HomePage/Testimonials";

function HomePageCompound() {
  return (
    <Wrapper>
      <Navbar />
      <Banner />
      <Services />
      <AboutUs />
      <OurClients />
      <Testimonials />
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export default HomePageCompound;
