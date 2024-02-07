import mongoose from 'mongoose';

const { Shema } = mongoose;

const postSchema = new Shema(
  {
    title: {
      type: String,
      required: true,
      min: 3,
    },
    desc: {
      type: String,
      required: true,
      min: 5,
    },
    img: {
      type: String,
    },
    content: {
      type: String,
      required: true,
      min: 6,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Post', postSchema);
