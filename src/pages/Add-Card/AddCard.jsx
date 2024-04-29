import React, { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { CardsContext } from "../../App";
import InfoCard from "../../components/Form/Form";
import Cards from "../Cards-page/Cards";
import Card from "../../components/Card/Card";

function AddCard() {
  const [card, setCard] = useState(null);
  const navigate = useNavigate();
  const { setCardsArray } = useContext(CardsContext);

  const handleCreateCard = (newCard) => {
    setCard(newCard);
    setCardsArray(prevCards => [...prevCards, newCard]); // Uppdatera kortdata i CardsContext
  };

  return (
    <div>

      <InfoCard onCreateCard={handleCreateCard}/> {/* Skicka funktionen för att skapa kort till InfoCard */}
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
}

export default AddCard;