import styles from "./game-controls.module.css";
import { useGame } from "../../hooks/useGame.js";

export function HexButtons({ shuffledOuterLetters, setUserInput, setMessage }) {
  const { currentGame } = useGame();
  const { centerLetter } = currentGame;

  const handleButtonClick = (event) => {
    setMessage(null)
    setUserInput((prev) => prev + event.target.textContent);
  };

  const outerButtons = shuffledOuterLetters.map((letter, idx) => (
    <button
      className={`${styles["hex-button"]} ${styles[`button-${idx + 1}`]}`}
      onClick={handleButtonClick}
      key={idx}
    >
      {letter?.toUpperCase() || ""}
    </button>
  ));

  return (
    <div className={styles["hive"]}>
      <div className={styles["button-container"]}>{outerButtons[0]}</div>
      <div className={styles["button-container"]}>
        {outerButtons[1]}
        <button
          className={`${styles["hex-button"]} ${styles["center"]}`}
          onClick={handleButtonClick}
        >
          {centerLetter?.toUpperCase() || ""}
        </button>
        {outerButtons[2]}
      </div>
      <div className={styles["button-container"]}>
        {outerButtons[3]}
        {outerButtons[4]}
        {outerButtons[5]}
      </div>
    </div>
  );
}
