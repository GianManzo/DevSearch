import enUS from 'date-fns/esm/locale/en-US';
import { formatDistanceToNow } from 'date-fns';

export const handleDate = (date: Date) => {
  const convert = new Date(date);
  const lastUpdate = formatDistanceToNow(convert, {
    locale: enUS,
    addSuffix: true,
  });
  return lastUpdate;
};
