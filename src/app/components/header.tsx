'use client';

import { Mail } from 'lucide-react';
import SubscriptionModal from './subscriptionModal';
import { useState } from 'react';
import ThemeSwitch from './themeSwitch';
import Link from 'next/link';

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <header className='py-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 flex mb-10 items-center font-medium justify-between w-full'>
      <SubscriptionModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <Link href={'/'} className='antialiased text-xl'>
        The Self-Learning Notes
      </Link>
      <div className='items-center gap-4 hidden sm:flex'>
        <ThemeSwitch />
        <button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className='px-2 relative transition-all duration-200 group hover:shadow-md hover:shadow-neutral-400 py-1 border-b-4 border-r-4 active:translate-y-0.5 border-black border-2 rounded-sm w-32 flex items-center justify-between gap-2'
        >
          <span className='transition-all duration-100 group-hover:text-transparent'>
            Subscribe
          </span>
          <Mail className='absolute right-2 group-hover:right-12 transition-all duration-200' />
        </button>
      </div>
    </header>
  );
}
