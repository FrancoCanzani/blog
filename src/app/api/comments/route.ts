import dbConnect from '@/app/utils/db/dbConnect';
import CommentModel from '@/app/utils/db/models/comments';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  try {
    await dbConnect();
    const comments = await CommentModel.find({ postID: id });
    return Response.json({ comments });
  } catch (e) {
    // Return a 500 Internal Server Error response
    return new Response('Internal Server Error', {
      status: 500,
    });
  }
}
