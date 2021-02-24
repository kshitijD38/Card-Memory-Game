import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Card
        id={1}
        width={100}
        height={100}
        back={"./img/"}
        front={"./img"}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  );
}
