"use client";

import { createContext, useContext, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { mutate } from "swr";

type ArticleContextType = {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (value: string) => void;
  generateSummary: () => void;
};

const ArticleContext = createContext<ArticleContextType | null>(null);

export const ArticleProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useUser();
  const router = useRouter();

  const generateSummary = async () => {
    if (!title || !content) return toast.warning("All fields required!");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) return toast.error("Failed to generate summary");

    const { text } = await response.json();

    const res = await fetch("/api/articles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        summary: text,
        userClerkId: user?.id,
      }),
    });

    mutate("articles");
    toast.success("Article added");

    setTitle("");
    setContent("");

    const { data } = await res.json();
    if (data?.id) router.push(`/article/${data.id}`);
  };

  return (
    <ArticleContext.Provider
      value={{ title, setTitle, content, setContent, generateSummary }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useData = () => {
  const ctx = useContext(ArticleContext);
  if (!ctx) throw new Error("useData must be inside ArticleProvider!");
  return ctx;
};
