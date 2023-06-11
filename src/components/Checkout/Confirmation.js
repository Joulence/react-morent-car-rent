import FormMenu from "../UI/FormMenu";
import styles from "./Form.module.css";

import securedImage from "../../assets/images/secure.svg";
import { Link, redirect } from "react-router-dom";

const Confirmation = () => {
  const btnHandler = () => {
    alert("ORDER WAS SUBMITTED!");
    redirect("/");
  };
  return (
    <FormMenu
      title="Confirmation"
      subTitle="We are getting to the end. Just few clicks and your rental is ready!"
      step={4}
    >
      <div className={styles.menu}>
        <div className={styles.check}>
          <input type="checkbox" />
          <div>
            I agree with sending an Marketing and newsletter emails. No spam,
            promissed!
          </div>
        </div>
        <div className={styles.check}>
          <input type="checkbox" required />
          <div>
            I agree with our <Link to={"/terms"}>terms and conditions</Link> and{" "}
            <Link to={"/policy"}>privacy policy</Link>.
          </div>
        </div>
      </div>

      <button onClick={btnHandler} className={styles.submit}>
        Rent Now
      </button>
      <div className={styles["confirm__info"]}>
        <img src={securedImage} alt="Secured" />
        <div className={styles["confirm__info-title"]}>
          All your data are safe
        </div>
        <div className={styles["confirm__info-subtitle"]}>
          We are using the most advanced security to provide you the best
          experience ever.
        </div>
      </div>
    </FormMenu>
  );
};

export default Confirmation;
