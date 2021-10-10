import React from 'react';

import { Layout } from '../components/shared/layout';
import Hero from '../images/who-we-are-hat.jpg';

import { NextPage } from 'next';
import { HeadTag, Page } from '../components/shared/head-tag';
import { HeaderBlock } from '../components/shared/header-block';
import { TheBeginning } from '../components/whoWeAre/the-beginning';
import { OurMission } from '../components/whoWeAre/our-mission';
import { OurPastor } from '../components/whoWeAre/our-pastor';
import { CoreValues } from '../components/shared/core-values';
import { ChurchFamilyPic } from '../components/whoWeAre/churchFamilyPic';
import { BiblePromo } from '../components/whoWeAre/bible-promo';

const WhoWeAre: NextPage = () => (
  <Layout>
    <HeadTag page={Page.WHO_WE_ARE} />
    <HeaderBlock img={Hero} titleText="" />
    <TheBeginning />
    <OurMission />
    <OurPastor />
    <CoreValues />
    <ChurchFamilyPic />
    <BiblePromo />
  </Layout>
);

export default WhoWeAre;
