import React, { FC } from 'react';
import styled from 'styled-components';

import CongregationPic from '../../images/homepage-congregation-2023.jpg';
import Image from 'next/image';

const Container = styled.div`
  height: 31.25rem;
  width: 100vw;
  max-width: 100%;
  background-color: #dedede;
  position: relative;
  overflow: hidden;
`;

export const PreFooterImg = () => (
  <Container>
    <Image
      alt="Congregation on a Sunday"
      src={CongregationPic}
      placeholder="blur"
      fill
      sizes="100vw"
      style={{
        objectFit: 'cover',
      }}
    />
  </Container>
);
