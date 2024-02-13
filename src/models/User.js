import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema(
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

// export default mongoose.model('User', userSchema);
const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
