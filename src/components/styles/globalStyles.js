//dependencies
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Averia+Serif+Libre:wght@400;700&family=Montserrat:wght@400;500&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
  font-family: "Montserrat", sans-serif;
  font-size: 19px;
  color: #555555;
  background: linear-gradient(to right, #efefbb, #d4d3dd);
  line-height: 1.75;
  letter-spacing: 0.07rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
}

a {
  text-decoration: none;
  color: #7d6386;
}
`;

export const Button = styled.button`
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0.5rem;
  padding: 0.25rem 1rem;
  border-width: 0.15rem;
  border-style: solid;
  border-radius: 1.5rem;

  @media screen and (min-width: 900px) {
    &:hover {
      color: #ffffff;
    }

    &:active {
      color: rgba(6, 10, 35, 0.56);
    }
  }
`;

export const StyledMainTitle = styled.h1`
  text-transform: uppercase;
  color: #7d6386;
  font-size: 1.5rem;
  letter-spacing: 0.15rem;
  margin: 0 auto;
  display: block;

  &::after {
    content: "";
    display: block;
    background-color: #7d6386;
    height: 0.063rem;
    margin: 0.75rem auto;
    width: 7.5rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 2rem;
    letter-spacing: 0.15rem;
  }
`;

export const StyledSecondaryTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  text-align: left;
  color: #c5c52e;
  font-size: 1rem;

  @media screen and (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const StyledTertiaryTitle = styled.h3`
  text-align: left;
  font-size: 1rem;

  @media screen and (min-width: 900px) {
    font-size: 1.1rem;
    line-height: 1.2rem;
  }
`;

export const StyledText = styled.p`
  font-size: 0.813rem;
  line-height: 0.85rem;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media screen and (min-width: 900px) {
    font-size: 0.833rem;
    line-height: 0.9rem;
  }
`;

export const StyledSmallText = styled.p`
  font-size: 0.813rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;

  @media screen and (min-width: 900px) {
    font-size: 0.95rem;
    line-height: 1.5rem;
  }
`;

export const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

export const StyledSection = styled.section`
  padding: 2.25rem 1rem;
  background-color: transparent;
  position: relative;
`;

export const RoundImg = styled.img`
  border-radius: 50%;
  box-shadow: 0.625rem 0.625rem 0.313rem 0rem rgba(227, 220, 227, 0.68);
`;

export default GlobalStyle;
