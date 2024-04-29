
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardsContext } from '../../App'; 
import './addCard.css';
import Button from '../../components/Button/Button.jsx';
import CardForm from '../../components/Form/Form';

function AddCardPage() {
  const navigate = useNavigate();
  const { cardsArray, setCardsArray } = useContext(CardsContext);

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    cardholderName: '',
    validThru: '',
    ccv: '',
    vendor: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCardsArray([...cardsArray, cardDetails]);
    navigate('/');
  };

  const vendors = ["Bitcoin Inc", "Ninja Bank", "Block Chain Inc", "Evil Corp"];

  return (
    <div className="add-card-container">
      <h1>Add new card</h1>
      <CardForm
        cardDetails={cardDetails}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        vendors={vendors}
      />
      <Button onClick={() => navigate("/")} className="cancel-button">Cancel</Button>
    </div>
  );
}

export default AddCardPage;