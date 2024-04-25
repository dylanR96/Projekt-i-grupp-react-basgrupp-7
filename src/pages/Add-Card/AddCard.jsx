import { useNavigate } from "react-router";
import "./addCard.css";
import { useContext } from "react";
import { CardsContext } from "../../App";
import { useState } from "react";
import Form from "../../components/Form/Form.jsx";
import Card from "../../components/Card/Card.jsx";
import Button from "../../components/Button/Button.jsx";

function AddCard() {
  const navigate = useNavigate();
  const { cardsArray, setCardsArray } = useContext(CardsContext);

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    validThru: "",
    ccv: "",
    vendor: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newCard = { ...formData };
    setCardsArray([...cardsArray, newCard]);
    console.log("New Card Information:", newCard);
    console.log(cardsArray);
    setFormData({
      cardNumber: "",
      cardHolder: "",
      validThru: "",
      ccv: "",
      vendor: "",
    });
  };
  console.log(cardsArray);
  return (
    <div>
      <Card formData={cardsArray} />
      <h1>Add new card</h1>
      <Form formData={formData} handleChange={handleChange} />
      <Button
        label={"ADD CARD"}
        onClick={() => {
          navigate("/");
          handleSubmit();
        }}
      />
    </div>
  );
}

export default AddCard;
