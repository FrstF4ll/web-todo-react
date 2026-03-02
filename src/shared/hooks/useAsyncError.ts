import { useState } from 'react';

export function useAsyncError() {
  const [error, setError] = useState<string | null>(null);

  const resetError = () => setError(null);

  const handleError = (err: unknown, fallback = 'Unknown error occured') => {
    setError((err as Error).message || fallback);
    console.error(err);
  };

  return { error, setError, handleError, resetError };
}
