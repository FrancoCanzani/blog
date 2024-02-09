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
    <aside className='sm:pr-10 w-full sm:max-w-sm space-y-6'>
      <div className='sticky top-12 flex flex-col'>
        <section className='w-full mb-6'>
          <h2 className='font-bold text-xl mb-3'>My Notes</h2>
          <p className='text-pretty text-sm'>
            Things I Think About puts together my reflections on the latest news
            and trends in tech. From coding tips to industry insights, join me
            on a journey through the ever-evolving landscape of programming and
            innovation.
          </p>
        </section>
        <section className='w-full mb-6'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='font-bold'>Latest posts</h2>
            <Link href={'/posts/allPosts'} className='text-xs hover:underline'>
              All posts
            </Link>
          </div>
          {slicedPosts.map((post, idx) => (
            <LatestPostCard key={idx} post={post} />
          ))}
        </section>
        <section className='w-full mb-6'>
          <h3 className='font-bold mb-3'>Topics covered</h3>
          <ul>
            {topics.map((topic) => (
              <li key={topic}>
                <Link
                  href={`/topics/${topic.replaceAll(' ', '_')}`}
                  className='underline text-xs capitalize'
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
      </div>
    </aside>
  );
}

function LatestPostCard({ post }: { post: Post }) {
  return (
    <div className='mb-3 text-xs space-x-2 bg-gray-50 dark:bg-neutral-800 dark:text-gray-100 dark:border-gray-950 border border-black rounded-sm px-2 py-1.5'>
      <Link
        className='hover:underline'
        href={`/posts/${post._raw.flattenedPath}`}
      >
        {post.title}
      </Link>
      <time className='text-xs text-gray-700 dark:text-gray-200 font-light'>
        {formatDate(post.date)}
      </time>
    </div>
  );
}
