import "./styles.css";
import React, { useEffect, useState, useRef } from "react";
// import Card from "./components/card";
import Board from "./components/board";
import initializeDeck from "./deck";
import Timer from "./Timer";

export default function App() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  // const [timer, setTimer] = useState(false);

  useEffect(() => {
    setCards(initializeDeck());
    startGame();
  }, []);
  function startGame() {
    setIsActive(true);
  }

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
        setTimeout(resetCards, 1000);
      }
    }
    console.log("solved is -----", solved);
    // setFlipped([...flipped, id]);
  };

  console.log("solved is ======", solved);

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

  console.log("fliped is ", flipped);
  console.log(cards);

  return (
    <div className="App">
      {/* <button onClick={startGame}>Start</button> */}
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
        disabled={disabled}
        solved={solved}
      />
      <span>
        <p>{solved.length === 16 ? `congrats you won in` : ""}</p>
        <Timer isActive={isActive} solved={solved} />
      </span>
    </div>
  );
}
