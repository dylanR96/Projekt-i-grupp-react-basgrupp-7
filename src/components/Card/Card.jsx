import "./card.css";
import ChipIcon from "../../assets/ChipIcon.jsx";
import WaveIcon from "../../assets/WaveIcon.jsx";

function Card() {
  const cardNumber = "0000 0000 0000 0000";
  const cardHolder = "Richie Rich";
  const date = "24/04";
  const vendorIcon = <WaveIcon />;

  return (
    <div className="card-container">
      <div className="card-upper-section">
        <div className="card-chip-icons">
          <WaveIcon />
          <ChipIcon />
        </div>
        {vendorIcon}
      </div>
      <div className="card-num">
        <p>{cardNumber}</p>
      </div>
      <div className="card-bottom-section">
        <div className="card-holder">
          <h4>CARDHOLDER NAME</h4>
          <p>{cardHolder}</p>
        </div>
        <div className="card-date">
          <h4>VALID THRU</h4>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
