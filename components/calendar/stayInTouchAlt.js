import React from 'react';

import FeatureBlock from '../shared/feature-with-background';
import StayInTouch from '../shared/stay-in-touch';
import OutdoorPic from '../../images/calendar-outdoor-group.jpg';

const StayInTouchAlt = () => (
  <FeatureBlock title="Stay in touch" image={OutdoorPic}>
    <StayInTouch white />
  </FeatureBlock>
);

export default StayInTouchAlt;
