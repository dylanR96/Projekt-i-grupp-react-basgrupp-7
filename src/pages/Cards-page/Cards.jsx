import { useNavigate } from "react-router";
import styles from "./cards.module.css";
import { useContext } from "react";
import { CardsContext, SelectedCardContext } from "../../App";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

function Cards() {
  // ** Using global statement
  const { cardsArray } = useContext(CardsContext);
  const { selectedCard, setSelectedCard } = useContext(SelectedCardContext);

  const navigate = useNavigate();

  const handleHover = (e, i, isLast) => {
    let hoverTranslateY = -50 + i * 20;
    const doc = document.getElementById(`${i}`);

    if (isLast) return;
    return (doc.style.transform = `translateY(${hoverTranslateY}px)`);
  };

  const handleMouseLeave = (e, i) => {
    const doc = document.getElementById(`${i}`);
    let translateY = i * 50;
    // doc.style.zIndex = 0;
    return (doc.style.transform = `translateY(${translateY}px)`);
  };

  return (
    <section className={styles["e__wallet_section"]}>
      <h1 className={styles["cards__h1"]}>E-WALLET</h1>

      <article className={styles["e__wallet__container"]}>
        <div className={styles["e__wallet__container__active__card__box"]}>
          <h2 className={styles["active__card__p"]}>ACTIVE CARD</h2>
          <Card card={selectedCard} />
        </div>

        <div className={styles["e__wallet__container__all__cards__box"]}>
          {cardsArray.map((card, i) => {
            let translateY = i * 40;
            let cardStyle = {
              zIndex: i,
              transform: `translateY(${translateY}px)`,
            };

            return (
              <div
                id={`${i}`}
                className={styles["card__div"]}
                key={i}
                onClick={() => setSelectedCard(card)}
                onMouseEnter={(e) =>
                  handleHover(e, i, i === cardsArray.length - 1)
                }
                onMouseLeave={(e) => handleMouseLeave(e, i)}
                style={cardStyle}
              >
                <Card card={card} />
              </div>
            );
          })}
        </div>
      </article>

      <Button variant="secondary" clickHandler={() => navigate("/addCard")}>
        Add New Card
      </Button>
    </section>
  );
}

export default Cards;
