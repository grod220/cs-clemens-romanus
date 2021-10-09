import React, { FC } from 'react';
import styled from 'styled-components';
import HeroImg from '../../images/homepage-hero-night.jpg';

const Container = styled.div`
  min-height: 33.75rem;
  overflow: hidden;
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  background-size: cover;
  background: #24242c url('${HeroImg.src}') center;
`;

const MissionBlock = styled.div`
  color: white;
  width: 78.75rem;
  position: absolute;
  bottom: 30%;
  margin: 0 auto;
  left: 0;
  right: 0;

  @media (max-width: 83rem) {
    width: 95vw;
  }

  @media (max-width: 56.25rem) {
    top: 50%;
    bottom: unset;
    text-align: center;
  }

  @media (max-width: 25.875rem) {
    width: 90vw;
  }
`;

const PreText = styled.div`
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.135rem;
  font-size: 1.125rem;
`;

const Statement = styled.div`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-size: 5rem;
  line-height: 5.1328rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.135rem;
  text-shadow: 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.1);

  @media (max-width: 83rem) {
    /* Max/min font size :: reference formula: https://css-tricks.com/snippets/css/fluid-typography/ */
    font-size: calc(2.89rem + 35 * ((100vw - 36rem) / 1000));
    line-height: calc(1em + 0.5vw);
  }
`;

export const HomeHeader: FC = () => (
  <Container>
    <MissionBlock>
      <PreText>We are focused on God&apos;s mission for us:</PreText>
      <Statement>
        Loving God,
        <br />
        loving others
      </Statement>
    </MissionBlock>
  </Container>
);
