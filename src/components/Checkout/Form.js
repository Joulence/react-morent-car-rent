import styles from "./Form.module.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/use-fetch";
import FormCheckoutCard from "./FormCheckoutCard";
import BillingInfo from "./BillingInfo";
import RentalInfo from "./RentalInfo";
import PaymentMethod from "./PaymentMethod";
import Confirmation from "./Confirmation";

const Form = () => {
  const params = useParams();
  const id = params.carId;
  const { data } = useFetch(
    "description",
    `https://react-morent-car-rent-default-rtdb.firebaseio.com/cars/${id}.json`
  );

  const { name, url, price } = data;

  return (
    <form className={styles.form}>
      <div className={styles["form-menu"]}>
        <BillingInfo />

        <RentalInfo />

        <PaymentMethod />

        <Confirmation />
      </div>
      <FormCheckoutCard name={name} url={url} price={price} />
    </form>
  );
};

export default Form;
