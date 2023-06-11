import ReviewCheckout from "./ReviewCheckout";
import styles from "./FormCheckoutCard.module.css";

const FormCheckoutCard = (props) => {
  return (
    <div className={styles["form__card"]}>
      <section>
        <h2>Rental Summary</h2>
        <h3>
          Prices may change depending on the length of the rental and the price
          of your rental car.
        </h3>
        <div className={styles["form__card-car"]}>
          <div className={styles["form__card-img"]}>
            <img src={props.url} alt={props.name} />
          </div>
          <div className={styles["form-car__info"]}>
            <div className={styles["form-car__name"]}>{props.name}</div>
            <ReviewCheckout />
          </div>
        </div>
        <hr />
        <div className={styles["form__card-price"]}>
          <div>
            <span>Subtotal</span>
            <span className={styles["form-price__focus"]}>
              ${props.price}.00
            </span>
          </div>
          <div>
            <span>Tax</span>
            <span className={styles["form-price__focus"]}>$0</span>
          </div>
        </div>
        <div className={styles["form__card-total"]}>
          <div className={styles["form-total__text"]}>
            <div className={styles["form-total__title"]}>
              Total Rental Price
            </div>
            <div className={styles["form-total__subtitle"]}>
              Overall price and includes rental discount
            </div>
          </div>
          <div className={styles["form-total__price"]}>${props.price}.00</div>
        </div>
      </section>
    </div>
  );
};

export default FormCheckoutCard;
