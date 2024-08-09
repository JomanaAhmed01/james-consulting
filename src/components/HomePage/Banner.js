import React from "react";
import styled from "styled-components";

function Banner() {
  return (
    <Wrapper>
      <MainWrapper>
        <TextWrapper>
          <MiniHeader>Developing Innovative Strategies</MiniHeader>
          <Header>ACHIEVING GROWTH</Header>
          <Button>Free Consultation</Button>
        </TextWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url("/imgs/home-page-bg.jpg");
  background-repeat: no-repeat;
  background-position: center 0%;
  height: 512px;
  background-size: initial;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
`;

export const MainWrapper = styled.div`
  height: 512px;
  position: relative;
`;

export const TextWrapper = styled.div`
  background-color: #ffffff;
  width: 835px;
  height: 250px;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 980px) {
    width: 635px;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }
`;

export const MiniHeader = styled.p`
  color: #000000;
  font-size: 26px;
  margin-bottom: -50px;

  @media screen and (max-width: 980px) {
    font-size: 20px;
  }

  @media screen and (max-width: 700px) {
    font-size: 16px;
    margin-bottom: -35px;
  }

  @media screen and (max-width: 520px) {
    margin-bottom: -15px;
  }

  @media screen and (max-width: 410px) {
    font-size: 14px;
  }
`;

export const Header = styled.p`
  color: #072136;
  font-size: 60px;

  @media screen and (max-width: 980px) {
    font-size: 55px;
  }

  @media screen and (max-width: 700px) {
    font-size: 45px;
  }

  @media screen and (max-width: 520px) {
    font-size: 35px;
  }

  @media screen and (max-width: 410px) {
    font-size: 31px;
  }
`;

export const Button = styled.p`
  color: #0c3b5f;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #0c3b5f;
  width: 230px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: -30px;

  @media screen and (max-width: 980px) {
    width: 200px;
  }

  @media screen and (max-width: 700px) {
    margin-top: -15px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  @media screen and (max-width: 520px) {
    margin-top: 0px;
  }
`;

export default Banner;
