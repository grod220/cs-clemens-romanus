import React, { FC } from 'react';
import styled from 'styled-components';
import { WhiteContentBlock } from '../shared/white-content-block';

const Container = styled.div`
  text-align: center;
`;

const ServiceTime = styled.h3`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
`;

const MapsLink = styled.span`
  color: #848484;
  font-weight: 500;
  white-space: nowrap;

  a {
    color: #848484;
  }
`;

export const ServiceTimes: FC = () => (
  <WhiteContentBlock title="Service Times">
    <Container>
      {/*<ServiceTime>*/}
      {/*  Sundays @ 10am{' '}*/}

      {/*</ServiceTime>*/}
      <ServiceTime>
        Church opens @ 10am, Service starts @ 10:30am{' '}
        <MapsLink>
          (
          <a href="https://goo.gl/maps/eaimtATiQ1GU6WMG7" target="_blank" rel="noopener noreferrer">
            maps link
          </a>
          )
        </MapsLink>
      </ServiceTime>

      <p>
        We meet at the Salvation Army in Kungsholmen. The address is <b>Sankt Göransgatan 61</b>. Quite close to
        Fridhemsplan as well as Kronobergsparken. <br />
        Feel free to call if you get lost!
      </p>
    </Container>
  </WhiteContentBlock>
);
