import React, { FC, useState } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';

const AlertTitle = styled.h2`
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  font-size: 23px;
  text-transform: uppercase;
  color: #4e4e4e;
`;

const AlertBody = styled.div`
  font-size: 20px;
`;

const BlueButton = styled.button`
  padding: 0.5em 2.7em;
  border-radius: 0.3em;
  font-family: Open Sans, Arial, Helvetica, sans-serif;
  color: #ffffff;
  background-color: #4473f6;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17), inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`;

export const HomePopup: FC<{ activeUntil: Date }> = ({ activeUntil }) => {
  const [showModal, setShowModal] = useState(activeUntil > new Date());
  return (
    <>
      {showModal && (
        <ReactModal
          isOpen={showModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(12, 12, 12, 0.75)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            },
            content: {
              maxWidth: '500px',
              top: 'unset',
              bottom: 'unset',
              right: 'unset',
              left: 'unset',
              maxHeight: 'calc(100vh - 2rem)',
              overflowY: 'auto',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              textAlign: 'center',
              padding: '40px',
            },
          }}
        >
          <AlertTitle>
            Attention{' '}
            <span role="img" aria-label="church">
              ⛪
            </span>
          </AlertTitle>
          <AlertBody>
            <p>
              Until further notice: Calvary Stockholm will not meet in-person for Sunday worship, but virtually. Please
              reach out to us at <a href="mailto:calvarystockholm@gmail.com">calvarystockholm@gmail.com</a> if
              you&apos;d like to join, or seek assistance/prayer.
            </p>
            <p>We are praying that God’s grace will abound in the midst of this present sickness and suffering.</p>
          </AlertBody>
          <BlueButton onClick={() => setShowModal(false)}>Close</BlueButton>
        </ReactModal>
      )}
    </>
  );
};
