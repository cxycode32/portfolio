import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";
import "../styles/playground.css";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);

export interface CollectionProps {
  subtitle: string;
  img: string;
  msg: string;
}

interface PlaygroundProps {
  id: string;
  title: string;
  collection: CollectionProps[];
}

export const Playground: React.FC<PlaygroundProps> = ({
  id,
  title,
  collection,
}) => {
  useGSAP(() => {
    const aug21tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".aug21 .playground__wrapper--outer",
        start: "top center-=200px",
        end: "bottom+=200px top-=200px",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    aug21tl.to(".aug21 .playground__wrapper--inner", {
      duration: 10,
      rotateY: -360,
      rotateX: 30,
      ease: "none",
    });

    const carnival21tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".carnival21 .playground__wrapper--outer",
        start: "top center-=200px",
        end: "bottom+=200px top-=200px",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    carnival21tl.to(".carnival21 .playground__wrapper--inner", {
      duration: 10,
      rotateY: -360,
      rotateX: 30,
      ease: "none",
    });
  }, []);

  return (
    <div id={id} className="playground relative overflow-hidden flex flex-col">
      <h3 className="title">Portfolio</h3>
      <div className="aug21 playground__container">
        <div>
          <div className="playground__wrapper--outer absolute">
            <div className="playground__wrapper--inner relative">
              {collection.map((art, index) => {
                return (
                  <div key={index} className="artwork__wrapper">
                    <Image
                      src={art.img}
                      alt={art.subtitle}
                      width={500}
                      height={500}
                      quality={100}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="carnival21 playground__container">
        <div>
          <div className="playground__wrapper--outer absolute">
            <div className="playground__wrapper--inner relative">
              {collection.map((art, index) => {
                return (
                  <div key={index} className="artwork__wrapper">
                    <Image
                      src={art.img}
                      alt={art.subtitle}
                      width={500}
                      height={500}
                      quality={100}
                    />
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
