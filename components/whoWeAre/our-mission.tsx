import React, { FC } from 'react';

import Mountains from '../../images/who-we-are-mountains.jpg';
import { FeatureWithBackground } from '../shared/feature-with-background';

export const OurMission: FC = () => (
  <FeatureWithBackground title="Our mission" image={Mountains}>
    We exist to love God, love others, and repent & believe the Gospel when we fail.
  </FeatureWithBackground>
);
