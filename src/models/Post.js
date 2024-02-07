import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema(
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

const Post = (module.exports = mongoose.model('Post', postSchema));
