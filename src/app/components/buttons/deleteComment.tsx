'use client';

import { Trash2 } from 'lucide-react';
import { Comment } from '@/app/utils/db/models/comments';
import deleteComment from '@/app/utils/actions/deleteComment';
import { revalidatePath } from 'next/cache';

export default function DeleteComment({ comment }: { comment: Comment }) {
  return (
    <button
      onClick={() => {
        deleteComment(comment._id);
        revalidatePath('/posts');
      }}
      className='active:active:translate-y-0.5 transition-all duration-100'
      aria-label='delete'
    >
      <Trash2 size={15} />
    </button>
  );
}
