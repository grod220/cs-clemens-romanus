import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { HomeHeader } from '../components/homepage/home-header';
import { Layout } from '../components/shared/layout';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Calvary Stockholm :: Loving God, Loving Others</title>
        <meta
          name="description"
          content="We are an English speaking church in the heart of Stockholm, brought and bound together by one person: Jesus. Come and see that the Lord is good."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {/*<HomePopup />*/}
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
    </div>
  );
};

export default Home;
