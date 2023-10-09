'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className='dark:bg-gray-100 flex items-center justify-center w-1/4 dark:text-black bg-neutral-800 text-gray-100 border-gray-950 border rounded-md px-2 py-1.5'
      type='submit'
      aria-disabled={pending}
    >
      {pending ? <Loader2 className='animate-spin' /> : 'Subscribe'}
    </button>
  );
}
