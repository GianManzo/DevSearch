import styled from 'styled-components';
import { popup } from '~/Styles-global';
import { Gray } from '~/variables/colors';

export const Box = styled.div`
  color: white;
  background: linear-gradient(130deg, rgba(242, 0, 17, 0.2) 0%, rgba(80, 0, 0, 0.1) 40%);
  border-radius: 16px;
  box-shadow: 0 2px 8px ${Gray.shadow};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1;
  padding: 1rem;
  border-radius: 12px;
  margin-top: 2rem;
  animation: ${popup} 0.2s forwards;

  p {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: rgba(245, 0, 0, 0.8);
    font-size: 1rem;
    font-weight: bold;
  }

  div {
    width: 50px;
    height: 50px;
    background: linear-gradient(142deg, rgba(242, 0, 17, 0.2) 0%, rgba(252, 0, 0, 0) 15%);
    position: absolute;
    transform: rotate(45deg);
    top: -1px;
    left: 10px;
    z-index: -1;
  }
`;
