import './globals.css';
import ToggleProvider from './components/toggleProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header';
import SessionProvider from './components/sessionProvider';
import { Toaster } from 'sonner';
import { auth } from 'auth';
import { ViewTransitions } from 'next-view-transitions';
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | Things I Think About',
    default: 'Things I Think About',
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
  const session = await auth();

  return (
    <ViewTransitions>
      <html lang='en'>
        <body
          className={`${inter.className} dark:bg-stone-900 m-auto max-w-3xl dark:text-stone-100 bg-stone-200 text-stone-900 antialiased`}
        >
          <SessionProvider session={session}>
            <ToggleProvider>
              <main className='mx-2 md:mx-4 flex flex-col justify-between items-start p-3 md:p-6 min-h-[calc(100vh-65px)]'>
                <Header />
                {children}
              </main>
              <Footer />
              <Toaster />
            </ToggleProvider>
          </SessionProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
