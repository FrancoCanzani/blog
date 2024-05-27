import './globals.css';
import ToggleProvider from './components/toggleProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header';
import SessionProvider from './components/sessionProvider';
import { getServerSession } from 'next-auth';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Things I Think About',
    default: 'TITA',
  },
  description: 'Another Programming Blog',
  keywords: ['Next.js', 'React', 'JavaScript', 'Programming', 'Supply Chain'],
  metadataBase: new URL('https://franconotes.vercel.app/'),
  openGraph: {
    title: 'Things I Think About',
    url: 'https://franconotes.vercel.app',
    siteName: 'Things I Think About',
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
    title: 'Things I Think About',
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
        className={`${inter.className} dark:bg-stone-900 dark:text-stone-100 bg-stone-200 text-stone-900 antialiased min-h-screen m-auto`}
      >
        <SessionProvider session={session}>
          <ToggleProvider>
            <main className='p-4 max-w-4xl mx-auto'>
              <Header />
              {children}
              <Toaster />
            </main>
          </ToggleProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
