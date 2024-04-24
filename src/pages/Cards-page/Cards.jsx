import { useNavigate } from "react-router";
import "./cards.css";

function Cards() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => navigate("/addCard")}>Add new card</button>
    </div>
  );
}

export default Cards;