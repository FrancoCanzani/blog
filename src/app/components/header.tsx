'use client';

import { Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className='flex items-center font-semibold justify-between w-full'>
      <h1 className='antialiased text-xl'>The Self-Learning Sage</h1>
      <button className='px-2 relative transition-all duration-200 group hover:shadow-md hover:shadow-gray-500 py-1 border-b-4 border-r-4 active:translate-y-0.5 border-black border-2 rounded-sm w-32 flex items-center justify-between gap-2'>
        <span className='transition-all duration-100 group-hover:text-transparent'>
          Subscribe
        </span>
        <Mail className='absolute right-2 group-hover:right-12 transition-all duration-200' />
      </button>
    </header>
  );
}
