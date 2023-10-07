import { Comment } from '../utils/db/models/comments';
import Image from 'next/image';
import DeleteComment from './buttons/deleteComment';
import formatDate from '../utils/formatDate';

export default async function Comments({ postID }: { postID: string }) {
  const response = await fetch(
    `http://localhost:3000/api/comments?id=${postID}`
  );

  const data = await response.json();
  const comments = data.comments;

  return (
    <ol>
      {comments.map((comment: Comment) => (
        <li
          key={comment._id}
          className='border rounded-sm px-4 border-black py-1.5 mt-2'
        >
          <div className='flex items-center w-full'>
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
          </div>
          {comment.comment}
        </li>
      ))}
    </ol>
  );
}
