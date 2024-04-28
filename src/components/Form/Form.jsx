import styles from "./form.module.css";

function Form({ formData, handleChange, formErrors, errorForm }) {
  return (
    <div>
      <form className={styles["card-form"]}>
        <label>
          CARD CARDNUMBER
          <input
            name="cardNumber"
            value={formData.cardNumber}
            type="number"
            onChange={(e) => handleChange(e, 16, 16)}
          />
        </label>
        <div className={styles["error-message"]}>{formErrors.cardNumber}</div>
        <label>
          CARDHOLDER NAME
          <input
            name="cardHolder"
            value={formData.cardHolder}
            type="text"
            onChange={(e) => handleChange(e, 20, 3)}
          />
        </label>
        <div className={styles["error-message"]}>{formErrors.cardHolder}</div>
        <label>
          VALID THRU
          <input
            name="validThru"
            value={formData.validThru}
            type="number"
            onChange={(e) => handleChange(e, 4, 4)}
          />
        </label>
        <div className={styles["error-message"]}>{formErrors.validThru}</div>
        <label>
          CVV
          <input
            name="cvv"
            value={formData.cvv}
            type="number"
            onChange={(e) => handleChange(e, 3, 3)}
          />
        </label>
        <div className={styles["error-message"]}>{formErrors.cvv}</div>
        <select name="vendor" value={formData.vendor} onChange={handleChange}>
          <option value=""></option>
          <option value="bitcoin">BITCOIN INC</option>
          <option value="ninjaBank">NINJA BANK</option>
          <option value="blockChain">BLOCK CHAIN INC</option>
          <option value="evilCorp">EVIL CORP</option>
        </select>
        <div className={styles["error-message"]}>{formErrors.vendor}</div>
      </form>
      <div className={styles["error-message"]}>{errorForm}</div>
    </div>
  );
}

export default Form;
