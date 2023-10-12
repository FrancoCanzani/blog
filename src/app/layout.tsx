import './globals.css';
import ToggleProvider from './components/toggleProvider';
import type { Metadata } from 'next';
import { Lora } from 'next/font/google';
import Footer from './components/footer';
import Header from './components/header';
import SessionProvider from './components/sessionProvider';
import { getServerSession } from 'next-auth';
import Subscribe from './components/subscribe';

const lora = Lora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Notes',
    default: 'Notes',
  },
  description: 'Another Programming Blog',
  keywords: ['Next.js', 'React', 'JavaScript', 'Programming'],
  metadataBase: new URL('https://franconotes.vercel.app/'),
  openGraph: {
    title: 'Notes',
    url: 'https://franconotes.vercel.app',
    siteName: 'Notes',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Lee Robinson',
    card: 'summary_large_image',
  },
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
        className={`${lora.className} dark:bg-[#0c0a09] dark:text-[#f6f3f1] antialiased flex flex-col items-center justify-center max-w-3xl m-auto`}
      >
        <SessionProvider session={session}>
          <ToggleProvider>
            <main className='p-6 pt-3 md:pt-6 min-h-screen'>
              <Header />
              {children}
              <Subscribe />
            </main>
            <Footer />
          </ToggleProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
