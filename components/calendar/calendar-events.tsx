import React, { FC } from 'react';
import styled from 'styled-components';
import ColorGenerator from '../../utils/events-util';
import { CalendarEvent } from '../../utils/event-parser';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const InnerContainer = styled.div`
  width: 78.75rem;
  padding: 4rem 0;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 83rem) {
    width: 95vw;
  }
`;

const EventBox = styled.div<{ boxColor: string }>`
  width: 32%;
  min-width: 300px;
  flex-grow: 1;
  flex-basis: content;
  background-color: ${(props) => props.boxColor};
  color: white;
  padding: 40px;
  text-align: center;
  font-size: 22px;
  border-left: 12px solid white;
  border-right: 12px solid white;
  border-bottom: 24px solid white;
`;

const EventName = styled.p`
  font-weight: bold;
  font-size: 27px;
  font-family:
    Open Sans Condensed,
    Arial,
    Helvetica,
    sans-serif;
`;

export const CalendarEvents = ({ calEvents }: { calEvents: CalendarEvent[] }) => {
  return (
    <Container>
      <InnerContainer>
        {calEvents.map((event, index, arr) => {
          return (
            <EventBox className="event-box" key={index} boxColor={ColorGenerator.getColor(event.name)}>
              <EventName>{event.name}</EventName>
              <p>{event.description}</p>
              <p>{event.location}</p>
              <p>{event.date}</p>
              <p>{event.time}</p>
            </EventBox>
          );
        })}
      </InnerContainer>
    </Container>
  );
};
