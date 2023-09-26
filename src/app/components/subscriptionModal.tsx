import { Dispatch, SetStateAction } from 'react';
import { X } from 'lucide-react';

export default function SubscriptionModal({
  modalIsOpen,
  setModalIsOpen,
}: {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <form
      className={`${
        modalIsOpen ? 'block' : 'hidden'
      } absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 md:p-6 w-5/6 sm:w-4/6 md:w-1/2 lg:w-1/3 rounded-sm`}
    >
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl font-bold text-gray-800'>
          Subscribe to My Blog
        </h2>
        <button
          type='reset'
          onClick={() => setModalIsOpen(!modalIsOpen)}
          aria-label='Close'
        >
          <X />
        </button>
      </div>
      <p className='text-neutral-700 mt-2'>
        Stay up to date with the latest articles and updates.
      </p>
      <div className='flex flex-col mt-3'>
        <label htmlFor='email' className='text-sm'>
          Email*
        </label>
        <input
          className='bg-neutral-100 mt-1 mb-2 py-2 px-1 rounded-sm'
          type='email'
        />
        <button
          className='bg-black active:translate-y-1 py-2 w-full text-center text-white font-medium'
          type='submit'
        >
          Subscribe
        </button>
      </div>
      <p className='text-sm text-neutral-700 mt-4'>
        * Your email address is safe with us. We do not send spam.
      </p>
    </form>
  );
}
