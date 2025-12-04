"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { mutate } from "swr";
import { ArticleType } from "@/lib/types";

type ArticleContextType = {
  data: string;
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
  const router = useRouter();
  const [article, setArticle] = useState<ArticleType>();

  const generateSummary = async () => {
    if (!title || !content) return toast.warning("All fields required!");

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content }),
    });

    if (!response.ok) return toast.error("Failed to generate summary");

    const { data } = await response.json();
    setArticle(data);
    console.log({ data }, "DATA BE");

    mutate("articles");
    toast.success("Article added");

    setTitle("");
    setContent("");

    // const { data } = await res.json();
    if (data?.id) router.push(`/article/${data.id}`);
  };

  return (
    <ArticleContext.Provider
      value={{ title, setTitle, content, setContent, generateSummary, article }}
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
