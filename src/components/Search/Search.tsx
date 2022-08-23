import * as C from './styles';
import { MagnifyingGlass } from 'phosphor-react';
import { Blue } from '~/variables/colors';

export const Search = () => {
  return (
    <C.Form>
      <C.Wrapper>
        <MagnifyingGlass size={40} color={Blue.primary} />
        <input type='text' placeholder='Search GitHub username...' />
        <button type='submit'>Search</button>
      </C.Wrapper>
    </C.Form>
  );
};
