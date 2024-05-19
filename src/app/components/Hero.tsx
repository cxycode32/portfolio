"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRef, useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";

// Custom Hook to get current screen width
const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenWidth;
};

// Custom Hook for scrambling animation
const useScramblingAnimation = (positionRef: any) => {
  const animationIntervalRef = useRef<number | null>(null);
  const scramblingIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const position = positionRef.current;

    if (position) {
      const startAnimation = () => {
        let iteration = 0;

        if (scramblingIntervalRef.current) {
          clearInterval(scramblingIntervalRef.current);
        }

        scramblingIntervalRef.current = window.setInterval(() => {
          if (!position.dataset.value) return;

          position.innerText = position.innerText
            .split("")
            .map((letter: string, index: number) => {
              if (index < iteration) {
                return position.dataset.value![index];
              }
              return String.fromCharCode(Math.random() * 94 + 33);
            })
            .join("");

          if (iteration >= position.dataset.value.length) {
            if (scramblingIntervalRef.current) {
              clearInterval(scramblingIntervalRef.current);
            }
          }

          iteration += 1 / 3;
        }, 50);
      };

      startAnimation(); // Start animation immediately on mount

      animationIntervalRef.current = window.setInterval(() => {
        startAnimation();
      }, 3200); // Trigger animation every 5 seconds

      return () => {
        if (animationIntervalRef.current) {
          clearInterval(animationIntervalRef.current);
        }
        if (scramblingIntervalRef.current) {
          clearInterval(scramblingIntervalRef.current);
        }
      };
    }
  }, [positionRef]);
};

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(ScrollToPlugin);

  useGSAP(() => {
    let stl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    stl
      .to(".hero__title--top", {
        y: 160,
        ease: "power4.inOut",
        duration: 2,
      })
      .to(
        ".hero__title--bottom",
        {
          y: -160,
          ease: "power4.inOut",
          duration: 2,
        },
        0
      );

    // i, a text glitching animation

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    tl.to(".glitch", 0.1, { skewX: 2, ease: "power4.inOut" })
      .to(".glitch", 0.04, { skewX: 0, ease: "power4.inOut" })
      .to(".glitch", 0.04, { opacity: 0 })
      .to(".glitch", 0.04, { opacity: 1 })
      .to(".glitch", 0.04, { x: -20 })
      .to(".glitch", 0.04, { x: 0 })
      .add("split", 0)
      .to(".top", 0.5, { x: -2, ease: "power4.inOut" }, "split")
      .to(".bottom", 0.5, { x: 2, ease: "power4.inOut" }, "split")
      .to(".top", 0.08, { className: "glitch top shadow-1" }, "split")
      .to(".bottom", 0.08, { className: "glitch bottom shadow-1" }, "split")

      .to("#txt", 0, { scale: 1.1 }, "split")
      .to("#txt", 0, { scale: 1 }, "+=0.02")

      .to(".top", 0.08, { className: "glitch shadow-1" }, "+=0.09")
      .to(".bottom", 0.08, { className: "glitch shadow-1" }, "+=0.09")
      .to(".top", 0.03, { className: "glitch top shadow-2" }, "split")
      .to(".bottom", 0.03, { className: "glitch bottom shadow-2" }, "split")
      .to(".top", 0.03, { className: "glitch shadow-2" }, "+=0.01")
      .to(".bottom", 0.03, { className: "glitch shadow-2" }, "+=0.01")

      .to(".top", 0.2, { x: 0, ease: "power4.inOut" })
      .to(".bottom", 0.2, { x: 0, ease: "power4.inOut" })

      .to(".glitch", 0.02, { scaleY: 1.1, ease: "power4.inOut" })
      .to(".glitch", 0.04, { scaleY: 1, ease: "power4.inOut" });
  });

  const positionRef = useRef<HTMLHeadingElement>(null);
  const softwareRef = useRef<HTMLHeadingElement>(null);
  const engineerRef = useRef<HTMLHeadingElement>(null);

  const screenWidth = useScreenWidth();

  useScramblingAnimation(screenWidth > 1024 ? softwareRef : positionRef);
  useScramblingAnimation(screenWidth > 1024 ? engineerRef : positionRef);

  return (
    <section ref={heroRef} id="hero" className="hero relative overflow-hidden">
      <div className="hero__wrapper overflow-hidden">
        <div className="hero__content flex flex-col justify-center overflow-hidden">
          <div className="hero__title--top font-ubuntu flex">
            <span className="title--i relative">
              <span className="glitch top">i</span>
              <span className="glitch bottom">i</span>
            </span>
            <span className="font-lofty relative mx-8">am</span>
            <span className="title--a relative">
              <span className="glitch top">a</span>
              <span className="glitch bottom">a</span>
            </span>
          </div>
          <h2
            ref={positionRef}
            data-value="Software Engineer"
            className="hero__title--bottom font-source_code_pro font-black flex flex-col justify-start items-center z-10"
          >
            <span ref={softwareRef} data-value="Software" className="z-10">
              Software
            </span>
            <span
              ref={engineerRef}
              data-value="Engineer"
              className="z-10 md:h-[45vh]"
            >
              Engineer
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};
