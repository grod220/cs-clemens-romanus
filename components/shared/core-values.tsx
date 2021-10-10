import React, { FC } from 'react';
import styled from 'styled-components';

import SkyBackground from '../../images/homepage-sky.jpg';
import { FeatureWithBackground } from './feature-with-background';
import { NumberBlock } from './number-block';

const BlockWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 800px) {
    max-width: 530px;
    margin: auto;

    > div {
      flex-grow: 1;
    }
  }
`;
const Separator = styled.div`
  background: #8b7259;
  width: 2px;
  opacity: 0.4;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const CoreValues: FC = () => (
  <FeatureWithBackground title="Our core values" image={SkyBackground}>
    <BlockWrapper>
      <NumberBlock num={1} bigText="Jesus Christ" smallText="our foundation" />
      <Separator />
      <NumberBlock num={2} bigText="God's Word" smallText="our guide" />
      <Separator />
      <NumberBlock num={3} bigText="The Gospel" smallText="our anthem" />
      <Separator />
      <NumberBlock num={4} bigText="God's Glory" smallText="our aim" />
    </BlockWrapper>
  </FeatureWithBackground>
);
