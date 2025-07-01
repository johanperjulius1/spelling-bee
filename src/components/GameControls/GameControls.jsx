import { useState, useEffect } from "react";
import { useGame } from "../../hooks/useGame.js";
import { HexButtons } from "./HexButtons.jsx";
import { ActionButtons } from "./ActionButtons.jsx";
import styles from "./game-controls.module.css";
import { WordInputForm } from "./WordInputForm.jsx";

export default function GameControls() {
  const [userInput, setUserInput] = useState("");
  const [shuffledOuterLetters, setShuffledOuterLetters] = useState([]);
  const [message, setMessage] = useState("");
  const { currentGame, loading, foundWords, addFoundWord } = useGame();
  const { validLetters, centerLetter, answers } = currentGame;

  const shuffleLetters = () => {
    const shuffled = [...shuffledOuterLetters];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledOuterLetters(shuffled);
  };

  useEffect(() => {
    if (currentGame?.outerLetters) {
      setShuffledOuterLetters([...currentGame.outerLetters]);
    }
  }, [currentGame]);

  if (loading || !currentGame) return <div>Loading...</div>;

  // Validation
  const isTooShort = userInput.length > 0 && userInput.length < 4;

  const hasInvalidLetters = userInput
    .toLowerCase()
    .split("")
    .some((letter) => !validLetters.includes(letter));

  const hasCenterLetter = userInput
    .toLowerCase()
    .includes(centerLetter.toLowerCase());
  const missingCenterLetter = userInput.length > 0 && !hasCenterLetter;

  // Combined validation
  const hasErrors = isTooShort || hasInvalidLetters || missingCenterLetter;

  // Error messages
  const getErrorMessage = () => {
    if (isTooShort) return "Word must be at least 4 letters";
    if (hasInvalidLetters) return "Word contains invalid letters";
    if (missingCenterLetter)
      return `Word must contain the center letter "${centerLetter}"`;
    return null;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (hasErrors) return;
    if (foundWords.includes(userInput.toLowerCase())) {
      setMessage("Word already found");
    } else if (!answers.includes(userInput.toLowerCase())) {
      setMessage("Not in word list");
    } else {
      addFoundWord(userInput.toLowerCase());
      setMessage("Correct! Well done!");
      setUserInput("");
    }
  };

  return (
    <section className={styles["game-controls"]}>
      <div className={styles.feedbackMessage}>
        {hasErrors ? (
          <span className={styles.errorMessage}>{getErrorMessage()}</span>
        ) : message ? (
          <span className={styles.successMessage}>{message}</span>
        ) : null}
      </div>
      <WordInputForm
        setMessage={setMessage}
        userInput={userInput}
        setUserInput={setUserInput}
        hasErrors={hasErrors}
        errorMessage={hasErrors && getErrorMessage()}
        submitHandler={submitHandler}
      ></WordInputForm>
      <HexButtons
        shuffledOuterLetters={shuffledOuterLetters}
        setShuffledOuterLetters={setShuffledOuterLetters}
        setUserInput={setUserInput}
      />
      <ActionButtons
        hasErrors={hasErrors}
        onShuffle={shuffleLetters}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </section>
  );
}
