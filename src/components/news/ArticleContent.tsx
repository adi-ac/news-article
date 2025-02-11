
import React from "react";
import { AudioPlayer } from "./AudioPlayer";
import { ArticleImage } from "./ArticleImage";
import { useIsMobile } from "@/hooks/use-mobile";

export const ArticleContent: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`flex min-w-[375px] w-full max-w-[1056px] font-normal justify-center items-start flex-wrap max-md:max-w-full ${isMobile ? 'mt-[72px]' : ''}`}>
      <div className="flex min-w-[375px] flex-col items-stretch flex-1 shrink basis-[0%] max-w-[528px] pt-6 px-6 max-md:max-w-full max-md:px-5">
        <header>
          <h1 className="text-[rgba(41,41,41,1)] dark:text-[#F5F5F5] text-2xl leading-[34px] font-serif font-normal max-md:max-w-full">
            The Wildest Sci-Fi Thriller Of The Year Flips The Killer Robot Movie
            On Its Head
          </h1>
          <p className="text-neutral-600 dark:text-[#A3A3A3] text-[15px] leading-[25px] mt-2.5 max-md:max-w-full font-sans">
            A lakeside getaway becomes a battleground for couples in this fast,
            furious and exceptionally fun horror-comedy
          </p>
        </header>

        <ArticleImage src="https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/c27e23ba8ef83b719d97b179a5b1c40a4f890ef5c506f8880240177dc7383b39?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/c27e23ba8ef83b719d97b179a5b1c40a4f890ef5c506f8880240177dc7383b39?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/c27e23ba8ef83b719d97b179a5b1c40a4f890ef5c506f8880240177dc7383b39?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/c27e23ba8ef83b719d97b179a5b1c40a4f890ef5c506f8880240177dc7383b39?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/c27e23ba8ef83b719d97b179a5b1c40a4f890ef5c506f8880240177dc7383b39?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/c27e23ba8ef83b719d97b179a5b1c40a4f890ef5c506f8880240177dc7383b39?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/c27e23ba8ef83b719d97b179a5b1c40a4f890ef5c506f8880240177dc7383b39?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/c27e23ba8ef83b719d97b179a5b1c40a4f890ef5c506f8880240177dc7383b39?placeholderIfAbsent=true" />

        <AudioPlayer />

        <div className="w-full mt-6 max-md:max-w-full">
          <div className="text-[rgba(41,41,41,1)] text-xs leading-[16px] max-md:max-w-full">
            <span
              style={{
                fontFamily:
                  "Source Sans Pro, -apple-system, Roboto, Helvetica, sans-serif",
                fontSize: "14px",
              }}
            >
              By{" "}
            </span>
            <span
              style={{
                fontFamily:
                  "Source Sans Pro, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: 600,
                textDecoration: "underline",
                fontSize: "14px",
              }}
            >
              Hoai-Tran Bui
            </span>
          </div>
          <div className="text-neutral-600 dark:text-[#A3A3A3] text-sm leading-loose max-md:max-w-full">
            Published Jan 30, 2025
          </div>
        </div>
      </div>

      <div className="flex min-w-[375px] flex-col items-stretch text-base text-[rgba(41,41,41,1)] leading-[30px] flex-1 shrink basis-[0%] max-w-[528px] pt-6 pb-24 px-6 max-md:max-w-full max-md:px-5 max-md:pb-16 md:h-[calc(100vh-2rem)] md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        <div className="max-md:max-w-full space-y-8">
          <p className="font-serif dark:text-[#F5F5F5]">
            It's a tale as old as time: boy meets girl, boy falls in love with
            girl, girl turns out to be a killer robot. Except{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> isn't exactly
            the typical take on the classic sci-fi horror story. Instead, Drew
            Hancock's cleverly constructed sci-fi horror movie is a fun takedown
            of the AI cautionary tale we know so well. And in the process, it may
            have given us the most sneakily feminist social horror movie this side
            of Gone Girl.
          </p>

          <p className="font-serif dark:text-[#F5F5F5]">
            Iris (Sophie Thatcher) knows one thing: she loves Josh (Jack Quaid)
            with all of her heart. The sweetly affable young woman is so deeply in
            love with him that she's willing to make the journey out to a remote
            lakeside villa for a weekend with Josh's friends, whom she knows to
            hate her. But this relaxing weekend getaway isn't what she thought it
            would be: after Sergey (Rupert Friend), the morally dubious owner of
            this private villa attempts to assault her, she kills him in self
            defense — a shocking bit of violence that unveils a part of Iris' true
            nature that she was never even aware of.
          </p>

          <p className="font-serif dark:text-[#F5F5F5]">
            Written and directed by Hancock in his feature directorial debut,{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> gets a lot of
            mileage out of the fact that it's produced by Barbarian director Zach
            Cregger. Just like the 2022 sleeper horror hit,{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> is built around
            playing with the expectations of its audiences before unveiling its
            big twist: that Iris is actually a robot. Or, as Josh's friend Eli
            (Harvey Guillén) disparagingly calls her, Josh's "sex bot." But just
            as quickly as Iris' true nature is revealed does{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> once again
            turns against audience expectations of what should've been a fairly
            standard killer robot movie, injecting a surprising bit of social
            commentary into an otherwise straightforward horror flick.
          </p>

          <p className="font-serif dark:text-[#F5F5F5]">
            The reason it all works, aside from Hancock's admirably deft script,
            is because of Sophie Thatcher's wonderfully malleable performance as
            Iris. Right off the bat, we sense that something is off with Iris —
            she's a little too demure, a little too smiley, a little too doe-eyed.
            However, Thatcher seeds in tiny human quirks that spark some
            recognition for us: the way her mouth twitches uncomfortably when
            Josh's friend Kat (Megan Suri) treats her with contempt, the way she
            glances down sadly when Josh brushes her off, and, of course, the way
            she would do anything to survive. By the time{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> drops its robot
            reveal (which again, happens very early on), we're already primed to
            root for Iris, even as she starts to accumulate quite the body count.
          </p>
        </div>

        <ArticleImage
          src="https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/656fa1e34e409118b39289ed9a1842dffbacade1d9767e973418c44e821e11af?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/656fa1e34e409118b39289ed9a1842dffbacade1d9767e973418c44e821e11af?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/656fa1e34e409118b39289ed9a1842dffbacade1d9767e973418c44e821e11af?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/656fa1e34e409118b39289ed9a1842dffbacade1d9767e973418c44e821e11af?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/656fa1e34e409118b39289ed9a1842dffbacade1d9767e973418c44e821e11af?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/656fa1e34e409118b39289ed9a1842dffbacade1d9767e973418c44e821e11af?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/656fa1e34e409118b39289ed9a1842dffbacade1d9767e973418c44e821e11af?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/656fa1e34e409118b39289ed9a1842dffbacade1d9767e973418c44e821e11af?placeholderIfAbsent=true"
          aspectRatio="2.34"
          caption="Sophie Thatcher's slightly uncanny, vulnerable performance is crux of <span style='font-style: italic;'>Companion's</span> success"
        />

        <div className="mt-6 space-y-8 max-md:max-w-full">
          <p className="font-serif dark:text-[#F5F5F5]">
            Just as good as Thatcher, and another crucial reason that{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> pulls off its
            tonal hat trick, is Jack Quaid. In another movie, Quaid's Josh
            might've been the hero of the story, but{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> uses the
            actor's trademark nice-guy persona and cherubic grin to play with
            audience expectations. We expect Josh to be the good guy because he
            looks and acts like a Jack Quaid character - but then again, so does
            Josh.
          </p>

          <p className="font-serif dark:text-[#F5F5F5]">
            It's a deceptively simple subversion that is embedded in Hancock's
            script, which not only threads the needle with its audience's
            sympathies but also walks the fine line between comedy and horror. But{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> is careful not
            to give in too much to its comedic instincts — it's in danger of
            becoming a little too self-aware and meta, but pulls back just enough.
            Instead, Hancock wisely opts for a more earnest tone, emphasizing the
            real love and emotion that robots like Iris can feel. The film doesn't
            have time to get all that philosophical about personhood or whether
            androids dream of electric sheep, but the intent is there - and as a
            result, there's a little more depth to{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span>'s killer robot
            than, say, the dancing meme that is M3GAN.
          </p>
        </div>

        <ArticleImage
          src="https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/287c763ba190f868204071a5c4f0369fe82310a9d9335e323faff4910848470b?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/287c763ba190f868204071a5c4f0369fe82310a9d9335e323faff4910848470b?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/287c763ba190f868204071a5c4f0369fe82310a9d9335e323faff4910848470b?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/287c763ba190f868204071a5c4f0369fe82310a9d9335e323faff4910848470b?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/287c763ba190f868204071a5c4f0369fe82310a9d9335e323faff4910848470b?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/287c763ba190f868204071a5c4f0369fe82310a9d9335e323faff4910848470b?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/287c763ba190f868204071a5c4f0369fe82310a9d9335e323faff4910848470b?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/c6d391ea2e524e3cb5938c8c2bca34b1/287c763ba190f868204071a5c4f0369fe82310a9d9335e323faff4910848470b?placeholderIfAbsent=true"
          aspectRatio="1.78"
          caption="Jack Quaid, and his typecast as an affable good guy, is a large part of why <span style='font-style: italic;'>Companion</span> works"
        />

        <div className="mt-6 space-y-8 max-md:max-w-full">
          <p className="font-serif dark:text-[#F5F5F5]">
            Despite its subversive approach to a well-worn horror genre,{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span> isn't all that
            revolutionary. Once{" "}
            <span style={{ fontStyle: "italic" }}>Companion</span>'s big twist is
            dropped, it's not a movie that keeps you guessing nor one that shocks
            you at every turn. Apart from Thatcher and Quaid - with the exception,
            perhaps, of an exceptionally over-the-top Rupert Friend, who chews the
            hell out of his Russian accent - the rest of the supporting cast are
            barely more than horror-movie archetypes. But it's a fun little sci-fi
            thriller that's smarter than it looks, and flirts with pop feminism in
            a way that feels weirdly prescient... and maybe a little too timely.
            <br />
            <br />
            <span style={{ fontStyle: "italic" }}>Companion</span> opens in theaters on January 31.
          </p>
        </div>
      </div>
    </div>
  );
};
