
import React from "react";

interface ArticleImageProps {
  src: string;
  caption?: string;
  aspectRatio?: string;
}

export const ArticleImage: React.FC<ArticleImageProps> = ({
  src,
  caption,
  aspectRatio = "1.5",
}) => {
  return (
    <figure className="w-full text-[15px] text-neutral-600 leading-[25px] mt-6 pt-[5px] max-md:max-w-full">
      <img
        loading="lazy"
        srcSet={src}
        className={`aspect-[${aspectRatio}] object-contain w-full max-md:max-w-full`}
        alt={caption || "Article image"}
      />
      {caption && (
        <figcaption
          className="mt-3 max-md:max-w-full font-serif dark:text-[#A3A3A3]"
          dangerouslySetInnerHTML={{ __html: caption }}
        />
      )}
    </figure>
  );
};
