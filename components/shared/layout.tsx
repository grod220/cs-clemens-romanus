import React, { FC } from 'react';
import styled from 'styled-components';

import { Footer } from './footer';
import Navigation from './navigation';

const Container = styled.div`
  position: relative;
`;

export const Layout: FC = ({ children }) => (
  <Container>
    <Navigation />
    {children}
    <Footer />
  </Container>
);
