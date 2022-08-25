import { Header } from './components/Header/Header';
import { Profile } from './components/Profile/Profile';
import { Search } from './components/Search/Search';
import * as C from './Styles-global';

export const App = () => {
  return (
    <>
      <C.Container>
        <Header />
        <Search />
        <Profile />
      </C.Container>
    </>
  );
};
