import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Level from "./components/Level.js";
import Card from "./components/Card.js";
import { v4 as uuidv4 } from "uuid";

import python from "./images/programming/python1.png";
import c from "./images/programming/c1.png";
import java from "./images/programming/java1.png";
import javascript from "./images/programming/javascript1.png";
import cPlusPlus from "./images/programming/c++1.png";
import cSharp from "./images/programming/cSharp2.svg";
import php from "./images/programming/php1.png";
import ruby from "./images/programming/ruby1.png";
import typescript from "./images/programming/typescript1.png";
import haskell from "./images/programming/haskell1.png";
import react from "./images/programming/react1.png";
import sql from "./images/programming/sql1.png";
import swift from "./images/programming/swift1.png";
import rust from "./images/programming/rust1.png";
import fSharp from "./images/programming/fSharp1.png";
import golang from "./images/programming/golang1.png";
import angular from "./images/programming/angular1.png";
import lua from "./images/programming/lua1.svg";
import matlab from "./images/programming/matlab1.png";
import powershell from "./images/programming/powershell1.svg";
import r from "./images/programming/r1.png";
import vue from "./images/programming/vue1.svg";
import dart from "./images/programming/dart1.png";
import docker from "./images/programming/docker1.png";
import kotlin from "./images/programming/kotlin1.png";
import scratch from "./images/programming/scratch1.png";

import afghanistan from "./images/countries/afghanistan1.png";
import argentina from "./images/countries/argentina1.png";
import australia from "./images/countries/australia1.png";
import austria from "./images/countries/austria1.png";
import brazil from "./images/countries/brazil1.png";
import bulgaria from "./images/countries/bulgaria1.png";
import canada from "./images/countries/canada1.png";
import chile from "./images/countries/chile1.png";
import china from "./images/countries/china1.png";
import denmark from "./images/countries/denmark1.png";
import estonia from "./images/countries/estonia1.png";
import finland from "./images/countries/finland1.png";
import france from "./images/countries/france1.png";
import georgia from "./images/countries/georgia1.png";
import germany from "./images/countries/germany1.png";
import greece from "./images/countries/greece1.png";
import hungary from "./images/countries/hungary1.png";
import iceland from "./images/countries/iceland1.png";
import india from "./images/countries/india1.png";
import ireland from "./images/countries/ireland1.png";
import italy from "./images/countries/italy1.png";
import japan from "./images/countries/japan1.png";
import latvia from "./images/countries/latvia1.png";
import lithuania from "./images/countries/lithuania1.png";
import mexico from "./images/countries/mexico1.png";
import moldova from "./images/countries/moldova1.png";
import netherlands from "./images/countries/netherlands1.png";
import newzealand from "./images/countries/newzealand1.png";
import northkorea from "./images/countries/northkorea1.png";
import norway from "./images/countries/norway1.png";
import philippines from "./images/countries/philippines1.png";
import poland from "./images/countries/poland1.png";
import portugal from "./images/countries/portugal1.png";
import romania from "./images/countries/romania1.png";
import russia from "./images/countries/russia1.png";
import saudiarabia from "./images/countries/saudiarabia1.png";
import spain from "./images/countries/spain1.png";
import sweden from "./images/countries/sweden1.png";
import switzerland from "./images/countries/switzerland1.png";
import uk from "./images/countries/uk1.png";
import ukraine from "./images/countries/ukraine1.png";
import us from "./images/countries/us1.png";
import mongolia from "./images/countries/mongolia1.png";
import turkey from "./images/countries/turkey1.png";
import bolivia from "./images/countries/bolivia1.png";
import cambodia from "./images/countries/cambodia1.png";
import droc from "./images/countries/droc1.png";
import kenya from "./images/countries/kenya1.png";
import laos from "./images/countries/laos1.png";
import malawi from "./images/countries/malawi1.png";
import mozambique from "./images/countries/mozambique1.png";
import nepal from "./images/countries/nepal1.png";
import senegal from "./images/countries/senegal1.png";
import southafrica from "./images/countries/southafrica1.png";
import vietnam from "./images/countries/vietnam1.png";

