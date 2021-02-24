import React from "react";
import PropTypes from "prop-types";
import Card from "../card";

const Board = ({ disabled, cards, flipped, solved, handleClick }) => {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          type={card.type}
          width={100}
          height={100}
          flipped={flipped.includes(card.id)}
          solved={solved.includes(card.id)}
          handleClick={handleClick}
          disabled={disabled || solved.includes(card.id)}
        />
      ))}
    </div>
  );
};

export default Board;

Board.propType = {
  disabled: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
  solved: PropTypes.arrayOf(PropTypes.number).isRequired
};
