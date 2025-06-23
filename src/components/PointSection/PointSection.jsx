import styles from "./points-section.module.css";
import { useGame } from "../../hooks/useGame";

export default function PointSection() {
  const { foundWords, score, maxPoints } = useGame();

  const progressPercentage =
    maxPoints > 0 ? Math.min((score / maxPoints) * 100, 100) : 0;

  const calculateLevel = (currentPoints, total) => {
    if (total === 0) return 0;
    const percentage = (currentPoints / total) * 100;
    if (percentage >= 75) return 4;
    if (percentage >= 50) return 3;
    if (percentage >= 25) return 2;
    if (percentage > 0) return 1;
    return 0;
  };

  const currentLevel = calculateLevel(score, maxPoints);
  const listOfWords = foundWords.map((foundWord, index) => (
    <li key={index}>{foundWord}</li>
  ));

  return (
    <aside className={styles["points-container"]}>
      <div className={styles["progress-container"]}>
        <div
          className={styles.progress}
          style={{ width: `${progressPercentage}%` }}
        />
        <div
          className={`${styles.circle} ${styles.one} ${
            currentLevel === 1
              ? styles.active
              : currentLevel > 1
                ? styles.completed
                : ""
          }`}
        >
          {currentLevel === 1 ? score : ""}
        </div>
        <div
          className={`${styles.circle} ${styles.two} ${
            currentLevel === 2
              ? styles.active
              : currentLevel > 2
                ? styles.completed
                : ""
          }`}
        >
          {currentLevel === 2 ? score : ""}
        </div>
        <div
          className={`${styles.circle} ${styles.three} ${
            currentLevel === 3
              ? styles.active
              : currentLevel > 3
                ? styles.completed
                : ""
          }`}
        >
          {currentLevel === 3 ? score : ""}
        </div>
        <div
          className={`${styles.circle} ${styles.four} ${
            currentLevel === 4
              ? styles.active
              : currentLevel > 4
                ? styles.completed
                : ""
          }`}
        >
          {currentLevel === 4 ? score : ""}
        </div>
      </div>
      <section className={styles["wordlist-container"]}>
        <h2 className={styles["wordlist-title"]}>
          You have found {foundWords.length} words
        </h2>
        <ul className={styles["wordlist-words"]}>{listOfWords}</ul>
      </section>
    </aside>
  );
}
