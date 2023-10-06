import './globals.css';
import ToggleProvider from './components/toggleProvider';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import Footer from './components/footer';
import Header from './components/header';
import SessionProvider from './components/sessionProvider';
import { getServerSession } from 'next-auth';

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog',
  description: '👑',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang='en'>
      <body
        className={`${lora.className} bg-[#fff1e5] dark:bg-[#0c0a09] dark:text-[#f6f3f1] antialiased max-w-3xl m-auto`}
      >
        <SessionProvider session={session}>
          <ToggleProvider>
            <main className='p-6 pt-3 md:pt-6 min-h-screen'>
              <Header />
              {children}
            </main>
            <Footer />
          </ToggleProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
