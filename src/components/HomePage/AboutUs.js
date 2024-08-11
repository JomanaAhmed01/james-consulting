import React from "react";
import styled from "styled-components";

function AboutUs() {
  return (
    <Wrapper>
      <MainWrapper>
        <TextWrapper>
          <Header>ABOUT US</Header>

          <TextOne>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </TextOne>

          <TextTwo>
            This is a great space to write a long text about your company and
            your services. You can use this space to go into a little more
            detail about your company. Talk about your team and what services
            you provide. Tell your visitors the story of how you came up with
            the idea for your business and what makes you different from your
            competitors. Make your company stand out and show your visitors who
            you are.
          </TextTwo>

          <Button>Learn More</Button>
        </TextWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  background-image: url("/imgs/home-page-bg-2.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  left: 0;
  margin-left: 0;
  width: 100%;
  box-shadow: inset 0 0 0 2000px rgba(216, 232, 242, 0.9);
  height: 100%;
  padding-top: 100px;
  padding-bottom: 20px;
`;

export const MainWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const Header = styled.p`
  color: #072136;
  font-size: 36px;
`;

export const TextOne = styled.p`
  color: #000000;
  font-size: 16px;
  width: 635px;
  text-align: center;

  @media screen and (max-width: 730px) {
    width: 90%;
  }
`;

export const TextTwo = styled.p`
  color: #000000;
  font-size: 16px;
  width: 640px;
  text-align: center;

  @media screen and (max-width: 730px) {
    width: 85%;
  }
`;

export const Button = styled.p`
  color: #0c3b5f;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #0c3b5f;
  width: 181px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  margin-top: 50px;

  &:hover {
    background-color: #0c3b5f;
    color: #ffffff;
  }
`;

export default AboutUs;
