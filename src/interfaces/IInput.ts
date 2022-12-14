import { IData } from './IData';

export interface IInput {
  inputValue: string;
  setInput?: React.Dispatch<React.SetStateAction<string>>;
  setData: React.Dispatch<React.SetStateAction<IData | null>>;
  error?: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  validation?: boolean;
  setValidation?: React.Dispatch<React.SetStateAction<boolean>>;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}
