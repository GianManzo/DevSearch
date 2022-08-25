import * as C from './styles';
import { MagnifyingGlass } from 'phosphor-react';
import { Green } from '~/variables/colors';
import { IInput } from '~/interfaces/IInput';

export const Search = ({ inputValue, setInput, setData, error, setError }: IInput) => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    searchUser(inputValue);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  async function searchUser(input: string | unknown) {
    try {
      const response = await fetch(`https://api.github.com/users/${input}`);
      if (!response.ok) {
        setError(true);
      } else {
        const dataUser = await response.json();
        setError(false);
        setData(dataUser);
      }
    } catch (e) {
      console.log(e);
    }
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
