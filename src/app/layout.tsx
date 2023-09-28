import './globals.css';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog',
  description: '👑',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${lora.className} py-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44`}
      >
        {children}
      </body>
    </html>
  );
}
