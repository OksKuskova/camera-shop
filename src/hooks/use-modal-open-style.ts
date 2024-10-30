import { useEffect } from 'react';

export function useModalOpenStyle(scrollbarWidth: number) {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;
    return () => {
      document.body.style.overflowY = 'scroll';
      document.body.style.paddingRight = '';
    };
  }, [scrollbarWidth]);
}
