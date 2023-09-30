import { getAllPostIds, getPostData } from '@/app/utils/posts';
import getDistanceBetweenDates from '@/app/utils/getDistanceBetweenDates';
import calculateReadingTime from '@/app/utils/calculateReadingTime';
import { BlogPost } from '@/app/utils/types';

export async function generateStaticParams() {
  const postsIDs = getAllPostIds();

  return postsIDs.map((params) => ({
    slug: params,
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const post: BlogPost = await getPostData(params.id);

  return (
    <article className='leading-relaxed antialiased w-full items-center flex flex-col justify-center'>
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
    </article>
  );
}
