'use server';

import dbConnect from '../db/dbConnect';
import views from '../db/models/views';

export default async function incrementViewCount(postId: string) {
  await dbConnect();

  const post = await views.findOneAndUpdate(
    { postId },
    { $inc: { views: 1 } },
    { new: true, upsert: true }
  );
  return post.views;
}
