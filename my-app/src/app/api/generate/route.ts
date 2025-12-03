import { GoogleGenAI } from "@google/genai";
import next from "next";
import { NextResponse } from "next/server";

const ai = new GoogleGenAI({});

export async function POST(request: NextResponse) {
  const { title, content } = await request.json();

  if (!title || !content) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Please provide a concise, natural summary of the following article: 
    Title: ${title}
    Content: ${content}  
     The summary should:
    - Focus on the article's core message and main points.
    - Flow naturally as a paragraph, not as a list or outline.
    - Contain enough meaningful details to allow relevant questions to be generated from it later.
    - Maximum length: 60 words
     
     Summary:`,
     
  });

  const summary = response.text;

  return NextResponse.json({
    message: "summary generated successfully",
    summary: summary,
  });
}
