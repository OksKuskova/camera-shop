import { useEffect } from 'react';

export function useEscKeydown(handler: () => void) {
  useEffect(() => {
    const handleDocumentEscKeydown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return;
      }
      handler();
    };

    document.addEventListener('keydown', handleDocumentEscKeydown);

    return () => {
      document.removeEventListener('keydown', handleDocumentEscKeydown);
    };
  }, [handler]);
}
