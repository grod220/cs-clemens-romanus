import React from 'react';

import BiblePic from '../../images/who-we-are-bible.jpg';
import { FeatureWithBackground } from '../shared/feature-with-background';
import { WhiteAnchor } from '../shared/white-anchor';

export const BiblePromo = () => (
  <FeatureWithBackground image={BiblePic}>
    We are passionate about the Bible.
    <br />
    <WhiteAnchor href="https://www.youtube.com/watch?v=LR4WfUCNfX4" target="_blank">
      Here’s a great explanation why →
    </WhiteAnchor>
  </FeatureWithBackground>
);
