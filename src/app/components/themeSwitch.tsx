'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Laptop } from 'lucide-react';
import { Moon } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  let icon;
  switch (theme) {
    case 'system':
      icon = <Laptop size={18} />;
      break;
    case 'dark':
      icon = <Moon size={18} />;
      break;
    default:
      icon = <Lightbulb size={18} />;
  }

  return (
    <button
      onClick={() => {
        if (theme === 'system') {
          setTheme('dark');
        } else if (theme === 'dark') {
          setTheme('light');
        } else {
          setTheme('system');
        }
      }}
      className='hover:shadow-md hover:shadow-neutral-400 py-1 border-2 active:translate-y-0.5 border-black px-2 border-b-4 border-r-4  capitalize flex items-center gap-2 font-medium'
    >
      {icon}
      {theme}
    </button>
  );
}
