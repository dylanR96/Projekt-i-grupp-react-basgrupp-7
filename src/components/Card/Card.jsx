import "./card.css";
import cardImage from '../../images/card.png';
import bitcoinImage from '../../images/Bitcoin.png';







function Card( card ) {

  return (

  <>
  <div className="card">
    <section className='card_img'>
        <img src={cardImage} alt="" className="payment"/>
        <img src={bitcoinImage} alt="" className="bitcoin" />
    </section>
      <h2 className="card_numbers">{card.cardNumber} </h2>
    <section className="card_section_1">
      <div>
        <p>CARDHOLDER NAME: </p>
        <p>{card.cardholderName}</p>
      </div>
      <div>
        <p>VALID THRU: </p>
        <p>{card.validThru}</p>
      </div>
    </section>
  </div>
</>

)
}

export default Card;

