import React, { FC } from 'react';
import styled from 'styled-components';

import { SubheadHighlight } from '../shared/subhead-highlight';

const Text = styled.p`
  margin-bottom: 0;
  a {
    color: white;
  }
`;

export const GITHighlight = () => (
  <SubheadHighlight color="#614e3a">
    <Text>
      Reach out to us via email ::{' '}
      <b>
        <i>calvarystockholm@gmail.com</i>
      </b>
      <br />
      or message us on{' '}
      <u>
        <i>
          <a href="https://www.facebook.com/calvarystockholm/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </i>
      </u>
    </Text>
  </SubheadHighlight>
);
