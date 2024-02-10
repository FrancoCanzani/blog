import Link from 'next/link';
import { Post } from 'contentlayer/generated';
import formatDate from '../utils/formatDate';
import Image from 'next/image';
import calculateReadingTime from '../utils/calculateReadingTime';

export default function LatestPostCard({ post }: { post: Post }) {
  const readingTime = calculateReadingTime(post.body.raw);
  const postDate = new Date(post.date);
  const formattedDate = postDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className='rounded-sm p-2.5 lg:h-80 h-[26rem] border bg-gray-100 flex w-full mb-3 dark:bg-neutral-800 dark:text-gray-100 dark:border-gray-950'>
      <div className='flex w-full lg:w-1/2 lg:pr-5'>
        <div className='flex flex-col space-y-1'>
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
          <p className='text-sm text-pretty text-ellipsis my-2 overflow-hidden line-clamp-[9] h-0 lg:h-auto'>
            {post.body.raw}
          </p>
          <div className='relative lg:hidden block flex-grow max-h-80 my-2 w-full'>
            <Image
              alt={post.title}
              src={`/posts-images/${post.image}`}
              layout='fill'
              objectFit='cover'
              priority
              className='rounded-sm'
            />
          </div>
          <div className='flex items-end justify-between text-xs dark:text-gray-100'>
            <span className='text-xs dark:text-gray-100'>{formattedDate}</span>
            <div className='flex items-center'>
              <p className='text-xs mr-1 dark:text-gray-100'>
                {readingTime <= 1
                  ? '< 1 minute read'
                  : `${calculateReadingTime(post.body.raw)} minutes read`}{' '}
              </p>
              •
              <time className='text-xs dark:text-gray-100 ml-1'>
                {formatDate(post.date)}
              </time>
            </div>
          </div>
        </div>
      </div>
      <div className='relative hidden lg:block flex-grow max-h-80 my-2 w-1/2'>
        <Image
          alt={post.title}
          src={`/posts-images/${post.image}`}
          layout='fill'
          objectFit='cover'
          priority
          className='rounded-sm'
        />
      </div>
    </div>
  );
}
