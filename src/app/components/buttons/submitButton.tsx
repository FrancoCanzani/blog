'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { Loader2 } from 'lucide-react';
import { cn } from '@/app/utils/cn';

interface SubmitButton extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export default function SubmitButton({ text, className }: SubmitButton) {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        'dark:bg-gray-100 w-full flex items-center justify-center dark:text-black bg-neutral-800 text-gray-100 border-gray-950 border rounded-md px-2',
        className
      )}
      type='submit'
      disabled={pending}
      aria-disabled={pending}
    >
      {pending ? <Loader2 className='animate-spin' /> : text}
    </button>
  );
}
