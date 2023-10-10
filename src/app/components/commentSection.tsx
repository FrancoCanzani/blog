import SignIn from './signIn';
import CommentForm from './form/commentForm';
import { getServerSession } from 'next-auth';
import Comments from './comments';
import { Suspense } from 'react';

export default async function CommentSection({ postID }: { postID: string }) {
  const session = await getServerSession();

  return (
    <section className='mt-8'>
      <div className='pt-4 pb-2 dark:border-white border-b border-black flex items-center justify-between'>
        <h2 className='font-bold text-xl'>Comments</h2>
        <SignIn />
      </div>
      {session && <CommentForm postID={postID} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Comments postID={postID} />
      </Suspense>
    </section>
  );
}
