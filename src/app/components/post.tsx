'use client';

import { format, parseISO } from 'date-fns';
import calculateReadingTime from '@/app/utils/calculateReadingTime';
import CommentSection from '@/app/components/commentSection';
import type { Post } from 'contentlayer/generated';
import { useEffect } from 'react';
import { getMDXComponent } from 'next-contentlayer/hooks';
import incrementViewCount from '../utils/actions/incrementViewCount';

export default function BlogPost({ post }: { post: Post }) {
  const MDXContent = getMDXComponent(post.body.code);

  useEffect(() => {
    async function fetchViews() {
      if (post?._id) {
        await incrementViewCount(post?._id);
      }
    }
    fetchViews();
  }, [post?._id]);

  return (
    <main className='flex flex-col mt-6 items-start justify-start'>
      <div className='flex-1 w-full lg:max-w-3xl'>
        <h1 className='font-bold text-xl sm:text-2xl text-balance tracking-tighter'>
          {post.title}
        </h1>
        <div className='flex mt-2 mb-8 text-sm gap-2 items-center justify-between'>
          <div className='flex gap-2 text-stone-700 dark:text-stone-200 items-center justify-center text-xs'>
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
      </div>
    </main>
  );
}
