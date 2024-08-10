import React, { useState } from 'react';
import { Input } from '@mui/material';
import { Button } from '@mui/material';
import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
    setPhoneNumber('');
  };

  const submitForm = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      await fetch(
        'https://yik3q4romd.execute-api.us-east-1.amazonaws.com/dev/contact-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify({
            name,
            senderEmail: email,
            receiverEmail: 'hello@teachingslp.com',
            phoneNumber,
            message,
          }),
        }
      );
      console.log('submitted');
      setIsSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    resetForm();
  };

  return (
    <FormContainer onSubmit={submitForm} className='form-container'>
      <h2 style={{ color: '#01b8d8' }}>Send a Message</h2>

      <img src='/request.png' alt='request' height={50} width={50} />
      <InputFieldContainer>
        <Input
          type='text'
          placeholder='Name'
          value={name}
          name='_autoresponse'
          onInput={(event) => setName(event.target.value)}
          required
          onChange={() => setIsSubmitted(false)}
        />
        <Input
          type='email'
          placeholder='Email'
          value={email}
          name='_autoresponse'
          onInput={(event) => setEmail(event.target.value)}
          required
          onChange={() => setIsSubmitted(false)}
        />
        <Input
          type='tel'
          placeholder='Phone Number'
          value={phoneNumber}
          name='_autoresponse'
          onInput={(event) => setPhoneNumber(event.target.value)}
          required
          onChange={() => setIsSubmitted(false)}
        />
      </InputFieldContainer>

      {isLoading && <CircularProgress style={{ marginTop: '1rem' }} />}

      {submitted && (
        <h3
          style={{ padding: '1rem', textAlign: 'center', fontWeight: '100pt' }}
        >
          {'Thank you. Your message has been sent.'}
        </h3>
      )}
      <TextAreaContainer>
        <textarea
          id='message'
          name='message'
          rows='8'
          cols='65'
          value={message}
          required
          onInput={(event) => setMessage(event.target.value)}
          onChange={() => setIsSubmitted(false)}
        ></textarea>
      </TextAreaContainer>

      <Button
        className='submit-button'
        variant='contained'
        type='submit'
        style={{
          marginTop: '2rem',
          background: '#FFD937',
          color: 'dark blue',
          fontFamily: 'Mulish',
        }}
        disabled={!name || !email || !phoneNumber || !message}
      >
        Submit
      </Button>
    </FormContainer>
  );
};

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: auto;
  margin-top: -2rem;

  h3 {
    font-size: 22px;
    color: #8e3e63;
  }

  .status-messsage {
    color: #008080;
    font-weight: 100pt;
    border: 2px solid green;
  }

  @media (min-width: 375px) and (max-width: 768px) {
    margin: auto;
    padding: 1rem;
    padding-bottom: 1rem;
    box-shadow: none;
  }
`;

const InputFieldContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;
const TextAreaContainer = styled.div`
  textarea {
    width: 100%;
    align: center;
    margin: auto;
    margin-top: 2rem;

    @media (min-width: 375px) and (max-width: 768px) {
      width: 90%;
      display: flex;
    }
  }
`;
