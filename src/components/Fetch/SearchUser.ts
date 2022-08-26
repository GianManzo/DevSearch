import { IInput } from '~/interfaces/IInput';

const URL = 'https://api.github.com/users/';

export async function searchUser({ inputValue, setData, setError }: IInput) {
  try {
    const response = await fetch(URL + inputValue);
    if (!response.ok) {
      setError(true);
    } else {
      const dataUser = await response.json();
      setError(false);
      setData(dataUser);
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Finished');
  }
}
