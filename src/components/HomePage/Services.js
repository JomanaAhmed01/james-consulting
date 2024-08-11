import React from "react";
import styled from "styled-components";

function Services() {
  return (
    <Wrapper>
      <MainWrapper>
        <ServicesWrapper>
          <ItemWrapper>
            <Header>SERVICES</Header>

            <Text>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </Text>

            <Button>More Info</Button>
          </ItemWrapper>

          <ItemWrapper>
            <Header>PROJECTS</Header>

            <Text>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </Text>

            <Button>More Info</Button>
          </ItemWrapper>

          <ItemWrapper>
            <Header>CLIENTS</Header>

            <Text>
              I'm a paragraph. Click here to add your own text and edit me. It’s
              easy. Just click “Edit Text” or double click me to add your own
              content and make changes to the font. I’m a great place for you to
              tell a story and let your users know a little more about you.
            </Text>

            <Button>More Info</Button>
          </ItemWrapper>
        </ServicesWrapper>
      </MainWrapper>
    </Wrapper>
  );
}

export const Wrapper = styled.div``;

export const MainWrapper = styled.div`
  margin-top: 100px;
  margin-bottom: 150px;
`;

export const ServicesWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Header = styled.p`
  color: #072136;
  font-size: 36px;
`;

export const Text = styled.p`
  color: #000000;
  font-size: 16px;
  width: 309px;
  text-align: center;
  line-height: 27px;
`;

export const Button = styled.p`
  color: #0c3b5f;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid #0c3b5f;
  text-align: center;
  width: 181px;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #0c3b5f;
    color: #ffffff;
  }
`;

export default Services;
