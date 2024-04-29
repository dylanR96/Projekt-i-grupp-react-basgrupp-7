import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { CardsContext } from "../../App";
import Card from "../../components/Card/Card";
import cardImage from '../../images/card.png';
import bitcoinImage from '../../images/Bitcoin.png';


function Cards() {
  const { cardsArray } = useContext(CardsContext);
  const navigate = useNavigate();

  

  return (
    <div>
      <h1>Home</h1>
      <div className="card-yellow" > {/* Lägg till cardColorClass */}
      <section className='card_img'>
        <img src={cardImage} alt="" className="payment"/>
        <img src={bitcoinImage} alt="" className="bitcoin" />
      </section>
      <h2 className="card_numbers">XXXX XXXX XXXX XXXX </h2>
      <section className="card_section_1">
        <div>
          <p>CARDHOLDER NAME: </p>
          <p></p>
        </div>
        <div>
          <p>VALID THRU: </p>
          <p></p>
        </div>
      </section>
    </div>
      <div className="e-wallet">
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
  <div className="card-container">
    <div className="card card-blue"> {/* Lägg till cardColorClass */}
      <section className='card_img'>
        <img src={cardImage} alt="" className="payment"/>
        <img src={bitcoinImage} alt="" className="bitcoin" />
      </section>
      <h2 className="card_numbers">XXXX XXXX XXXX XXXX </h2>
      <section className="card_section_1">
        <div>
          <p>CARDHOLDER NAME: </p>
          <p></p>
        </div>
        <div>
          <p>VALID THRU: </p>
          <p></p>
        </div>
      </section>
    </div>
    <div className="card card-purple"> {/* Lägg till cardColorClass */}
      <section className='card_img'>
        <img src={cardImage} alt="" className="payment"/>
        <img src={bitcoinImage} alt="" className="bitcoin" />
      </section>
      <h2 className="card_numbers">XXXX XXXX XXXX XXXX </h2>
      <section className="card_section_1">
        <div>
          <p>CARDHOLDER NAME: </p>
          <p></p>
        </div>
        <div>
          <p>VALID THRU: </p>
          <p></p>
        </div>
      </section>
    </div>
    <div className="card card-red"> {/* Lägg till cardColorClass */}
      <section className='card_img'>
        <img src={cardImage} alt="" className="payment"/>
        <img src={bitcoinImage} alt="" className="bitcoin" />
      </section>
      <h2 className="card_numbers">XXXX XXXX XXXX XXXX </h2>
      <section className="card_section_1">
        <div>
          <p>CARDHOLDER NAME: </p>
          <p></p>
        </div>
        <div>
          <p>VALID THRU: </p>
          <p></p>
        </div>
      </section>
      </div>
        </div>
        <button onClick={() => navigate("/addCard")}>
          Add new card
        </button>
        </div>
    </div>
    
  );
}

export default Cards;