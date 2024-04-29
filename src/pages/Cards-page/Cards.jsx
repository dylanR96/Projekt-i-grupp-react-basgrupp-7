import { useNavigate } from "react-router";
import "./cards.css";
import { useContext } from "react";
import { CardsContext } from "../../App";
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card';

function Cards() {
  // ** Using global statement
  const { cardsArray, setCardsArray } = useContext(CardsContext);

  const navigate = useNavigate();
  return (
    <div className="cards-container">
      <h1>Your Cards</h1>
      {/* Iterate over the cardsArray and render a Card for each object */}
      {cardsArray.map((card, index) => (
     
        <Card key={index} cardDetails={card} />
      ))}
      <Button text="Add New Card" onClick={() => {
          navigate("/addCard");
        }} />
    </div>
  );
}
  
export default Cards;
