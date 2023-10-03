import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import formatDate from '../utils/formatDate';

export function PostCard({ post }: { post: Post }) {
  return (
    <div className='mb-4 bg-orange-200 dark:bg-orange-900 p-1 px-2 border border-orange-400 rounded-sm'>
      <h2 className='text-base hover:underline'>
        <Link
          href={post.url}
          className='text-blue-700 hover:text-blue-900'
          legacyBehavior
        >
          {post.title}
        </Link>
      </h2>
      <span className='text-xs font-light'>{formatDate(post.date)}</span>
    </div>
  );
}
export function PreviewPosts() {
  // Sort date asc
  const posts = allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return (
    <section className='w-full'>
      <h2 className='font-bold mb-4'>Latest posts</h2>
      {posts.map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </section>
  );
}
