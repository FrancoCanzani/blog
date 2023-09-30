'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';

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
        className={`fixed right-4 top-[1.85rem] bg-white rounded-sm z-20 px-2 py-1 sm:hidden`}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <Menu width={20} />
      </button>
      <div
        className={`transform ${
          showSidebar ? 'w-full translate-x-0' : '-translate-x-full'
        } fixed z-10 flex h-full bg-[#f6f3f1] flex-col justify-between transition-all sm:hidden py-8 px-4 sm:translate-x-0`}
      >
        Hola
      </div>
    </nav>
  );
}
