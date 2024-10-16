import React, { useState } from 'react';
import styled from 'styled-components';
import { Hamburger } from './hamburger';
import Link from 'next/link';
import { useQuery } from 'react-query';
import { CalEventsFetcher } from '../../utils/calendar-fetcher';

const Container = styled.div`
  position: absolute;
  width: 78.75rem;
  margin: 2.8125rem auto 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  z-index: 100;

  @media (max-width: 83rem) {
    width: 95vw;
  }

  @media (max-width: 46.5625rem) {
    width: 72vw;
    align-items: center;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;

const BrandName = styled.h1`
  display: block;
  font-family:
    Open Sans,
    Arial,
    Helvetica,
    sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.35rem;
  letter-spacing: 0.3375rem;
  margin-right: 2rem;
  flex-shrink: 0;
  text-align: center;
  position: relative;

  @media (max-width: 46.5625rem) {
    font-size: calc(1rem + 1.5vw);
    flex-shrink: 1;
    margin: 0 0.7rem;
  }
`;

const Nav = styled.ul<{ mobileMenuActive: boolean }>`
  list-style-type: none;
  text-transform: uppercase;
  font-family:
    Open Sans Condensed,
    Arial,
    Helvetica,
    sans-serif;
  font-weight: 600;
  letter-spacing: 0.135rem;
  font-size: 0.9844rem;
  text-align: right;
  margin-left: 0;

  li {
    &:first-child {
      margin-left: 0;
    }
  }

  @media (max-width: 46.5625rem) {
    width: 12.5rem;
    text-align: center;
    margin-top: ${({ mobileMenuActive }) => (mobileMenuActive ? '4vh' : '-300vh')};
    margin-left: ${({ mobileMenuActive }) => (mobileMenuActive ? '' : '-300vw')};
    font-size: 1.875rem;
    line-height: 10vh;
  }
`;

const Item = styled.li<{ mobileMenuActive: boolean; delay: number }>`
  display: inline-block;
  margin-left: 3rem;

  @media (max-width: 46.5625rem) {
    display: block;
    margin-left: 0;
    margin-top: ${({ mobileMenuActive }) => (mobileMenuActive ? 0 : '-1.25rem')};
    opacity: ${({ mobileMenuActive }) => (mobileMenuActive ? 1 : 0)};
    transition: ${({ mobileMenuActive }) => (mobileMenuActive ? 'opacity 2s ease, margin .5s ease' : '')};
    transition-delay: ${({ mobileMenuActive, delay }) => (mobileMenuActive ? delay + 'ms' : '')};
  }
`;

const MobileMenu = styled.div<{ mobileMenuActive: boolean }>`
  width: 100%;
  height: 100%;
  background-color: #212121;
  position: absolute;
  z-index: ${({ mobileMenuActive }) => (mobileMenuActive ? 99 : -99)};
  opacity: ${({ mobileMenuActive }) => (mobileMenuActive ? 0.98 : 0)};
`;

const menuList = ['Sundays', 'Who we are', 'Calendar', 'Get in touch', 'Giving', 'Facebook', 'Instagram'];

export default function Navigation() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);
  const hideMobileMenu = () => setMobileMenu(false);
  const { data } = useQuery('cal-events', CalEventsFetcher);

  return (
    <>
      <Container>
        <BrandName>
          <Hamburger mobileMenuActive={mobileMenu} triggerFunc={toggleMobileMenu} />
          <Link href="/" legacyBehavior>
            <a onClick={hideMobileMenu}>Calvary Stockholm</a>
          </Link>
        </BrandName>
        <Nav mobileMenuActive={mobileMenu}>
          {menuList
            .filter((page) => page !== 'Calendar' || data?.length)
            .map((itemTitle, index) => (
              <Item mobileMenuActive={mobileMenu} delay={index * 125} key={index} onClick={hideMobileMenu}>
                {itemTitle === 'Facebook' ? (
                  <a href="https://www.facebook.com/calvarystockholm/" target="_blank" rel="noopener noreferrer">
                    {itemTitle}
                  </a>
                ) : itemTitle === 'Instagram' ? (
                  <a href="https://www.instagram.com/calvarystockholm/" target="_blank" rel="noopener noreferrer">
                    {itemTitle}
                  </a>
                ) : (
                  <Link href={'/' + itemTitle.toLocaleLowerCase().replace(/ /g, '')} legacyBehavior>
                    <a>{itemTitle}</a>
                  </Link>
                )}
              </Item>
            ))}
        </Nav>
      </Container>
      <MobileMenu mobileMenuActive={mobileMenu} />
    </>
  );
}
