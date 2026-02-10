import { useState, useEffect } from 'react';

/**
 * Lightweight hook that detects whether window.location.hash contains "caffeineAdminToken"
 * and updates reactively on hash changes. Returns only a boolean, never the token value.
 */
export function useAdminLinkNotice(): boolean {
  const [hasAdminToken, setHasAdminToken] = useState(() => {
    return window.location.hash.includes('caffeineAdminToken');
  });

  useEffect(() => {
    const checkHash = () => {
      setHasAdminToken(window.location.hash.includes('caffeineAdminToken'));
    };

    // Listen for hash changes
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return hasAdminToken;
}
