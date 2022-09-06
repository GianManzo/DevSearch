import { IInput } from '~/interfaces/IInput';

const URL = 'https://api.github.com/users/';

export async function searchUser({
  inputValue,
  setData,
  setError,
  setValidation,
  setLoading,
}: IInput) {
  try {
    setLoading!(true);
    setData(null);
    const response = await fetch(URL + inputValue);
    if (!response.ok) {
      setError(true);
    } else {
      const dataUser = await response.json();
      setLoading!(false);
      setError(false);
      setValidation!(true);
      setData(dataUser);
    }
  } catch (e) {
    console.log(e);
  } finally {
    console.log('Finished');
    setLoading!(false);
  }
}
