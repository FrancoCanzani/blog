import dbConnect from '@/app/utils/db/dbConnect';
import CommentModel from '@/app/utils/db/models/comments';

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const commentID = searchParams.get('commentID');

  try {
    await dbConnect();
    await CommentModel.deleteOne({ _id: commentID });
    return Response.json({
      message: `Comment ${commentID} deleted successfully`,
    });
  } catch (e) {
    // Return a 500 Internal Server Error response
    return new Response('Internal Server Error', {
      status: 500,
    });
  }
}
