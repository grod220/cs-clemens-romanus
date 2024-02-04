import React, { FC, ReactDOM, ReactNode } from 'react';
import styled from 'styled-components';
import { SendToBack } from './send-to-back';
import Image, { StaticImageData } from "next/legacy/image";

const Container = styled.div<{ customHeight?: string }>`
  height: ${({ customHeight }) => (customHeight ? customHeight : '31.25rem')};
  width: 100%;
  background-color: #096c85;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HighlightText = styled.div`
  z-index: 100;
  color: white;
  font-size: 2.6875rem;
  width: 78.75rem;
  text-align: center;
  line-height: 3.4rem;
  font-style: italic;

  @media (max-width: 83rem) {
    width: 95vw;
    line-height: calc(1.1em + 0.5vw);
  }

  @media (max-width: 50rem) {
    font-size: 2.125rem;
  }
`;

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
  font-style: normal;
  color: white;
`;

interface Props {
  image: StaticImageData;
  title?: string;
  customHeight?: string;
  children?: ReactNode;
}

export const FeatureWithBackground = ({ children, customHeight, image, title }: Props) => (
  <Container customHeight={customHeight}>
    <HighlightText>
      {title ? <Title>{title}</Title> : ''}
      {children}
    </HighlightText>
    <SendToBack>
      <Image alt={title || ''} src={image} layout="fill" objectFit="cover" placeholder="blur" />
    </SendToBack>
  </Container>
);
