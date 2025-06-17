import styles from "./points-section.module.css";
import { useGame } from "../../hooks/useGame";

export default function PointSection() {
  const { foundWords, score } = useGame();
  const listOfWords = foundWords.map(foundWord => <li>{foundWord}</li>)
  return (
    <aside className={styles["points-container"]}>
      <div className={styles["progress-container"]}>
        <div className={`${styles.circle} ${styles.one} ${styles.active}`}>
          1
        </div>
        <div className={`${styles.circle} ${styles.two}`}>2</div>
        <div className={`${styles.circle} ${styles.three}`}>3</div>
        <div className={`${styles.circle} ${styles.four}`}>4</div>
      </div>
      <section className={styles["wordlist-container"]}>
        <h2 className={styles["wordlist-title"]}>You have found {foundWords.length} words</h2>
        <ul className={styles["wordlist-words"]}>{listOfWords}</ul>
      </section>
    </aside>
  );
}
