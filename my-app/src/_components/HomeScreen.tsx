"use client";

import { Button } from "@/components/ui/button";

import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArticleProvider, useData } from "@/app/_providers/ArticleProviders";
import Image from "next/image";

export const Home = () => {
  return (
    <ArticleProvider>
      <HomeScreen />
    </ArticleProvider>
  );
};

export const HomeScreen = () => {
  const { title, setTitle, content, setContent, generateSummary } = useData();

  return (
    <div className="flex flex-col justify-center items-center min-w-full min-h-screen">
      <div className="w-[856px] h-[442px] flex flex-col justify-center bg-white p-8 mt-8 border-2 rounded-lg shadow-md">
        <div className="flex gap-2 items-center">
          <Image src={"star.svg"} height={20} width={20} alt="" />
          <h1 className="text-xl font-bold"> Article Quiz Generator</h1>
        </div>

        <div className="space-y-4">
          <div>
            <Label className="block mb-1 font-medium">Article Title</Label>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a title for your article..."
            />
          </div>

          <div>
            <Label className="block mb-1 font-medium">Article Content</Label>
            <Textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Paste your article content here..."
            />
          </div>

          <div className="w-full flex flex-col items-end">
            <Button onClick={generateSummary}>Generate summary</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
