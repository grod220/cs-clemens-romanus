import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

import { Footer } from './footer';
import Navigation from './navigation';

const Container = styled.div`
  position: relative;
`;

export const Layout = ({ children }: { children: ReactNode }) => (
  <Container>
    <Navigation />
    {children}
    <Footer />
  </Container>
);
