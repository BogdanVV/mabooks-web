import { useAppContext } from '@/context/App/AppProvider';
import { SyntheticEvent } from 'react';
import { IoIosClose } from 'react-icons/io';
import { CloseButton, Container } from './styled';

export const Modal = () => {
  const { isModalVisible, modalContent, closeModal } = useAppContext();

  const handleModalBackgroundClick = (
    event: SyntheticEvent<HTMLDivElement>
  ) => {
    if (event.target != event.currentTarget) return;

    closeModal();
  };

  return isModalVisible && modalContent ? (
    <Container onClick={handleModalBackgroundClick}>
      <CloseButton onClick={closeModal}>
        <IoIosClose size={24} />
      </CloseButton>
      {modalContent}
    </Container>
  ) : null;
};
