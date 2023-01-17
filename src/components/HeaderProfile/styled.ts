import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;
export const Dropdown = styled.div`
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  padding: 8px;
  background-color: transparent;
  &:hover {
    background-color: darkgray;
  }
`;
export const Chevron = styled(IoIosArrowDown)<{ $isDropDownActive: boolean }>`
  transform: ${({ $isDropDownActive }) =>
    $isDropDownActive ? 'rotate(180deg)' : ''};
  transition: transform 0.2s ease-in;
`;
export const ProfileOptionsContainer = styled.div<{ isDropDownMenu: boolean }>`
  display: ${({ isDropDownMenu }) => (isDropDownMenu ? 'block' : 'none')};
  position: absolute;
  top: 110%;
  right: 0;
  border: 1px solid #fff;
  border-bottom: none;
  background-color: #000;
`;
export const ProfileOption = styled.button`
  width: 100%;
  border: none;
  border-bottom: 1px solid #fff;
  font-size: 18px;
  flex: 1 auto;
  padding: 8px;
  cursor: pointer;
  background-color: transparent;
  &:hover {
    background-color: grey;
  }
`;
export const ProfileImageContainer = styled.div`
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
`;
