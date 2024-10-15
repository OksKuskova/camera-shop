import { InitialPhoneSymbol } from '../../const';

export const getScrollbarWidth = () => window.innerWidth - document.body.clientWidth;

export const formatPhoneNumber = (phone: string) => {
  const cleanedPhone = phone.replace(/\D/g, '');

  if (cleanedPhone.startsWith(InitialPhoneSymbol.Eight)) {
    return `${InitialPhoneSymbol.Seven}${cleanedPhone.slice(1)}`;
  }
  return cleanedPhone;
};
