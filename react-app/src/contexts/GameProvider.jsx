import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GameContext } from "./GameContext.js";
import { getLatestPuzzle, getYesterdayPuzzle } from "../utils/sanityClient.js";

export function GameProvider({ children }) {
  const location = useLocation();
  const [currentGame, setCurrentGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [foundWords, setFoundWords] = useState([]);
  const [score, setScore] = useState(0);

  const calculateScore = (word) => {
    if (currentGame.pangrams.includes(word)) {
      setScore((prev) => prev + 14);
    } else if (word.length === 4) {
      setScore((prev) => prev + 1);
    } else if (word.length > 4) {
      setScore((prev) => prev + word.length);
    }
  };

  const addFoundWord = (word) => {
    setFoundWords((prev) => [...prev, word]);
    calculateScore(word);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const puzzle =
          location.pathname === "/yesterday"
            ? await getYesterdayPuzzle()
            : await getLatestPuzzle();

        if (!puzzle) {
          throw new Error("Puzzle not found");
        }

        const game = { ...puzzle, id: puzzle.puzzleId };
        setCurrentGame(game);
        setFoundWords([]);
        setScore(0);
      } catch (error) {
        console.error("Failed to fetch game data:", error);
        setCurrentGame(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location.pathname]);

  return (
    <GameContext.Provider
      value={{
        currentGame,
        loading,
        foundWords,
        addFoundWord,
        score,
        setScore,
        maxPoints: currentGame?.maxPoints || 0,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
