import { getAllPostIds, getPostData } from '@/app/utils/posts';
import getDistanceBetweenDates from '@/app/utils/getDistanceBetweenDates';
import calculateReadingTime from '@/app/utils/calculateReadingTime';
import { BlogPost } from '@/app/utils/types';
import Link from 'next/link';
import NextPostsAside from '@/app/components/nextPostsAside';

export async function generateStaticParams() {
  const postsIDs = getAllPostIds();

  return postsIDs.map((params) => ({
    slug: params,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const post: BlogPost = await getPostData(params.id);

  return (
    <div className='grid px-4 sm:px-8 md:px-16 grid-cols-1 lg:grid-cols-4 place-content-center justify-center'>
      <article className='col-span-3 leading-relaxed antialiased w-full items-center flex flex-col'>
        <div className='flex max-w-[65ch] mb-4 flex-col w-full items-center'>
          <h1 className='font-bold text-start w-full text-4xl mb-2'>
            {post.title}
          </h1>
          <div className='flex text-xs items-center gap-2 w-full'>
            {post.keywords?.map((keyword: string) => (
              <span
                key={keyword}
                className='rounded-sm font-medium bg-amber-200 px-1 py-0.5'
              >
                {keyword}
              </span>
            ))}
            <strong className='underline'>
              {getDistanceBetweenDates(post.date) <= 1
                ? 'New'
                : `${getDistanceBetweenDates(post.date)} Days ago`}
            </strong>
            {' / '}
            <strong className='underline'>
              {calculateReadingTime(post.contentHtml) <= 1
                ? '< 1 Minute read'
                : `${calculateReadingTime(post.contentHtml)} } minutes read`}
            </strong>
          </div>
        </div>
        <section
          className='max-w-[65ch] blogPost'
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
        <div className='max-w-[65ch] w-full flex items'>
          <Link
            href={'/'}
            className='flex opacity-80 hover:opacity-100 hover:underline mt-8 w-full text-xs'
          >
            ← Back To Home
          </Link>
        </div>
      </article>
      <NextPostsAside post={post} />
    </div>
  );
}
