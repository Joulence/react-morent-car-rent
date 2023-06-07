import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CarCard.module.css";
import gasImage from "../../assets/images/icons/gas.svg";
import carImage from "../../assets/images/icons/car.svg";
import peopleImage from "../../assets/images/icons/people.svg";

const CarCard = (props) => {
  const [isActive, setIsActive] = useState(false);

  const buttonHandler = () => {
    setIsActive(!isActive);
    console.log(props.id)
  };

  return (
    <div className={styles.card}>
      <button onClick={buttonHandler} className={styles.button}>
        <svg
          className={`${""} ${isActive ? styles.active : ""}`}
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.62 18.81C11.28 18.93 10.72 18.93 10.38 18.81C7.48 17.82 1 13.69 1 6.68998C1 3.59998 3.49 1.09998 6.56 1.09998C8.38 1.09998 9.99 1.97998 11 3.33998C12.01 1.97998 13.63 1.09998 15.44 1.09998C18.51 1.09998 21 3.59998 21 6.68998C21 13.69 14.52 17.82 11.62 18.81Z"
            stroke="#90A3BF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className={styles["card__info"]}>
        <span className={styles["card__info-name"]}>{props.name}</span>
        <span className={styles["card__info-type"]}>{props.type}</span>
      </div>
      <div className={styles["card-adapt"]}>
        <div className={styles["card-car"]}>
          <img src={props.img} alt={props.name} />
          <div></div>
        </div>
        <div className={styles["card__spec"]}>
          <div>
            <img src={gasImage} alt="gas" />
            <span>{props.fuel}L</span>
          </div>
        
          <div>
            <img src={carImage} alt="car" />
            <span>{props.gear}</span>
          </div>
        
          <div>
            <img src={peopleImage} alt="people" />
            <span>{props.people}</span>
          </div>
        </div>
      </div>
      <div className={styles["card__order"]}>
        <div className={styles["card__order-info"]}>
          <div className={styles["card__order-price"]}>
            ${props.price}.00 / <span>day</span>
          </div>
          {typeof props.discount === "number" && (
            <div className={styles["card__order-discount"]}>
              ${props.discount}.00
            </div>
          )}
        </div>
        <Link className={styles["card-link"]} to={props.linkToCar}>
          Rent Now
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
