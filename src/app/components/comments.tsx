import { Comment } from '../utils/db/models/comments';
import Image from 'next/image';
import formatDate from '../utils/formatDate';
import { getServerSession } from 'next-auth';
import DeleteComment from './buttons/deleteComment';
import getComments from '../utils/getComments';

export default async function Comments({ postID }: { postID: string }) {
  const comments = await getComments(postID);

  // Convert the ObjectId objects to strings
  const simpleComments = comments.map((comment: Comment) => {
    return {
      _id: comment._id.toString(),
      comment: comment.comment,
      timestamp: comment.timestamp,
      user: {
        name: comment.user.name,
        email: comment.user.email,
        picture: comment.user.picture,
      },
    };
  });

  return (
    <ol>
      {simpleComments.map((comment: any, index: number) => (
        <li
          key={comment._id}
          className={`${
            index == 0 ? 'mt-6' : 'mt-3'
          } bg-gray-100 dark:bg-neutral-800 dark:text-gray-100 dark:border-gray-950 border rounded-md px-2 py-1.5`}
        >
          <Comment comment={comment} />
        </li>
      ))}
    </ol>
  );
}

async function Comment({ comment }: { comment: Comment }) {
  const session = await getServerSession();

  return (
    <>
      <div className='flex items-center mb-3'>
        <Image
          src={comment.user.picture}
          height={30}
          width={30}
          alt={comment.user.name}
          className='rounded-full mr-3'
        />

        <div className='flex items-start w-full flex-col'>
          <div className='flex items-center justify-between w-full'>
            <span className='text-sm'>{comment.user.name}</span>
            {session?.user?.email == comment.user.email && (
              <DeleteComment comment={comment} />
            )}
          </div>
          <span className='text-xs font-semibold'>
            {formatDate(comment.timestamp)}
          </span>
        </div>
      </div>
      <p className='text-sm'>{comment.comment}</p>
    </>
  );
}
