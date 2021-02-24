import React from "react";
import "./style.css";
import PropTypes from "prop-types";

export default function Card({
  handleClick,
  id,
  flipped,
  solved,
  type,
  height,
  width,
  disabled
}) {
  return (
    <div
      className={`flip-container ${flipped ? "flipped" : ""}`}
      style={{ width, height }}
      onClick={() => (disabled ? null : handleClick(id))}
    >
      <div className="filpper">
        <img
          style={{ height, width }}
          className={flipped ? "front" : "back"}
          src={flipped || solved ? `/img/${type}.png` : `/img/back.png`}
        />
      </div>
    </div>
  );
}
