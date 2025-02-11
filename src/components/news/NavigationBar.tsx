
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Separator } from "@/components/ui/separator";
import { useTheme } from "next-themes";

export const NavigationBar: React.FC = () => {
  const isMobile = useIsMobile();
  const { setTheme, theme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  return (
    <div className={`${isMobile ? 'fixed top-0 left-0 z-50 w-full' : ''}`}>
      <nav className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap px-6 py-5 max-md:max-w-full max-md:px-5 bg-background">
        <div className="self-stretch flex items-center gap-1.5 overflow-hidden justify-center w-[21px] my-auto py-2 rounded-md">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/e0b9ab42968c0778473ba92af1fdd4b5f6861349c97c6b9cc68881e9232dc29f?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-[21px] self-stretch my-auto"
            alt="Logo"
          />
        </div>
        <div className="self-stretch flex items-center gap-2 text-sm text-foreground font-normal whitespace-nowrap leading-6 my-auto">
          <button 
            className="bg-background border-border border self-stretch flex min-h-9 items-center justify-center gap-2.5 w-9 h-9 my-auto py-2 rounded-md border-solid hover:bg-accent"
            onClick={toggleTheme}
          >
            <span 
              className="material-symbols-outlined text-[22px]"
              style={{
                fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20"
              }}
            >
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button className="bg-background border-border border self-stretch flex min-h-9 items-center justify-center gap-2.5 w-9 h-9 my-auto py-2 rounded-md border-solid hover:bg-accent">
            <span 
              className="material-symbols-outlined text-[22px]"
              style={{
                fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 20"
              }}
            >
              share_windows
            </span>
          </button>
          <button className="self-stretch bg-background border-border border gap-2.5 overflow-hidden w-[83px] my-auto px-3 py-1.5 rounded-md border-solid hover:bg-accent">
            Subscribe
          </button>
        </div>
      </nav>
      {isMobile && <Separator className="bg-border" />}
    </div>
  );
};

