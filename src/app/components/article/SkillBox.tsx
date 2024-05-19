import { useRef, useState } from "react";
import { useScrollToMiddle } from "./Slide";
import "../styles/skillbox.css";
import "../styles/checkmark.css";

interface SkillBoxProps {
  txt: string;
  msg: string;
}

export const SkillBox: React.FC<SkillBoxProps> = ({ txt, msg }) => {
  const [isCheckActive, setIsCheckActive] = useState(false);

  const checkRef = useRef<HTMLDivElement>(null);

  useScrollToMiddle(checkRef, () => setIsCheckActive(true));

  return (
    <div className="skill__wrapper">
      <div className="skill__box">
        <div
          ref={checkRef}
          className={`checkmark__wrapper ${
            isCheckActive ? "check-reveal--active" : ""
          }`}
        >
          <div className="checkmark"></div>
        </div>
        <span className="skill__txt">{txt}</span>
        <span className="hidden__msg">{msg}</span>
      </div>
    </div>
  );
};
