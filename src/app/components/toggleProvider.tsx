'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export default function ToggleProvider({ children }: { children: ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
