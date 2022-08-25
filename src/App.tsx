import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Search } from './components/Search/Search';
import { useState } from 'react';
import { IData } from './interfaces/IData';

import * as C from './Styles-global';

export const App = () => {
  const [inputValue, setInput] = useState('');
  const [data, setData] = useState<IData | null>(null);
  const [error, setError] = useState(false);

  return (
    <>
      <C.Container>
        <Header />
        <Search
          inputValue={inputValue}
          setInput={setInput}
          setData={setData}
          error={error}
          setError={setError}
        />
        <Profile data={data} error={error} />
      </C.Container>
    </>
  );
};
