import React, { useState } from 'react';
import Card from '../Card/Card';
import './form.css';

const InfoCard = ({ onCreateCard }) => {
  const [cardsArray, setCardsArray] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [selectedVendor, setSelectedVendor] = useState('');
  
  const creditCard = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    const newCard = {
      cardNumber: e.target.card_number.value,
      cardholderName: e.target.cardholder_name.value,
      validThru: e.target.valid_number.value,
      ccv: e.target.ccv_number.value,
      vendor: selectedVendor
    };
    
    setCardsArray(prevCards => [...prevCards, newCard]);
    onCreateCard(newCard);
    setStateMessage('Credit card added successfully');
    setIsSubmitting(false);
  
    setTimeout(() => {
      setStateMessage(null);
    }, 5000);
  
    e.target.reset();
  };
  
  const handleVendorChange = (e) => { setSelectedVendor(e.target.value); };
  
  const getCardColorClass = () => {
    switch (selectedVendor) {
      case 'Bitcoin':
        return 'bitcoinColor';
      case 'Ninja-Bank':
        return 'ninjaBankColor';
      case 'Block-Chain-Inc':
        return 'blockChainIncColor';
      case 'Evilk-Corp':
        return 'evilCorpColor';
      default:
        return '';
    }
  };

  return (
    <>
    
    {/* <div>                  DEN HÄR GÖR ATT DEN RENDERAS UT DUBBELT AV NÅGON ANLEDNING PÅ ADDCARD SIDAN
        {cardsArray.map(card => (
          <Card
            key={card.cardNumber}
            cardNumber={card.cardNumber}
            cardholderName={card.cardholderName}
            validThru={card.validThru}
            ccv={card.ccv}
            vendor={card.vendor}
          />
        ))}
      </div> */}
    <form onSubmit={creditCard} className="input-fields">
      <label>CARD NUMBER</label>
      <input type="tel" name="card_number" className="input-big" maxlength="16" placeholder="1234 1234 1234 1234" />
      <label>CARDHOLDER NAME</label>
      <input type="text" name="cardholder_name" className="input-big" placeholder="Firstname Lastname" />
      <section className="valid-and-CCV">
        <div className="valid">
          <label>VALID THRU</label>
          <input type="tel" name="valid_number" className="input-small" maxlength="4" placeholder="MM/YY"/>
        </div>
        <div className="CCV">
          <label>CCV</label>
          <input type="tel" name="ccv_number" className="input-small" maxlength="3"/>
        </div>
      </section>
      <label for="vendor">VENDOR</label>
      <select name="vendor" id="credit-vendor" className="input-big" value={selectedVendor} onChange={handleVendorChange}>
        <option value="" disabled selected>Select your vendor</option>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ninja-Bank">Ninja Bank</option>
        <option value="Block-Chain-Inc">Block Chain Inc</option>
        <option value="Evilk-Corp">Evil Corp</option>
      </select>
      <input type="submit" value="Send" disabled={isSubmitting} />
      {stateMessage && <p>{stateMessage}</p>}
    </form> 
    <div className="card-container">
        <Card className={getCardColorClass()} />
      </div>
    </>
  );
};

// OBS! value på input kanske måste vara send
export default InfoCard;