import React, { FC } from 'react';
import styled from 'styled-components';

import BibleImg from '../../images/sundays-bible-open.jpg';
import { FeatureWithBackground } from '../shared/feature-with-background';

const WhiteAnchor = styled.a`
  color: white;
`;

export const ListenToAService: FC = () => (
  <FeatureWithBackground image={BibleImg} customHeight="300px">
    Listen to a service!{' '}
    <WhiteAnchor href="/john-6-message.mp3" target="_blank">
      A message on John 6 →
    </WhiteAnchor>
  </FeatureWithBackground>
);
