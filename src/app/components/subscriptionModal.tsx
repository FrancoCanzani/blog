import { Dispatch, SetStateAction, useRef, useState } from 'react';
import { X } from 'lucide-react';
import addEmail from '../utils/actions/addEmail';
import SubmitButton from './form/submitButton';
import validateEmail from '../utils/validateEmail';
import { XCircle } from 'lucide-react';

export default function SubscriptionModal({
  modalIsOpen,
  setModalIsOpen,
}: {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  return (
    <form
      ref={formRef}
      // Next js server action
      action={async (FormData) => {
        if (validateEmail(FormData.get('email'))) {
          // Add the email
          await addEmail(FormData);
          setMessage(null);
          setTimeout(() => {
            // Reset the form input
            formRef?.current?.reset();
            setModalIsOpen(false);
          }, 1000);
        } else {
          setMessage('Please enter a valid email!');
        }
      }}
      className={`${
        modalIsOpen ? 'block' : 'hidden'
      } absolute z-10 top-1/2 left-1/2 transform transition-transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-6 w-5/6 sm:w-4/6 md:w-1/2 lg:w-1/3 rounded-sm`}
    >
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-gray-800'>
          Subscribe to My Blog
        </h2>
        <button
          type='reset'
          onClick={() => {
            setModalIsOpen(!modalIsOpen);
            setMessage(null);
          }}
          aria-label='Close'
        >
          <X />
        </button>
      </div>
      <p className='text-neutral-700 mt-2'>
        Stay up to date with the latest articles and updates.
      </p>
      <div className='flex flex-col my-3'>
        <label htmlFor='email' className='text-sm'>
          Email*
        </label>
        <input
          id='email'
          name='email'
          className='bg-neutral-100 mt-1 mb-2 p-2 rounded-sm'
        />
        <SubmitButton />
      </div>
      <div>
        {message && (
          <p className='text-sm animate-fade gap-2 px-2 py-1 text-red-600 bg-red-50 rounded-sm w-full flex items-center justify-start'>
            <XCircle size={15} />
            {message}
          </p>
        )}
      </div>
      <p className='text-sm text-neutral-700 mt-2'>
        * Your email address is safe with us. We do not send spam.
      </p>
    </form>
  );
}
