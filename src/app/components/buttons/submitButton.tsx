'use client';

import { cn } from '@/app/utils/cn';
import { useFormStatus } from 'react-dom';
import { HTMLAttributes } from 'react';

interface SubmitButton extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

export default function SubmitButton({ text, className }: SubmitButton) {
  const { pending } = useFormStatus();

  return (
    <button
      className={cn(
        'text-sm w-full flex items-center justify-center bg-stone-800 text-stone-100 rounded-sm py-1.5 px-2',
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
