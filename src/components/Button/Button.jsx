{/*import "./button.css";

function Button() {
  return <div>Button</div>;
}

export default Button;*/}
// src/components/Button/Button.jsx

import React from 'react';
import styles from './button.module.css'; // The CSS module for styling

// Button component accepts text, onClick callback, and an optional className for additional styling
const Button = ({ text, onClick, className }) => {
  // The button's onClick handler calls the provided onClick function
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
