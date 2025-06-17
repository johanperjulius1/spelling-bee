import GameControls from "./GameControls/GameControls";
import PointSection from "./PointSection/PointSection";
import styles from "./game.module.css";

export default function Game() {

  return (
    <main className={styles.game}>
      <section className={styles["game-section"]}>
        <GameControls />
        <PointSection />
      </section>
    </main>
  );
}
