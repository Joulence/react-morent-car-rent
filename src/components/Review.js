import styles from "./Review.module.css";
import Stars from "./UI/Stars";

const Review = () => {
  return (
    <div className={styles["details__info-reviews"]}>
      <Stars />
      440+Reviews
    </div>
  );
};

export default Review;
