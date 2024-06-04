import { Link } from 'next-view-transitions';
import { Post } from 'contentlayer/generated';
import { getViewCount } from '../utils/getViewCount';
import { Eye } from 'lucide-react';

export default async function PostCard({ post }: { post: Post }) {
  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const views = await getViewCount(post._id);

  return (
    <div className='dark:text-stone-100 border-y py-3 border-stone-300 dark:border-stone-600 text-sm gap-x-3 flex items-center justify-between rounded-sm w-full'>
      <div className='flex items-center justify-start gap-x-3 flex-1 '>
        <span className='hidden sm:block'>{formattedDate}</span>
        <span className='sm:hidden'>{postDate.getFullYear()}</span>
        <Link
          className='font-semibold truncate hover:underline visited:opacity-85 text-stone-900 dark:text-stone-100'
          href={`/posts/${post._raw.flattenedPath}`}
        >
          {post.title}
        </Link>
      </div>
      <span className='inline-flex gap-x-1 items-center'>
        <Eye size={14} className='opacity-75' aria-label='views' /> {views}
      </span>
    </div>
  );
}
