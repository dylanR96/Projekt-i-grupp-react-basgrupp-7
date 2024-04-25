import "./card.css";
import ChipIcon from "../../assets/ChipIcon.jsx";
import WaveIcon from "../../assets/WaveIcon.jsx";
import {
  Bitcoin,
  NinjaBank,
  BlockChain,
  EvilCorp,
} from "../Vendors-Icon/Vendors.jsx";

function Card({ formData }) {
  return (
    <div>
      <div className="card-container">
        <div className="card-upper-section">
          <div className="card-chip-icons">
            <WaveIcon />
            <ChipIcon />
          </div>
          <Bitcoin />
        </div>
        <div className="card-num">
          <p>XXXX XXXX XXXX XXXX</p>
        </div>
        <div className="card-bottom-section">
          <div className="card-holder">
            <h4>CARDHOLDER NAME</h4>
            <p>FIRSTNAME LASTNAME</p>
          </div>
          <div className="card-date">
            <h4>VALID THRU</h4>
            <p>MM/TT</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
