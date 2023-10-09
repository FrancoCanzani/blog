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
      className='mt-6 flex flex-col bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:border-gray-950 border rounded-md px-2 py-1.5'
    >
      <textarea
        name='comment'
        id='comment'
        placeholder='Comment'
        rows={2}
        className='bg-transparent dark:border-black dark:text-gray-100 outline-none border-b placeholder:text-gray-500 dark:placeholder:text-gray-300 py-2.5 px-2 text-sm w-full transition-all duration-300'
      />
      <div className='w-full py-2.5 px-2 flex items-center justify-between'>
        <p className='text-xs dark:text-gray-300 italic'>
          Commenting as{' '}
          <span className='font-semibold'>{session?.user?.name}</span>
        </p>
        <button
          type='submit'
          disabled={pending}
          aria-disabled={pending}
          className='dark:bg-gray-100 dark:text-black bg-neutral-800 text-gray-100 border-gray-950 border text-sm rounded-md px-2 py-1'
        >
          Submit
        </button>
      </div>
    </form>
  );
}
