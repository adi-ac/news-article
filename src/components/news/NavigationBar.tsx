
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
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="dark:fill-[#F5F5F5] fill-foreground">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.25 7.5V0L10.75 6.55671e-08V7.5H9.25Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9.25 20V12.5H10.75V20H9.25Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M11.2377 7.70198L16.541 2.39868L17.6017 3.45934L13.359 7.70198L11.2377 7.70198Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M2.39888 16.5408L7.70218 11.2375L8.76284 12.2982L3.45954 17.6015L2.39888 16.5408Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M13.3589 12.2981L17.6016 16.5408L16.5409 17.6014L11.2376 12.2981H13.3589Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M3.45943 2.39864L8.76273 7.70194L7.70207 8.7626L2.39877 3.4593L3.45943 2.39864Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M9.25 9.25L20 9.25V10.75L9.25 10.75V9.25Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M1.31135e-07 9.25L7.5 9.25V10.75L0 10.75L1.31135e-07 9.25Z" />
          </svg>
        </div>
        <div className="self-stretch flex items-center gap-2 text-sm text-foreground font-normal whitespace-nowrap leading-6 my-auto">
          <button 
            className="bg-background border-[#F5F5F5] dark:border-border border self-stretch flex min-h-9 items-center justify-center gap-2.5 w-9 h-9 my-auto py-2 rounded-md border-solid hover:bg-[#FAFAFA] dark:hover:bg-[#141414]"
            onClick={toggleTheme}
          >
            <span 
              className="material-symbols-outlined text-[20.5px]"
              style={{
                fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 22"
              }}
            >
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          <button className="bg-background border-[#F5F5F5] dark:border-border border self-stretch flex min-h-9 items-center justify-center gap-2.5 w-9 h-9 my-auto py-2 rounded-md border-solid hover:bg-[#FAFAFA] dark:hover:bg-[#141414]">
            <span 
              className="material-symbols-outlined text-[20.5px]"
              style={{
                fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 22"
              }}
            >
              share_windows
            </span>
          </button>
          <button className="self-stretch bg-background border-[#F5F5F5] dark:border-border border gap-2.5 overflow-hidden w-[83px] my-auto px-3 py-1.5 rounded-md border-solid hover:bg-[#FAFAFA] dark:hover:bg-[#141414]">
            Subscribe
          </button>
        </div>
      </nav>
      {isMobile && <Separator className="bg-[#F5F5F5] dark:bg-border" />}
    </div>
  );
};
