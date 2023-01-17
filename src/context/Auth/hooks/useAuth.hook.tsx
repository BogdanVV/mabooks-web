import { User } from '@/types/backend';
import { useState } from 'react';

export const useAuthHook = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setAccessToken] = useState<string>('');
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  return {
    isAuthenticated,
    setIsAuthenticated,
    accessToken,
    setAccessToken,
    currentUser,
    setCurrentUser,
  };
};
