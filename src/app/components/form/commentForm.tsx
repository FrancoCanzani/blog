'use client';

import { useRef } from 'react';
// @ts-expect-error
import { experimental_useFormState as useFormState } from 'react-dom';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { useSession } from 'next-auth/react';

export default function CommentForm() {
  const { pending } = useFormStatus();
  const { data: session } = useSession();

  return (
    <form className='bg-neutral-50 dark:bg-neutral-200 border border-black mt-6 rounded-sm flex flex-col px-2 items-center w-full'>
      <textarea
        name='prompt'
        placeholder='Comment'
        rows={4}
        className='bg-transparent dark:border-black outline-none border-b placeholder:text-gray-500 py-2.5 px-2 dark:text-black text-sm w-full transition-all duration-300'
      />
      <div className='w-full py-2.5 px-2 flex items-center justify-between'>
        <p className='text-xs dark:text-black italic'>
          Commenting as{' '}
          <span className='font-semibold'>{session?.user?.name}</span>
        </p>
        <button
          type='submit'
          disabled={pending}
          aria-disabled={pending}
          className='rounded-sm bg-black text-white text-xs px-2 py-1'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
