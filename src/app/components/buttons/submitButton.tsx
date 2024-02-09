'use client';

import { cn } from '@/app/utils/cn';
import { useFormStatus } from 'react-dom';
import { HTMLAttributes } from 'React';

interface SubmitButton extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export default function SubmitButton({ text, className }: SubmitButton) {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        'dark:bg-gray-100 text-sm w-full flex items-center justify-center dark:text-black bg-neutral-800 text-gray-100 border-gray-950 border rounded-sm py-1.5 px-2',
        className,
        {
          'opacity-70': pending,
        }
      )}
      type='submit'
      disabled={pending}
      aria-disabled={pending}
    >
      {text}
    </button>
  );
}
