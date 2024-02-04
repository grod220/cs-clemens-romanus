import React, { FC } from 'react';
import styled from 'styled-components';

import { WhiteContentBlock } from '../shared/white-content-block';

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #535353;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const IFrame = styled.iframe`
  border-radius: 12px;
  max-width: 900px;
  margin-bottom: 0;
`;

export const SpotifyPreview = () => (
  <Container>
    <IFrame
      src="https://open.spotify.com/embed/show/5Eq7l6yjsJO6QObRgLzIIK?utm_source=generator"
      width="100%"
      height="352"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></IFrame>
  </Container>
);
