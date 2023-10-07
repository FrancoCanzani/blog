'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';

export default function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      className='flex py-1.5 min-w-[100px] justify-center font-semibold border border-neutral-200 dark:border-neutral-700 bg-neutral-800 rounded-sm text-sm items-center text-neutral-100'
      type='submit'
      aria-disabled={pending}
    >
      {pending ? (
        <Loader2 className='animate-spin my-[0.08rem]' size={18} />
      ) : (
        text
      )}
    </button>
  );
}
