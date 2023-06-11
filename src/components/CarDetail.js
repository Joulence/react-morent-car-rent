import { Link } from "react-router-dom";
import styles from "./CarDetail.module.css";
import Review from "./Review";

const CarDetail = (props) => {
  return (
    <div className={styles.details}>
      <div className={styles["details__banner"]}>
        <h3>Car with the best design and acceleration</h3>
        <div className={styles["details__banner-text"]}>
          Safety and comfort while driving a futuristic and elegant sports car
        </div>
        <div className={styles["details__banner-img"]}>
          <img src={props.url} alt={props.name} />
        </div>
      </div>
      <div className={styles["details__info"]}>
        <h3>{props.name}</h3>
        <Review />
        <div className={styles["details__info-description"]}>{props.desc}</div>
        <div className={styles["details__info-specifications"]}>
          <div className={styles["details-spec"]}>
            <div>
              <span>Type Car</span>
              <span className={styles["details-spec__info"]}>{props.type}</span>
            </div>
            <div>
              <span>Capacity</span>
              <span className={styles["details-spec__info"]}>
                {props.people} Person
              </span>
            </div>
          </div>

          <div className={styles["details-spec"]}>
            <div>
              <span>Steering</span>
              <span className={styles["details-spec__info"]}>{props.gear}</span>
            </div>
            <div>
              <span>Gasoline</span>
              <span className={styles["details-spec__info"]}>
                {props.fuel}L
              </span>
            </div>
          </div>
        </div>
        <div className={styles["details__order"]}>
          <div className={styles["details__order-info"]}>
            <div className={styles["details__order-price"]}>
              ${props.price}.00 / <span>day</span>
            </div>
            {typeof discount === "number" && (
              <div className={styles["details__order-discount"]}>
                ${props.discount}.00
              </div>
            )}
          </div>
          <Link to={`/checkout/${props.id}`} className={styles["details-link"]}>
            Rent Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
