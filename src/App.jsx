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
      valid: "12/24",
      ccv: 24,
      bankVendor: "Bitcoin",
    },
    {
      name: "Dejan Dejan",
      cardNumber: "1234 5879 9101 1324",
      valid: "04/25",
      ccv: 24,
      bankVendor: "Ninja",
    },

    {
      name: "Alexander Buckard",
      cardNumber: "1234 4030 9101 1123",
      valid: "02/25",
      ccv: 24,
      bankVendor: "Block",
    },

    {
      name: "Dylan Dylan",
      cardNumber: "1230 5070 9101 1123",
      valid: "03/25",
      ccv: 24,
      bankVendor: "Evil",
    },

    {
      name: "Tor Tor",
      cardNumber: "1230 6070 9101 1123",
      valid: "04/25",
      ccv: 24,
      bankVendor: "Ninja",
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
