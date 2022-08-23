import styled from 'styled-components';
import { Blue, Gray } from '~/variables/colors';

export const Form = styled.form``;

export const Wrapper = styled.div`
  box-shadow: 0px 2px 2px 0px #161616;
  border-radius: 12px;
  background-color: ${Blue[600]};
  padding: 0.875rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    background: transparent;
    border: none;
    font-size: 1.25rem;
    width: 100%;
    margin-left: 0.875rem;
    outline: none;
    color: ${Gray[100]};

    &::placeholder {
      color: ${Gray[200]};
    }
  }

  button {
    padding: 0.875rem;
    border-radius: 12px;
    border: none;
    background: ${Blue.primary};
    font-size: 1.25rem;
    color: #fff;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }
`;
