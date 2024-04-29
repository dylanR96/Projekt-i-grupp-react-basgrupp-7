import { useNavigate } from "react-router";
import "./cards.css";
import { useContext } from "react";
import { CardsContext } from "../../App";
import Button from '../../components/Button/Button.jsx';
import Card from '../../components/Card/Card';

function Cards() {
  // ** Using global statement
  const { cardsArray, setCardsArray, activeCard, setActiveCard } = useContext(CardsContext);

  const navigate = useNavigate();

  const handleCardSelect = (selectedCard) => {
    setActiveCard(selectedCard);
  };

  return (
    <div className="cards-container">
      <h1>Your Cards</h1>
      {/* Optionally render the active card at the top */}
      {activeCard && (
        <Card key={activeCard.cardNumber} cardDetails={activeCard} onSelect={() => setActiveCard(null)} />
      )}
      {/* Iterate over the cardsArray and render a Card for each object, excluding the active card */}
      {cardsArray.filter(card => !activeCard || card.cardNumber !== activeCard.cardNumber).map((card, index) => (
        <Card key={index} cardDetails={card} onSelect={() => handleCardSelect(card)} />
      ))}
      <Button text="Add New Card" onClick={() => navigate("/addCard")} />
    </div>
  );
}

export default Cards;