import { Outlet } from "react-router";
import { createContext, useState } from "react";

export const CardsContext = createContext();

function App() {
  // ** Global state ↓
  const [cardsArray, setCardsArray] = useState([
    {
      firstName: "Lucas",
      lastName: "Da Silva",
      cardNumber: "1234 5678 9101 1123",
      validMonth: 12,
      validYear: 24,
      bankVendor: "Bitcoin",
    },
  ]);

  return (
    <section className="main__section__wrapper">
      <CardsContext.Provider value={{ cardsArray, setCardsArray }}>
        <Outlet />
      </CardsContext.Provider>
    </section>
  );
}

export default App;
