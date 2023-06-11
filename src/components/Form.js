import FormMenu from "./UI/FormMenu";
import styles from "./Form.module.css";
import Cities from "./Cities";
import visaImage from "../assets/images/icons/Visa.svg";
import mcImage from "../assets/images/icons/mc.svg";
import { useState } from "react";

const Form = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");

  const formatCardNumber = (value) => {
    value = value.replace(/\D/g, ""); // Remove non-digit characters
    value = value.substring(0, 4); // Limit to 4 digits

    if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{1,2})$/, "$1/$2"); // Add "/" after 2 digits
    }

    return value;
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
  };

  const handleCvcChange = (event) => {
    let value = event.target.value;

    value = value.replace(/\D/g, "");

    value = value.slice(0, 3);

    setCvc(value);
  };

  return (
    <form className={styles.form}>
      <FormMenu
        title="Billing Info"
        subTitle="Please enter your billing info"
        step={1}
      >
        <div className={styles.menu}>
          <div className={styles.input}>
            <label>name</label>
            <input placeholder="Your name" type="text" required />
          </div>
          <div className={styles.input}>
            <label>phone number</label>
            <input placeholder="Phone number" type="tel" required />
          </div>
          <div className={styles.input}>
            <label>address</label>
            <input placeholder="Address" type="text" required />
          </div>
          <div className={styles.input}>
            <label>town / city</label>
            <input placeholder="Town or city" type="text" required />
          </div>
        </div>
      </FormMenu>

      <FormMenu
        title="Rental Info"
        subTitle="Please select your rental date"
        step={2}
      >
        <div>
          <div className={styles.additional}>Pick - Up</div>
          <div className={styles.menu}>
            <div className={styles.input}>
              <label>Locations</label>
              <select required>
                <option value="default">Select your city</option>
                <Cities />
              </select>
            </div>
            <div className={styles.input}>
              <label>date</label>
              <input placeholder="Select your date" type="date" required />
            </div>
            <div className={styles.input}>
              <label>Time</label>
              <input placeholder="Select your time" type="time" required />
            </div>
          </div>

          <div
            className={`${styles.additional} ${styles["additional-second"]}`}
          >
            Drop - Off
          </div>
          <div className={styles.menu}>
            <div className={styles.input}>
              <label>Locations</label>
              <select required>
                <option value="default">Select your city</option>
                <option value="Kyiv">Kyiv</option>
                <option value="Lviv">Lviv</option>
                <option value="Kharkiv">Kharkiv</option>
                <option value="Odesa">Odesa</option>
                <option value="Dnipro">Dnipro</option>
                <option value="Donetsk">Donetsk</option>
                <option value="Zaporizhzhia">Zaporizhzhia</option>
                <option value="Kryvyi Rih">Kryvyi Rih</option>
                <option value="Sevastopol">Sevastopol</option>
                <option value="Mykolaiv">Mykolaiv</option>
                <option value="Mariupol">Mariupol</option>
                <option value="Luhansk">Luhansk</option>
                <option value="Vinnytsia">Vinnytsia</option>
                <option value="Vinnytsia">Vinnytsia</option>
                <option value="Kherson">Kherson</option>
              </select>
            </div>
            <div className={styles.input}>
              <label>date</label>
              <input placeholder="Select your date" type="date" required />
            </div>
            <div className={styles.input}>
              <label>Time</label>
              <input placeholder="Select your time" type="time" required />
            </div>
          </div>
        </div>
      </FormMenu>

      <FormMenu
        title="Payment Method"
        subTitle="Please enter your payment method"
        step={3}
      >
        <div className={styles.pay}>
          <div className={styles["pay__title"]}>
            <div className={styles.additional}>Credit Card</div>
            <div className={styles["pay__title-svg"]}>
              <img src={visaImage} alt="Visa" />
              <img src={mcImage} alt="MasterCard" />
            </div>
          </div>
          <div className={styles.menu}>
            <div className={`${styles.input} ${styles["pay-input"]}`}>
              <label>Card Number</label>
              <input placeholder="Card Number" type="text" required />
            </div>
            <div className={`${styles.input} ${styles["pay-input"]}`}>
              <label>Expration Date</label>
              <input
                placeholder="Expration Date"
                type="text"
                maxLength="5"
                value={cardNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={`${styles.input} ${styles["pay-input"]}`}>
              <label>Card Holder</label>
              <input placeholder="Card Holder" type="text" required />
            </div>
            <div className={`${styles.input} ${styles["pay-input"]}`}>
              <label>CVC</label>
              <input
                placeholder="CVC"
                type="text"
                value={cvc}
                onChange={handleCvcChange}
                required
              />
            </div>
          </div>
        </div>
      </FormMenu>
    </form>
  );
};

export default Form;
