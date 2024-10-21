import { INITIAL_PHONE_SYMBOL } from '../../const';

export const getScrollbarWidth = () => window.innerWidth - document.body.clientWidth;

export const formatPhoneNumber = (phone: string) => {
  const cleanedPhone = phone.replace(/\D/g, '');
  return `${INITIAL_PHONE_SYMBOL}${cleanedPhone.slice(1)}`;
};

