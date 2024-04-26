{/*import "./card.css";

function Card() {
  return <div>Card</div>;
}

export default Card;*/}
// src/components/Card/Card.jsx

import React from 'react';
import styles from './card.module.css'; // The CSS module for styling

// The Card component takes in the card details and an onSelect callback as props
const Card = ({ cardDetails, onSelect }) => {
  const { cardNumber, cardholderName, validThru, vendor } = cardDetails;

  // Function to handle when a card is clicked
  const handleClick = () => {
    if (onSelect) {
      onSelect(cardDetails);
    }
  };

  // JSX to render the card's information
  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.cardInfo}>
        <div className={styles.cardNumber}>{cardNumber}</div>
        <div className={styles.cardholderName}>{cardholderName}</div>
        <div className={styles.validThru}>{validThru}</div>
        <div className={styles.vendor}>{vendor}</div>
      </div>
    </div>
  );
};

export default Card;
