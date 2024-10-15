import { RefObject, useEffect } from 'react';

export function useOutsideClick(ref: RefObject<HTMLDivElement>, handler: () => void) {
  useEffect(() => {
    const handleMousedown = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', handleMousedown);

    return () => {
      document.removeEventListener('mousedown', handleMousedown);
    };
  }, [ref, handler]);
}
