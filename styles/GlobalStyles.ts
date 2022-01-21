import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

import { applyMediaQuery } from "./mediaQuery";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body{
    font-family: "Pretendard-Regular", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    margin-top: 11.6rem;
    ${applyMediaQuery("mobile")} {
      margin-top: 4.8rem;
    } 
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  h1, h2, h3, h4, h5, h6{
    font-family:'Maven Pro', sans-serif;
  }
`;
