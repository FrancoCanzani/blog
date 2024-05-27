'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

export default function SignIn() {
  const { data: session } = useSession();
  if (session) {
    return (
      <button
        className='bg-stone-800 hover:opacity-85 text-stone-100 text-sm rounded-sm px-2 py-1'
        onClick={() => signOut()}
      >
        Sign out
      </button>
    );
  }
  return (
    <button
      className='bg-stone-800 hover:opacity-85 text-stone-100 text-sm rounded-sm px-2 py-1'
      onClick={() => signIn('github')}
    >
      Sign in to comment
    </button>
  );
}
