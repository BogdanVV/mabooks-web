import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  inset: 0 0 0 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  color: #fff;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;
