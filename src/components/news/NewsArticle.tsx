
import React from "react";
import { NavigationBar } from "./NavigationBar";
import { ArticleContent } from "./ArticleContent";

export const NewsArticle: React.FC = () => {
  return (
    <article className="min-w-[375px] items-center dark:bg-black bg-[color(display-p3_1_1_1)] flex flex-col overflow-hidden">
      <div className="min-w-[375px] w-full max-w-[1056px] max-md:max-w-full">
        <NavigationBar />
        <div className="w-full max-md:max-w-full">
          <div className="bg-neutral-100 flex min-h-px w-full max-md:max-w-full" />
        </div>
      </div>
      <ArticleContent />
    </article>
  );
};
