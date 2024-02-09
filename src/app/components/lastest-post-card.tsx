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
    <div className='dark:bg-neutral-800 bg-gray-50 dark:text-gray-100 dark:border-gray-950 border border-black rounded-sm p-2 h-full w-full mb-2 flex justify-between'>
      <div className='h-full w-2/5 flex items-start flex-col justify-between'>
        <div className='flex flex-col items-start justify-between space-y-1'>
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
            className='text-lg font-semibold hover:underline'
            href={`/posts/${post._raw.flattenedPath}`}
          >
            {post.title}
          </Link>
          <p className='text-sm text-pretty'>{post.description}</p>
        </div>
        <div className='flex justify-between w-full'>
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
          <p className='text-xs'>{formattedDate}</p>
        </div>
      </div>
      <div className='relative h-60 my-2 w-1/2'>
        <Image
          alt={post.title}
          src={`/posts-images/${post.image}`}
          sizes='(max-width: 768px) 213px, 33vw'
          priority
          fill
          className='object-cover rounded-sm object-[-16px] sm:object-center'
        />
      </div>
    </div>
  );
}
