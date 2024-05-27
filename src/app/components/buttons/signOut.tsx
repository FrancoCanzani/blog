'use client';

import { signOut } from 'next-auth/react';

export default function SignOut() {
  return (
    <button
      className='bg-stone-800 capitalize hover:opacity-85 text-stone-100 text-sm rounded-sm px-2 py-1'
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
