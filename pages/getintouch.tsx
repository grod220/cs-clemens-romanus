import React from 'react';

import { Layout } from '../components/shared/layout';
import Hero from '../images/get-in-touch-capp.jpg';
import ServiceTimesRedirect from '../components/getInTouch/service-times-redirect';
import { NextPage } from 'next';
import { HeadTag, Page } from '../components/shared/head-tag';
import { HeaderBlock } from '../components/shared/header-block';
import { GITHighlight } from '../components/getInTouch/git-highlight';
import QuickHello from '../components/getInTouch/quick-hello';

const Getintouch: NextPage = () => (
  <Layout>
    <HeadTag page={Page.GET_IN_TOUCH} />
    <HeaderBlock img={Hero} titleText="Get in touch" />
    <GITHighlight />
    <QuickHello />
    <ServiceTimesRedirect />
  </Layout>
);

export default Getintouch;
