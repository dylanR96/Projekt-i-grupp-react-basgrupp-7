import { useNavigate } from "react-router";
import "./addCard.css";
import { useContext } from "react";
import { CardsContext } from "../../App";
import InfoCard from "../../components/Form/Form";

function AddCard() {
  const navigate = useNavigate();
  const { cardsArray, setCardsArray } = useContext(CardsContext);

  return (
    <div>
      <h1>Add new card</h1>
      <InfoCard />
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
}

export default AddCard;
