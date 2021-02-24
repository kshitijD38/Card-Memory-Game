import "./styles.css";
import React, { useEffect, useState } from "react";
// import Card from "./components/card";
import Board from "./components/board";
import initializeDeck from "./deck";

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCards(initializeDeck());
    // preloadImages();
  }, []);

  useEffect(() => {
    preloadImages();
  }, [cards]);

  const handleClick = (id) => {
    setDisabled(true);
    if (flipped.length === 0) {
      setFlipped([id]);
      setDisabled(false);
    } else {
      if (sameCardClicked(id)) return;
      setFlipped([flipped[0], id]);
      if (isMatch(id)) {
        setSolved([...solved, flipped[0], id]);
        resetCards();
      } else {
        setTimeout(resetCards, 2000);
      }
    }
    // setFlipped([...flipped, id]);
  };

  const preloadImages = () => {
    cards.map((card) => {
      const src = `/img/${card.type}.png`;
      new Image().src = src;
    });
  };

  const resetCards = () => {
    setFlipped([]);
    setDisabled(false);
  };

  const sameCardClicked = (id) => flipped.includes(id);

  const isMatch = (id) => {
    const clickedCard = cards.find((card) => card.id === id);
    const flippedCard = cards.find((card) => flipped[0] === card.id);
    return flippedCard.type === clickedCard.type;
  };

  return (
    <div className="App">
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
    </div>
  );
}
