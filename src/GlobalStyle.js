import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Itim', cursive;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url("${background}");
    background-size: cover;
    background-position: center;
    font-size: large;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    body {
        font-size: medium;
    }
  }
`;