"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function HomeScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 mt-8 border-2 rounded-lg shadow-md">
      <div className="flex gap-2 items-center">
        <Image src={"star.svg"} height={20} width={20} alt="" />
        <h1 className="text-xl font-bold"> Article Quiz Generator</h1>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Article Title</label>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter a title for your article..."
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Article Content</label>
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Paste your article content here..."
            className="h-30 border-2 rounded-sm w-full"
          />
        </div>

        <div className="">
          <Button disabled={!title || !content}>Generate summary</Button>
        </div>
      </div>
    </div>
  );
}
