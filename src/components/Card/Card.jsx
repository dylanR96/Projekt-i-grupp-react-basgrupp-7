<<<<<<< HEAD
import "./card.css";
import cardImage from '../../images/card.png';
import bitcoinImage from '../../images/Bitcoin.png';
/* import InfoCard from "./components/Form/Form"; */




function Card() {
  return (
/* GLÖM EJ ATT LÄGGA IN ALEX props IGEN. glöm ej att card är inlagt i addCrds också */
  <>
  <div className="card">
    <section className='card_img'>
        <img src={cardImage} alt="" className="payment"/>
        <img src={bitcoinImage} alt="" className="bitcoin" />
    </section>
      <h2 className="card_numbers">XXXX XXXX XXXX XXXX </h2>
    <section className="card_section_1">
      <div>
        <p>CARDHOLDER NAME: </p>
        <p>xxxx xxxx</p>
      </div>
      <div>
        <p>VALID THRU: </p>
        <p>xxxx xxxx</p>
      </div>
    </section>
  </div>
</>
)
=======
import styles from "./card.module.css";

function Card({ card }) {
  return (
    <article
      className={[
        styles["card__container"],
        styles[`${card.bankVendor}`],
        card.bankVendor === "Ninja" ? styles["lightBg"] : "",
      ].join(" ")}
    >
      <div className={styles["card__chip__signal_box"]}>
        <img
          className={styles["signal"]}
          alt="chip-signal-icon"
          src="/icons/Chip-Signal.png"
        />
        <img className={styles["chip"]} alt="chip-icon" src="/icons/Chip.png" />
      </div>
      <img
        className={
          card.bankVendor === "Default"
            ? styles["bankVendor__default"]
            : styles["bankVendor"]
        }
        alt={card.bankVendor}
        src={`/icons/${card.bankVendor}.png`}
      />

      <div className={styles["card__number__box"]}>
        <p className={styles["card__number__box__p"]}>
          {card.cardNumber ? card.cardNumber : "XXXX XXXX XXXX"}
        </p>
      </div>

      <div className={styles["card___holder__valid__container"]}>
        <div className={styles["card__holder__box"]}>
          <p>CARDHOLDER NAME</p>
          <strong>{card.name ? card.name : "FIRSTNAME LASTNAME"}</strong>
        </div>

        <div className={styles["card__valid__box"]}>
          <p>VALID THRU</p>
          <strong>{card.valid ? card.valid : "MM/YY"}</strong>
        </div>
      </div>
    </article>
  );
>>>>>>> e-wallet-lucas
}

export default Card;


/* 

function Card() {
  return (

  <>
  <div className='card_img'>
      <img src={cardImage} alt="" />
  </div>
    <h2 className="card_numbers">Card Number: {card.cardNumber}</h2>
  <div>
      <p>Cardholder Name: {card.cardholderName}</p>
      <p>Valid Thru: {card.validThru}</p>
  </div>
  <div>
    <p>CCV: {card.ccv}</p>  
    <p>Vendor: {card.vendor}</p>
  </div>

</> */

