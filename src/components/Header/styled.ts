import styled from 'styled-components';

export const Container = styled.header`
  padding: 0 16px;
  border-bottom: 1px solid gray;
`;
export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const NavItemsList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
`;
export const AuthContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px 0;
`;
export const AuthButton = styled.button`
  font-size: 20px;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  &:hover {
    background-color: gray;
  }
`;
