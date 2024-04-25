import { useNavigate } from "react-router";
import "./cards.css";
import { useContext } from "react";
import { CardsContext } from "../../App";
import ChipIcon from "../../assets/ChipIcon.jsx";
import WaveIcon from "../../assets/WaveIcon.jsx";
import {
  Bitcoin,
  NinjaBank,
  BlockChain,
  EvilCorp,
} from "../../components/Vendors-Icon/Vendors.jsx";
import Button from "../../components/Button/Button.jsx";

function Cards() {
  function getVendorClassName(vendor) {
    switch (vendor) {
      case "bitcoin":
        return "bitcoin-background";
      case "ninjaBank":
        return "ninjabank-background";
      case "blockChain":
        return "blockchain-background";
      case "evilCorp":
        return "evilcorp-background";
      default:
        return "default-background";
    }
  }
  // ** Using global statement
  const { cardsArray, setCardsArray } = useContext(CardsContext);
  console.log(cardsArray);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        {cardsArray.map((card, index) => (
          <div
            key={index}
            className={`card-container ${getVendorClassName(card.vendor)}`}
          >
            <div className="card-upper-section">
              <div className="card-chip-icons">
                <WaveIcon />
                <ChipIcon />
              </div>
              <p>
                {card.vendor === "bitcoin" && <Bitcoin />}
                {card.vendor === "ninjaBank" && <NinjaBank />}
                {card.vendor === "blockChain" && <BlockChain />}
                {card.vendor === "evilCorp" && <EvilCorp />}
              </p>
              {""}
            </div>
            <div className="card-num">
              <p>{card.cardNumber}</p>
              {""}
            </div>
            <div className="card-bottom-section">
              <div className="card-holder">
                <h4>CARDHOLDER NAME</h4>
                <p>{card.cardHolder}</p>
                {""}
              </div>
              <div className="card-date">
                <h4>VALID THRU</h4>
                <p>{card.validThru}</p>
                {""}
              </div>
            </div>
          </div>
        ))}
      </div>

      <h1>Home</h1>

      <Button
        label={"ADD A NEW CARD"}
        onClick={() => {
          setCardsArray([...cardsArray]);
          navigate("/addCard");
        }}
      />
    </div>
  );
}

export default Cards;
