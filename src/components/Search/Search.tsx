import * as C from './styles';
import { MagnifyingGlass } from 'phosphor-react';
import { Green } from '~/variables/colors';
import { IInput } from '~/interfaces/IInput';
import { searchUser } from '../Fetch/SearchUser';

export const Search = ({ inputValue, setInput, setData, setError }: IInput) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchUser({ inputValue, setData, setError });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput!(e.target.value);
  }

  return (
    <C.Form onSubmit={handleSubmit}>
      <C.Wrapper>
        <MagnifyingGlass size={40} color={Green.light} />
        <input onChange={handleChange} placeholder='Search GitHub username...' />
        <button type='submit'>Search</button>
      </C.Wrapper>
    </C.Form>
  );
};
