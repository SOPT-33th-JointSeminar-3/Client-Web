import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  html,
  body {
    max-width: 43rem;

    width:100%;
    height: 100vh;
    margin: 0 auto;
    font-size: 10px;
    font-family: "Pretendard";  
  }
`;

export default GlobalStyle;
