import React, { FC } from 'react';
import styled from 'styled-components';
import 'typeface-open-sans';
import 'typeface-open-sans-condensed';
import 'typeface-crimson-text';

import Footer from '../shared/footer';
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
