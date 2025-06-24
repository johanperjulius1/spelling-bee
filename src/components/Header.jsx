import { useGame } from "../hooks/useGame.js";
import styles from "./header.module.css";

export default function Header() {
  const { todaysGame, loading } = useGame();

  if (loading) return <div>Loading header...</div>;

  return (
    <header className={styles.header}>
      <h1>Spelling Bee</h1>
      <p>{todaysGame.displayDate}</p>
      <p>Edited by {todaysGame.editor}</p>

      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list__item"]}>
            <a href="#puzzle">Play Last weeks's Puzzle</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
