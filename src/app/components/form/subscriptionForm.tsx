'use client';

import { useRef, useState } from 'react';
import addEmail from '../../utils/actions/addEmail';
import validateEmail from '../../utils/validateEmail';
import SubmitButton from '../buttons/submitButton';
import isEmailInDatabase from '@/app/utils/actions/isEmailInDatabase';
import ValidationMessage from '../validationMessage';

export default function SubscriptionForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [outcome, setOutcome] = useState<'success' | 'error' | null>(null);

  return (
    <form
      className='mt-8'
      ref={formRef}
      // Next js server action
      action={async (FormData) => {
        if (validateEmail(FormData.get('email'))) {
          if (await isEmailInDatabase(FormData.get('email'))) {
            setOutcome('error');
            setMessage('It looks like you are already subscribed!');
            setTimeout(() => {
              setMessage(null);
              setOutcome(null);
            }, 2500);
          } else {
            await addEmail(FormData);
            setOutcome('success');
            setMessage('Thanks for subscribing to Notes!');

            setTimeout(() => {
              setMessage(null);
              setOutcome(null);
              // Reset the form input
              formRef?.current?.reset();
            }, 2500);
          }
        } else {
          setOutcome('error');
          setMessage('Please enter a valid email!');
          setTimeout(() => {
            setMessage(null);
          }, 2500);
        }
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
