import { useNavigate } from "react-router";
import "./addCard.css";
import { useContext } from "react";
import { CardsContext } from "../../App";

function AddCard() {
  const navigate = useNavigate();
  const { cardsArray, setCardsArray } = useContext(CardsContext);

  return (
    <div>
      <h1>Add new card</h1>
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
}

export default AddCard;
