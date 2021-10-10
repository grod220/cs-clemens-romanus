import React from 'react';

import ChurchPic from '../../images/who-we-are-inside-church.jpg';
import { FC } from 'react';
import { FeatureWithBackground } from '../shared/feature-with-background';

export const ChurchFamilyPic: FC = () => <FeatureWithBackground customHeight="35rem" image={ChurchPic} />;
