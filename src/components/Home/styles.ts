import styled, { keyframes } from 'styled-components';

const arrowMove = keyframes`
  from {
    transform: translateY(0px);
  }
  to{
    
    transform: translateY(-10px);
  }
`;

export const Home = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  animation: ${arrowMove} 0.7s alternate-reverse ease-in-out infinite;
`;
