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
  
    const cardNumber = e.target.card_number.value;
    const cardholderName = e.target.cardholder_name.value;
    const validThru = e.target.valid_number.value;
  
    // Kontrollera om alla nödvändiga kortuppgifter finns tillgängliga
    if (cardNumber && cardholderName && validThru) {
      const newCard = {
        cardNumber,
        cardholderName,
        validThru,
        ccv: e.target.ccv_number.value,
        vendor: selectedVendor
      };
  
      setCardsArray(prevCards => [...prevCards, newCard]);
      onCreateCard(newCard);
      setStateMessage('Credit card added successfully');
    } else {
      // Visa felmeddelande om någon av kortuppgifterna saknas
      setStateMessage('Please fill in all required fields');
    }
  
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
        {/* Kortkomponenten med den senast tillagda kortet */}
        <div className="card-container">
          {cardsArray.length > 0 && (
            <Card
              card={cardsArray[cardsArray.length - 1]}
              getCardColorClass={getCardColorClass} // Skicka med getCardColorClass som en prop
            />
          )}
        </div>
      </div>
    </>
  );
};

export default InfoCard;