import { useLocation } from "react-router";
import { useGame } from "../hooks/useGame.js";
import styles from "./header.module.css";

export default function Header() {
  const location = useLocation();
  const { currentGame, loading } = useGame();

  if (loading) return <div>Loading header...</div>;

  return (
    <header className={styles.header}>
      <h1>Spelling Bee</h1>
      <h3>
        {location.pathname === "/last-week"
          ? "Last Week's Puzzle"
          : "Current weeks Puzzle"}
      </h3>
      <p>{currentGame.displayDate}</p>
      <p>Edited by {currentGame.editor}</p>

      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list__item"]}>
            {location.pathname === "/last-week" ? (
              <a href="/">Play This Week's Puzzle</a>
            ) : (
              <a href="/last-week">Play Last Week's Puzzle</a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
