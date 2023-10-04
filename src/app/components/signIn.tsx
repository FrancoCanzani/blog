'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Github } from 'lucide-react';

export default function SignIn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className='flex font-semibold items-center justify-center gap-2'>
        <button
          className='px-3 py-1.5 border font-semibold border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100'
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    );
  }
  return (
    <button
      className='px-3 py-1.5 font-semibold border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100'
      onClick={() => signIn()}
    >
      <Github size={18} />
      <span className='ml-2'>Sign in to comment</span>
    </button>
  );
}
