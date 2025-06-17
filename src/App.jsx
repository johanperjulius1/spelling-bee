import { useGame } from "./hooks/useGame.js";
import Header from "./components/Header";
import Game from "./components/Game";

function App() {
  const { loading } = useGame();

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <Game />
    </>
  );
}

export default App;
