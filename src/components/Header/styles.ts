import styled from 'styled-components';
import { Gray } from '../../variables/colors';

export const Header = styled.header`
  font-family: 'Fira Sans', sans-serif;
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 6.25rem;

  h1 {
    color: ${Gray[100]};
  }
`;
