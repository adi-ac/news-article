
import React from "react";

export const NavigationBar: React.FC = () => {
  return (
    <nav className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-6 py-5 max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex items-center gap-1.5 overflow-hidden justify-center w-5 my-auto py-2 rounded-md">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/e0b9ab42968c0778473ba92af1fdd4b5f6861349c97c6b9cc68881e9232dc29f?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-5 self-stretch my-auto"
          alt="Logo"
        />
      </div>
      <div className="self-stretch flex items-center gap-2 text-sm text-[color(display-p3_0.1608_0.1608_0.1608)] font-normal whitespace-nowrap leading-6 my-auto">
        <button className="bg-white border-neutral-100 border self-stretch flex min-h-9 items-center justify-center gap-2.5 w-9 h-9 my-auto py-2 rounded-md border-solid">
          <span 
            className="material-symbols-outlined"
            style={{
              fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20"
            }}
          >
            dark_mode
          </span>
        </button>
        <button className="bg-white border-neutral-100 border self-stretch flex min-h-9 items-center justify-center gap-2.5 w-9 h-9 my-auto py-2 rounded-md border-solid">
          <span 
            className="material-symbols-outlined"
            style={{
              fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20"
            }}
          >
            share_windows
          </span>
        </button>
        <button className="self-stretch bg-white border-neutral-100 border gap-2.5 overflow-hidden w-[83px] my-auto px-3 py-1.5 rounded-md border-solid">
          Subscribe
        </button>
      </div>
    </nav>
  );
};
