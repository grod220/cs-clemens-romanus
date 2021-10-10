import React, { FC } from 'react';
import styled from 'styled-components';
import { SendToBack } from './send-to-back';
import Image from 'next/image';

const Container = styled.div`
  height: 26rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #4a4a4a;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  position: absolute;
  z-index: 98;
  text-align: center;
  font-weight: 400;
  font-family: Crimson Text, georgia, serif;
  font-style: italic;
  letter-spacing: 5px;
  font-size: 45px;
  margin: 17px 10px 0;
`;

export const HeaderBlock: FC<{ img: StaticImageData; titleText: string }> = ({ img, titleText }) => (
  <Container>
    <Title>{titleText}</Title>
    <SendToBack>
      <Image alt={titleText} src={img} layout="fill" objectFit="cover" placeholder="blur" />
    </SendToBack>
  </Container>
);
