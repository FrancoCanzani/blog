'use client';

import { useRef } from 'react';
import addEmail from '../../utils/actions/addEmail';
import SubmitButton from '../buttons/submitButton';
import { z } from 'zod';
import { toast } from 'sonner';

export default function SubscriptionForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubscribe = async (FormData: FormData) => {
    const emailSchema = z.string().email();

    try {
      const email = FormData.get('email');
      const validation = emailSchema.safeParse(email);

      if (validation.success) {
        await addEmail(FormData);
        formRef?.current?.reset();
        toast.success('Thanks for subscribing!');
      } else {
        if (validation.error.errors[0].code === 'invalid_string') {
          toast.error('Please enter a valid email address.');
        } else {
          toast.error(validation.error.message);
        }
      }
    } catch (error) {
      toast.error('Error subscribing. Please try again!');
    }
  };

  return (
    <form ref={formRef} action={handleSubscribe}>
      <label htmlFor='email' className='sr-only'>
        Email
      </label>
      <div className='flex items-center w-full space-x-1'>
        <input
          id='email'
          name='email'
          className='bg-stone-100 w-3/4 dark:bg-stone-800 dark:text-stone-100 placeholder:dark:text-stone-200 placeholder:text-stone-400 rounded-sm p-1'
          placeholder='email@provider.com'
        />
        <SubmitButton text='Subscribe' className='w-1/4' />
      </div>
    </form>
  );
}
