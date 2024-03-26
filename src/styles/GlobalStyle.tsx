import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1;
  }

  body {
    font-family: "Roboto", sans-serif;
    font-size: ${({ theme }) => theme.fonts.size.md};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    line-height: normal;
  }

  h1,h2,h3,h4,h5,h6 {
    line-height: 1.6;
  }

  h1 {
    font-size: ${({ theme }) => theme.fonts.size.h1};
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fonts.size.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.fonts.size.h3};
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fonts.size.h4};
  }
  
  h5, h6 {
    font-size: ${({ theme }) => theme.fonts.size.h5};
  }

  a {
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
  }

  main {
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.md};
    padding-top: 0;
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  
`;
