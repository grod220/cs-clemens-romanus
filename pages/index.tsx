import type { NextPage } from 'next';
import Head from 'next/head';
import { HomeHeader } from '../components/homepage/home-header';
import { Layout } from '../components/shared/layout';
import { HomePopup } from '../components/homepage/home-popup';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Calvary Stockholm :: Loving God, Loving Others</title>
        <meta
          name="description"
          content="We are an English speaking church in the heart of Stockholm, brought and bound together by one person: Jesus. Come and see that the Lord is good."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePopup activeUntil={new Date(2021, 1, 30)} />
        <HomeHeader />
        {/*<ServiceTimes />*/}
        {/*<SummaryBlock />*/}
        {/*{this.state.upcomingEvents && Boolean(this.state.upcomingEvents.length) && (*/}
        {/*  <CalendarWidget events={this.state.upcomingEvents} />*/}
        {/*)}*/}
        {/*<CoreValues />*/}
        {/*<WhiteContentBlock title="Stay in touch">*/}
        {/*  <StayInTouch />*/}
        {/*</WhiteContentBlock>*/}
        {/*<PreFooterImg />*/}
      </Layout>
    </>
  );
};

export default Home;
