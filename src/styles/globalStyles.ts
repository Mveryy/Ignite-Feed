import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  };

  body {
    font-family: "Roboto", sans-serif;
    background-color: ${theme.colors.gray900};
  }
`
