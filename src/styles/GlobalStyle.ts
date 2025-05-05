import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* 기본 CSS 리셋 */
  * {
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  /* a 태그 스타일 - 기본 파란색 제거 */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* #root 전체 화면 설정 */
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
