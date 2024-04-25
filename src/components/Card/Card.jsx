import "./card.css";

function Card({ card }) {
  return (
    <article
      className={`card__container ${card.bankVendor} ${
        card.bankVendor === "Ninja" ? "lightBg" : ""
      }`}
    >
      <div className="card__chip__signal_box">
        <img
          className="signal"
          alt="chip-signal-icon"
          src="/public/icons/Chip-Signal.png"
        />
        <img className="chip" alt="chip-icon" src="/public/icons/Chip.png" />
      </div>
      <img
        className="bankVendor"
        alt={card.bankVendor}
        src={`/public/icons/${card.bankVendor}.png`}
      />

      <div className="card__number__box">
        <p className="card__number__box__p">{card.cardNumber}</p>
      </div>

      <div className="card___holder__valid__container">
        <div className="card__holder__box">
          <p>CARDHOLDER NAME</p>
          <strong>
            {card.firstName} {card.lastName}
          </strong>
        </div>

        <div className="card__valid__box">
          <p>VALID THRU</p>
          <strong>
            {card.validMonth} / {card.validYear}
          </strong>
        </div>
      </div>
    </article>
  );
}

export default Card;
