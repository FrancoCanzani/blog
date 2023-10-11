'use client';

import { useSession, signIn, signOut } from 'next-auth/react';
import { Github } from 'lucide-react';

export default function SignIn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <button
        className='dark:bg-gray-100 dark:text-black bg-neutral-800 text-gray-100 border-gray-950 border text-sm rounded-md px-2 py-1'
        onClick={() => signOut()}
      >
        Sign out
      </button>
    );
  }
  return (
    <button
      className='dark:bg-gray-100 flex items-center justify-center gap-0.5 dark:text-black bg-neutral-800 text-gray-100 border-gray-950 border text-sm rounded-md px-2 py-1'
      onClick={() =>
        signIn('github', {
          callbackUrl: `https://franconotes.vercel.app/api/auth/callback/github`,
        })
      }
    >
      <Github size={18} />
      <span className='ml-2'>Sign in to comment</span>
    </button>
  );
}
