import React, { FC } from 'react';
import styled from 'styled-components';

import { WhiteContentBlock } from '../shared/white-content-block';
import ColorGenerator from '../../utils/events-util';
import { useQuery } from 'react-query';
import { CalEventsFetcher } from '../../utils/calendar-fetcher';

const TwixWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventTwix = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 22px;
  padding: 30px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  position: relative;
  flex-wrap: wrap;
  max-width: 1040px;
  width: 100%;
  text-align: center;

  & + & {
    margin-top: 30px;
  }

  span + span {
    margin-left: 10px;
  }
`;

const ColorBar = styled.div<{ sliverColor: string }>`
  height: 100%;
  width: 20px;
  background-color: ${(props) => props.sliverColor};
  position: absolute;
  left: 0;
  top: 0;
`;

export const CalendarWidget: FC = () => {
  const { data } = useQuery('cal-events', CalEventsFetcher);
  if (!data?.length) return <></>;

  return (
    <WhiteContentBlock title="Upcoming events">
      <TwixWrapper>
        {data.slice(0, 3).map((event, index) => {
          return (
            <EventTwix key={index}>
              <ColorBar sliverColor={ColorGenerator.getColor(event.name)} />
              <span>
                {new Date(event.date).toLocaleDateString('en', {
                  weekday: 'long',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              {event.time && <span>@ {event.time}</span>}
              <span>::</span>
              <span>
                <b>{event.name}</b>
              </span>
              {event.location && <span>::</span>}
              <span>{event.location}</span>
            </EventTwix>
          );
        })}
      </TwixWrapper>
    </WhiteContentBlock>
  );
};
