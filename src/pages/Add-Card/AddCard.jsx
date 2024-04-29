import { useNavigate } from "react-router";
import styles from "./addCard.module.css";
import { useContext, useState } from "react";
import { CardsContext, SelectedCardContext } from "../../App";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import toast from "react-hot-toast";

// ** Example of the structure of a card
const card = {
  name: "",
  cardNumber: "",
  valid: "",
  ccv: "",
  bankVendor: "Default",
};

function AddCard() {
  const navigate = useNavigate();
  const { cardsArray, setCardsArray } = useContext(CardsContext);
  const { setSelectedCard } = useContext(SelectedCardContext);
  const [CARD, SETCARD] = useState(card);

  const handleSubmit = () => {
    for (const [key, value] of Object.entries(CARD)) {
      if (!value) {
        return toast.error("Please provide all necessary information.");
      }
    }

    toast.success("New card successfully added to your e-wallet.");

    setCardsArray([...cardsArray, CARD]);

    setSelectedCard(CARD);

    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  return (
    <section className={styles["add__card__section__container"]}>
      <div className={styles["add__card__div__box"]}>
        <h1 className={styles["add__card__h1"]}>Add a new banK card</h1>

        <div>
          <h2 className={styles["new__card__h2"]}>NEW CARD</h2>
          <Card card={CARD} />
        </div>
        <Form CARD={CARD} SETCARD={SETCARD} />
        <div className={styles.cardsDiv}>
          <Button variant="primary" clickHandler={() => handleSubmit()}>
            add card
          </Button>

          <Button variant="primary" clickHandler={() => navigate("/")}>
            Cancel
          </Button>
        </div>
      </div>
    </section>
  );
}

export default AddCard;
