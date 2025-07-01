import { useGame } from "./hooks/useGame.js";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Game from "./components/Game";

function NotFound() {
  console.log("NotFound component is rendering!");
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: "#black", textDecoration: "underline" }}>
        Go back to Today's Puzzle
      </Link>
    </div>
  );
}

function GamePage() {
  return (
    <>
      <Header />
      <Game />
    </>
  );
}

function App() {
  const { loading } = useGame();

  if (loading) return <div>Loading...</div>;

  return (
    <Routes>
      <Route path="/" element={<GamePage />} />
      <Route path="/last-week" element={<GamePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
