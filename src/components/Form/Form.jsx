import styles from './form.module.css';

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
    <form onSubmit={creditCard} className={styles.input_fields}>
      <label>CARD NUMBER</label>
      <input type="tel" name="card_number" className={styles.input_big} maxlength="16" placeholder="1234 1234 1234 1234" />
      <label>CARDHOLDER NAME</label>
      <input type="text" name="cardholder_name" className={styles.input_big} placeholder="Firstname Lastname" />
      <section className={styles.valid_and_CCV}>
        <div className={styles.valid}>
          <label>VALID THRU</label>
          <input type="tel" name="valid_number" className={styles.input_small} maxlength="4" placeholder="MM/YY"/>
        </div>
        <div className={styles.CCV}>
          <label>CCV</label>
          <input type="tel" name="ccv_number" className={styles.input_small} maxlength="3"/>
        </div>
      </section>
      <label for="vendor">VENDOR</label>
      <select name="vendor" id="credit-vendor" className={styles.input_big}>
        <option value="" disabled selected>Select your vendor</option>
        <option value="Bitcoin">Bitcoin</option>
        <option value="Ninja-Bank">Ninja Bank</option>
        <option value="Block-Chain-Inc">Block Chain Inc</option>
        <option value="Evilk-Corp">Evil Corp</option>
      </select>
      <input type="submit" value="ADD CARD" disabled={isSubmitting} className={styles.add_card_button}/> 
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  );
};

// OBS! value på input kanske måste vara send
export default InfoCard;