import './globals.css';
import ToggleProvider from './components/toggleProvider';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import Footer from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';

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
        className={`${lora.className} bg-[#f6f3f1] dark:bg-[#282c35] dark:text-[#f6f3f1]`}
      >
        <ToggleProvider>
          <Navbar />
          <Header />
          {children}
          <Footer />
        </ToggleProvider>
      </body>
    </html>
  );
}
