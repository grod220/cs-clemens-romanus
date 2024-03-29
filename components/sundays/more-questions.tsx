import React, { FC } from 'react';
import styled from 'styled-components';
import CityScape from '../../images/sundays-city-scape.jpg';
import { FeatureWithBackground } from '../shared/feature-with-background';
import Link from 'next/link';
import { WhiteAnchor } from '../shared/white-anchor';

const CustomStyle = styled.div`
  font-family:
    Open Sans,
    Arial,
    Helvetica,
    sans-serif;
  line-height: 3rem;
  font-style: normal;
  font-size: 34px;

  @media (max-width: 83rem) {
    line-height: calc(1.1em + 0.5vw);
  }

  @media (max-width: 50rem) {
    font-size: 28px;
  }
`;

const ItalicCursive = styled.i`
  font-family:
    Crimson Text,
    georgia,
    serif;
  letter-spacing: 1px;
`;

export const MoreQuestions = () => (
  <FeatureWithBackground image={CityScape}>
    <CustomStyle>
      Have more questions? <br />
      Write us an email or message us on Facebook, we’re here for you! <br />
      <Link href="/getintouch" legacyBehavior>
        <WhiteAnchor>
          <ItalicCursive>Get in touch →</ItalicCursive>
        </WhiteAnchor>
      </Link>
    </CustomStyle>
  </FeatureWithBackground>
);
