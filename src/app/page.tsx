import { PreviewPosts } from './components/previewPosts';
import SubscriptionForm from './components/forms/subscriptionForm';

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className='flex flex-col items-start justify-center space-y-8'>
      <section className='w-full'>
        <p className='text-pretty'>
          This blog shares my reflections on the latest news and trends in tech,
          supply chain, and other topics I find worth writing about. These are
          my subjective views based on personal experiences. I hope you find my
          insights thought-provoking and engaging. Please share your thoughts
          and join the conversation in the comments section.
        </p>
      </section>
      <section>
        <h2 className='font-medium mb-2 underline text-sm text-stone-700 dark:text-stone-200'>
          Subscribe to receive new post alerts
        </h2>
        <SubscriptionForm />
      </section>
      <PreviewPosts />
      <footer className='flex items-center justify-between w-full text-xs text-stone-700 dark:text-stone-200 max-w-80 m-auto'>
        <span className=''>© {year}. All Rights Reserved.</span>
        <a
          href='https://github.com/FrancoCanzani/blog'
          target='_blank'
          className='hover:underline'
        >
          Source Code
        </a>
      </footer>
    </main>
  );
}
