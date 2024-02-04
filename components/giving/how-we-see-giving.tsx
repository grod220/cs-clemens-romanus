import React, { FC } from 'react';
import styled from 'styled-components';

import TreesPic from '../../images/giving-trees.jpg';
import { WhiteAnchor } from '../shared/white-anchor';
import { FeatureWithBackground } from '../shared/feature-with-background';

const Styling = styled.div`
  letter-spacing: 1px;
`;

export const HowWeSeeGiving = () => (
  <FeatureWithBackground image={TreesPic} customHeight="330px">
    <Styling>
      Learn more about{' '}
      <WhiteAnchor href="https://www.youtube.com/watch?v=4cs0gRxzKpY" target="_blank">
        we see giving →
      </WhiteAnchor>
    </Styling>
  </FeatureWithBackground>
);
