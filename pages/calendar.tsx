import React from 'react';
import { Layout } from '../components/shared/layout';
import Hero from '../images/calendar-group-pic.jpg';
import { NextPage } from 'next';
import { HeadTag, Page } from '../components/shared/head-tag';
import { HeaderBlock } from '../components/shared/header-block';
import { CalHighlight } from '../components/calendar/cal-highlight';
import { BASE_URL } from '../utils/env';
import { GoogleSheetRow } from './api/calendar-events';
import { CalendarEvent, parseGoogleSheetRows } from '../utils/event-parser';
import { CalendarEvents } from '../components/calendar/calendar-events';

const Calendar: NextPage<{ calEvents: CalendarEvent[] }> = ({ calEvents }) => (
  <Layout>
    <HeadTag page={Page.CALENDAR} />
    <HeaderBlock img={Hero} titleText="Upcoming Events" />
    <CalHighlight />
    <CalendarEvents calEvents={calEvents} />
    {/*<StayInTouchAlt />*/}
  </Layout>
);

export async function getServerSideProps() {
  const res = await fetch(BASE_URL + '/api/calendar-events');
  const data: { events: GoogleSheetRow[] } = await res.json();

  return {
    props: {
      calEvents: parseGoogleSheetRows(data.events),
    },
  };
}

export default Calendar;
