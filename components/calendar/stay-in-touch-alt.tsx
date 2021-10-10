import React, { FC } from 'react';

import { FeatureWithBackground } from '../shared/feature-with-background';
import { StayInTouch } from '../shared/stay-in-touch';
import OutdoorPic from '../../images/calendar-outdoor-group.jpg';

export const StayInTouchAlt: FC = () => (
  <FeatureWithBackground title="Stay in touch" image={OutdoorPic}>
    <StayInTouch whiteText />
  </FeatureWithBackground>
);
