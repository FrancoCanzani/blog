import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import formatDate from '../utils/formatDate';
import Image from 'next/image';
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
    <div className='dark:bg-neutral-800 bg-gray-100 dark:text-gray-100 dark:border-gray-950 border rounded-sm p-2.5 h-[26rem] flex flex-col'>
      <div className='flex items-start flex-col justify-between space-y-1'>
        <ul className='flex items-center justify-start text-xs capitalize space-x-1'>
          [
          {post.keywords?.map((keyword, index) => (
            <li key={keyword}>
              {keyword}
              {index != post.keywords.length - 1 && ','}
            </li>
          ))}
          ]
        </ul>
        <Link
          className='mt-2 text-xl font-bold leading-tight hover:underline visited:opacity-85 text-gray-900 dark:text-gray-100'
          href={`/posts/${post._raw.flattenedPath}`}
        >
          {post.title}
        </Link>
        <p className='text-sm text-pretty'>{post.description}</p>
      </div>
      <div className='relative flex-grow max-h-80 my-2 w-full'>
        <Image
          alt={post.title}
          src={`/posts-images/${post.image}`}
          layout='fill'
          objectFit='cover'
          priority
          className='rounded-sm'
        />
      </div>
      <div className='flex items-center justify-between'>
        <p className='text-xs'>{formattedDate}</p>
        <div className='flex items-center justify-start'>
          <p className='text-xs mr-1'>
            {readingTime <= 1
              ? '< 1 minute read'
              : `${calculateReadingTime(post.body.raw)} minutes read`}{' '}
          </p>
          •
          <time className='text-xs dark:text-gray-300 ml-1'>
            {formatDate(post.date)}
          </time>
        </div>
      </div>
    </div>
  );
}
