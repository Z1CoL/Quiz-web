// app/api/summarize/route.ts
import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

const ai = new GoogleGenAI({});

export const POST = async (req: NextRequest) => {
  try {
    const { content } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Please provide a concise summary of the following article: ${content}`,
    });

    const aiText = response?.text ?? "No response";
    const cleaned = aiText.replace(/^\`\`\`json\s*|\s*\`\`\`$/g, "");

    console.log("AI summary:", cleaned);

    return NextResponse.json({ summary: cleaned });
  } catch (error) {
    console.error("Summarize error:", error);
    return NextResponse.json({ error: "Failed to summarize" }, { status: 500 });
  }
};