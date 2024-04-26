import styles from "./card.module.css";

function Card({ card }) {
  return (
    <article
      className={[
        styles["card__container"],
        styles[`${card.bankVendor}`],
        card.bankVendor === "Ninja" ? styles["lightBg"] : "",
      ].join(" ")}
    >
      <div className={styles["card__chip__signal_box"]}>
        <img
          className={styles["signal"]}
          alt="chip-signal-icon"
          src="/icons/Chip-Signal.png"
        />
        <img className={styles["chip"]} alt="chip-icon" src="/icons/Chip.png" />
      </div>
      <img
        className={
          card.bankVendor === "Default"
            ? styles["bankVendor__default"]
            : styles["bankVendor"]
        }
        alt={card.bankVendor}
        src={`/icons/${card.bankVendor}.png`}
      />

      <div className={styles["card__number__box"]}>
        <p className={styles["card__number__box__p"]}>
          {card.cardNumber ? card.cardNumber : "XXXX XXXX XXXX"}
        </p>
      </div>

      <div className={styles["card___holder__valid__container"]}>
        <div className={styles["card__holder__box"]}>
          <p>CARDHOLDER NAME</p>
          <strong>{card.name ? card.name : "FIRSTNAME LASTNAME"}</strong>
        </div>

        <div className={styles["card__valid__box"]}>
          <p>VALID THRU</p>
          <strong>{card.valid ? card.valid : "MM/YY"}</strong>
        </div>
      </div>
    </article>
  );
}

export default Card;
