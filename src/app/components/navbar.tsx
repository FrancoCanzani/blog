'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Header from './header';

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // hide sidebar on path change
    setShowSidebar(false);
  }, [pathname]);

  return (
    <nav>
      <button
        className={`fixed right-4 top-[1.5rem] rounded-sm z-20 px-2 py-1 sm:hidden`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Menu width={20} />
      </button>
      <div
        className={`transform ${
          showSidebar ? 'w-full translate-x-0' : '-translate-x-full'
        } fixed z-10 flex h-full bg-[#f6f3f1] dark:bg-[#282c35] dark:text-[#f6f3f1] flex-col justify-between transition-all sm:hidden sm:translate-x-0`}
      >
        <Header />
      </div>
    </nav>
  );
}
