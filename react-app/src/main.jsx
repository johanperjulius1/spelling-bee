import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { GameProvider } from "./contexts/GameProvider.jsx";

createRoot(document.getElementById("main")).render(
  <StrictMode>
    <BrowserRouter>
      <GameProvider>
        <App />
      </GameProvider>
    </BrowserRouter>
  </StrictMode>
);

// const rootNode = document.getElementById("main");
// const root = createRoot(rootNode);
// root.render(<App />);
// // console.log("1",App())
// console.dir(App())

// console.log(root)
