import { User } from '@/types/backend';
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useAuthHook } from './hooks/useAuth.hook';

interface AuthContextType {
  isAuthenticated: boolean;
  accessToken: string;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  setAccessToken: Dispatch<SetStateAction<string>>;
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
}

const AuthContext = createContext({} as AuthContextType);

export const useAuthContext = () => useContext<AuthContextType>(AuthContext);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const value = useAuthHook();
  const { setAccessToken } = value;

  useEffect(() => {
    if (typeof window != 'undefined') {
      const token = localStorage.getItem('accessToken');

      if (token) setAccessToken(token);
    }
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
