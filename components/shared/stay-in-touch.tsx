import React, { FC, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Container = styled.div<{ whiteText?: boolean }>`
  text-align: center;
  font-family: Crimson Text, georgia, serif;
  font-size: 1.25rem;
  color: ${({ whiteText }) => (whiteText ? 'white' : '#4f4f4f')};
  line-height: 1.875rem;
  font-style: normal;
`;

const ActionSection = styled.form`
  display: flex;
  justify-content: center;
`;

const InputBox = styled.input<{ status: string }>`
  border-color: ${({ status }) => (status === 'ready' ? '#c7c7c7' : '#e88c8c')};
  box-shadow: ${({ status }) => (status === 'ready' ? '' : '0px 0px 4px #e88c8c')};
  border-style: solid;
  height: 52px;
  width: 380px;
  text-align: center;

  &:placeholder-shown {
    font-style: italic;
  }
`;

const SubmitButton = styled.button<{ submitStatus: string }>`
  background-color: ${({ submitStatus }) => getButtonAttrs(submitStatus).color};
  height: 52px;
  color: white;
  text-transform: uppercase;
  padding: 0 30px;
  font-family: Open Sans Condensed, Arial, Helvetica, sans-serif;
  font-size: 18px;
  border: none;
  margin-left: 5px;
  font-style: normal;

  &:hover {
    background-color: ${({ submitStatus }) => getButtonAttrs(submitStatus).hover};
    cursor: ${({ submitStatus }) => getButtonAttrs(submitStatus).cursor};
  }

  &:focus {
    outline: 0;
  }
`;

const getButtonAttrs = (submitStatus: string) => {
  switch (submitStatus) {
    case 'pending':
      return { color: '#bfbfbf', hover: '#bfbfbf', cursor: 'not-allowed' };
    default:
      return { color: '#54c5a6', hover: '#64d1a9', cursor: 'pointer' };
  }
};

const storeInSheets = (email: string) => {
  return fetch('/.netlify/functions/googleSheets', {
    body: JSON.stringify({ email: email }),
    headers: { 'content-type': 'application/json' },
    method: 'POST',
  });
};

const encode = (data: Record<string, string>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const sendToJoe = (email: string) => {
  return fetch('/email-submit-action/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'email-submission',
      email: email,
    }),
  });
};

export const StayInTouch: FC<{ whiteText?: boolean }> = ({ whiteText }) => {
  const [submitStatus, setSubmitStatus] = useState('ready');
  const [input, setInput] = useState('');
  const [inputStatus, setInputStatus] = useState('ready');
  const [inputPlaceholder, setInputPlaceholder] = useState('alexandra@gmail.com');

  const clearBox = () => {
    setInputStatus('ready');
    setInputPlaceholder(' ');
  };

  const handleEmail = (e: FormEvent) => {
    e.preventDefault();
    if (submitStatus !== 'ready') return;
    if (!input || !document.querySelector('input')!.validity.valid) {
      setInputStatus('invalid');
    } else {
      setSubmitStatus('pending');
      sendToJoe(input)
        .then((response) => {
          if (response.ok) {
            toast.success('👍 Email subscribed!', {
              className: 'react-toast-success react-toast-common',
            });
            setInput('ᕕ( ᐛ )ᕗ');
          } else {
            toast.error('💥 There was an error.', {
              className: 'react-toast-error react-toast-common',
            });
          }
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setSubmitStatus('ready');
        });
      // Also save to sheets. Not critical to UX though.
      storeInSheets(input);
    }
  };

  return (
    <Container whiteText={whiteText}>
      <p>
        Enter your email to signup for our regular newsletter. You’ll receive updates like church announcements, bible
        studies, upcoming events, and fun things happening at Calvary Stockholm.
      </p>
      <ActionSection
        name="email-submission"
        method="post"
        action="/email-submit-action/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleEmail}
      >
        <input type="hidden" name="form-name" value="email-submission" />
        <InputBox
          type="email"
          name="email"
          onFocus={clearBox}
          placeholder={inputPlaceholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          status={inputStatus}
        />
        <SubmitButton submitStatus={submitStatus} type="submit">
          Submit
        </SubmitButton>
      </ActionSection>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        // pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </Container>
  );
};
