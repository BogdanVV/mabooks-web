import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.li`
  font-size: 24px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;
  padding: 8px;
  &:hover {
    background-color: gray;
  }
`;
export const StyledLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
`;
