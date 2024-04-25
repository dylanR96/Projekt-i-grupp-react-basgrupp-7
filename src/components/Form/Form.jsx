import styles from "./form.module.css";

function Form({ CARD, SETCARD }) {
  const vendorOptions = ["Bitcoin", "Ninja", "Block", "Evil"];

  return (
    <form className={styles["form__container"]}>
      <div className={styles["form__number__and__name__box"]}>
        <label htmlFor="card-number" className={styles["label"]}>
          CARD NUMBER*
        </label>
        <input
          type="number"
          name="card-number"
          id="card-number"
          className={styles["cardNumber__name__input"]}
          maxLength="16"
          value={CARD.cardNumber}
          onChange={(e) => SETCARD({ ...CARD, cardNumber: e.target.value })}
        />
      </div>

      <div className={styles["form__number__and__name__box"]}>
        <label htmlFor="card-name" className={styles["label"]}>
          FIRSTNAME LASTNAME*
        </label>
        <input
          type="text"
          name="card-name"
          id="card-name"
          className={styles["cardNumber__name__input"]}
          value={CARD.name}
          onChange={(e) => SETCARD({ ...CARD, name: e.target.value })}
        />
      </div>

      <div className={styles["valid__ccv__box"]}>
        <div className={styles["form__number__and__name__box"]}>
          <label htmlFor="valid" className={styles["label"]}>
            VALID THRU*
          </label>
          <input
            className={styles["input"]}
            id="valid"
            name="valid-input"
            type="text"
            value={CARD.validMonth}
            maxLength="2"
            onChange={(e) => SETCARD({ ...CARD, validMonth: e.target.value })}
          />
        </div>

        <div className={styles["form__number__and__name__box"]}>
          <label htmlFor="valid" className={styles["label"]}>
            CCV*
          </label>
          <input
            className={styles["input"]}
            id="valid"
            name="valid-input"
            type="number"
            maxLength="3"
            value={CARD.validYear}
            onChange={(e) => SETCARD({ ...CARD, validYear: e.target.value })}
          />
        </div>
      </div>

      <div className={styles["select__vendor__box"]}>
        <label htmlFor="vendor-select" className={styles["label"]}>
          Choose a Vendor*
        </label>
        <select
          className={[
            styles["select__node"],
            styles[`${CARD.bankVendor}`],
          ].join(" ")}
          name="Vendor"
          id="vendor-select"
          value={CARD.bankVendor}
          onChange={(e) => SETCARD({ ...CARD, bankVendor: e.target.value })}
        >
          <option value="Default" disabled>
            --Please choose a Vendor
          </option>
          {vendorOptions.map((vendor, i) => (
            <option value={vendor} key={i}>
              {vendor}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
}

export default Form;
