import styles from "./game-controls.module.css";

export function ActionButtons({
  onShuffle,
  userInput,
  setUserInput,
  hasErrors,
  onSubmit,
  setMessage,
}) {
  const deleteLastLetter = () => {
    setUserInput((prev) => {
      const next = prev.slice(0, -1);
      if (next.length === 0) {
        setMessage(null)
      }
      return next;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <div className={styles["action-buttons-container"]}>
      <button className={styles["action-button"]} onClick={deleteLastLetter}>
        Delete
      </button>
      <button className={styles["action-button"]} onClick={onShuffle}>
        Shuffle
      </button>
      <button
        className={styles["action-button"]}
        onClick={handleSubmit}
        disabled={hasErrors || !userInput}
      >
        Enter
      </button>
    </div>
  );
}
