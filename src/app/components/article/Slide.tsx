"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useScrollToMiddle } from "../helper/Helper";
import { SkillBox } from "./SkillBox";
import { MsgBox } from "./MsgBox";
import "../styles/slide.css";
import "../styles/smiley.css";

export interface SkillBoxProps {
  txt: string;
  msg: string;
}

interface SlideProps {
  id: string;
  section: string;
  skillbox: SkillBoxProps[];
  title: string;
  subtitle: string;
  img: string;
  msg: string;
  date: string[];
  desc: string[];
  heading: string;
}

export const Slide: React.FC<SlideProps> = ({
  id,
  section,
  skillbox,
  title,
  subtitle,
  img,
  msg,
  date,
  desc,
  heading,
}) => {
  const [isRevealActive, setIsRevealActive] = useState(false);
  const revealRef = useRef<HTMLDivElement>(null);

  useScrollToMiddle(revealRef, () => setIsRevealActive(true));

  return (
    <section id={id} className={`slide relative overflow-hidden`}>
      <div className="slide__wrapper overflow-hidden">
        <h3 className="slide__title">{section}</h3>
        <div className="smiley__wrapper">
          <div className="smiley--eye1"></div>
          <div className="smiley--eye2"></div>
          <div className="smiley--eye3"></div>
          <div className="smiley--eye4"></div>
          <div className="smiley-smiley"></div>
        </div>
        <div className="slide__content overflow-hidden">
          {/* row 1 */}
          <div className="col-1">
            <div className="skillbox skillbox-1">
              <SkillBox txt={skillbox[0].txt} msg={skillbox[0].msg} />
            </div>
          </div>
          <div className="col-2 pt-4"></div>
          <div className="col-3 flex justify-center">
            <div className="timeline alt"></div>
          </div>
          <div className="col-4 pt-4">
            <div
              ref={revealRef}
              className={`block-reveal ${
                isRevealActive ? "block-reveal--active" : ""
              }`}
            >
              <span className="block-reveal__block"></span>
              <h4 className="block-reveal__text software-engineer font-source_code_pro font-bold">
                <strong>{title}</strong>
              </h4>
            </div>
            <Image
              src={img}
              width={200}
              height={200}
              quality={100}
              alt="Beautiful and wonderful people"
              className="slide__image image--work-1"
            />
            <div className="msg msg-1">
              <MsgBox msg={msg} />
            </div>
          </div>

          {/* row 2 */}
          <div className="col-1">
            <div className="skillbox skillbox-2">
              <SkillBox txt={skillbox[1].txt} msg={skillbox[1].msg} />
            </div>
          </div>
          <div className="col-2"></div>
          <div className="col-3 flex justify-center">
            <div className="timeline alt"></div>
          </div>
          <div className="col-4">
            <div
              ref={revealRef}
              className={`block-reveal ${
                isRevealActive ? "block-reveal--active" : ""
              }`}
            >
              <span className="block-reveal__block"></span>
              <p className="block-reveal__text company__name font-ubuntu font-medium">
                {subtitle}
              </p>
            </div>
          </div>

          {/* row 3 */}
          <div className="col-1">
            <div className="skillbox skillbox-3">
              <SkillBox txt={skillbox[2].txt} msg={skillbox[2].msg} />
            </div>
          </div>
          <div className="col-2">
            <div className="bullet--1"></div>
            <p className="date">{date[0]}</p>
          </div>
          <div className="col-3 flex justify-center">
            <div className="timeline alt"></div>
          </div>
          <div className="col-4">
            <ul className="desc">
              <li>{desc[0]}</li>
              <li>{desc[1]}</li>
              <li>{desc[2]}</li>
            </ul>
          </div>

          {/* row 4 */}
          <div className="col-1">
            <div className="skillbox skillbox-4">
              <SkillBox txt={skillbox[3].txt} msg={skillbox[3].msg} />
            </div>
          </div>
          <div className="col-2">
            <div className="bullet--2"></div>
            <p className="date">{date[1]}</p>
          </div>
          <div className="col-3 flex justify-center">
            <div className="timeline alt"></div>
          </div>
          <div className="col-4">
            <ul className="desc">
              <li>{desc[3]}</li>
              <li>{desc[4]}</li>
              <li>{desc[5]}</li>
            </ul>
          </div>

          {/* row 5 */}
          <div className="col-1">
            <div className="skillbox skillbox-5">
              <SkillBox txt={skillbox[4].txt} msg={skillbox[4].msg} />
            </div>
          </div>
          <div className="col-2">
            <div className="bullet--3"></div>
            <p className="date">{date[2]}</p>
          </div>
          <div className="col-3 flex justify-center">
            <div className="timeline alt"></div>
          </div>
          <div className="col-4 items-end">
            <h4 className="software-engineer font-source_code_pro font-bold">
              <strong>{heading}</strong>
            </h4>
          </div>

          {/* row 6 */}
          <div className="col-1">
            <div className="skillbox skillbox-6">
              <SkillBox txt={skillbox[5].txt} msg={skillbox[5].msg} />
            </div>
          </div>
          <div className="col-2">
            <div className="bullet--4"></div>
            <p className="date">{date[3]}</p>
          </div>
          <div className="col-3 flex justify-center">
            <div className="timeline alt"></div>
          </div>
          <div className="col-4 items-start">
            <ul className="desc">
              <li>{desc[6]}</li>
              {desc[7] ? <li>{desc[7]}</li> : ""}
            </ul>
          </div>
        </div>
        <div className="skillbox-container mt-6">
          <div className="skillbox-box">
            <SkillBox txt={skillbox[0].txt} msg={skillbox[0].msg} />
          </div>
          <div className="skillbox-box">
            <SkillBox txt={skillbox[1].txt} msg={skillbox[1].msg} />
          </div>
          <div className="skillbox-box">
            <SkillBox txt={skillbox[2].txt} msg={skillbox[2].msg} />
          </div>
          <div className="skillbox-box">
            <SkillBox txt={skillbox[3].txt} msg={skillbox[3].msg} />
          </div>
          <div className="skillbox-box">
            <SkillBox txt={skillbox[4].txt} msg={skillbox[4].msg} />
          </div>
          <div className="skillbox-box">
            <SkillBox txt={skillbox[5].txt} msg={skillbox[5].msg} />
          </div>
        </div>
        <h3 className="slide__title--background">{section}</h3>
      </div>
    </section>
  );
};
