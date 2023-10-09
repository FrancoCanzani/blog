'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

export default function SubmitButton({
  text,
  size,
}: {
  text: string;
  size: 'big' | 'small';
}) {
  const { pending } = useFormStatus();

  return (
    <button
      className={`dark:bg-gray-100 flex items-center justify-center flex-grow dark:text-black bg-neutral-800 text-gray-100 border-gray-950 border rounded-md px-2 ${
        size == 'big' ? 'py-1.5' : 'py-1 text-sm'
      }`}
      type='submit'
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? <Loader2 className='animate-spin' /> : text}
    </button>
  );
}
