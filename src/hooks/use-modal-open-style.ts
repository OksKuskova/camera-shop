import { useEffect } from 'react';

export function useModalOpenStyle(scrollbarWidth: number) {

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [scrollbarWidth]);
}
