import { allPosts } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import calculateReadingTime from '@/app/utils/calculateReadingTime';

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post: any) => ({ slug: post._raw.flattenedPath }));
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  let MDXContent;

  if (!post) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(post.body.code);
  }

  return (
    <section className='justify-center flex flex-col w-full items-center'>
      <div className=''>
        <h1 className='text-xl mb-2 lg:text-2xl xl:text-3xl font-semibold text-start max-w-[65ch]'>
          {post.title}
        </h1>
        <div className='flex mb-6 text-sm max-w-[65ch] gap-2 items-center justify-start w-full'>
          <p>{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
          {'•'}
          <span>{`${
            calculateReadingTime(post.body.raw) <= 1
              ? '< 1 minute read'
              : `${calculateReadingTime(post.body.raw)} minutes read`
          }`}</span>
        </div>
        <article className='prose dark:prose-invert'>
          <MDXContent />
        </article>
      </div>
    </section>
  );
}
