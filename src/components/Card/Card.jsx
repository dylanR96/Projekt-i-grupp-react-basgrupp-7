import styles from './card.module.css';
import cardImage from '../../images/card.png';
import bitcoinImage from '../../images/Bitcoin.png';
/* import InfoCard from "./components/Form/Form"; */




function Card() {
  return (
/* GLÖM EJ ATT LÄGGA IN ALEX props IGEN. glöm ej att card är inlagt i addCrds också */
  <>
  <div className={styles.card}>
    <section className={styles.card_img}>
        <img src={cardImage} alt="" className={styles.payment}/>
        <img src={bitcoinImage} alt="" className={styles.bitcoin} />
    </section>
      <h2 className={styles.card_numbers}>XXXX XXXX XXXX XXXX </h2>
    <section className={styles.card_section_1}>
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

