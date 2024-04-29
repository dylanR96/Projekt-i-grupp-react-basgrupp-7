import { Outlet } from "react-router";
import { createContext, useState } from "react";

export const CardsContext = createContext();

function App() {
  // ** Global state ↓
  const [cardsArray, setCardsArray] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  return (
    <>
       <CardsContext.Provider value={{ cardsArray, setCardsArray, activeCard, setActiveCard }}>
        <Outlet />
      </CardsContext.Provider>
    </>
  );
}

export default App;
