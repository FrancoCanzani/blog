'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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

  return (
    <label className='switch-container'>
      <input
        type='checkbox'
        onClick={() => {
          if (theme === 'light') {
            setTheme('dark');
          } else {
            setTheme('light');
          }
        }}
      />
      <span className='slider'></span>
    </label>
  );
}
