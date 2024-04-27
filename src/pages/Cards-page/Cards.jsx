import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CardsContext } from "../../App";
import Card from "../../components/Card/Card";

function Cards() {
  const { cardsArray } = useContext(CardsContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <div className="cards-container">
        {/* {cardsArray.map(card => (
          <Card
            key={card.cardNumber}
            cardNumber={card.cardNumber}
            cardholderName={card.cardholderName}
            validThru={card.validThru}
            ccv={card.ccv}
            vendor={card.vendor}
          />
        ))} */}
      </div>
      <button onClick={() => navigate("/addCard")}>
        Add new card
      </button>
    </div>
  );
}

export default Cards;