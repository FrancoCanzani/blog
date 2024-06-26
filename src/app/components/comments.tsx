import { Comment } from '../utils/db/models/comments';
import formatDate from '../utils/formatDate';
import DeleteComment from './buttons/deleteComment';
import getComments from '../utils/getComments';
import { auth } from 'auth';

export default async function Comments({ postID }: { postID: string }) {
  const comments = await getComments(postID);

  return (
    <ol>
      {comments.map((comment: any, index: number) => (
        <li
          key={comment._id}
          className={`${
            index == 0 ? 'mt-6' : 'mt-3'
          } bg-stone-100 dark:bg-stone-800 dark:text-stone-100 rounded-sm px-2 py-1.5`}
        >
          <Comment comment={comment} />
        </li>
      ))}
    </ol>
  );
}

async function Comment({ comment }: { comment: Comment }) {
  const session = await auth();

  return (
    <div className='rounded-sm'>
      <div className='flex items-center mb-3'>
        <div className='flex items-center w-full justify-between'>
          <p className='text-sm'>
            By <span className='font-medium'>{comment.user.name}</span>
          </p>
          <div className='flex items-end justify-center space-x-3'>
            <span className='text-xs font-medium'>
              {formatDate(comment.timestamp)}
            </span>
            {session && session?.user?.email == comment.user.email && (
              <DeleteComment comment={comment} />
            )}
          </div>
        </div>
      </div>
      <p className='text-sm text-pretty'>{comment.comment}</p>
    </div>
  );
}
