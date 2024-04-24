import { useNavigate } from "react-router";
import "./cards.css";
import { useContext } from "react";
import { CardsContext } from "../../App";

function Cards() {
  // ** Using global statement
  const { cardsArray, setCardsArray } = useContext(CardsContext);

  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button
        // ** Example of usage ↓
        onClick={() => {
          setCardsArray([...cardsArray, 2]);
          navigate("/addCard");
        }}
      >
        Add new card
      </button>
    </div>
  );
}

export default Cards;
