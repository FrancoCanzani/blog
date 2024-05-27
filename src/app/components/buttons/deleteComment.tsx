'use client';

import { Trash2 } from 'lucide-react';
import { Comment } from '@/app/utils/db/models/comments';
import deleteComment from '@/app/utils/actions/deleteComment';
import { useRouter } from 'next/navigation';

export default function DeleteComment({ comment }: { comment: Comment }) {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        deleteComment(comment._id);
        router.refresh();
      }}
      aria-label='delete'
    >
      <Trash2 size={14} />
    </button>
  );
}
