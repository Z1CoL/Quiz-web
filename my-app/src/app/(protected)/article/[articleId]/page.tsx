"use client";

import { SeeMoreContent } from "@/_components/SeeMoreContent";
import { SummarizedContentComp } from "@/_components/SummarizedContent";
import { useArticle } from "@/app/_hooks/use-article";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { useParams, useRouter } from "next/navigation";

import { useState } from "react";
import { LuChevronLeft, LuLoaderCircle } from "react-icons/lu";
import { toast } from "sonner";

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const { selectedArticle } = useArticle();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const generateQuiz = async (articleId: string) => {
    if (!selectedArticle?.summary || !articleId) {
      toast.warning("Article summary or id is required");
      return;
    }

    const response = await fetch(`/api/article/${articleId}/quizzes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selectedArticleSummary: selectedArticle.summary,
        articleId,
      }),
    });

    if (!response.ok) {
      toast.error("Error while generating or adding quiz to DB!");
    }

    setLoading(true);

    toast.success("Quiz added to DB successfully");
    router.push(`/article/${articleId}/quizzes`);
  };

  return (
    <>
      <div className="min-w-full min-h-full bg-secondary flex justify-center">
        <div className="mt-26 flex flex-col mx-64 gap-6">
          <Button
            onClick={() => router.push("/")}
            variant={"outline"}
            size={"lg"}
            className="w-fit"
          >
            <LuChevronLeft size={16} />
          </Button>

          <div className="bg-background flex flex-col p-7 rounded-lg h-fit gap-5 text-foreground font-semibold border border-border">
            <div className="flex gap-2 items-center">
              <img src="/article-icon.svg" alt="" className="w-6 h-6" />
              <div className="text-2xl leading-8 font-semibold text-foreground">
                Article Quiz Generator
              </div>
            </div>

            {selectedArticle && (
              <SummarizedContentComp selectedArticle={selectedArticle} />
            )}

            <div className="flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    size={"lg"}
                    className="px-4 text-secondary-foreground cursor-pointer"
                  >
                    See content
                  </Button>
                </DialogTrigger>
                {selectedArticle && (
                  <SeeMoreContent selectedArticle={selectedArticle} />
                )}
              </Dialog>

              <Button
                disabled={loading || !selectedArticle || !articleId}
                size={"lg"}
                onClick={() => generateQuiz(articleId)}
                className="px-4 cursor-pointer"
              >
                {loading && <LuLoaderCircle className="animate-spin" />}
                Take a quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticlePage;
