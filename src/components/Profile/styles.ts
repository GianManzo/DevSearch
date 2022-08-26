import styled from 'styled-components';
import { popup } from '~/Styles-global';
import { Green, Gray } from '~/variables/colors';

export const Wrapper = styled.section`
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${Gray[600]};
  box-shadow: 0px 2px 2px 0px ${Gray[600]};
  border-radius: 12px;
  animation: ${popup} 0.2s forwards;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const BoxInfo = styled.div`
  line-height: 1.8;
  font-family: 'Fira Sans', sans-serif;

  p:first-child {
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    color: #fff;
  }

  p:last-child {
    color: ${Gray[100]};
    font-size: 0.785rem;
  }

  a {
    color: ${Green.strong};
    transition: 0.3s;

    &:hover {
      color: ${Green.light};
    }
  }
`;

export const Summary = styled.div`
  margin-bottom: 2rem;
  p {
    color: ${Gray[200]};
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
  }
`;

export const Display = styled.div`
  padding: 3rem;
  background-color: ${Gray[800]};
  border-radius: 12px;
  color: ${Gray[200]};
  font-family: 'Fira Sans', sans-serif;
  margin-bottom: 2rem;
  ul {
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;
      text-align: center;

      p {
        margin-top: 0.75rem;
        font-size: 1.5rem;
        color: ${Gray.white};
      }
    }
  }
`;

export const Footer = styled.footer`
  ul {
    li,
    a {
      color: ${Gray[200]};
      list-style: none;
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      gap: 0.875rem;
      line-height: 1.6;
      transition: 0.3s;
    }
    a:hover {
      color: ${Green.light};
    }
  }
`;
