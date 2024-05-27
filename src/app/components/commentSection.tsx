import SignIn from './buttons/signIn';
import SignOut from './buttons/signOut';
import CommentForm from './forms/commentForm';
import Comments from './comments';
import { Suspense } from 'react';
import { auth } from 'auth';

export default async function CommentSection({ postID }: { postID: string }) {
  const session = await auth();

  return (
    <section className='mt-8'>
      <div className='pt-4 pb-2 dark:border-stone-200 border-b border-stone-700 flex items-center justify-between'>
        <h2 className='font-semibold'>Comments</h2>
        {session ? <SignOut /> : <SignIn />}
      </div>
      {session && <CommentForm postID={postID} />}
      <Suspense
        fallback={
          <div className='bg-stone-100 mt-6 dark:bg-stone-800 dark:text-stone-100 text-center w-full rounded-sm px-2 py-1.5'>
            Loading comments...
          </div>
        }
      >
        <Comments postID={postID} />
      </Suspense>
    </section>
  );
}
