import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const [inputVal, setinputVal] = React.useState("");
  const [secods, setSeconds] = React.useState(0);
  const countRef = useRef(0);
  const focusRef = useRef();
  const timerRef = useRef();

  const handleChange = (e) => {
    setinputVal(e.target.value);
    countRef.current++;
  };

  const countRenders = () => {
    //console.log(focusRef.current);
    focusRef.current.focus();
  };

  function startTimer() {
    timerRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
      countRef.current++;
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = 0;
  }

  function resetTimer() {
    stopTimer();
    countRef.current = 0;
    if (secods) {
      countRef.current = 0;
      setSeconds(0);
    }
  }
  return (
    <div className="App">
      <h1>useState useRef useEffct</h1>
      <br />
      <input
        ref={focusRef}
        type="text"
        placeholder="Random Input"
        value={inputVal}
        style={{
          borderRadius: "5px",
          outline: "none",
          border: "1px solid gray",
          padding: ".3rem",
          fontSize: "16px"
        }}
        onChange={handleChange}
      />

      <p>Renders :{countRef.current} </p>
      <button onClick={countRenders}>Focus</button>
      <br />
      <br />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <p>Secnods : {secods}</p>
      <p>
        <strong>{inputVal}</strong>
      </p>
    </div>
  );
}
