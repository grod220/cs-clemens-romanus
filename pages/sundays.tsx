import React from 'react';

import { Layout } from '../components/shared/layout';
import { NextPage } from 'next';
import { HeadTag, Page } from '../components/shared/head-tag';
import { HeaderBlock } from '../components/shared/header-block';

import Hero from '../images/sundays-joe.jpg';
import { GatheringHighlight } from '../components/sundays/gathering-highlight';
import { ServiceTimeAndLocation } from '../components/sundays/service-time-and-location';
import { HebrewsBlock } from '../components/sundays/hebrews-block';
import { WhatToExpect } from '../components/sundays/what-to-expect';
import { ListenToAService } from '../components/sundays/listen-to-a-service';
import { MoreQuestions } from '../components/sundays/more-questions';
import { SpotifyPreview } from '../components/sundays/spotify-preview';

const Sundays: NextPage = () => (
  <Layout>
    <HeadTag page={Page.SUNDAYS} />
    <HeaderBlock img={Hero} titleText="Sunday Gatherings" />
    <GatheringHighlight />
    <ServiceTimeAndLocation />
    <SpotifyPreview />
    <HebrewsBlock />
    <WhatToExpect />
    <ListenToAService />
    <MoreQuestions />
  </Layout>
);

export default Sundays;
