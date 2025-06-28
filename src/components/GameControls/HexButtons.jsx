import styles from "./game-controls.module.css";
import { useGame } from "../../hooks/useGame.js";

export function HexButtons({ shuffledOuterLetters, setUserInput }) {
  const { todaysGame } = useGame();
  const { centerLetter } = todaysGame;

  const handleButtonClick = (event) => {
    setUserInput((prev) => prev + event.target.textContent);
  };

  const outerButtons = shuffledOuterLetters.map((letter, idx) => (
    <div className={styles["button-container"]}>
      <button
        className={`${styles["hex-button"]} ${styles[`button-${idx + 1}`]}`}
        onClick={handleButtonClick}
        key={idx}
      >
        {letter?.toUpperCase() || ""}
      </button>
    </div>
  ));

  return (
    <div className={styles["hive"]}>
      <div className={styles["button-container"]}>
        <button
          onClick={handleButtonClick}
          className={`${styles["hex-button"]} ${styles["button-one"]}`}
        >
          {shuffledOuterLetters[0]}
        </button>
      </div>
      <div className={styles["button-container"]}>
        <button
          onClick={handleButtonClick}
          className={`${styles["hex-button"]} ${styles["button-two"]}`}
        >
          {shuffledOuterLetters[1]}
        </button>
        <button
          onClick={handleButtonClick}
          className={`${styles["hex-button"]} ${styles["center"]}`}
        >
          {centerLetter}
        </button>
        <button
          onClick={handleButtonClick}
          className={`${styles["hex-button"]} ${styles["button-three"]}`}
        >
          {shuffledOuterLetters[2]}
        </button>
      </div>
      <div className={styles["button-container"]}>
        <button
          onClick={handleButtonClick}
          className={`${styles["hex-button"]} ${styles["button-four"]}`}
        >
          {shuffledOuterLetters[3]}
        </button>
        <button
          onClick={handleButtonClick}
          className={`${styles["hex-button"]} ${styles["button-five"]}`}
        >
          {shuffledOuterLetters[4]}
        </button>
        <button
          onClick={handleButtonClick}
          className={`${styles["hex-button"]} ${styles["button-six"]}`}
        >
          {shuffledOuterLetters[5]}
        </button>
      </div>
    </div>
  );
}
