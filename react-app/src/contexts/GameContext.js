import { createContext } from "react";

export const GameContext = createContext();

// 1. Cretae and export context in dedicated file
// 2. Create a custom Provider component.
//  In there you import the context and return
//  name-of-context.Provider with the values needed.
// Data fetching is common in the provider. Pass the
// Data to the returned context.

// 3. Create a custom hook tha uses the context.
// Them call the custom hook in the component where
// the data need to be available. Don't forget to
// wrapp the App in the custom provider.