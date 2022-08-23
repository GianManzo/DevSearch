import { Header } from './components/Header/Header';
import { Search } from './components/Search/Search';
import * as C from './Styles-global';

export const App = () => {
  return (
    <>
      <C.Container>
        <Header />
        <Search />
      </C.Container>
    </>
  );
};
