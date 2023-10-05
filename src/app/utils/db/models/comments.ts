import mongoose from 'mongoose';

export interface Comment extends mongoose.Document {
  comment: string;
  user: {
    name: string;
    picture: string;
    email: string;
  };
  timestamp: Date;
  postID: string;
}

const commentSchema = new mongoose.Schema<Comment>({
  comment: {
    type: String,
    required: [true, 'Please provide a comment.'],
  },
  user: {
    name: {
      type: String,
      required: [true, 'Please provide a name for the user.'],
    },
    picture: {
      type: String,
      required: [true, 'Please provide a user picture URL.'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a user email.'],
    },
  },
  timestamp: {
    type: Date,
    required: [true, 'Please specify the timestamp for the comment.'],
  },
  postID: {
    type: String,
    required: [true, 'Please specify the post ID.'],
  },
});

const CommentModel =
  mongoose.models.Comment || mongoose.model<Comment>('Comment', commentSchema);
export default CommentModel;
