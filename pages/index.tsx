import type { NextPage } from 'next';
import { HomeHeader } from '../components/homepage/home-header';
import { Layout } from '../components/shared/layout';
import { HomePopup } from '../components/homepage/home-popup';
import { ServiceTimes } from '../components/homepage/service-times';
import SummaryBlock from '../components/homepage/summary-block';
import { CoreValues } from '../components/shared/core-values';
import { PreFooterImg } from '../components/homepage/pre-footer-img';
import { HeadTag, Page } from '../components/shared/head-tag';
import { CalendarWidget } from '../components/homepage/calendar-widget';

const Home: NextPage = () => {
  return (
    <>
      <HeadTag page={Page.HOMEPAGE} />
      <Layout>
        <HomePopup activeUntil={new Date(2021, 1, 30)} />
        <HomeHeader />
        <ServiceTimes />
        <SummaryBlock />
        <CalendarWidget />
        <CoreValues />
        {/*<WhiteContentBlock title="Stay in touch">*/}
        {/*  <StayInTouch />*/}
        {/*</WhiteContentBlock>*/}
        <PreFooterImg />
      </Layout>
    </>
  );
};

export default Home;
