import React, { useState, useEffect, useCallback } from "react";
import "./header.css";

export default function Header(props) {
  const [highestScore, setHighestScore] = useState(0);

  const countScore = useCallback(() => {
    const scoreArray = props.displayCards.filter((item) => item.clicked === true);
    if (scoreArray.length > highestScore) {
      setHighestScore((prevHighestScore) => (prevHighestScore = scoreArray.length));
    }
    return scoreArray.length;
  }, [props.displayCards, highestScore]);

  useEffect(() => {
    countScore();
  }, [props.displayCard, countScore]);

  return (
    <div className="header">
      <div className="score-wrapper">
        <div className="current-score">Score: {countScore()}</div>
        <div className="highest-score">Highscore: {highestScore}</div>
      </div>
      <div className="title">Memory Card</div>
      <button className="theme-picker">Theme Picker</button>
    </div>
  );
}
