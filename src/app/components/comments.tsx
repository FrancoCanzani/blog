import { Comment } from '../utils/db/models/comments';
import Image from 'next/image';

export default async function Comments({ postID }: { postID: string }) {
  const response = await fetch(
    `http://localhost:3000/api/comments?id=${postID}`
  );

  const data = await response.json();
  const comments = data.comments; // Assuming comments is an array of objects

  return (
    <ol>
      {comments.map((comment: Comment) => (
        <li
          key={comment._id}
          className='border rounded-sm px-2 border-black py-1.5 mt-2'
        >
          <div>
            <Image
              src={comment.user.picture}
              height={25}
              width={25}
              alt={comment.user.name}
              className='rounded-full'
            />
            <span>{comment.user.name}</span>
          </div>
          {comment.comment}
        </li>
      ))}
    </ol>
  );
}
