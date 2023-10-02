'use client';

import { Mail } from 'lucide-react';
import SubscriptionModal from './subscriptionModal';
import { useState } from 'react';
import ThemeSwitch from './themeSwitch';
import Link from 'next/link';

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <header className='pt-6 pb-2 border-b dark:border-[#f6f3f1] border-black px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 flex mb-7 items-center font-medium justify-between w-full'>
      <SubscriptionModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <Link href={'/'} className='text-2xl lg:text-3xl'>
        The Self-Learning Notes
      </Link>
      <div className='items-center gap-4 hidden sm:flex'>
        <ThemeSwitch />
        <button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className='px-2 relative transition-all duration-200 group py-1 active:translate-y-0.5 rounded-sm w-32 flex items-center justify-between gap-2'
        >
          Subscribe
        </button>
      </div>
    </header>
  );
}
