import Post from '@/models/Post';
import connect from '@/utils/db';
import { request } from 'express';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  // const url = new URL(request.url);
  // const username = url.searchParams.get('username');
  // username && { username }
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse('Ошибка ответа БД!', { status: 500 });
  }
};
