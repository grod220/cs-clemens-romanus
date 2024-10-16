import React, { FC } from 'react';
import styled from 'styled-components';

import { TwoHalfWhiteBlock } from '../shared/two-half-white-block';
import PastorPic from '../../images/who-we-are-pastor.jpg';
import Image from 'next/image';

const Title = styled.h1`
  font-family:
    Open Sans Condensed,
    Arial,
    Helvetica,
    sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  font-size: 1.625rem;
  text-align: center;
  color: #848484;
`;

export const OurPastor = () => (
  <TwoHalfWhiteBlock>
    <Image
      alt="Pastor Joe and Ursula"
      src={PastorPic}
      placeholder="blur"
      className="limit-height"
      style={{
        maxWidth: '100%',
        height: 'auto',
      }}
    />
    <div>
      <Title>Our Pastor</Title>
      <p>
        A love for God, His Word, and helping others grow in their relationship with God are central to Joe&apos;s
        ministry. Joe and his wife, Ursula, moved their family of four children to Stockholm in 2005 to focus on
        strengthening the local church, discipleship, and church planting.
      </p>
      <p>
        Joe became pastor at Calvary in June 2017. Other areas of interest for Joe are coffee, carpentry, anything
        outdoors, and biblical counseling. But most of all, Joe is a sinner, saved by the grace of God; ever needful of
        God&apos;s grace and seeking to grow in His likeness.
      </p>
    </div>
  </TwoHalfWhiteBlock>
);
