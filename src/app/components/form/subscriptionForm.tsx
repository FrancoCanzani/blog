'use client';

import { useRef, useState } from 'react';
import addEmail from '../../utils/actions/addEmail';
import validateEmail from '../../utils/validateEmail';
import SubmitButton from '../buttons/submitButton';
import ValidationMessage from '../validationMessage';

export default function SubscriptionForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<'success' | 'error' | null>(null);

  const handleSubscribe = async (FormData: FormData) => {
    const userEmail = FormData.get('email');

    if (!validateEmail(userEmail)) {
      throw new Error('Please enter a valid email!');
    }

    try {
      await addEmail(userEmail);
      handleOutcome('success', 'Thanks for subscribing to Notes!');
      formRef?.current?.reset();
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Email is already subscribed!') {
          // Handle the case where the email is already in the database
          handleError(error);
        } else {
          handleError(error);
        }
      }
    }
  };

  const handleError = (error: Error) => {
    setOutcome('error');
    setMessage(error.message);

    setTimeout(() => {
      setMessage(null);
      setOutcome(null);
    }, 2500);
  };

  const handleOutcome = (type: 'success' | 'error', message: string) => {
    setOutcome(type);
    setMessage(message);

    setTimeout(() => {
      setMessage(null);
      if (type === 'success') {
        setOutcome(null);
      }
    }, 2500);
  };

  return (
    <form
      className='mt-8'
      ref={formRef}
      action={async (FormData) => {
        handleSubscribe(FormData);
      }}
    >
      <div className='flex flex-col my-3'>
        <label htmlFor='email' className='text-sm font-semibold mb-1'>
          Email
        </label>
        <div className='flex items-center w-full space-x-1'>
          <input
            id='email'
            name='email'
            className='bg-gray-100 w-3/4 dark:bg-neutral-800 dark:text-gray-100 dark:border-gray-950 border rounded-md px-2 py-1.5'
            placeholder='email@provider.com'
          />
          <SubmitButton text='Subscribe' size='big' />
        </div>
      </div>
      <div>
        <ValidationMessage message={message} outcome={outcome} />
      </div>
    </form>
  );
}
