'use client';

import { useRef } from 'react';
import { useSession } from 'next-auth/react';
import addComment from '@/app/utils/actions/addComment';
import { useRouter } from 'next/navigation';
import SubmitButton from '../buttons/submitButton';

export default function CommentForm({ postID }: { postID: string }) {
  const { data: session } = useSession();
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  return (
    <form
      ref={formRef}
      action={async (FormData) => {
        if (session?.user?.name && FormData.get('comment')) {
          await addComment(FormData, postID, session?.user);
          router.refresh();
          formRef?.current?.reset();
        }
      }}
      className='mt-6 flex flex-col bg-stone-100 dark:bg-neutral-800 dark:text-stone-100 rounded-sm px-2 py-1.5'
    >
      <textarea
        name='comment'
        id='comment'
        placeholder='Comment'
        required
        rows={2}
        className='bg-transparent dark:border-stone-800 dark:text-stone-100 outline-none border-b placeholder:text-stone-500 dark:placeholder:text-stone-300 py-2.5 px-2 text-sm w-full transition-all duration-300'
      />
      <div className='w-full py-2.5 px-2 flex items-center justify-between'>
        <p className='text-xs w-3/4 dark:text-stone-300 italic'>
          Commenting as{' '}
          <span className='font-semibold'>{session?.user?.name}</span>
        </p>
        <SubmitButton text='Comment' className='w-fit py-1 text-sm' />
      </div>
    </form>
  );
}
