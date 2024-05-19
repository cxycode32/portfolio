import { useRef, useState } from "react";
import { useScrollToMiddle } from "./Slide";
import "../styles/msgbox.css";

interface MsgBoxProps {
  msg: string;
}

export const MsgBox: React.FC<MsgBoxProps> = ({ msg }) => {
  const [isCheckActive, setIsCheckActive] = useState(false);

  const checkRef = useRef<HTMLDivElement>(null);

  useScrollToMiddle(checkRef, () => setIsCheckActive(true));

  return (
    <div className="msg__wrapper flex-center">
      <div className="msg__box flex-center">
        <span className="msg__txt">{msg}</span>
      </div>
    </div>
  );
};
