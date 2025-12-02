import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  const articles = await prisma.article.findMany({
    orderBy: { createdat: "asc" },
    select: { id: true, title: true },
  });

  return NextResponse.json({ data: articles }, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const body = await request.json();
  const { title, content, summary, userClerkId } = body;

  if (!title || !content || !summary || !userClerkId) {
    return NextResponse.json(
      { error: "Missing required fields!" },
      { status: 400 }
    );
  }
};
