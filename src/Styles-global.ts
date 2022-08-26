import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Gray } from '~/variables/colors';

export const Global = createGlobalStyle`
  body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background-color: ${Gray[800]};

  @media (max-width: 768px) {
  font-size: .875rem;
}
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

a{
  text-decoration: none;
}

`;

export const Container = styled.div`
  max-width: 26.25rem;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;

export const popup = keyframes`
  from {
    transform: scale(0);
  }
  to{
    transform: scale(1);
  }
`;
