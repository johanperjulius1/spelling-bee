import styles from "./game-controls.module.css";

export function ActionButtons({ onShuffle, userInput, setUserInput, hasErrors }) {
  const deleteLastLetter = () => {
    setUserInput((prev) => prev.slice(0, -1));
  };
  return (
    <div className={styles["action-buttons-container"]}>
      <button className={styles["action-button"]} onClick={deleteLastLetter}>
        Delete
      </button>
      <button className={styles["action-button"]} onClick={onShuffle}>
        Shuffle
      </button>
      <button className={styles["action-button"]} disabled={hasErrors || !userInput}>Enter</button>
    </div>
  );
}
