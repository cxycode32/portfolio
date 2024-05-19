"use client";

import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { MsgBox } from "./article/MsgBox";
import "./styles/project.css";

interface CollectionProps {
  subtitle: string;
  img: string;
  msg: string;
}

export const Project: React.FC = () => {
  const aug21Collection: CollectionProps[] = [
    {
      subtitle: "Final Logo (Light Version)",
      img: "/assets/images/stact/aug21/logo_final_light.png",
      msg: "",
    },
    {
      subtitle: "Final Logo (Dark Version)",
      img: "/assets/images/stact/aug21/logo_final_dark.png",
      msg: "",
    },
    {
      subtitle: "Final Logo (Light Color Version)",
      img: "/assets/images/stact/aug21/logo_final_color_light.png",
      msg: "",
    },
    {
      subtitle: "Final Logo (Dark Color Version)",
      img: "/assets/images/stact/aug21/logo_final_color_dark.png",
      msg: "",
    },
    {
      subtitle: "Alt Logo Option (Light Version)",
      img: "/assets/images/stact/aug21/logo_alt_light.png",
      msg: "",
    },
    {
      subtitle: "Alt Logo Option (Dark Version)",
      img: "/assets/images/stact/aug21/logo_alt_dark.png",
      msg: "",
    },
    {
      subtitle: "Final Poster",
      img: "/assets/images/stact/aug21/poster_final.png",
      msg: "",
    },
    {
      subtitle: "Alt Poster Option",
      img: "/assets/images/stact/aug21/poster_alt_1.png",
      msg: "",
    },
    {
      subtitle: "Alt Poster Option",
      img: "/assets/images/stact/aug21/poster_alt_2.png",
      msg: "",
    },
    {
      subtitle: "Alt Poster Option",
      img: "/assets/images/stact/aug21/poster_alt_3.png",
      msg: "",
    },
  ];

  const carnival21Collection: CollectionProps[] = [
    {
      subtitle: "Logo",
      img: "/assets/images/stact/carnival21/logo.png",
      msg: "",
    },
    {
      subtitle: "Poster (PUBG)",
      img: "/assets/images/stact/carnival21/poster_pubg.png",
      msg: "",
    },
    {
      subtitle: "Poster (Tiktok)",
      img: "/assets/images/stact/carnival21/poster_tiktok.png",
      msg: "",
    },
    {
      subtitle: "Judge Poster",
      img: "/assets/images/stact/carnival21/poster_judge.png",
      msg: "",
    },
    {
      subtitle: "Performer Poster",
      img: "/assets/images/stact/carnival21/poster_performer_1.png",
      msg: "",
    },
    {
      subtitle: "Performer Poster",
      img: "/assets/images/stact/carnival21/poster_performer_2.png",
      msg: "",
    },
    {
      subtitle: "Performer Poster",
      img: "/assets/images/stact/carnival21/poster_performer_3.png",
      msg: "",
    },
    {
      subtitle: "Meeting Background",
      img: "/assets/images/stact/carnival21/meeting_background.png",
      msg: "",
    },
    {
      subtitle: "Champion Poster (Tiktok)",
      img: "/assets/images/stact/carnival21/poster_tiktok_champion.png",
      msg: "",
    },
    {
      subtitle: "Champion Poster (PUBG)",
      img: "/assets/images/stact/carnival21/poster_pubg_champion.png",
      msg: "",
    },
  ];

  const clwCollection: CollectionProps[] = [
    {
      subtitle: "Coming Soon Poster",
      img: "/assets/images/stact/clw/coming_soon_poster.png",
      msg: "",
    },
    {
      subtitle: "Countdown Poster 1",
      img: "/assets/images/stact/clw/countdown_poster_1.png",
      msg: "",
    },
    {
      subtitle: "Countdown Poster 2",
      img: "/assets/images/stact/clw/countdown_poster_2.png",
      msg: "",
    },
    {
      subtitle: "Countdown Poster 3",
      img: "/assets/images/stact/clw/countdown_poster_3.png",
      msg: "",
    },
    {
      subtitle: "Countdown Poster 4",
      img: "/assets/images/stact/clw/countdown_poster_4.png",
      msg: "",
    },
    {
      subtitle: "Countdown Poster 5",
      img: "/assets/images/stact/clw/countdown_poster_5.png",
      msg: "",
    },
    {
      subtitle: "Countdown Poster 6",
      img: "/assets/images/stact/clw/countdown_poster_6.png",
      msg: "",
    },
    {
      subtitle: "Countdown Poster 7",
      img: "/assets/images/stact/clw/countdown_poster_7.png",
      msg: "",
    },
  ];

  const jan22Collection: CollectionProps[] = [
    {
      subtitle: "Logo",
      img: "/assets/images/stact/jan22/logo.png",
      msg: "",
    },
    {
      subtitle: "Logo Color Codes",
      img: "/assets/images/stact/jan22/logo_color_codes.png",
      msg: "",
    },
    {
      subtitle: "Poster",
      img: "/assets/images/stact/jan22/poster.png",
      msg: "",
    },
    {
      subtitle: "Invitation Card",
      img: "/assets/images/stact/jan22/invitation_card.png",
      msg: "",
    },
    {
      subtitle: "Video Thumbnail 1",
      img: "/assets/images/stact/jan22/video_thumbnail_1.png",
      msg: "",
    },
    {
      subtitle: "Video Thumbnail 2",
      img: "/assets/images/stact/jan22/video_thumbnail_2.png",
      msg: "",
    },
    {
      subtitle: "Video Thumbnail 3",
      img: "/assets/images/stact/jan22/video_thumbnail_3.png",
      msg: "",
    },
  ];

  const rs22Collection: CollectionProps[] = [
    {
      subtitle: "Final Logo",
      img: "/assets/images/stact/rs22/logo_final.png",
      msg: "",
    },
    {
      subtitle: "Final Logo Draft 3",
      img: "/assets/images/stact/rs22/logo_final_draft_3.png",
      msg: "",
    },
    {
      subtitle: "Final Logo Draft 2",
      img: "/assets/images/stact/rs22/logo_final_draft_2.png",
      msg: "",
    },
    {
      subtitle: "Final Logo Draft 1",
      img: "/assets/images/stact/rs22/logo_final_draft_1.png",
      msg: "",
    },
    {
      subtitle: "Alt Logo Option 1",
      img: "/assets/images/stact/rs22/logo_alt_1.png",
      msg: "",
    },
    {
      subtitle: "Alt Logo Option 2",
      img: "/assets/images/stact/rs22/logo_alt_2.png",
      msg: "",
    },
    {
      subtitle: "Lumiere Logo Draft",
      img: "/assets/images/stact/rs22/logo_lumiere_draft.png",
      msg: "",
    },
    {
      subtitle: "Lumiere Softboard",
      img: "/assets/images/stact/rs22/softboard_2.png",
      msg: "",
    },
    {
      subtitle: "Happiness Softboard",
      img: "/assets/images/stact/rs22/softboard_1.png",
      msg: "",
    },
    {
      subtitle: "Happiness Poster",
      img: "/assets/images/stact/rs22/poster.png",
      msg: "",
    },
  ];

  const mm = gsap.matchMedia();

  useGSAP(() => {
    mm.add("(min-width: 1025px)", () => {
      const aug21tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aug21--playground__wrapper--outer",
          start: "top center-=200px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      aug21tl.to(".aug21--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const carnival21tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".carnival21--playground__wrapper--outer",
          start: "top center-=200px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      carnival21tl.to(".carnival21--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const jan22tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".jan22--playground__wrapper--outer",
          start: "top center-=200px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      jan22tl.to(".jan22--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const clwtl = gsap.timeline({
        scrollTrigger: {
          trigger: ".clw--playground__wrapper--outer",
          start: "top center-=200px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      clwtl.to(".clw--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const rs22tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".rs22--playground__wrapper--outer",
          start: "top center-=200px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      rs22tl.to(".rs22--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });
    });

    mm.add("(max-width: 1024px)", () => {
      const aug21tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aug21--playground__wrapper--outer",
          start: "top-=500px center-=300px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      aug21tl.to(".aug21--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const carnival21tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".carnival21--playground__wrapper--outer",
          start: "top-=500px center-=300px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      carnival21tl.to(".carnival21--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const jan22tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".jan22--playground__wrapper--outer",
          start: "top-=500px center-=300px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      jan22tl.to(".jan22--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const clwtl = gsap.timeline({
        scrollTrigger: {
          trigger: ".clw--playground__wrapper--outer",
          start: "top-=500px center-=300px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      clwtl.to(".clw--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const rs22tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".rs22--playground__wrapper--outer",
          start: "top-=500px center-=300px",
          end: "bottom+=200px top-=200px",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      rs22tl.to(".rs22--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });
    });

    mm.add("(max-width: 640px)", () => {
      const aug21tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".aug21--playground__wrapper--outer",
          start: "top-=700px center",
          end: "bottom+=100px top",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      aug21tl.to(".aug21--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const carnival21tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".carnival21--playground__wrapper--outer",
          start: "top-=700px center",
          end: "bottom+=100px top",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      carnival21tl.to(".carnival21--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const jan22tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".jan22--playground__wrapper--outer",
          start: "top-=700px center",
          end: "bottom+=100px top",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      jan22tl.to(".jan22--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const clwtl = gsap.timeline({
        scrollTrigger: {
          trigger: ".clw--playground__wrapper--outer",
          start: "top-=700px center",
          end: "bottom+=100px top",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      clwtl.to(".clw--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });

      const rs22tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".rs22--playground__wrapper--outer",
          start: "top-=700px center",
          end: "bottom+=100px top",
          scrub: true,
          pin: true,
          markers: true,
        },
      });

      rs22tl.to(".rs22--playground__wrapper--inner", {
        duration: 10,
        rotateY: -360,
        rotateX: 20,
        ease: "none",
      });
    });
  }, []);

  return (
    <div
      id="project"
      className="project relative overflow-hidden flex flex-col"
    >
      <h3 className="title">Portfolio</h3>
      <div className="msg__wrapper">
        <MsgBox msg="During my uni time, I joined a bunch of STACT club events as publicity coordinator, basically my job is to design logo, poster, etc. Here are some of my creations :)" />
      </div>
      <div className="aug21 playground">
        <h3 className="subtitle">Gathering Night Aug2021</h3>
        <div className="playground__container">
          <div className="playground__wrapper--outer aug21--playground__wrapper--outer absolute">
            <div className="playground__wrapper--inner aug21--playground__wrapper--inner relative">
              {aug21Collection.map((art, index) => {
                return (
                  <div key={index} className="artwork__wrapper">
                    <Image
                      src={art.img}
                      alt={art.subtitle}
                      width={500}
                      height={500}
                      quality={100}
                    />
                    <span className="artwork__title">{art.subtitle}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="carnival21 playground">
        <h3 className="subtitle">STACT Carnival 2021</h3>
        <div className="playground__container">
          <div className="playground__wrapper--outer carnival21--playground__wrapper--outer absolute">
            <div className="playground__wrapper--inner carnival21--playground__wrapper--inner relative">
              {carnival21Collection.map((art, index) => {
                return (
                  <div key={index} className="artwork__wrapper">
                    <Image
                      src={art.img}
                      alt={art.subtitle}
                      width={500}
                      height={500}
                      quality={100}
                    />
                    <span className="artwork__title">{art.subtitle}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="jan22 playground">
        <h3 className="subtitle">Gathering Night Jan2022</h3>
        <div className="playground__container">
          <div className="playground__wrapper--outer jan22--playground__wrapper--outer absolute">
            <div className="playground__wrapper--inner jan22--playground__wrapper--inner relative">
              {jan22Collection.map((art, index) => {
                return (
                  <div key={index} className="jan22--artwork__wrapper">
                    <Image
                      src={art.img}
                      alt={art.subtitle}
                      width={500}
                      height={500}
                      quality={100}
                    />
                    <span className="artwork__title">{art.subtitle}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="clw playground">
        <h3 className="subtitle">Cupid Last Wish</h3>
        <div className="playground__container">
          <div className="playground__wrapper--outer clw--playground__wrapper--outer absolute">
            <div className="playground__wrapper--inner clw--playground__wrapper--inner relative">
              {clwCollection.map((art, index) => {
                return (
                  <div key={index} className="clw--artwork__wrapper">
                    <Image
                      src={art.img}
                      alt={art.subtitle}
                      width={500}
                      height={500}
                      quality={100}
                    />
                    <span className="artwork__title">{art.subtitle}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="rs22 playground">
        <h3 className="subtitle">Rendering Service 2022</h3>
        <div className="playground__container">
          <div className="playground__wrapper--outer rs22--playground__wrapper--outer absolute">
            <div className="playground__wrapper--inner rs22--playground__wrapper--inner relative">
              {rs22Collection.map((art, index) => {
                return (
                  <div key={index} className="artwork__wrapper">
                    <Image
                      src={art.img}
                      alt={art.subtitle}
                      width={500}
                      height={500}
                      quality={100}
                    />
                    <span className="artwork__title">{art.subtitle}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
