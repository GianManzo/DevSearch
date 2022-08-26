import * as C from './styles';
import { XCircle } from 'phosphor-react';

type Props = {
  children?: string;
};

export const Error = ({ children }: Props) => {
  return (
    <C.Box>
      <p>
        <XCircle size={24} /> {children}
      </p>
      <div></div>
    </C.Box>
  );
};
