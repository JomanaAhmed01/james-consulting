import React from "react";
import styled from "styled-components";
import { Menu } from "@styled-icons/feather/Menu";
import { PersonCircle } from "@styled-icons/ionicons-solid/PersonCircle";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Acme&family=Anton&family=Raleway:ital,wght@0,100;1,100&display=swap');
</style>;

function Navbar() {
  return (
    <Wrapper>
      <MainWrapper>
        <HeaderWrapper>
          <Header>JAMES CONSULTING</Header>
        </HeaderWrapper>

        <MenuIconWraper>
          <ProfileIcon />
        </MenuIconWraper>

        <ItemsWrapper>
          <Item>About</Item>
          <Item>Projects</Item>
          <Item>Services</Item>
          <Item>Plans & Pricing</Item>
          <Item>Tools & Tips</Item>
          <Item>Contact</Item>
          <LogInWrapper>
            <ProfileIcon />
            <Item>Log In</Item>
          </LogInWrapper>
        </ItemsWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-color: #004080;
  height: 75px;
  /* width: 100%; */
  border: 1px solid transparent;
  overflow-x: hidden;
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding-top: 5px;
  /* border: 3px solid red; */

  @media screen and (max-width: 520px) {
    padding-top: 15px;
  }
`;

export const HeaderWrapper = styled.div`
  margin-left: 50px;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const Header = styled.p`
  color: #ffffff;
  font-size: 20px;
  letter-spacing: 1px;
  font-family: "Raleway", sans-serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
  cursor: pointer;

  @media screen and (max-width: 520px) {
    font-size: 16px;
  }
`;

export const MenuIconWraper = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
    display: initial;
    /* border: 3px solid purple; */
    margin-right: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const MenuIcon = styled(Menu)`
  color: #000000;
`;

export const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  /* border: 3px solid yellow; */
  width: 680px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const Item = styled.p`
  color: #ffffff;
  font-size: 16px;
  cursor: pointer;
`;

export const LogInWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileIcon = styled(PersonCircle)`
  color: #ffffff;
  width: 30px;
  height: 30px;
  margin-right: 5px;
`;

export default Navbar;
