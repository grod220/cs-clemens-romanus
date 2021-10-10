import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { FeatureWithBackground } from '../shared/feature-with-background';
import CommunionPic from '../../images/get-in-touch-communion.jpg';
import { WhiteAnchor } from '../shared/white-anchor';

export const ServiceTimesRedirect = () => (
  <FeatureWithBackground image={CommunionPic} customHeight="300px">
    For service times, checkout{' '}
    <Link href="/sundays">
      <WhiteAnchor>the Sundays Page →</WhiteAnchor>
    </Link>
  </FeatureWithBackground>
);
export default ServiceTimesRedirect;
