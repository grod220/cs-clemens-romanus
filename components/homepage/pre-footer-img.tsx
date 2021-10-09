import React, { FC } from 'react';
import styled from 'styled-components';

import RamenGroupPic from '../../images/homepage-ramen.jpg';
import Image from 'next/image';

const Container = styled.div`
  height: 31.25rem;
  width: 100vw;
  max-width: 100%;
  background-color: #dedede;
  position: relative;
  overflow: hidden;
`;

export const PreFooterImg: FC = () => (
  <Container>
    <Image
      alt="Group pic of eating at a ramen restaurant"
      src={RamenGroupPic}
      layout="fill"
      objectFit="cover"
      placeholder="blur"
    />
  </Container>
);