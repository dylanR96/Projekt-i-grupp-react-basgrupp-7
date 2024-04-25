import "./form.css";

import { useState } from 'react';

const InfoCard = ({ onCreateCard }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
  
    const creditCard = (e) => {
      e.preventDefault();
      setIsSubmitting(true);
  
      const newCard = {
        cardNumber: e.target.card_number.value,
        cardholderName: e.target.cardholder_name.value,
        validThru: e.target.valid_number.value,
        ccv: e.target.ccv_number.value,
        vendor: e.target.vendor.value
      };
  
      onCreateCard(newCard);
      setStateMessage('Credit card added successfully');
      setIsSubmitting(false);
  
      setTimeout(() => {
        setStateMessage(null);
      }, 5000);
  
      e.target.reset();
    };
  return (
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
      <select name="vendor" id="credit-vendor" className="input-big">
        <option value="" disabled selected>Select your vendor</option>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ninja-Bank">Ninja Bank</option>
        <option value="Block-Chain-Inc">Block Chain Inc</option>
        <option value="Evilk-Corp">Evil Corp</option>
      </select>
      <input type="submit" value="ADD CARD" disabled={isSubmitting} className="add-card-button"/> 
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

// OBS! value på input kanske måste vara send
export default InfoCard;