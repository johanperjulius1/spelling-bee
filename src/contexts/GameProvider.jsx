import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { GameContext } from "./GameContext.js";

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
        const response = await fetch("/api/data.json", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        if (location.pathname === "/last-week") {
          setCurrentGame(data.data.yesterday);
        } else {
          setCurrentGame(data.data.today);
        }
        setFoundWords([]);
        setScore(0);
      } catch (error) {
        console.error("Failed to fetch game data:", error);
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
