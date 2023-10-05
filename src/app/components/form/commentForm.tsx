'use client';

import { useRef } from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { useSession } from 'next-auth/react';
import addComment from '@/app/utils/actions/addComment';
import { useRouter } from 'next/navigation';

export default function CommentForm({ postID }: { postID: string }) {
  const { pending } = useFormStatus();
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
      className='bg-neutral-50 dark:bg-neutral-200 border border-black mt-6 rounded-sm flex flex-col px-2 items-center w-full'
    >
      <textarea
        name='comment'
        id='comment'
        placeholder='Comment'
        rows={2}
        className='bg-transparent dark:border-black outline-none border-b placeholder:text-gray-500 py-2.5 px-2 dark:text-black text-sm w-full transition-all duration-300'
      />
      <div className='w-full py-2.5 px-2 flex items-center justify-between'>
        <p className='text-xs dark:text-black italic'>
          Commenting as{' '}
          <span className='font-semibold'>{session?.user?.name}</span>
        </p>
        <button
          type='submit'
          disabled={pending}
          aria-disabled={pending}
          className='px-3 py-1.5 font-semibold border border-neutral-200 dark:border-neutral-700 bg-neutral-800 rounded-sm p-1 text-sm inline-flex items-center leading-4 text-neutral-100'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
