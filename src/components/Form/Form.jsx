import "./form.css";

function Form({ formData, handleChange }) {
  return (
    <div>
      <form className="card-form">
        <label>
          CARD CARDNUMBER
          <input
            name="cardNumber"
            value={formData.cardNumber}
            type="number"
            onChange={handleChange}
          />
        </label>
        <label>
          CARDHOLDER NAME
          <input
            name="cardHolder"
            value={formData.cardHolder}
            type="text"
            onChange={handleChange}
          />
        </label>
        <label>
          VALID THRU
          <input
            name="validThru"
            value={formData.validThru}
            type="number"
            onChange={handleChange}
          />
        </label>
        <label>
          CCV
          <input
            name="ccv"
            value={formData.ccv}
            type="tel"
            onChange={handleChange}
            maxLength="3"
          />
        </label>
        <select name="vendor" value={formData.vendor} onChange={handleChange}>
          <option value=""></option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninjaBank">NINJA BANK</option>
          <option value="blockChain">BLOCK CHAIN INC</option>
          <option value="evilCorp">EVIL CORP</option>
        </select>
      </form>
    </div>
  );
}

export default Form;