import ant from "./images/animals/ant1.png";
import baldEagle from "./images/animals/baldEagle1.png";
import bear from "./images/animals/bear1.png";
import beaver from "./images/animals/beaver1.png";
import bunny from "./images/animals/bunny1.png";
import capybara from "./images/animals/capybara1.png";
import cat from "./images/animals/cat1.png";
import cheetah from "./images/animals/cheetah1.png";
import chicken from "./images/animals/chicken1.png";
import chimpanzee from "./images/animals/chimpanzee1.png";
import cow from "./images/animals/cow1.png";
import crocodile from "./images/animals/crocodile1.png";
import dog from "./images/animals/dog1.png";
import duck from "./images/animals/duck1.png";
import elephant from "./images/animals/elephant1.png";
import elk from "./images/animals/elk1.png";
import ferret from "./images/animals/ferret1.png";
import fox from "./images/animals/fox1.png";
import giraffe from "./images/animals/giraffe1.png";
import gorilla from "./images/animals/gorilla1.png";
import hamster from "./images/animals/hamster1.png";
import hedgehog from "./images/animals/hedgehog1.png";
import honeybee from "./images/animals/honeybee1.png";
import horse from "./images/animals/horse1.png";
import jaguar from "./images/animals/jaguar1.png";
import kangaroo from "./images/animals/kangaroo1.png";
import lion from "./images/animals/lion1.png";
import lizard from "./images/animals/lizard1.png";
import lynx from "./images/animals/lynx1.png";
import meerkat from "./images/animals/meerkat1.png";
import monkey from "./images/animals/monkey1.png";
import moose from "./images/animals/moose1.png";
import orca from "./images/animals/orca1.png";
import ostrich from "./images/animals/ostrich1.png";
import owl from "./images/animals/owl1.png";
import panda from "./images/animals/panda1.png";
import parrot from "./images/animals/parrot1.png";
import penguin from "./images/animals/penguin1.png";
import pig from "./images/animals/pig1.png";
import polarBear from "./images/animals/polarBear1.png";
import rhino from "./images/animals/rhino1.png";
import seal from "./images/animals/seal1.png";
import shark from "./images/animals/shark1.png";
import sheep from "./images/animals/sheep1.png";
import snake from "./images/animals/snake1.png";
import tiger from "./images/animals/tiger1.png";
import tortoise from "./images/animals/tortoise1.png";
import whale from "./images/animals/whale1.png";
import wolf from "./images/animals/wolf1.png";
import zebra from "./images/animals/zebra1.png";

