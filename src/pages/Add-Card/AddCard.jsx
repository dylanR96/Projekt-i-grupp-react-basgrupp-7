import { useNavigate } from "react-router";
import "./addCard.css";

function AddCard() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Add new card</h1>
      <button onClick={() => navigate("/")}>Home page</button>
    </div>
  );
}

export default AddCard;
