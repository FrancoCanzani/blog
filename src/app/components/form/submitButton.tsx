'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className='bg-black flex hover:shadow-md dark:shadow-neutral-800 hover:shadow-neutral-400 items-center justify-center rounded-sm active:translate-y-1 py-2 w-full text-center text-white font-medium'
      type='submit'
      aria-disabled={pending}
    >
      {pending ? <Loader2 className='animate-spin' /> : 'Subscribe'}
    </button>
  );
}
