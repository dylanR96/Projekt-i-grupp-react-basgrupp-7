import { useNavigate } from "react-router";
import "./cards.css";
import Card from "../../components/Card/Card.jsx";

function Cards() {
  const navigate = useNavigate();
  return (
    <div>
      <Card />
      <h1>Home</h1>
      <button onClick={() => navigate("/addCard")}>Add new card</button>
    </div>
  );
}

export default Cards;
