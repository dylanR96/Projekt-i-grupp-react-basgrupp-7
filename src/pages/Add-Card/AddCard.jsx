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

  const handleChange = (e, maxLength) => {
    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.substring(0, maxLength);
    }
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const newCard = { ...formData };
    console.log(Object.keys(newCard).length);
    if (Object.keys(newCard).length < 2) {
      alert("Please fill in all field!");
    } else {
      setCardsArray([...cardsArray, newCard]);
      setFormData({
        cardNumber: "",
        cardHolder: "",
        validThru: "",
        ccv: "",
        vendor: "",
      });
      navigate("/");
    }
  };

  return (
    <div>
      <Card formData={formData} handleChange={handleChange} />
      <Form formData={formData} handleChange={handleChange} />
      <Button label={"ADD CARD"} onClick={handleSubmit} />
    </div>
  );
}

export default AddCard;
