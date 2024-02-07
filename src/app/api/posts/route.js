import Post from '@/models/Post';
import connect from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    // await connect()
    // const posts = await Post.find()
    return new NextResponse('Все ок чувак, ты молодец ', { status: 200 });
  } catch (error) {
    return new NextResponse('Ошибка ответа БД!', { status: 500 });
  }
};
