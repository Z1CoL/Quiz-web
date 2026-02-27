import prisma from "@/app/lib/prisma";
import axiosInstance from "@/lib/axios";

import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const { userId } = await auth();
  const { title, content } = await req.json();

  // 1. AI summary авах
  const res = await axiosInstance.post("/api/summarize", { content });
  const summary = res.data.summary;

  // 2. Database-д хадгалах
  try {
    const resp = await prisma.article.create({
      data: {
        title,
        content,
        summary,
        userid: userId,
      },
    });
    return NextResponse.json(resp);
  } catch (error) {
    console.error("DB create error:", error);
    return NextResponse.json({ error: "DB create failed" }, { status: 500 });
  }
};