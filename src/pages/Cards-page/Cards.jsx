import { useNavigate } from "react-router";
import "./cards.css";
import { useContext } from "react";
import { CardsContext } from "../../App";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

function Cards() {
  // ** Using global statement
  const { cardsArray } = useContext(CardsContext);

  const navigate = useNavigate();
  return (
    <section className="e__wallet_section">
      <h1 className="cards__h1">E-WALLET</h1>

      <article className="e__wallet__container">
        <div className="e__wallet__container__active__card__box">
          <h2 className="active__card__p">ACTIVE CARD</h2>
          <Card card={cardsArray[0]} />
        </div>

        <div className="e__wallet__container__all__cards__box">
          <Card card={cardsArray[0]} />
          <Card card={cardsArray[0]} />
          <Card card={cardsArray[0]} />
        </div>
      </article>

      <Button clickHandler={() => navigate("/addCard")}>Add New Card</Button>
    </section>
  );
}

export default Cards;
