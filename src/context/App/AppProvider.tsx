import { AxiosInstance } from 'axios';
import { createContext, ReactNode, useContext } from 'react';
import { useAppHook } from './hooks/useApp.hook';

interface AppContextType {
  http: AxiosInstance;
  openModal: (modalContent: ReactNode) => void;
  closeModal: () => void;
  isModalVisible: boolean;
  modalContent: ReactNode | null;
}

const AppContext = createContext({} as AppContextType);

export const useAppContext = () => useContext<AppContextType>(AppContext);

export const AppProvider = ({ children }: React.PropsWithChildren) => {
  const { http, openModal, closeModal, isModalVisible, modalContent } =
    useAppHook(process.env.NEXT_PUBLIC_BACKEND_URL);

  return (
    <AppContext.Provider
      value={{ http, openModal, closeModal, isModalVisible, modalContent }}
    >
      {children}
    </AppContext.Provider>
  );
};
