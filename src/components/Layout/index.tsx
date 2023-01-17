import React from 'react';
import { Container } from './styled';
import { Header } from '../';

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};
