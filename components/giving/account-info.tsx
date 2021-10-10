import React, { FC } from 'react';
import styled from 'styled-components';
import { WhiteContentBlock } from '../shared/white-content-block';

const Container = styled.div`
  text-align: center;
`;

export const AccountInfo: FC = () => (
  <WhiteContentBlock title="Account info">
    <Container>
      <p>Gifts to the church can be sent through bank transfers</p>
      <p>BANKGIRO: 404-1711</p>
      <p>Calvary Stockholm Bibelstudier</p>
    </Container>
  </WhiteContentBlock>
);
