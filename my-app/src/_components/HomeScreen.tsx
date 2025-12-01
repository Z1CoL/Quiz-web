"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function HomeScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-screen">
      <div className="w-[856px] h-[442px] flex flex-col justify-center  bg-white p-8 mt-8 border-2 rounded-lg shadow-md ">
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
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your article content here..."
              className="border-2 rounded-sm w-full h-32 p-2 resize-none"
            ></textarea>
          </div>

          <div className="w-full flex flex-col items-end">
            <Button disabled={!title || !content}>Generate summary</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
