import Header from './components/header';
import { getSortedPostsData } from './utils/posts';
import { BlogPost } from './utils/types';
import getDistanceBetweenDates from './utils/getDistanceBetweenDates';
import Link from 'next/link';

export default function Home() {
  const allPosts: BlogPost[] = getSortedPostsData();

  return (
    <main className='flex relative min-h-screen flex-col items-center'>
      <Header />
      <section className='w-full'>
        <ol className='w-full lg:gap-4 grid grid-cols-1 lg:grid-cols-2'>
          {allPosts.map((post: BlogPost) => (
            <li
              key={post.id}
              className='flex mb-4 hover:scale-105 rounded-sm border-black px-3 border-2 py-2 border-b-4 border-r-4 items-center flex-col w-full'
            >
              <div className='flex items-center w-full justify-between'>
                <Link href={`/posts/${post.id}`}>{post.title}</Link>
                <strong className='text-xs underline'>
                  {getDistanceBetweenDates(post.date) <= 1
                    ? 'New'
                    : `${getDistanceBetweenDates(post.date)} Days`}
                </strong>
              </div>
              <div className='flex text-xs items-center gap-2 w-full'>
                {post.keywords?.map((keyword: string) => (
                  <span
                    key={keyword}
                    className='rounded-sm bg-amber-200 px-1 py-0.5'
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
