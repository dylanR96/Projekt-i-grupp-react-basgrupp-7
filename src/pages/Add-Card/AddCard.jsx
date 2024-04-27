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

  const [truess, setTruess] = useState(false);

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    validThru: "",
    ccv: "",
    vendor: "",
  });

  const handleChange = (e, maxLength) => {
    if (e.target.type === "number") {
      if (isNaN(parseInt(e.target.value))) {
        console.log("Bad");
        setTruess(false);
      } else {
        setTruess(true);
      }
    }

    if (e.target.type === "text") {
      if (/[0-9!@#$%^&*(),.?":{}|<>]/.test(e.target.value)) {
        console.log("number");
        setTruess(false);
      } else {
        setTruess(true);
      }
    }

    if (e.target.name === "vendor") {
      if (e.target.value === "") {
        console.log("vendor");
        setTruess(false);
      } else {
        setTruess(true);
      }
    }

    if (e.target.value.length > maxLength) {
      e.target.value = e.target.value.substring(0, maxLength);
    }
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!truess) {
      console.log("Please");
    } else {
      const newCard = { ...formData };

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
