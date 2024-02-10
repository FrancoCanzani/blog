'use server';

import CommentModel from '../db/models/comments';
import dbConnect from '../db/dbConnect';

export default async function deleteComment(commentID: string) {
  await dbConnect();

  try {
    const comment = await CommentModel.findByIdAndDelete(commentID);
    if (!comment) {
      throw new Error('Comment not found');
    }
    return comment;
  } catch (error) {
    throw new Error('Failed to delete comment');
  }
}
