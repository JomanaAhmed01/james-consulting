import React from "react";
import styled from "styled-components";

function OurClients() {
  return (
    <Wrapper>
      <MainWrapper>
        <Header>OUR CLIENTS</Header>

        <LogosWrapper>
          <LogoOne src="/imgs/keno.svg" />
          <LogoTwo src="/imgs/lendo.svg" />
          <LogoThree src="/imgs/dmc.svg" />
          <LogoFour src="/imgs/athos.svg" />
        </LogosWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  margin-top: 200px;
`;

export const MainWrapper = styled.div``;

export const Header = styled.p`
  color: #072136;
  font-size: 36px;
  text-align: center;
`;

export const LogosWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  margin-top: 150px;
  margin-bottom: 150px;
  width: 90%;
  /* border: 3px solid red; */
`;

export const LogoOne = styled.img`
  width: 60px;
  height: 52px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 60px;
`;

export const LogoTwo = styled.img`
  width: 118px;
  height: 29px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 60px;
`;

export const LogoThree = styled.img`
  width: 102px;
  height: 34px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 60px;
`;

export const LogoFour = styled.img`
  width: 106px;
  height: 57px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 60px;
`;

export default OurClients;
