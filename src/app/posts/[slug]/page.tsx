import { allPosts, Post } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { format, parseISO } from 'date-fns';
import calculateReadingTime from '@/app/utils/calculateReadingTime';
import CommentSection from '@/app/components/commentSection';
import Sidebar from '@/app/components/sidebar';

import { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const posts = allPosts;

  return posts.map((post: any) => ({ slug: post._raw.flattenedPath }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  const ogImage = `https://franconotes.vercel.app/api/og?title=${post?.title}`;

  return {
    title: post?.title,
    description: post?.description,
    keywords: post?.keywords,
    openGraph: {
      title: post?.title,
      description: post?.description,
      type: 'article',
      url: `https://franconotes.vercel.app/posts/${params.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post?.title,
      images: [ogImage],
    },
  };
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
    <main className='flex flex-col items-start justify-start md:flex-row'>
      <div className='hidden lg:block'>
        <Sidebar />
      </div>
      <div className='flex-1 w-full lg:max-w-3xl'>
        <h1 className='font-bold text-xl sm:text-2xl text-balance tracking-tighter'>
          {post.title}
        </h1>
        <div className='flex mt-2 mb-8 text-sm gap-2 items-center justify-between'>
          <div className='flex gap-2 items-center justify-center text-xs dark:text-gray-300'>
            <time>{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
            {'•'}
            <span>{`${
              calculateReadingTime(post.body.raw) <= 1
                ? '< 1 minute read'
                : `${calculateReadingTime(post.body.raw)} minutes read`
            }`}</span>
          </div>
        </div>
        <article className='prose-sm dark:prose-invert'>
          <MDXContent />
        </article>
        <CommentSection postID={post._raw.flattenedPath} />
      </div>
    </main>
  );
}
