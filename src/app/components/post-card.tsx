import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import calculateReadingTime from '../utils/calculateReadingTime';

export default function PostCard({ post }: { post: Post }) {
  const readingTime = calculateReadingTime(post.body.raw);
  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='dark:text-stone-100 p-2 border border-stone-300 rounded-sm min-h-44 justify-between flex flex-col'>
      <div className='flex items-start flex-col justify-between'>
        <Link
          className='text-xl mb-1 font-semibold leading-tight hover:underline visited:opacity-85 text-stone-900 dark:text-stone-100'
          href={`/posts/${post._raw.flattenedPath}`}
        >
          {post.title}
        </Link>
        <ul className='flex items-center justify-start text-xs capitalize space-x-1 text-stone-700 dark:text-stone-200'>
          {post.keywords?.map((keyword, index) => (
            <li key={keyword}>
              {keyword}
              {index != post.keywords.length - 1 && ','}
            </li>
          ))}
        </ul>
        <p className='text-sm text-pretty my-2'>{post.description}</p>
      </div>
      <div className='flex items-center justify-between text-stone-700 dark:text-stone-200 text-xs'>
        <p>{formattedDate}</p>
        <div className='flex items-center justify-start'>
          <p>
            {readingTime <= 1
              ? '< 1 minute read'
              : `${calculateReadingTime(post.body.raw)} minutes read`}{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
