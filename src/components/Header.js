import React, { useState, useEffect, useCallback } from "react";
import "./header.css";

export default function Header(props) {
  const [highestScore, setHighestScore] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(1);
  const [isFadeout1, setIsFadeOut1] = useState(false);
  const [isFadeout2, setIsFadeOut2] = useState(false);
  const [isFadeout3, setIsFadeOut3] = useState(false);
  const [swapTheme, setSwapTheme] = useState(false);

  const countScore = useCallback(() => {
    const scoreArray = props.displayCards.filter((item) => item.clicked === true);
    if (scoreArray.length > highestScore) {
      setHighestScore((prevHighestScore) => (prevHighestScore = scoreArray.length));
    }
    return scoreArray.length;
  }, [props.displayCards, highestScore]);

  useEffect(() => {
    countScore();
  }, [props.displayCards, countScore]);

  const handleSelectTheme = (themeNumber) => {
    if (themeNumber === selectedTheme) return;
    setSwapTheme(true);
    if (selectedTheme === 1) setIsFadeOut1(true);
    if (selectedTheme === 2) setIsFadeOut2(true);
    if (selectedTheme === 3) setIsFadeOut3(true);
    setTimeout(() => {
      props.themeSelector(themeNumber);
      setSelectedTheme(themeNumber);
      setIsFadeOut1(false);
      setIsFadeOut2(false);
      setIsFadeOut3(false);
      setSwapTheme(false);
    }, 250);
  };

  return (
    <div className="header">
      <div className="score-wrapper">
        <div className="current-score">Score: {countScore()}</div>
        <div className="highest-score">Highscore: {highestScore}</div>
      </div>
      <div className="title-wrapper">
        <div className="title-header">MEMORY CARD GAME</div>
        <div className="title-description">Click each item once</div>
      </div>

      <div className="all-themes-wrapper">
        <div
          className={`theme theme-programming ${selectedTheme === 1 ? "selected-text" : ""} ${
            swapTheme ? "swap-text" : ""
          }`}
          onClick={() => {
            handleSelectTheme(1);
          }}
        >
          Programming
          <div className={`background ${selectedTheme === 1 ? "selected" : ""} ${isFadeout1 ? "fade-out" : ""} `}></div>
        </div>

        <div
          className={`theme theme-countries ${selectedTheme === 2 ? "selected-text" : ""} ${
            swapTheme ? "swap-text" : ""
          }`}
          onClick={() => {
            handleSelectTheme(2);
          }}
        >
          Countries
          <div className={`background ${selectedTheme === 2 ? "selected" : ""} ${isFadeout2 ? "fade-out" : ""}`}></div>
        </div>

        <div
          className={`theme theme-animals ${selectedTheme === 3 ? "selected-text" : ""} ${
            swapTheme ? "swap-text" : ""
          } `}
          onClick={() => {
            handleSelectTheme(3);
          }}
        >
          Animals
          <div className={`background ${selectedTheme === 3 ? "selected" : ""} ${isFadeout3 ? "fade-out" : ""}`}></div>
        </div>
      </div>
    </div>
  );
}
