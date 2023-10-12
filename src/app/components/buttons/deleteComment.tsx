'use client';

import { Trash2 } from 'lucide-react';
import { Comment } from '@/app/utils/db/models/comments';
import { useRouter } from 'next/navigation';

const domain = process.env.PROD_URL;

export default function DeleteComment({ comment }: { comment: Comment }) {
  const router = useRouter();

  const deleteComment = async () => {
    try {
      const response = await fetch(
        `${domain}/api/comments?commentID=${comment._id}`,
        {
          method: 'DELETE',
        }
      );
      router.refresh();
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error(
        'There has been a problem with your fetch operation: ',
        error
      );
    }
  };

  return (
    <button
      onClick={() => {
        deleteComment();
        console.log(comment.id);
        console.log(comment._id);
      }}
      className='active:active:translate-y-0.5 transition-all duration-100'
      aria-label='delete'
    >
      <Trash2 size={15} />
    </button>
  );
}
