import * as C from './styles';
import { MagnifyingGlass } from 'phosphor-react';
import { Green } from '~/variables/colors';

export const Search = () => {
  return (
    <C.Form>
      <C.Wrapper>
        <MagnifyingGlass size={40} color={Green.light} />
        <input type='text' placeholder='Search GitHub username...' />
        <button type='submit'>Search</button>
      </C.Wrapper>
    </C.Form>
  );
};
