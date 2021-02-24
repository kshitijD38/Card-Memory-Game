import React from "react";
import "./style.css";

export default function Card({
  handleClick,
  id,
  flipped,
  back,
  front,
  height,
  width
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => handleClick(id)}
    >
      <div className="filpper">
        <img
          style={{ height, width }}
          className={flipped ? "front" : "back"}
          src={flipped ? front : back}
        />
      </div>
    </div>
  );
}
