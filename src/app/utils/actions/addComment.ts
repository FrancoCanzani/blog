'use server';

type authUser = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
};

import CommentModel from '../db/models/comments';
import dbConnect from '../db/dbConnect';

export default async function addComment(
  formData: FormData,
  postID: string,
  user: authUser
) {
  try {
    await dbConnect();
    const newComment = new CommentModel({
      comment: formData.get('comment'),
      user: {
        name: user.name,
        picture: user.image,
        email: user.email,
      },
      timestamp: new Date(),
      postID: postID,
    });

    const savedComment = await newComment.save();

    console.log(`A comment was added with the _id: ${savedComment._id}`);
  } catch (e) {
    console.error(e);
  }
}
