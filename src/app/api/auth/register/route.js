import connect from '@/utils/db';

export const POST = async (req) => {
  const { name, email, password } = req.json();

  await connect();
};
