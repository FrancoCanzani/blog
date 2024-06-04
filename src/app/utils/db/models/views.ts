import mongoose from 'mongoose';

const ViewSchema = new mongoose.Schema({
  postId: {
    type: String,
    required: true,
    unique: true,
  },
  views: {
    type: Number,
    default: 0,
  },
});

export default mongoose.models.View || mongoose.model('View', ViewSchema);
