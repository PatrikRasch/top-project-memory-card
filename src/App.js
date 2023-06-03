import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Level from "./components/Level.js";
import Card from "./components/Card.js";
import { v4 as uuidv4 } from "uuid";

import python from "./images/python1.png";
import c from "./images/c1.png";
import java from "./images/java1.png";
import javascript from "./images/javascript1.png";
import cPlusPlus from "./images/c++1.png";
import cSharp from "./images/cSharp2.svg";
import php from "./images/php1.png";
import ruby from "./images/ruby1.png";
import typescript from "./images/typescript1.png";
import haskell from "./images/haskell1.png";
import react from "./images/react1.png";
import sql from "./images/sql1.png";
import swift from "./images/swift1.png";
import rust from "./images/rust1.png";
import fSharp from "./images/fSharp1.png";
import golang from "./images/golang1.png";
import angular from "./images/angular1.png";

export default function App() {
  const initialArray = [
    { title: "Python", image: python },
    { title: "C", image: c },
    { title: "Java", image: java },
    { title: "JavaScript", image: javascript },
    { title: "C++", image: cPlusPlus },
    { title: "C#", image: cSharp },
    { title: "PHP", image: php },
    { title: "Ruby", image: ruby },
    { title: "TypeScript", image: typescript },
    { title: "Haskell", image: haskell },
    { title: "React", image: react },
    { title: "SQL", image: sql },
    { title: "Swift", image: swift },
    { title: "Rust", image: rust },
    { title: "F#", image: fSharp },
    { title: "Goland", image: golang },
    { title: "Angular", image: angular },
  ].map((item) => ({ ...item, clicked: false, id: uuidv4() }));

  const [allCards, setAllCards] = useState(initialArray);
  const [displayCards, setDisplayCards] = useState([]);

  const [level, setLevel] = useState(1);

  const nextLevelAddCards = useCallback(() => {
    const toBeMoved = allCards.slice(0, 5);
    const toRemain = allCards.slice(5);
    setDisplayCards((prevDisplayCards) => [...prevDisplayCards, ...toBeMoved]);
    setAllCards(toRemain);
  }, [allCards]);

  if (displayCards.length === 0) nextLevelAddCards();

  const nextLevelUpdateLevel = () => {
    setLevel((prevLevel) => prevLevel + 1);
  };

  const cardClicked = (id) => {
    const clickedItem = displayCards.find((item) => item.id === id);
    if (clickedItem.clicked === true) {
      resetGame();
      return false;
    }
    setDisplayCards((prevDisplayCards) => {
      return prevDisplayCards.map((item) => {
        if (item.id === id) {
          return { ...item, clicked: true };
        }
        return item;
      });
    });
  };

  const resetGame = () => {
    setDisplayCards([]);
    setAllCards(initialArray);
    setLevel(0);
  };

  const checkIfAllCardsClicked = useCallback(() => {
    if (!displayCards.every((item) => item.clicked === true)) return false;
    else {
      nextLevelAddCards();
      nextLevelUpdateLevel();
    }
  }, [displayCards, nextLevelAddCards]);

  const randomOrderMix = () => {
    setDisplayCards((prevDisplayCards) => {
      const mixedCards = [...prevDisplayCards];
      mixedCards.sort(() => Math.random() - 0.5);
      return mixedCards;
    });
  };

  useEffect(() => {
    if (displayCards.length > 0) {
      checkIfAllCardsClicked();
    }
  }, [displayCards, checkIfAllCardsClicked]);

  return (
    <div className="lol">
      <Header displayCards={displayCards} />
      <Level level={level} />
      <div className="cards">
        {displayCards.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            clicked={item.clicked}
            cardClicked={cardClicked}
            randomOrderMix={randomOrderMix}
          />
        ))}
      </div>
    </div>
  );
}

//- LAYOUT
/// HEADER:      SCORES  |   TITLE/LOGO  |   THEME PICKER
/// BELOW:                  LEVEL SHOWER
/// MAIN:           CARDS CARDS CARDS CARDS CARDS
/// MAIN:           CARDS CARDS CARDS CARDS CARDS
/// MAIN:           CARDS CARDS CARDS CARDS CARDS
/// MAIN:           CARDS CARDS CARDS CARDS CARDS
/// MAIN:           CARDS CARDS CARDS CARDS CARDS

//- ODIN TEXT
/// App should include a scoreboard
///   - Should count the current score
///   - Keep track of a "Best Score", which shows the best score the user has achieved so far
/// Need a couple of cards (+++) that display images + optional informational text
/// Every time a user clicks a card, a function should shuffle the cards in a random order
///   - Invoke this function when the component mounts

//- THEMES
//- Can have 2-3 different modes with separate topics
/// 1. Programming languages (& frameworks on higher levels)
/// 2. Countries
/// 3. Harry Potter characters
/// 4. Numbers
/// 5. JavaScript attributes
/// 6. Companies

//- NOTES & GAME STRUCTURE
/// Make levels, starting with 5 things, adding 5 more things each time
///   - Items follow on to next round and should not be re-clicked
/// Picture on top, short text underneath
/// Each picture takes up a portion of vw
/// Keep a coherent background color on the cards
/// 1 or 10 points per new card clicked
/// Keep score (current score & best score) in the header section to save space

//- COMPONENTS I NEED
/// 1. HEADER
///   - Contains Scores, Title/Logo and Theme Picker
/// 2. Level shower
/// 3. Card
