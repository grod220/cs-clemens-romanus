import React from 'react';

import { Layout } from '../components/shared/layout';
import Hero from '../images/giving-workshop.jpg';
import { HeaderBlock } from '../components/shared/header-block';
import { NextPage } from 'next';
import { HeadTag, Page } from '../components/shared/head-tag';
import GivingHighlight from '../components/giving/giving-highlight';
import { AccountInfo } from '../components/giving/account-info';
import { HowWeSeeGiving } from '../components/giving/how-we-see-giving';

const Giving: NextPage = () => (
  <Layout>
    <HeadTag page={Page.GIVING} />
    <HeaderBlock img={Hero} titleText="Giving" />
    <GivingHighlight />
    <AccountInfo />
    {/*<SupportedMinistries /> */}
    {/*<HowWeSeeGiving />*/}
  </Layout>
);

export default Giving;
