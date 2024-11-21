import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { KeyboardEvent } from 'react';
import { DateFormat } from './const';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
});

const addCorrectMonthEnding = (word: string) => {
  if (word.endsWith('ь') || word.endsWith('й')) {
    return `${word.slice(0, -1)}я`;
  }
  return `${word}а`;
};

export const humanizeDate = (date: string, format: string) => {
  const humanizedDate = dayjs(date).format(format);

  if (format === DateFormat.DayMonth) {
    const month = humanizedDate.split(' ')[1];
    const monthWithCorrectEnding = addCorrectMonthEnding(month.toLowerCase());

    return humanizedDate.replace(month, monthWithCorrectEnding);
  }

  return humanizedDate;
};

export const isEnterKey = (evt: KeyboardEvent<HTMLButtonElement | HTMLLIElement | HTMLInputElement>) => evt.key === 'Enter';

export const lowerFirstLetter = (data: string) => data.charAt(0).toLowerCase() + data.slice(1);
