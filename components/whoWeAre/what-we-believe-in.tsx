import React, { FC } from 'react';
import styled from 'styled-components';

import { WhiteContentBlock } from '../shared/white-content-block';

const AlignLeft = styled.div`
  text-align: left;
`;

const LightGray = styled.span`
  color: darkgray;
  font-style: italic;
`;

export const WhatWeBelieveIn = () => (
  <WhiteContentBlock title="What we believe in">
    <AlignLeft>
      <ol>
        <li>
          We believe the Holy Scriptures of the Old Testament and New Testament are the inerrant in the original texts,
          inspired and infallible Word of God. God’s Word is the final authority for faith and life.{' '}
          <LightGray>(2 Timothy 3:16; John 17:17; Matthew 5:18; 2 Peter 1;20-21)</LightGray>
        </li>
        <li>
          We believe there is only one God, and He has chosen to reveal Himself as God the Father, God the Son and God
          the Holy Spirit.{' '}
          <LightGray>
            (Deuteronomy 6:4; Matthew 3:16-17; 1 Peter 1:2; 1 Corinthians 8:6; John 1:1-3; Romans 1:4)
          </LightGray>
        </li>
        <li>
          We believe mankind was created in the image of God and the sin of Adam (the first man) marred that image,
          creating an eternal divide between God and man. Every person is born in sin.{' '}
          <LightGray>(Genesis 1:27; Romans 5:12; Romans 3:23; Jeremiah 17:9)</LightGray>
        </li>
        <li>
          We believe the Gospel: the only way a person can have a true, forgiven relationship with God through Jesus
          Christ’s death on the cross. Jesus was born of the Virgin Mary and conceived by the Holy Spirit. Jesus became
          man without ceasing to be God. Our right standing with God is made sure because of His literal, physical
          resurrection.{' '}
          <LightGray>(John 14:6; Philippians 2:5-10; Colossians 2:13-14; 1 Corinthians 15:20-23)</LightGray>
        </li>
        <li>
          We believe God offers eternal life as a free gift and that it must be received by faith alone through God’s
          grace alone. It is the privilege and duty of every child of God to be filled with His Spirit and walk in
          newness of life in Christ. The new joy and goal of life is to glorify God.{' '}
          <LightGray>(Romans 6:23; John 1:12; Ephesians 2:8-10; Ephesians 5:18; 1 Corinthians 10:31)</LightGray>
        </li>
        <li>
          We believe those who have experienced spiritual birth are part of Christ’s body, the true church, and are
          directed to function as a body in a local church.{' '}
          <LightGray>(Romans 12:5; Ephesians 4:15-16; Acts 2:42; Hebrews 10:25)</LightGray>
        </li>
        <li>
          We believe in the literal, physical return of Jesus to judge the living and the dead; those saved by God’s
          grace to everlasting reward, and those unsaved to eternal separation from God.{' '}
          <LightGray>(John 3:36; John 5:28-29; Matthew 25:46; 2 Thessalonians 1:5-10)</LightGray>
        </li>
        <li>
          We believe believer’s baptism and the Lord’s Supper are the two ordinances of the church, that confirm
          salvation in a believer’s life. Both ordinance testify to salvation, and do not save or add to salvation.
          <LightGray>(Matthew 28:19-20; Acts 8:12; 1 Corinthians 11:23-26)</LightGray>
        </li>
      </ol>
    </AlignLeft>
  </WhiteContentBlock>
);
