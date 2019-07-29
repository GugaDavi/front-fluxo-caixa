import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  body {
    background: rgb(58, 136, 113, 0.3);
    font-family: Arial, Helvetica, sans-serif
  }

  #root {
    max-width: 1000px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
  }
`;
