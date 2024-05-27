import { allPosts, Post } from 'contentlayer/generated';
import Link from 'next/link';
import formatDate from '../utils/formatDate';
import SubscriptionForm from './form/subscriptionForm';

export default function Sidebar() {
  const topics: string[] = [];

  // Sort date asc
  const posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  const slicedPosts = posts.slice(0, 4);

  allPosts.forEach((post) => {
    if (post && post.keywords) {
      post.keywords.forEach((keyword) => {
        // trim() to remove leading and trailing whitespace, including '\r'
        const cleanedKeyword = keyword.trim();
        if (cleanedKeyword && !topics.includes(cleanedKeyword)) {
          topics.push(cleanedKeyword.toLowerCase());
        }
      });
    }
  });

  return (
    <aside className='md:pr-10 mb-6 md:mb-0 w-full md:max-w-sm sticky lg:h-screen space-y-6'>
      <section className='w-full'>
        <h2 className='font-bold text-xl mb-3'>My Notes</h2>
        <p className='text-pretty text-sm'>
          <span className='italic'>Things I Think About</span> puts together my
          reflections on the latest news and trends in tech. From coding tips to
          industry insights, join me on a journey through the ever-evolving
          landscape of programming and innovation.
        </p>
      </section>
      <section className='w-full'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='font-bold'>Latest posts</h2>
        </div>
        {slicedPosts.map((post, idx) => (
          <LatestPostCard key={idx} post={post} />
        ))}
      </section>
      <section className='w-full'>
        <h3 className='font-bold mb-3'>Topics covered</h3>
        <ul>
          {topics.map((topic) => (
            <li key={topic}>
              <Link
                href={`/posts/search?topic=${encodeURIComponent(topic)}`}
                className='underline text-xs capitalize visited:opacity-85'
              >
                #{topic}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3 className='font-bold mb-3'>Subscribe</h3>
        <SubscriptionForm />
      </section>
    </aside>
  );
}

function LatestPostCard({ post }: { post: Post }) {
  return (
    <div className='mb-3 text-sm space-x-1 bg-stone-100 dark:bg-neutral-800 dark:text-stone-100 dark:border-stone-950 border rounded-sm px-2 py-1.5'>
      <Link
        className='hover:underline font-medium'
        href={`/posts/${post._raw.flattenedPath}`}
      >
        {post.title} -
      </Link>
      <time className='text-xs text-stone-600 dark:text-stone-200'>
        {formatDate(post.date)}
      </time>
    </div>
  );
}
