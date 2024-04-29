
import React from 'react';
import styles from './card.module.css'; 

const Card = ({ cardDetails, onSelect }) => {
  const { cardNumber, cardholderName, validThru, vendor } = cardDetails;
  
  const vendorLogos = {
    "Bitcoin Inc": `/icons/Bitcoin.png`,
    "Ninja Bank": `/icons/Ninja.png`,
    "Block Chain Inc": `/icons/Block.png`,
    "Evil Corp": `/icons/Evil.png`
  };
  const vendorLogoUrl = vendorLogos[vendor];

  const vendorColors = {
    "Bitcoin Inc": "#f7931a", // Example Bitcoin color
    "Ninja Bank": "#2b3d4f", // Example Ninja Bank color
    "Block Chain Inc": "#8c8c8c", // Example Block Chain Inc color
    "Evil Corp": "#232323", // Example Evil Corp color
  };
  const backgroundColor = vendorColors[vendor] || '#ffffff';

  const cardStyle = {
    backgroundColor: backgroundColor,
  };


  const chipImg = '/icons/Chip.png';
  const signalImg = '/icons/Chip-Signal.png';
  
 // Function to handle when a card is clicked
 const handleClick = () => {
  if (onSelect) {
    onSelect(cardDetails);
  }
};

return (
  <div className={styles.card} style={cardStyle} onClick={handleClick}>
  
    <img src={signalImg} alt="Signal" className={styles.signal} />

     {vendor && (
      <img src={vendorLogoUrl} alt="Vendor Logo" className={styles.vendorLogo} />
    )}

    <img src={chipImg} alt="Chip" className={styles.chip} />
       
    <div className={styles.cardNumber}>{cardNumber}</div>
    
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
  </div>
);
};

export default Card;