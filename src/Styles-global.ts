import styled, { createGlobalStyle } from 'styled-components';
import { Blue } from '~/variables/colors';

export const Global = createGlobalStyle`
  body {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background-color: ${Blue[800]};
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
`;

export const Container = styled.div`
  max-width: 26.25rem;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
`;
