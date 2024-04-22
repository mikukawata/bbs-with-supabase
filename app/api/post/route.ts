import prisma from '@/lib/prismaClient';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const allPosts = await prisma.post.findMany();
  return NextResponse.json(allPosts);
}
