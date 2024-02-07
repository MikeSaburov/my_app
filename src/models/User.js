import mongoose from 'mongoose';

const { Shema } = mongoose;

const userSchema = new Shema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      min: 3,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      min: 3,
    },
    password: {
      type: String,
      required: true,
      min: 3,
    },
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
