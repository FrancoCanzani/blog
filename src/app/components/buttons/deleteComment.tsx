'use client';

import { Trash2, Loader2 } from 'lucide-react';
import { Comment } from '@/app/utils/db/models/comments';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function DeleteComment({ comment }: { comment: Comment }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const router = useRouter();

  const deleteComment = async (commentID: string) => {
    try {
      setIsDeleting(true);
      const response = await fetch(`/api/comments?commentID=${commentID}`, {
        method: 'DELETE',
      });
      router.refresh();
      if (!response.ok) {
        setIsDeleting(false);
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      setIsDeleting(false);
      console.error(
        'There has been a problem with your fetch operation: ',
        error
      );
    }
  };

  return (
    <button
      onClick={() => {
        deleteComment(comment._id);
      }}
      className='active:active:translate-y-0.5 transition-all duration-100'
      aria-label='delete'
    >
      {isDeleting ? (
        <Loader2 size={15} className='animate-spin' />
      ) : (
        <Trash2 size={15} />
      )}
    </button>
  );
}
