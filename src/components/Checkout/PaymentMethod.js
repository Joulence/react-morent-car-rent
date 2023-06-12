import FormMenu from "../UI/FormMenu";
import styles from "./Form.module.css";
import visaImage from "../../assets/images/icons/Visa.svg";
import mcImage from "../../assets/images/icons/mc.svg";
import { useState } from "react";

const PaymentMethod = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCvc] = useState("");

  const formatCardNumber = (value) => {
    value = value.replace(/\D/g, "");
    value = value.substring(0, 4);

    if (value.length > 2) {
      value = value.replace(/^(\d{2})(\d{1,2})$/, "$1/$2");
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
            <input placeholder="Card Number" type="number" required />
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
              type="number"
              value={cvc}
              onChange={handleCvcChange}
              required
            />
          </div>
        </div>
      </div>
    </FormMenu>
  );
};

export default PaymentMethod;
