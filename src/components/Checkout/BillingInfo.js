import FormMenu from "../UI/FormMenu";
import styles from "./Form.module.css";

const BillingInfo = () => {
  return (
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
  );
};

export default BillingInfo;
