{/* import { useNavigate } from "react-router";
import "./addCard.css";
import { useContext } from "react";
import { CardsContext } from "../../App";

function AddCard() {
  const navigate = useNavigate();
  const { cardsArray, setCardsArray } = useContext(CardsContext);

  return (
    <div>
      <h1>Add new card</h1>
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
}

export default AddCard; */ }
// src/pages/Add-Card/AddCard.jsx

// Necessary imports from React and other modules.
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardsContext } from '../../App'; // Importing our global state context
import './addCard.css'; // Importing the CSS for styling this component
import Button from '../../components/Button/Button.jsx';

function AddCardPage() {
  // Hook to navigate programmatically between routes
  const navigate = useNavigate();
  
  // Accessing the global state and the setter function for cards
  const { cardsArray, setCardsArray } = useContext(CardsContext);
  
  // Local state for the card form fields, initialized as empty strings
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    validThru: '',
    ccv: '',
    vendor: ''
  });

  // Handles input changes and updates the local state accordingly
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  // Handles form submission to add a new card to the global state
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Adding the new card details to the global cards array
    setCardsArray([...cardsArray, cardDetails]);
    
    // Navigate back to the home page (cards list) after submission
    navigate('/');
  };

  const vendors = ["Bitcoin Inc", "Ninja Bank", "Block Chain Inc", "Evil Corp"];

  // The component returns a form that captures the card details
  return (
    <div className="add-card-container">
      <h1>Add new card</h1>
      {/* The form element with an onSubmit event handler */}
      <form onSubmit={handleSubmit}>
        {/* Input for the card number */}
        <input
          type="text"
          name="cardNumber"
          value={cardDetails.cardNumber}
          onChange={handleChange}
          placeholder="Card Number"
          required
        />

        {/* Input for the cardholder's name */}
        <input
          type="text"
          name="cardholderName"
          value={cardDetails.cardholderName}
          onChange={handleChange}
          placeholder="Cardholder Name"
          required
        />

        {/* Input for the card's validity date */}
        <input
          type="text"
          name="validThru"
          value={cardDetails.validThru}
          onChange={handleChange}
          placeholder="Valid Thru MM/YY"
          required
        />

        {/* Input for the card's CCV */}
        <input
          type="text"
          name="ccv"
          value={cardDetails.ccv}
          onChange={handleChange}
          placeholder="CCV"
          required
        />

        {/* Here you might want to add a select element for choosing the vendor */}
                <label htmlFor="vendor">Vendor:</label>
        <select name="vendor" required onChange={handleChange}>
          <option value="">Select a vendor</option>
          {vendors.map((vendor, index) => (
            <option key={index} value={vendor}>
              {vendor}
            </option>
          ))}
        </select>
        {/* Submission button for the form */}
        <button type="submit" className="submit-button">Add Card</button>
        {/* <Button text="Add New Card" onClick={handleAddCardClick} /> */}
      </form>

      {/* Button to navigate back to the home page without adding a card */}
      <button onClick={() => navigate("/")} className="cancel-button">Cancel</button>
    </div>
  );
}

export default AddCardPage;
