import "./form.module.css";
import React from 'react';

const CardForm = ({ cardDetails, handleChange, handleSubmit, vendors }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cardNumber"
        value={cardDetails.cardNumber}
        onChange={handleChange}
        placeholder="Card Number"
        required
      />
      <input
        type="text"
        name="cardholderName"
        value={cardDetails.cardholderName}
        onChange={handleChange}
        placeholder="Cardholder Name"
        required
      />
      <input
        type="text"
        name="validThru"
        value={cardDetails.validThru}
        onChange={handleChange}
        placeholder="Valid Thru MM/YY"
        required
      />
      <input
        type="text"
        name="ccv"
        value={cardDetails.ccv}
        onChange={handleChange}
        placeholder="CCV"
        required
      />
      <label htmlFor="vendor">Vendor:</label>
      <select name="vendor" required onChange={handleChange}>
        <option value="">Select a vendor</option>
        {vendors.map((vendor, index) => (
          <option key={index} value={vendor}>{vendor}</option>
        ))}
      </select>
      <button type="submit" className="submit-button">Add Card</button>
      
    </form>
  );
};

export default CardForm;
