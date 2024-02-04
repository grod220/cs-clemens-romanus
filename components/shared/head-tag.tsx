import React, { FC } from 'react';
import Head from 'next/head';

export enum Page {
  HOMEPAGE,
  SUNDAYS,
  WHO_WE_ARE,
  CALENDAR,
  GET_IN_TOUCH,
  PAGE_NOT_FOUND,
  GIVING,
}

const PageTagMapping: Record<Page, MetaTags> = {
  [Page.HOMEPAGE]: {
    title: 'Calvary Stockholm :: Loving God, Loving Others',
    description:
      'We are an English speaking church in the heart of Stockholm, brought and bound together by one person: Jesus. Come and see that the Lord is good.',
  },
  [Page.SUNDAYS]: {
    title: 'Sunday Gatherings :: Calvary Stockholm',
    description: 'Learn about what Sundays are like at Calvary.',
  },
  [Page.WHO_WE_ARE]: {
    title: 'Who We Are :: Calvary Stockholm',
    description: "Hear our story, and learn about the mission God's given us for Stockholm.",
  },
  [Page.CALENDAR]: {
    title: 'Upcoming Events :: Calvary Stockholm',
    description: 'Stay in touch with upcoming events and fellowship.',
  },
  [Page.GET_IN_TOUCH]: {
    title: 'Stay In Touch :: Calvary Stockholm',
    description: "You're welcome! Get in touch with us anytime you need.",
  },
  [Page.PAGE_NOT_FOUND]: {
    title: 'Page Not Found :: Calvary Stockholm',
    description: 'Sorry! Page not found.',
  },
  [Page.GIVING]: {
    title: 'Giving :: Calvary Stockholm',
    description: 'It is the means of which we can maintain minitries and help those in need.',
  },
};

interface MetaTags {
  title: string;
  description: string;
}

export const HeadTag = ({ page }: { page: Page }) => {
  return (
    <Head>
      <title>{PageTagMapping[page].title}</title>
      <meta name="description" content={PageTagMapping[page].description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
