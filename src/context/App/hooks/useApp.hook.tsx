import { useAxios } from '@/utils/axios';
import { useState, ReactNode } from 'react';

export const useAppHook = (accessToken: string | undefined) => {
  const http = useAxios(accessToken);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalVisible(false);
  };

  const value = { http, openModal, closeModal, isModalVisible, modalContent };

  return value;
};
