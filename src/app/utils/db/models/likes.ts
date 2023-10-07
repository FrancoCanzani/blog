import mongoose, { Schema } from 'mongoose';

export interface Like extends mongoose.Document {
  like: number;
  user: {
    name: string;
    picture: string;
    email: string;
  };
  timestamp: Date;
  postID: string;
}

const likeSchema = new Schema<Like>({
  like: {
    type: Number,
    required: [true, 'Please provide a value for the like.'],
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

const LikeModel =
  mongoose.models.Like || mongoose.model<Like>('Like', likeSchema);
export default LikeModel;
