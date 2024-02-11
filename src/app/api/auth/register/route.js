import User from '@/models/User';
import connect from '@/utils/db';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
  const { name, email, password } = req.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 7);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse('Пользователь успешно создан', {
      status: 201,
    });
  } catch (error) {
    return new NextResponse('Пользователь не создан' + error.message, {
      status: 500,
    });
  }
};
