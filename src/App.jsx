import { useGame } from "./hooks/useGame.js";
import Header from "./Components/Header";
import Game from "./Components/Game";

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
