import { Outlet } from "react-router";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const CardsContext = createContext();
export const SelectedCardContext = createContext();

function App() {
  // ** Global state ↓
  const [cardsArray, setCardsArray] = useState([
    {
      name: "Lucas Da Silva",
      cardNumber: "1234 5678 9101 1123",
      validMonth: 12,
      validYear: 24,
      bankVendor: "Bitcoin",
    },
    {
      name: "Lucas Da Silva",
      cardNumber: "1234 5678 9101 1123",
      validMonth: 12,
      validYear: 24,
      bankVendor: "Ninja",
    },

    {
      name: "Lucas Da Silva",
      cardNumber: "1234 5678 9101 1123",
      validMonth: 12,
      validYear: 24,
      bankVendor: "Block",
    },
  ]);

  const [selectedCard, setSelectedCard] = useState(cardsArray[0] || {});

  return (
    <section className="main__section__wrapper">
      <CardsContext.Provider value={{ cardsArray, setCardsArray }}>
        <SelectedCardContext.Provider value={{ selectedCard, setSelectedCard }}>
          <Outlet />
          <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
              // Define default options
              className: "",
              duration: 5000,
              style: {
                background: "#363636",
                color: "#fff",
              },

              // Default options for specific types
              success: {
                duration: 3000,
                theme: {
                  primary: "green",
                  secondary: "black",
                },
              },
              error: {
                style: {
                  background: "red",
                },
              },
            }}
          />
        </SelectedCardContext.Provider>
      </CardsContext.Provider>
    </section>
  );
}

export default App;
