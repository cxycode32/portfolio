"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/shapes.css";

export const Intro: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);

  const mm = gsap.matchMedia();

  const introRef = useRef<HTMLDivElement | null>(null);
  const introWrapperRef = useRef<HTMLDivElement | null>(null);
  const introContentRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    mm.add("(min-width: 1025px)", () => {
      gsap.fromTo(
        introContentRef.current,
        {
          translateX: 0,
        },
        {
          translateX: "-320vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: introWrapperRef.current,
            start: "top",
            end: "2200 bottom",
            scrub: 0.6,
            pin: true,
          },
        }
      );

      gsap.to(".circle-1", {
        scale: 2,
        transformOrigin: "center",
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".circle",
          start: "center top",
          end: "bottom top",
          scrub: 0.6,
          pin: false,
        },
      });

      gsap.to(".circle-2", {
        rotate: "+=90",
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".circle-2",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          pin: false,
        },
      });

      gsap.fromTo(
        ".circle-2-mini",
        {
          y: "-20vh",
        },
        {
          y: "10vh",
          ease: "none",
          scrollTrigger: {
            trigger: ".circle-2-mini",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            pin: false,
            snap: {
              snapTo: 0.5,
              duration: 1,
              ease: "power4.inOut",
            },
          },
        }
      );

      gsap.to(".cross-1", {
        rotate: "+=360",
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".cross",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          pin: false,
        },
      });

      gsap.to(".cross-2", {
        rotate: "-=360",
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".cross",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          pin: false,
        },
      });

      gsap.to(".rect-1", {
        scale: 2,
        rotate: "+=90",
        transformOrigin: "center",
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".rect-1",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
          pin: false,
        },
      });

      gsap.to(".rect-2", {
        rotate: "-=90",
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".rect-2",
          start: "bottom bottom",
          end: "bottom top",
          scrub: true,
          pin: false,
        },
      });

      gsap.to(".tri-1", {
        rotate: "+=180",
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".tri-1",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          pin: false,
        },
      });

      gsap.to(".circle-3", {
        x: -600,
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".circle-3",
          start: "top top+=200%",
          end: "bottom bottom-=400%",
          scrub: true,
          pin: false,
        },
      });

      gsap.to(".circle-4", {
        x: 600,
        ease: "power4.inOut",
        duration: 2,
        scrollTrigger: {
          trigger: ".circle-4",
          start: "top top+=200%",
          end: "bottom bottom-=400%",
          scrub: true,
          pin: false,
        },
      });
    });

    gsap.to(".cross-1", {
      rotate: "+=360",
      ease: "power4.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".cross",
        start: "top-=3% top",
        end: "bottom top",
        scrub: true,
        pin: false,
      },
    });

    gsap.to(".cross-2", {
      rotate: "-=360",
      ease: "power4.inOut",
      duration: 2,
      scrollTrigger: {
        trigger: ".cross",
        start: "top-=63% top",
        end: "bottom top",
        scrub: true,
        pin: false,
      },
    });
  });

  return (
    <section
      ref={introRef}
      id="intro"
      className="intro relative overflow-hidden"
    >
      <div ref={introWrapperRef} className="intro__wrapper overflow-hidden">
        <div
          ref={introContentRef}
          className="intro__content relative flex overflow-hidden"
        >
          <div
            className="circle circle-1"
            data-speed-x="200"
            data-speed-y="200"
          ></div>
          <svg
            className="cross cross-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <div
            className="circle circle-2"
            data-speed-x="100"
            data-speed-y="100"
          ></div>
          <div
            className="circle circle-2-mini "
            data-speed-x="100"
            data-speed-y="100"
          ></div>
          <svg
            className="cross cross-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <div
            className="rect rect-1"
            data-speed-x="200"
            data-speed-y="200"
          ></div>
          <div
            className="rect rect-2"
            data-speed-x="100"
            data-speed-y="100"
          ></div>
          <Image
            src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/triangle_448x446.svg"
            width={100}
            height={100}
            alt="triangle"
            className="tri tri-1"
          />
          <div
            className="circle circle-3"
            data-speed-x="200"
            data-speed-y="200"
          ></div>
          <div
            className="circle circle-4"
            data-speed-x="100"
            data-speed-y="100"
          ></div>
          <div
            className="rect rect-3"
            data-speed-x="100"
            data-speed-y="100"
          ></div>

          <h1 className="intro__title">Hello, my name is</h1>
          <h1 className="intro__title name">Cindy Sim Xin Yee</h1>
        </div>
      </div>
    </section>
  );
};
