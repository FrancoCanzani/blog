'use client';

import SubscriptionModal from './subscriptionModal';
import { useState } from 'react';
import ThemeSwitch from './themeSwitch';
import Link from 'next/link';
import ScrollIntoViewButton from './buttons/scrollIntoViewButton';

export default function Header() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <header className='pt-4 pb-2 border-b dark:border-[#f6f3f1] border-black flex mb-7 items-center font-medium justify-between w-full'>
      <SubscriptionModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <Link href={'/'} className='text-2xl lg:text-3xl'>
        Notes
      </Link>
      <div className='items-center gap-3 flex'>
        <ThemeSwitch />
        <ScrollIntoViewButton />
      </div>
    </header>
  );
}
