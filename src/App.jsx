import { useGame } from "./hooks/useGame.js";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const { loading } = useGame();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/last-week" element={<Game />} />
      </Routes>
    </>
  );
}

export default App;
