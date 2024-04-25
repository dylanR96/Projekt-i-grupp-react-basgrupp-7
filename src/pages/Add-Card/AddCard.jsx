import { useNavigate } from "react-router";
import "./addCard.css";
import { useContext, useState } from "react";
import { CardsContext } from "../../App";

// ** Example of the structure of a card
const card = {
  firstName: "",
  lastName: "",
  cardNumber: "",
  validMonth: "",
  validYear: "",
  bankVendor: "",
};

function AddCard() {
  const navigate = useNavigate();
  const { cardsArray, setCardsArray } = useContext(CardsContext);
  const [CARD, SETCARD] = useState(card);

  return (
    <div>
      <h1>Add new card</h1>
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
}

export default AddCard;
