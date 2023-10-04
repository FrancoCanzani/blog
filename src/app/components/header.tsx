'use client';

import SubscriptionModal from './subscriptionModal';
import { useState } from 'react';
import ThemeSwitch from './themeSwitch';
import Link from 'next/link';

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <header className='pt-4 pb-2 border-b dark:border-[#f6f3f1] border-black px-2 flex mb-7 items-center font-medium justify-between w-full'>
      <SubscriptionModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <Link href={'/'} className='text-2xl lg:text-3xl'>
        The Self-Learning Notes
      </Link>
      <div className='items-center gap-3 flex'>
        <ThemeSwitch />
        <button
          onClick={() => setModalIsOpen(!modalIsOpen)}
          className='px-2 relative transition-all hidden sm:flex duration-200 group py-1 active:translate-y-0.5 rounded-sm items-center justify-between gap-2'
        >
          Subscribe
        </button>
      </div>
    </header>
  );
}
