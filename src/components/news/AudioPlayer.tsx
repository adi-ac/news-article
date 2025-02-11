
import React from "react";

export const AudioPlayer: React.FC = () => {
  return (
    <div className="bg-neutral-50 dark:bg-[#141414] border-neutral-100 dark:border-neutral-800 border flex w-full items-center gap-3 overflow-hidden text-sm leading-none justify-center mt-6 pl-3 pr-[18px] py-3 rounded-md border-solid max-md:max-w-full">
      <button
        aria-label="Play article audio"
        className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 border self-stretch flex min-h-7 gap-2.5 w-7 h-7 my-auto py-1 rounded-[28px] border-solid items-center justify-center"
      >
        <span 
          className="material-symbols-outlined text-[18px]"
          style={{
            fontVariationSettings: "'FILL' 1, 'wght' 300, 'GRAD' 0, 'opsz' 20"
          }}
        >
          play_arrow
        </span>
      </button>
      <div className="text-[rgba(41,41,41,1)] dark:text-neutral-200 self-stretch flex-1 shrink basis-[0%] my-auto">
        Listen to this article
      </div>
      <div className="text-neutral-500 dark:text-[#A3A3A3] text-right self-stretch flex-1 shrink basis-[0%] my-auto">
        8:08
      </div>
    </div>
  );
};
