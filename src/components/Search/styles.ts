import styled from 'styled-components';
import { Green, Gray } from '~/variables/colors';

export const Form = styled.form``;

export const Wrapper = styled.div`
  box-shadow: 0 2px 8px ${Gray.shadow};
  border-radius: 12px;
  background-color: ${Gray[600]};
  padding: 0.875rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    background: transparent;
    border: none;
    font-size: 1rem;
    width: 100%;
    margin-left: 0.875rem;
    outline: none;
    color: ${Gray[100]};

    &::placeholder {
      color: ${Gray[400]};
      font-family: 'Roboto', sans-serif;
    }
  }

  button {
    padding: 1rem;
    border-radius: 12px;
    border: none;
    background: ${Green.strong};
    font-size: 1rem;
    color: ${Gray[100]};
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    transition: 0.3s;
    width: 12rem;

    &:hover {
      cursor: pointer;
      background: ${Green.light};
    }
  }
`;
