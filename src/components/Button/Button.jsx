

import React from 'react';
import styles from './button.module.css'; 


const Button = ({ text, onClick, className }) => {
 
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
