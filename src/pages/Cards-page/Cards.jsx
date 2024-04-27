import { useNavigate } from "react-router";
import "./cards.css";
import { useContext, useState } from "react";
import { CardsContext } from "../../App";
import { ChipIcon, WaveIcon } from "../../components/Card/ChipIcons.jsx";
import {
  Bitcoin,
  NinjaBank,
  BlockChain,
  EvilCorp,
} from "../../components/Vendors-Icon/Vendors.jsx";
import Button from "../../components/Button/Button.jsx";

function Cards() {
  const { cardsArray, setCardsArray } = useContext(CardsContext);
  const [selectedCard, setSelectedCard] = useState(null);
  const [remainingCards, setRemainingCards] = useState(
    cardsArray.map((card, index) => ({ ...card, id: index + 1 }))
  );

  const handleClick = (id) => {
    const clickedCardIndex = remainingCards.findIndex((card) => card.id === id);
    if (clickedCardIndex !== -1) {
      setSelectedCard(remainingCards[clickedCardIndex]);

      const updatedRemainingCards = remainingCards.filter(
        (card) => card.id !== id
      );

      if (selectedCard) {
        updatedRemainingCards.push(selectedCard);
      }
      setRemainingCards(updatedRemainingCards);
    }
  };

  const navigate = useNavigate();
  return (
    <div>
      <div>
        {selectedCard !== null && (
          <div className={`card-container ${selectedCard.vendor}-background`}>
            <div className="card-upper-section">
              <div className="card-chip-icons">
                <WaveIcon />
                <ChipIcon />
              </div>
              <p>
                {selectedCard.vendor === "bitcoin" && <Bitcoin />}
                {selectedCard.vendor === "ninjaBank" && <NinjaBank />}
                {selectedCard.vendor === "blockChain" && <BlockChain />}
                {selectedCard.vendor === "evilCorp" && <EvilCorp />}
              </p>
              {""}
            </div>
            <div className="card-num">
              <p>{selectedCard.cardNumber}</p>
              {""}
            </div>
            <div className="card-bottom-section">
              <div className="card-holder">
                <h4>CARDHOLDER NAME</h4>
                <p>{selectedCard.cardHolder}</p>
                {""}
              </div>
              <div className="card-date">
                <h4>VALID THRU</h4>
                <p>{selectedCard.validThru}</p>
                {""}
              </div>
            </div>
          </div>
        )}
        {selectedCard !== null}
      </div>
      <div>
        {remainingCards.map((card) => (
          <div
            key={card.id}
            className={`card-container ${card.vendor}-background`}
            onClick={() => handleClick(card.id)}
          >
            <div className="card-upper-section">
              <div className="card-chip-icons">
                <WaveIcon />
                <ChipIcon />
              </div>
              <p>
                {card.vendor === "bitcoin" && <Bitcoin />}
                {card.vendor === "ninjaBank" && <NinjaBank />}
                {card.vendor === "blockChain" && <BlockChain />}
                {card.vendor === "evilCorp" && <EvilCorp />}
              </p>
              {""}
            </div>
            <div className="card-num">
              <p>{card.cardNumber}</p>
              {""}
            </div>
            <div className="card-bottom-section">
              <div className="card-holder">
                <h4>CARDHOLDER NAME</h4>
                <p>{card.cardHolder}</p>
                {""}
              </div>
              <div className="card-date">
                <h4>VALID THRU</h4>
                <p>{card.validThru}</p>
                {""}
              </div>
            </div>
          </div>
        ))}
        {remainingCards !== null}
      </div>
      <h1>Home</h1>
      <Button
        label={"ADD A NEW CARD"}
        onClick={() => {
          setCardsArray([...cardsArray]);
          navigate("/addCard");
        }}
      />
    </div>
  );
}

export default Cards;
