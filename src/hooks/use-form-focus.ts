import { RefObject, useEffect } from 'react';

export function useFormFocus(ref: RefObject<HTMLDivElement>, handler: (value: boolean) => void) {
  useEffect(() => {
    const handleFocusChange = () => {
      const focusedElement = document.activeElement;

      if (ref.current && ref.current.contains(focusedElement)) {
        handler(true);
      } else {
        handler(false);
      }
    };

    document.addEventListener('focus', handleFocusChange, true);
    document.addEventListener('blur', handleFocusChange, true);

    return () => {
      document.removeEventListener('focus', handleFocusChange, true);
      document.removeEventListener('blur', handleFocusChange, true);
    };
  }, [ref, handler]);
}
