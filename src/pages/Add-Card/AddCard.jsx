import { useNavigate } from "react-router";
import "./addCard.module.css";
import { useContext } from "react";
import { CardsContext } from "../../App";
import { useState } from "react";
import { useEffect } from "react";
import Form from "../../components/Form/Form.jsx";
import Card from "../../components/Card/Card.jsx";
import Button from "../../components/Button/Button.jsx";

function AddCard() {
  const navigate = useNavigate();
  const { cardsArray, setCardsArray } = useContext(CardsContext);

  const [errorForm, setErrorForm] = useState("");

  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolder: "",
    validThru: "",
    cvv: "",
    vendor: "",
  });

  const [formErrors, setFormErrors] = useState({
    cardNumber: " ",
    cardHolder: " ",
    validThru: " ",
    cvv: " ",
    vendor: " ",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e, maxLength, requiredLength) => {
    const { name, value } = e.target;

    const trimmedValue =
      value.length > maxLength ? value.substring(0, maxLength) : value;

    let error = "";
    switch (name) {
      case "cardNumber":
        error =
          isNaN(parseInt(value)) || value.length < requiredLength
            ? "Please enter only numbers and minumum length is 16"
            : "";
        break;

      case "cardHolder":
        error =
          /[0-9!@#$%^&*(),.?":{}|<>]/.test(value) ||
          value.length < requiredLength
            ? "Please enter only letter and minumum length is 3"
            : "";
        break;

      case "validThru":
        error =
          isNaN(parseInt(value)) || value.length < requiredLength
            ? "Please enter only letter and minumum length is 4"
            : "";
        break;

      case "cvv":
        error =
          isNaN(parseInt(value)) || value.length < requiredLength
            ? "Please enter only letter and minumum length is 3"
            : "";
        break;

      case "vendor":
        error = value === "" ? "Please pick a vendor" : "";
        break;

      default:
        break;
    }

    setFormErrors({ ...formErrors, [name]: error });
    setFormData({ ...formData, [name]: trimmedValue });
  };

  const checkFormValidity = () => {
    for (const error in formErrors) {
      if (formErrors[error]) {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
  };

  useEffect(() => {
    checkFormValidity();
  }, [formErrors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      const newCard = { ...formData };

      setCardsArray([...cardsArray, newCard]);
      setFormData({
        cardNumber: "",
        cardHolder: "",
        validThru: "",
        cvv: "",
        vendor: "",
      });
      navigate("/");
    } else {
      setErrorForm("Form is not valid");
    }
  };

  return (
    <div>
      <Card formData={formData} handleChange={handleChange} />
      <Form
        formData={formData}
        handleChange={handleChange}
        formErrors={formErrors}
        errorForm={errorForm}
      />
      <Button
        label={"ADD CARD"}
        onClick={handleSubmit}
        disabled={!isFormValid}
      />
    </div>
  );
}

export default AddCard;
