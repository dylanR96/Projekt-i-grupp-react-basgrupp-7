import "./card.css";
import { ChipIcon, WaveIcon } from "./ChipIcons.jsx";
import {
  Bitcoin,
  NinjaBank,
  BlockChain,
  EvilCorp,
} from "../Vendors-Icon/Vendors.jsx";

function Card({ formData }) {
  return (
    <div>
      <div className={`card-container ${formData.vendor}-background`}>
        <div className="card-upper-section">
          <div className="card-chip-icons">
            <WaveIcon />
            <ChipIcon />
          </div>
          {formData.vendor === "" && <Bitcoin />}
          {formData.vendor === "bitcoin" && <Bitcoin />}
          {formData.vendor === "ninjaBank" && <NinjaBank />}
          {formData.vendor === "blockChain" && <BlockChain />}
          {formData.vendor === "evilCorp" && <EvilCorp />}
        </div>
        <div className="card-num">
          <p>
            {formData.cardNumber === "" && "XXXX XXXX XXXX XXXX"}
            {formData.cardNumber
              ? formData.cardNumber.match(/.{1,4}/g).join(" ")
              : ""}
          </p>
        </div>
        <div className="card-bottom-section">
          <div className="card-holder">
            <h4>CARDHOLDER NAME</h4>
            <p>
              {formData.cardHolder === "" && "FIRSTNAME LASTNAME"}
              {formData.cardHolder
                ? (formData.cardHolder.match(/[a-zA-Z]+/g) || []).join(" ")
                : ""}
            </p>
          </div>
          <div className="card-date">
            <h4>VALID THRU</h4>
            <p>
              {formData.validThru === "" && "MM/YY"}
              {(formData.validThru = !"" && formData.validThru)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
