{/*import "./card.css";

function Card() {
  return <div>Card</div>;
}

export default Card;*/}
// src/components/Card/Card.jsx

{/*import React from 'react';
import styles from './card.module.css'; // The CSS module for styling

// The Card component takes in the card details and an onSelect callback as props
const Card = ({ cardDetails, onSelect }) => {
  const { cardNumber, cardholderName, validThru, vendor } = cardDetails;

  {/*const vendorLogos = {
    "Bitcoin Inc": `${import.meta.env.VITE_PUBLIC_URL}/icons/Bitcoin.png`,
    "Ninja Bank": `${import.meta.env.VITE_PUBLIC_URL}/icons/Ninja.png`,
    "Block Chain Inc": `${import.meta.env.VITE_PUBLIC_URL}/icons/Block.png`,
    "Evil Corp": `${import.meta.env.VITE_PUBLIC_URL}/icons/Evil.png`
  };*/}
  



  {/*const vendorLogos = {
    "Bitcoin Inc": `/icons/Bitcoin.png`,
    "Ninja Bank": `/icons/Ninja.png`,
    "Block Chain Inc": `/icons/Block.png`,
    "Evil Corp": `/icons/Evil.png`
  };
  
  const vendorLogoUrl = vendorLogos[vendor];
  // Function to handle when a card is clicked
  const handleClick = () => {
    if (onSelect) {
      onSelect(cardDetails);
    }
  };

  // JSX to render the card's information
  {/*return (
    <div className={styles.card} onClick={handleClick}>
      <div className={styles.cardInfo}>
        <div className={styles.cardNumber}>{cardNumber}</div>
        <div className={styles.cardholderName}>{cardholderName}</div>
        <div className={styles.validThru}>{validThru}</div>
        <div className={styles.vendor}>{vendor}</div>
      </div>
    </div>
  );*/}
 {/* return (
    <div className={styles.card}>
      {vendor && (
        <div
          className={styles.vendorLogo}
          style={{ backgroundImage: `url(${vendorLogoUrl})` }}
        ></div>
      )}
      <div className={styles.cardDetails}>
        <div className={styles.cardNumber}>{cardNumber}</div>
        <div className={styles.cardholderName}>{cardholderName}</div>
        <div className={styles.validThru}>{validThru}</div>
      </div>
    </div>
  );
};

export default Card;*/}
// src/components/Card/Card.jsx
import React from 'react';
import styles from './card.module.css'; // Import CSS module


const Card = ({ cardDetails, onSelect }) => {
  const { cardNumber, cardholderName, validThru, vendor } = cardDetails;
  
  const vendorLogos = {
    "Bitcoin Inc": `/icons/Bitcoin.png`,
    "Ninja Bank": `/icons/Ninja.png`,
    "Block Chain Inc": `/icons/Block.png`,
    "Evil Corp": `/icons/Evil.png`
  };
  const vendorLogoUrl = vendorLogos[vendor];

  const chipImg = '/icons/Chip.png';
  const signalImg = '/icons/Chip-Signal.png';
  
 // Function to handle when a card is clicked
 const handleClick = () => {
  if (onSelect) {
    onSelect(cardDetails);
  }
};

return (
  <div className={styles.card}>
    {/* Signal should come first */}
    <img src={signalImg} alt="Signal" className={styles.signal} />
    <img src={chipImg} alt="Chip" className={styles.chip} />
    
    <div className={styles.cardNumber}>{cardNumber}</div>
    
    {/* Container for name and validity date */}
    <div className={styles.cardholderInfo}>
      <div>
        <div className={styles.cardholderLabel}>CARDHOLDER NAME</div>
        <div className={styles.cardholderName}>{cardholderName}</div>
      </div>
      <div>
        <div className={styles.validLabel}>VALID THRU</div>
        <div className={styles.validThru}>{validThru}</div>
      </div>
    </div>
    
    {/* Conditionally render the vendor logo */}
    {vendor && (
      <img src={vendorLogoUrl} alt="Vendor Logo" className={styles.vendorLogo} />
    )}
  </div>
);
};

export default Card;