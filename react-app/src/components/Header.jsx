import { useLocation } from "react-router-dom";
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
        {location.pathname === "/yesterday"
          ? "Yesterdays's Puzzle"
          : "Todays Puzzle"}
      </h3>
      <p>{currentGame.displayDate}</p>
      <p>Edited by {currentGame.editor}</p>

      <nav className={styles.nav}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-list__item"]}>
            {location.pathname === "/yesterday" ? (
              <a href="/">Play Todays's Puzzle</a>
            ) : (
              <a href="/yesterday">Play Yesterday's Puzzle</a>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}
