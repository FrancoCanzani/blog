import { getSortedPostsData } from '../utils/posts';
import { BlogPost } from '../utils/types';
import getDistanceBetweenDates from '../utils/getDistanceBetweenDates';
import Link from 'next/link';

export default function PreviewPosts() {
  const allPosts: BlogPost[] = getSortedPostsData();

  return (
    <section className='w-full'>
      <h2 className='font-bold mb-4'>Posts</h2>
      <ol className='w-full lg:gap-4 grid grid-cols-1 lg:grid-cols-2'>
        {allPosts.map((post: BlogPost, index) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className={`mb-3 hover:shadow-md hover:shadow-neutral-400 flex hover:scale-[1.007] rounded-sm border-black px-3 border-2 py-2 border-b-4 border-r-4 items-center flex-col w-full`}
          >
            <div className='flex items-center w-full justify-between'>
              <h2>{post.title}</h2>
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
          </Link>
        ))}
      </ol>
      <div className='flex items-center justify-end mt-3 w-full'>
        <Link
          href={'posts/allPosts'}
          className='opacity-80 hover:opacity-100 hover:underline text-xs w-full text-right'
        >
          → All posts
        </Link>
      </div>
    </section>
  );
}
