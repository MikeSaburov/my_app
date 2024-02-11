import User from '@/models/User';
import connect from '@/utils/db';

export const POST = async (req) => {
  const { name, email, password } = req.json();

  await connect();

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
};
