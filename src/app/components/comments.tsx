import { Comment } from '../utils/db/models/comments';
import Image from 'next/image';
import formatDate from '../utils/formatDate';
import { getServerSession } from 'next-auth';
import DeleteComment from './button/deleteComment';

export default async function Comments({ postID }: { postID: string }) {
  const response = await fetch(
    `http://localhost:3000/api/comments?id=${postID}`
  );

  const data = await response.json();
  const comments = data.comments;

  const session = await getServerSession();

  return (
    <ol>
      {comments.map((comment: Comment, index: number) => (
        <li
          key={comment._id}
          className={`${
            index == 0 ? 'mt-6' : 'mt-3'
          } border rounded-sm px-4 border-black dark:border-white py-2.5`}
        >
          <div className='flex items-center mb-3'>
            <Image
              src={comment.user.picture}
              height={30}
              width={30}
              alt={comment.user.name}
              className='rounded-full mr-3'
            />
            <div className='flex flex-col w-full'>
              <div className='flex items-center justify-between w-full'>
                <span>{comment.user.name}</span>
                <DeleteComment comment={comment} />
              </div>{' '}
              <span className='text-xs'>{formatDate(comment.timestamp)}</span>
            </div>
            <div className='flex items-start w-full flex-col'>
              <div className='flex items-center justify-between w-full'>
                <span>{comment.user.name}</span>
                {session?.user?.email == comment.user.email && (
                  <DeleteComment comment={comment} />
                )}
              </div>
              <span className='text-xs font-semibold'>
                {formatDate(comment.timestamp)}
              </span>
            </div>
          </div>
          {comment.comment}
        </li>
      ))}
    </ol>
  );
}
