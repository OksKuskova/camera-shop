import { useEffect, useRef } from 'react';

export function useFocusOnModal() {
  const focusableElementsRef = useRef<(HTMLInputElement | HTMLButtonElement | HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const firstElement = focusableElementsRef.current[0];
    const lastElement = focusableElementsRef.current[focusableElementsRef.current.length - 1];

    firstElement?.focus();

    const handleDocumentKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    document.addEventListener('keydown', handleDocumentKeydown);

    return () => {
      document.removeEventListener('keydown', handleDocumentKeydown);
    };
  }, []);

  return focusableElementsRef;
}
