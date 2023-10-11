import dbConnect from './db/dbConnect';
import CommentModel from './db/models/comments';
import { Comment } from './db/models/comments';

export default async function getComments(postID: string): Promise<Comment[]> {
  try {
    await dbConnect();
    const comments = await CommentModel.find({ postID: postID });
    return comments;
  } catch (e) {
    console.log(e);
    return [];
  }
}
