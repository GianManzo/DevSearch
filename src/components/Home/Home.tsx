import * as C from './styles';
import { ArrowUp } from 'phosphor-react';
import { Green } from '~/variables/colors';

export const Home = () => {
  return (
    <C.Home>
      <ArrowUp size={30} color={Green.strong} />
    </C.Home>
  );
};
