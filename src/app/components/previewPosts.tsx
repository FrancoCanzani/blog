import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import formatDate from '../utils/formatDate';
import { MoveUpRight } from 'lucide-react';

export function PostCard({ post }: { post: Post }) {
  return (
    <div className='mb-4 bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:border-gray-950 border rounded-md px-2 py-1.5'>
      <div className='flex items-center justify-between'>
        <h2 className='flex text-lg font-bold items-center justify-between hover:underline'>
          <Link href={`/posts/${post._raw.flattenedPath}`}>{post.title}</Link>
        </h2>
        <MoveUpRight size={18} />
      </div>
      <time className='text-xs text-gray-600 dark:text-gray-300 font-light'>
        {formatDate(post.date)}
      </time>
    </div>
  );
}
export function PreviewPosts() {
  // Sort date asc
  const posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  const slicedPosts = posts.slice(0, 2);

  return (
    <section className='w-full mb-6'>
      <h2 className='font-bold mb-4'>Latest posts</h2>
      {slicedPosts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
      <div className='w-full gap-1 flex items-center justify-end'>
        <Link href={'/posts/allPosts'} className='text-xs hover:underline'>
          All posts
        </Link>
        <MoveUpRight size={13} />
      </div>
    </section>
  );
}
