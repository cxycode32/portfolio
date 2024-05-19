"use client";

import { Cursor } from "./components/Cursor";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { Hero } from "./components/Hero";
import { Article } from "./components/Article";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import "./components/styles/shapes.css";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const stageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.set(stageRef, { autoAlpha: 1 });

    gsap.to(".tri-2", {
      rotate: "+=180",
      ease: "power4.inOut",
      duration: 3,
      scrollTrigger: {
        trigger: ".tri-2",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        pin: false,
      },
    });
  });

  return (
    <main>
      <div id="smooth-wrapper">
        <div ref={stageRef} id="smooth-content" className="stage relative">
          <Cursor />
          <Header />
          <Intro />
          <Image
            src="https://www.micelistudios.com/sandbox/scrolltrigger/imgs/triangle_448x446.svg"
            width={100}
            height={100}
            alt="triangle"
            className="tri tri-2"
          />
          <Hero />
          <Article />
          <Project />
          <Footer />
        </div>
      </div>
    </main>
  );
}