export default function App() {
  const animalsArray = [
    { title: "Ant", image: ant },
    { title: "Eagle", image: baldEagle },
    { title: "Bear", image: bear },
    { title: "Beaver", image: beaver },
    { title: "Bunny", image: bunny },
    { title: "Capybara", image: capybara },
    { title: "Cat", image: cat },
    { title: "Cheetah", image: cheetah },
    { title: "Chicken", image: chicken },
    { title: "Chimpanzee", image: chimpanzee },
    { title: "Cow", image: cow },
    { title: "Crocodile", image: crocodile },
    { title: "Dog", image: dog },
    { title: "Duck", image: duck },
    { title: "Elpehant", image: elephant },
    { title: "Elk", image: elk },
    { title: "Ferret", image: ferret },
    { title: "Fox", image: fox },
    { title: "Giraffe", image: giraffe },
    { title: "Gorilla", image: gorilla },
    { title: "Hamster", image: hamster },
    { title: "Hedgehog", image: hedgehog },
    { title: "Honeybee", image: honeybee },
    { title: "Horse", image: horse },
    { title: "Jaguar", image: jaguar },
    { title: "Kangaroo", image: kangaroo },
    { title: "Lion", image: lion },
    { title: "Lizard", image: lizard },
    { title: "Lynx", image: lynx },
    { title: "Meerkat", image: meerkat },
    { title: "Monkey", image: monkey },
    { title: "Moose", image: moose },
    { title: "Orca", image: orca },
    { title: "Ostrich", image: ostrich },
    { title: "Owl", image: owl },
    { title: "Panda", image: panda },
    { title: "Parrot", image: parrot },
    { title: "Penguin", image: penguin },
    { title: "Pig", image: pig },
    { title: "Polar Bear", image: polarBear },
    { title: "Rhino", image: rhino },
    { title: "Seal", image: seal },
    { title: "Shark", image: shark },
    { title: "Sheep", image: sheep },
    { title: "Snake", image: snake },
    { title: "Tiger", image: tiger },
    { title: "Tortoise", image: tortoise },
    { title: "Whale", image: whale },
    { title: "Wolf", image: wolf },
    { title: "Zebra", image: zebra },
  ].map((item) => ({ ...item, clicked: false, id: uuidv4() }));
  const programmingArray = [
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
    { title: "Lua", image: lua },
    { title: "Matlab", image: matlab },
    { title: "Powershell", image: powershell },
    { title: "R", image: r },
    { title: "Vue", image: vue },
    { title: "Dart", image: dart },
    { title: "Docker", image: docker },
    { title: "Kotlin", image: kotlin },
    { title: "Scratch", image: scratch },
  ].map((item) => ({ ...item, clicked: false, id: uuidv4() }));
  const countryArray = [
    { title: "Afghanistan", image: afghanistan },
    { title: "Argentina", image: argentina },
    { title: "Australia", image: australia },
    { title: "Austria", image: austria },
    { title: "Brazil", image: brazil },
    { title: "Bulgaria", image: bulgaria },
    { title: "Canada", image: canada },
    { title: "Chile", image: chile },
    { title: "China", image: china },
    { title: "Denmark", image: denmark },
    { title: "Estonia", image: estonia },
    { title: "Finland", image: finland },
    { title: "France", image: france },
    { title: "Georgia", image: georgia },
    { title: "Germany", image: germany },
    { title: "Greece", image: greece },
    { title: "Hungary", image: hungary },
    { title: "Iceland", image: iceland },
    { title: "India", image: india },
    { title: "Ireland", image: ireland },
    { title: "Italy", image: italy },
    { title: "Japan", image: japan },
    { title: "Latvia", image: latvia },
    { title: "Lithuania", image: lithuania },
    { title: "Mexico", image: mexico },
    { title: "Moldova", image: moldova },
    { title: "Netherlands", image: netherlands },
    { title: "New Zealand", image: newzealand },
    { title: "North Korea", image: northkorea },
    { title: "Norway", image: norway },
    { title: "Philippines", image: philippines },
    { title: "Poland", image: poland },
    { title: "Portugal", image: portugal },
    { title: "Romania", image: romania },
    { title: "Russia", image: russia },
    { title: "Saudi Arabia", image: saudiarabia },
    { title: "Spain", image: spain },
    { title: "Sweden", image: sweden },
    { title: "Switzerland", image: switzerland },
    { title: "United Kingdom", image: uk },
    { title: "Ukraine", image: ukraine },
    { title: "United States", image: us },
    { title: "Mongolia", image: mongolia },
    { title: "Turkey", image: turkey },
    { title: "Bolivia", image: bolivia },
    { title: "Cambodia", image: cambodia },
    { title: "DRC", image: droc },
    { title: "Kenya", image: kenya },
    { title: "Laos", image: laos },
    { title: "Malawi", image: malawi },
    { title: "Mozambique", image: mozambique },
    { title: "Nepal", image: nepal },
    { title: "Senegal", image: senegal },
    { title: "South Africa", image: southafrica },
    { title: "Vietnam", image: vietnam },
  ].map((item) => ({ ...item, clicked: false, id: uuidv4() }));

  programmingArray.sort(() => Math.random() - 0.5);
  countryArray.sort(() => Math.random() - 0.5);
  animalsArray.sort(() => Math.random() - 0.5);

  const [currentCards, setCurrentCards] = useState(programmingArray);
  const [displayCards, setDisplayCards] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(1);

  const [level, setLevel] = useState(1);
  const [showLevel, setShowLevel] = useState(false);

  const themeSelector = (selected) => {
    if (selected === 1) {
      if (currentTheme === 1) return;
      setCurrentTheme(1);
      setCurrentCards(programmingArray.slice(5));
      setDisplayCards(programmingArray.slice(0, 5));
    }
    if (selected === 2) {
      if (currentTheme === 2) return;
      setCurrentTheme(2);
      setCurrentCards(countryArray.slice(5));
      setDisplayCards(countryArray.slice(0, 5));
    }
    if (selected === 3) {
      if (currentTheme === 3) return;
      setCurrentTheme(3);
      setCurrentCards(animalsArray.slice(5));
      setDisplayCards(animalsArray.slice(0, 5));
    }
    setLevel(1);
  };

  const randomOrderMix = () => {
    setDisplayCards((prevDisplayCards) => {
      const mixedCards = [...prevDisplayCards];
      mixedCards.sort(() => Math.random() - 0.5);
      return mixedCards;
    });
  };

  const nextLevelAddCards = useCallback(() => {
    currentCards.sort(() => Math.random() - 0.5);
    const toBeMoved = currentCards.slice(0, 5);
    if (toBeMoved.length === 0)
      return alert("Congratulations, you beat the game. I'm out of cards. The game will now reset.");
    const toRemain = currentCards.slice(5);
    setDisplayCards((prevDisplayCards) => [...prevDisplayCards, ...toBeMoved]);
    setCurrentCards(toRemain);
    randomOrderMix();
  }, [currentCards]);

  if (displayCards.length === 0) nextLevelAddCards();

  const nextLevelUpdateLevel = () => {
    setShowLevel(true);
    setTimeout(() => {
      setLevel((prevLevel) => prevLevel + 1);
    }, 750);
    setTimeout(() => {
      setShowLevel(false);
    }, 1500);
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
    setDisplayCards([]); // remove all cards from the display
    if (currentTheme === 1) setCurrentCards(programmingArray);
    if (currentTheme === 2) setCurrentCards(countryArray);
    if (currentTheme === 3) setCurrentCards(animalsArray);
    setLevel(1); // reset the level counter
  };

  /// const [currentCards, setCurrentCards] = useState(programmingArray);
  /// const [displayCards, setDisplayCards] = useState([]);
  /// const [currentTheme, setCurrentTheme] = useState(1);

  const checkIfcurrentCardsClicked = useCallback(() => {
    if (!displayCards.every((item) => item.clicked === true)) return false;
    else {
      nextLevelAddCards();
      if (currentCards.length === 0) return resetGame();
      nextLevelUpdateLevel();
    }
  }, [displayCards, nextLevelAddCards]);

  useEffect(() => {
    if (displayCards.length > 0) {
      checkIfcurrentCardsClicked();
    }
  }, [displayCards, checkIfcurrentCardsClicked]);

  return (
    <div className="lol">
      <Header displayCards={displayCards} themeSelector={themeSelector} />
      <Level level={level} />
      <div className={`level-update ${showLevel ? "show-level-update" : ""}`}>LEVEL {level}</div>
      <div className={`level-update-background ${showLevel ? "show-level-update-background" : ""}`}></div>
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
