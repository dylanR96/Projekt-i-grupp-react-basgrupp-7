import { Outlet } from "react-router";
import { createContext, useState } from "react";

export const CardsContext = createContext();

function App() {
  // ** Global state ↓
  const [cardsArray, setCardsArray] = useState([]);
  return (
    <>

      <CardsContext.Provider value={{ cardsArray, setCardsArray }}>
        <Outlet />
      </CardsContext.Provider>
    </>
  );
}

export default App;
