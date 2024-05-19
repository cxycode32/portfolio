import React, { useState, useEffect } from "react";
import "./styles/cursor.css";

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const HandleMouseMove = (e: any) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    useEffect(() => {
      setIsPointer(
        window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
      );
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", HandleMouseMove);
    return () => {
      window.removeEventListener("mousemove", HandleMouseMove);
    };
  }, []);

  const cursorSize = isPointer ? 0 : 30;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={`cursor ${isPointer ? " pointer" : ""}`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    ></div>
  );
};
