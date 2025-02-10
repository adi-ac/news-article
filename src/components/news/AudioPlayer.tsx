import React from "react";

export const AudioPlayer: React.FC = () => {
  return (
    <div className="bg-neutral-50 border-neutral-100 border flex w-full items-center gap-3 overflow-hidden text-sm leading-none justify-center mt-6 pl-3 pr-[18px] py-3 rounded-md border-solid max-md:max-w-full">
      <button
        aria-label="Play article audio"
        className="bg-white border-neutral-200 border self-stretch flex min-h-7 gap-2.5 w-7 h-7 my-auto py-1 rounded-[28px] border-solid"
      />
      <div className="text-[rgba(41,41,41,1)] self-stretch flex-1 shrink basis-[0%] my-auto">
        Listen to this article
      </div>
      <div className="text-neutral-500 text-right self-stretch flex-1 shrink basis-[0%] my-auto">
        8:08
      </div>
    </div>
  );
};
