import React, { FC } from 'react';
import styled from 'styled-components';

import { SubheadHighlight } from '../shared/subhead-highlight';

const Text = styled.p`
  margin-bottom: 0;
`;

export const CalHighlight = () => (
  <SubheadHighlight color="#d2374f">
    <Text>
      From Sunday service to bible studies and fun outings, there is always something to look forward to at Calvary.
    </Text>
  </SubheadHighlight>
);
