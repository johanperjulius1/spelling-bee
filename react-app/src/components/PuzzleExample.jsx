import { useEffect, useState } from "react";
import { getPuzzleByWeekday } from "../utils/sanityClient.js";

/**
 * Example component showing how to fetch and display the "Wednesday" puzzle
 */
export function PuzzleExample() {
  const [puzzle, setPuzzle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPuzzle = async () => {
      try {
        setLoading(true);
        // Fetch the puzzle with displayWeekday = "Wednesday"
        const data = await getPuzzleByWeekday("Wednesday");
        
        if (data) {
          setPuzzle(data);
        } else {
          setError("Puzzle not found");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPuzzle();
  }, []);

  if (loading) {
    return <div>Loading puzzle...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!puzzle) {
    return <div>No puzzle found</div>;
  }

  return (
    <div>
      <h2>{puzzle.displayWeekday} Puzzle</h2>
      <p>Date: {puzzle.displayDate}</p>
      <p>Print Date: {puzzle.printDate}</p>
      <p>Center Letter: <strong>{puzzle.centerLetter}</strong></p>
      <p>Outer Letters: {puzzle.outerLetters?.join(", ")}</p>
      <p>Max Points: {puzzle.maxPoints}</p>
      <p>Editor: {puzzle.editor}</p>
      <p>Puzzle ID: {puzzle.puzzleId}</p>
      
      <h3>Pangrams ({puzzle.pangrams?.length || 0}):</h3>
      <ul>
        {puzzle.pangrams?.map((pangram, i) => (
          <li key={i}>{pangram}</li>
        ))}
      </ul>
      
      <h3>Total Answers: {puzzle.answers?.length || 0}</h3>
    </div>
  );
}
