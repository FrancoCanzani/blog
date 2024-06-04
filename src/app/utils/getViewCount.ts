import dbConnect from './db/dbConnect';
import views from './db/models/views';

export async function getViewCount(postId: string) {
  await dbConnect();
  const post = await views.findOne({ postId });
  return post ? post.views : 0;
}
