import { allPosts, Post } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import calculateReadingTime from '@/app/utils/calculateReadingTime';
import CommentSection from '@/app/components/commentSection';
import Balancer from 'react-wrap-balancer';

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
    <main>
      <h1 className='font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-tighter max-w-[650px]'>
        <Balancer>{post.title}</Balancer>
      </h1>
      <div className='flex mt-2 mb-8 text-sm max-w-[650px] gap-2 items-center justify-between'>
        <div className='flex gap-2 items-center justify-center text-xs text-gray-700 dark:text-gray-300 font-light'>
          <p>{format(parseISO(post.date), 'LLLL d, yyyy')}</p>
          {'•'}
          <span>{`${
            calculateReadingTime(post.body.raw) <= 1
              ? '< 1 minute read'
              : `${calculateReadingTime(post.body.raw)} minutes read`
          }`}</span>
        </div>
      </div>
      <article className='prose dark:prose-invert'>
        <MDXContent />
      </article>
      <CommentSection postID={post._raw.flattenedPath} />
    </main>
  );
}
