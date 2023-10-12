'use client';

import { Trash2 } from 'lucide-react';
import { Comment } from '@/app/utils/db/models/comments';
import { useRouter } from 'next/navigation';

export default function DeleteComment({
  comment,
  postID,
}: {
  comment: Comment;
  postID: string;
}) {
  const router = useRouter();

  const deleteComment = async (commentID: string, postID: string) => {
    try {
      const response = await fetch(`/api/comments?commentID=${commentID}`, {
        method: 'DELETE',
      });
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
        deleteComment(comment._id, postID);
      }}
      className='active:active:translate-y-0.5 transition-all duration-100'
      aria-label='delete'
    >
      <Trash2 size={15} />
    </button>
  );
}
